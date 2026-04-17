// engine.js — State management, scoring, session logic, spaced repetition

const Engine = (() => {

  // ─── Storage keys ─────────────────────────────────────────────────────────
  const KEY_PROGRESS  = 'csa_progress';
  const KEY_SESSION   = 'csa_session';
  const KEY_WRONGS    = 'csa_wrongs';

  // ─── Question mastery states ───────────────────────────────────────────────
  // unseen    → never attempted
  // wrong     → answered wrong, not yet corrected  (red)
  // relearned → was wrong, then answered correctly  (yellow / intermediate)
  // mastered  → answered correctly without prior error, or relearned × 2 correct (green)
  const STATE = {
    UNSEEN:    'unseen',
    WRONG:     'wrong',
    RELEARNED: 'relearned',
    MASTERED:  'mastered'
  };

  // ─── All questions ─────────────────────────────────────────────────────────
  let ALL_QUESTIONS = [];

  function init() {
    ALL_QUESTIONS = [
      ...QUESTIONS_001_100,
      ...QUESTIONS_101_200,
      ...QUESTIONS_201_300,
      ...QUESTIONS_301_408
    ];
    const seen = new Set();
    ALL_QUESTIONS = ALL_QUESTIONS.filter(q => {
      if (seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });
    ALL_QUESTIONS.sort((a, b) => a.id - b.id);
  }

  function getAll()        { return ALL_QUESTIONS; }
  function getById(id)     { return ALL_QUESTIONS.find(q => q.id === id) || null; }
  function getTotal()      { return ALL_QUESTIONS.length; }

  // ─── Persistence ──────────────────────────────────────────────────────────
  function load(key, fallback) {
    try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : fallback; }
    catch { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }

  // ─── Progress store ────────────────────────────────────────────────────────
  function getProgress() { return load(KEY_PROGRESS, {}); }

  function getQuestionState(id) {
    const prog = getProgress();
    return prog[id] ? prog[id].state : STATE.UNSEEN;
  }

  function recordAnswer(id, isCorrect) {
    const prog = getProgress();
    if (!prog[id]) {
      prog[id] = { correct: 0, wrong: 0, lastSeen: 0,
                   interval: 1, state: STATE.UNSEEN, correctStreak: 0 };
    }
    const e = prog[id];
    e.lastSeen = Date.now();

    if (isCorrect) {
      e.correct++;
      e.correctStreak = (e.correctStreak || 0) + 1;
      e.interval = Math.min(Math.round(e.interval * 1.8), 60);

      if (e.state === STATE.WRONG) {
        // First correct after being wrong → relearned (yellow)
        e.state = STATE.RELEARNED;
        e.correctStreak = 1;
      } else if (e.state === STATE.RELEARNED) {
        // Need 2 consecutive correct to graduate to mastered
        if (e.correctStreak >= 2) e.state = STATE.MASTERED;
      } else {
        // unseen or already mastered → mastered
        e.state = STATE.MASTERED;
      }
    } else {
      e.wrong++;
      e.correctStreak = 0;
      e.interval = 1;
      e.state = STATE.WRONG;
      const wrongs = getWrongIds();
      if (!wrongs.includes(id)) { wrongs.push(id); save(KEY_WRONGS, wrongs); }
    }
    save(KEY_PROGRESS, prog);
  }

  // ─── Wrong / Relearned ────────────────────────────────────────────────────
  function getWrongIds() { return load(KEY_WRONGS, []); }

  function getWrongQuestions() {
    const prog = getProgress();
    return ALL_QUESTIONS.filter(q => prog[q.id] && prog[q.id].state === STATE.WRONG);
  }

  function getRelearningQuestions() {
    const prog = getProgress();
    return ALL_QUESTIONS.filter(q => prog[q.id] && prog[q.id].state === STATE.RELEARNED);
  }

  function clearWrongs() { save(KEY_WRONGS, []); }

  // ─── Spaced repetition queue ───────────────────────────────────────────────
  function getSpacedQueue() {
    const prog = getProgress();
    const DAY  = 86400000;
    const order = { [STATE.WRONG]:0, [STATE.UNSEEN]:1, [STATE.RELEARNED]:2, [STATE.MASTERED]:3 };
    return [...ALL_QUESTIONS].sort((a, b) => {
      const pa = prog[a.id], pb = prog[b.id];
      const sa = pa ? pa.state : STATE.UNSEEN;
      const sb = pb ? pb.state : STATE.UNSEEN;
      if (order[sa] !== order[sb]) return order[sa] - order[sb];
      if (!pa && !pb) return a.id - b.id;
      if (!pa) return -1;
      if (!pb) return  1;
      return (pa.lastSeen + pa.interval * DAY) - (pb.lastSeen + pb.interval * DAY);
    });
  }

  // ─── Session ───────────────────────────────────────────────────────────────
  let session = null;

  function buildQueue(mode, options = {}) {
    let questions;
    switch (mode) {
      case 'sequential': questions = [...ALL_QUESTIONS]; break;
      case 'random':     questions = shuffle([...ALL_QUESTIONS]); break;
      case 'review': {
        const wrong = getWrongQuestions();
        const rel   = getRelearningQuestions();
        questions = [...wrong, ...rel];
        if (!questions.length) questions = shuffle([...ALL_QUESTIONS]).slice(0, 20);
        break;
      }
      case 'spaced':  questions = getSpacedQueue(); break;
      case 'exam': {
        const n = Math.min(options.count || 40, ALL_QUESTIONS.length);
        questions = shuffle([...ALL_QUESTIONS]).slice(0, n);
        break;
      }
      case 'goto': {
        const idx = ALL_QUESTIONS.findIndex(q => q.id === (options.startId || 1));
        questions = ALL_QUESTIONS.slice(idx >= 0 ? idx : 0);
        break;
      }
      case 'range': {
        const from = options.startId || 1;
        const to   = options.endId   || ALL_QUESTIONS[ALL_QUESTIONS.length - 1].id;
        questions  = ALL_QUESTIONS.filter(q => q.id >= from && q.id <= to);
        if (options.shuffle) questions = shuffle([...questions]);
        break;
      }
      default: questions = [...ALL_QUESTIONS];
    }
    return questions.map(q => q.id);
  }

  function startSession(mode, options = {}) {
    const queue = buildQueue(mode, options);
    session = {
      mode, queue, current: 0,
      score: 0, total: 0,
      wrongInSession: [],
      examMode: mode === 'exam',
      examAnswers: {},
      startTime: Date.now()
    };
    saveSession();
    return session;
  }

  function saveSession()    { if (session) save(KEY_SESSION, session); }
  function restoreSession() { session = load(KEY_SESSION, null); return session; }
  function getSession()     { return session; }

  function getCurrentQuestion() {
    if (!session) return null;
    return getById(session.queue[session.current]);
  }

  function hasNext() { return session && session.current < session.queue.length - 1; }
  function hasPrev() { return session && session.current > 0; }

  function goNext() { if (hasNext()) { session.current++; saveSession(); } }
  function goPrev() { if (hasPrev()) { session.current--; saveSession(); } }

  function goToIndex(idx) {
    if (session && idx >= 0 && idx < session.queue.length) {
      session.current = idx; saveSession();
    }
  }

  function goToQuestionId(id) {
    if (!session) return false;
    const idx = session.queue.indexOf(id);
    if (idx >= 0) { session.current = idx; saveSession(); return true; }
    return false;
  }

  // ─── Answer checking ───────────────────────────────────────────────────────
  function checkAnswer(questionId, userAns) {
    const q = getById(questionId);
    if (!q) return { correct: false, correctAns: '', prevState: STATE.UNSEEN, newState: STATE.UNSEEN };
    const normalized = userAns.split('').sort().join('');
    const isCorrect  = normalized === q.ans;

    if (session) {
      session.total++;
      if (isCorrect) {
        session.score++;
      } else {
        if (!session.wrongInSession.includes(questionId))
          session.wrongInSession.push(questionId);
      }
      if (session.examMode) session.examAnswers[questionId] = normalized;
      saveSession();
    }

    const prevState = getQuestionState(questionId);
    recordAnswer(questionId, isCorrect);
    const newState  = getQuestionState(questionId);
    return { correct: isCorrect, correctAns: q.ans, prevState, newState };
  }

  // ─── Session stats ─────────────────────────────────────────────────────────
  function getSessionStats() {
    if (!session) return null;
    const pct     = session.total > 0 ? Math.round(session.score / session.total * 100) : 0;
    const elapsed = Math.round((Date.now() - session.startTime) / 1000);
    const topicErrors = {};
    session.wrongInSession.forEach(id => {
      const q = getById(id);
      if (q) topicErrors[q.topic] = (topicErrors[q.topic] || 0) + 1;
    });
    const topicsToReview = Object.entries(topicErrors)
      .sort((a, b) => b[1] - a[1]).slice(0, 5)
      .map(([topic, count]) => ({ topic, count }));
    return {
      score: session.score, total: session.total, pct,
      wrong: session.total - session.score,
      wrongInSession: session.wrongInSession,
      topicsToReview, elapsed,
      mode: session.mode, queueLen: session.queue.length
    };
  }

  function getExamResults() {
    if (!session || !session.examMode) return null;
    const results = session.queue.map(id => {
      const q = getById(id);
      const userAns = session.examAnswers[id] || '';
      return { q, userAns, correct: userAns === q.ans };
    });
    const score = results.filter(r => r.correct).length;
    const total = results.length;
    return { results, score, total, pct: Math.round(score / total * 100) };
  }

  // ─── Overall statistics ────────────────────────────────────────────────────
  function getOverallStats() {
    const prog = getProgress();
    const ids  = Object.keys(prog).map(Number);
    const seen = ids.length;
    const correct = ids.reduce((s, id) => s + (prog[id].correct || 0), 0);
    const wrong   = ids.reduce((s, id) => s + (prog[id].wrong   || 0), 0);
    const total   = correct + wrong;
    const pct     = total > 0 ? Math.round(correct / total * 100) : 0;

    let countWrong = 0, countRelearned = 0, countMastered = 0;
    ALL_QUESTIONS.forEach(q => {
      const p = prog[q.id]; if (!p) return;
      if      (p.state === STATE.WRONG)     countWrong++;
      else if (p.state === STATE.RELEARNED) countRelearned++;
      else if (p.state === STATE.MASTERED)  countMastered++;
    });

    const topicMap = {};
    ALL_QUESTIONS.forEach(q => {
      if (!topicMap[q.topic]) topicMap[q.topic] = { seen: 0, correct: 0, wrong: 0 };
      const p = prog[q.id];
      if (p) {
        topicMap[q.topic].seen++;
        topicMap[q.topic].correct += p.correct;
        topicMap[q.topic].wrong   += p.wrong;
      }
    });

    return {
      seen, total: ALL_QUESTIONS.length, correct, wrong, pct,
      wrongCount: countWrong, relearnedCount: countRelearned, masteredCount: countMastered,
      topicMap
    };
  }

  // ─── Hints ────────────────────────────────────────────────────────────────
  function getHints(questionId, level) {
    const q = getById(questionId);
    if (!q) return [];
    return [
      `Tema: ${q.topic}`,
      `La respuesta tiene ${q.ans.length} opción${q.ans.length > 1 ? 'es' : ''}: ${q.ans.split('').join(', ')}`
    ].slice(0, level);
  }

  // ─── Utilities ────────────────────────────────────────────────────────────
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function resetAll() {
    save(KEY_PROGRESS, {}); save(KEY_WRONGS, []); save(KEY_SESSION, null);
    session = null;
  }

  // ─── Public API ────────────────────────────────────────────────────────────
  return {
    STATE,
    init, getAll, getById, getTotal,
    startSession, restoreSession, getSession, getCurrentQuestion,
    hasNext, hasPrev, goNext, goPrev, goToIndex, goToQuestionId,
    checkAnswer,
    getSessionStats, getExamResults, getOverallStats,
    getProgress, getQuestionState,
    getWrongIds, getWrongQuestions, getRelearningQuestions, clearWrongs,
    getHints, resetAll, shuffle
  };

})();
