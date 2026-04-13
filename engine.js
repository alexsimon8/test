// engine.js — State management, scoring, session logic, spaced repetition

const Engine = (() => {

  // ─── Storage keys ─────────────────────────────────────────────────────────
  const KEY_PROGRESS  = 'csa_progress';   // { [id]: { correct, wrong, lastSeen, interval } }
  const KEY_SESSION   = 'csa_session';    // last position & mode
  const KEY_WRONGS    = 'csa_wrongs';     // [ids] of questions answered wrong at least once

  // ─── All questions (merged on init) ───────────────────────────────────────
  let ALL_QUESTIONS = [];

  function init() {
    ALL_QUESTIONS = [
      ...QUESTIONS_001_100,
      ...QUESTIONS_101_200,
      ...QUESTIONS_201_300,
      ...QUESTIONS_301_408
    ];
    // deduplicate by id just in case
    const seen = new Set();
    ALL_QUESTIONS = ALL_QUESTIONS.filter(q => {
      if (seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });
    ALL_QUESTIONS.sort((a, b) => a.id - b.id);
  }

  function getAll() { return ALL_QUESTIONS; }
  function getById(id) { return ALL_QUESTIONS.find(q => q.id === id) || null; }
  function getTotal() { return ALL_QUESTIONS.length; }

  // ─── Persistence helpers ───────────────────────────────────────────────────
  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch { return fallback; }
  }

  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }

  // ─── Progress store ────────────────────────────────────────────────────────
  // { [id]: { correct: number, wrong: number, lastSeen: timestamp, interval: days } }
  function getProgress() {
    return load(KEY_PROGRESS, {});
  }

  function recordAnswer(id, isCorrect) {
    const prog = getProgress();
    if (!prog[id]) prog[id] = { correct: 0, wrong: 0, lastSeen: 0, interval: 1 };
    const entry = prog[id];
    entry.lastSeen = Date.now();
    if (isCorrect) {
      entry.correct++;
      // Spaced repetition: increase interval (simple SM-2 inspired)
      entry.interval = Math.min(Math.round(entry.interval * 1.8), 60);
    } else {
      entry.wrong++;
      entry.interval = 1; // reset on wrong answer
      // also track in wrongs list
      const wrongs = getWrongIds();
      if (!wrongs.includes(id)) {
        wrongs.push(id);
        save(KEY_WRONGS, wrongs);
      }
    }
    save(KEY_PROGRESS, prog);
  }

  // ─── Wrong questions ───────────────────────────────────────────────────────
  function getWrongIds() {
    return load(KEY_WRONGS, []);
  }

  function getWrongQuestions() {
    const ids = getWrongIds();
    return ALL_QUESTIONS.filter(q => ids.includes(q.id));
  }

  function clearWrongs() {
    save(KEY_WRONGS, []);
  }

  // ─── Spaced repetition queue ───────────────────────────────────────────────
  // Returns questions sorted by priority: wrong > unseen > due > not due
  function getSpacedQueue() {
    const prog = getProgress();
    const now = Date.now();
    const DAY = 86400000;

    return [...ALL_QUESTIONS].sort((a, b) => {
      const pa = prog[a.id];
      const pb = prog[b.id];
      // unseen first
      if (!pa && pb) return -1;
      if (pa && !pb) return 1;
      if (!pa && !pb) return a.id - b.id;
      // wrong answer (interval=1) has highest priority
      const aScore = pa.wrong / (pa.correct + 1);
      const bScore = pb.wrong / (pb.correct + 1);
      if (aScore !== bScore) return bScore - aScore;
      // due earlier gets priority
      const aDue = pa.lastSeen + pa.interval * DAY;
      const bDue = pb.lastSeen + pb.interval * DAY;
      return aDue - bDue;
    });
  }

  // ─── Session state ─────────────────────────────────────────────────────────
  /*
    session = {
      mode: 'sequential'|'random'|'review'|'exam'|'goto'|'spaced',
      queue: [id, ...],
      current: index into queue,
      score: number,
      total: number,
      wrongInSession: [id],
      examMode: boolean,       // hide answers until end
      examAnswers: { [id]: userAns },
      startTime: timestamp
    }
  */
  let session = null;

  function buildQueue(mode, options = {}) {
    let questions;
    switch (mode) {
      case 'sequential':
        questions = [...ALL_QUESTIONS];
        break;
      case 'random':
        questions = shuffle([...ALL_QUESTIONS]);
        break;
      case 'review':
        questions = getWrongQuestions();
        if (!questions.length) questions = shuffle([...ALL_QUESTIONS]).slice(0, 20);
        break;
      case 'spaced':
        questions = getSpacedQueue();
        break;
      case 'exam': {
        const count = Math.min(options.count || 40, ALL_QUESTIONS.length);
        questions = shuffle([...ALL_QUESTIONS]).slice(0, count);
        break;
      }
      case 'goto': {
        // single question or slice from id
        const startId = options.startId || 1;
        const idx = ALL_QUESTIONS.findIndex(q => q.id === startId);
        questions = ALL_QUESTIONS.slice(idx >= 0 ? idx : 0);
        break;
      }
      default:
        questions = [...ALL_QUESTIONS];
    }
    return questions.map(q => q.id);
  }

  function startSession(mode, options = {}) {
    const queue = buildQueue(mode, options);
    session = {
      mode,
      queue,
      current: 0,
      score: 0,
      total: 0,
      wrongInSession: [],
      examMode: mode === 'exam',
      examAnswers: {},
      startTime: Date.now()
    };
    saveSession();
    return session;
  }

  function saveSession() {
    if (session) save(KEY_SESSION, session);
  }

  function restoreSession() {
    session = load(KEY_SESSION, null);
    return session;
  }

  function getSession() { return session; }

  function getCurrentQuestion() {
    if (!session) return null;
    const id = session.queue[session.current];
    return getById(id);
  }

  function hasNext() {
    return session && session.current < session.queue.length - 1;
  }

  function hasPrev() {
    return session && session.current > 0;
  }

  function goNext() {
    if (hasNext()) { session.current++; saveSession(); }
  }

  function goPrev() {
    if (hasPrev()) { session.current--; saveSession(); }
  }

  function goToIndex(idx) {
    if (session && idx >= 0 && idx < session.queue.length) {
      session.current = idx;
      saveSession();
    }
  }

  // jump to specific question id within current queue (or find it)
  function goToQuestionId(id) {
    if (!session) return false;
    const idx = session.queue.indexOf(id);
    if (idx >= 0) { session.current = idx; saveSession(); return true; }
    return false;
  }

  // ─── Answer checking ───────────────────────────────────────────────────────
  // userAns: string like "A", "AB", "BCD"
  function checkAnswer(questionId, userAns) {
    const q = getById(questionId);
    if (!q) return { correct: false, correctAns: '' };
    const normalized = userAns.split('').sort().join('');
    const isCorrect = normalized === q.ans;

    if (session) {
      session.total++;
      if (isCorrect) {
        session.score++;
      } else {
        if (!session.wrongInSession.includes(questionId)) {
          session.wrongInSession.push(questionId);
        }
      }
      if (session.examMode) {
        session.examAnswers[questionId] = normalized;
      }
      saveSession();
    }

    recordAnswer(questionId, isCorrect);
    return { correct: isCorrect, correctAns: q.ans };
  }

  // ─── Session stats ─────────────────────────────────────────────────────────
  function getSessionStats() {
    if (!session) return null;
    const pct = session.total > 0 ? Math.round(session.score / session.total * 100) : 0;
    const elapsed = Math.round((Date.now() - session.startTime) / 1000);
    const topicErrors = {};
    session.wrongInSession.forEach(id => {
      const q = getById(id);
      if (q) topicErrors[q.topic] = (topicErrors[q.topic] || 0) + 1;
    });
    const topicsToReview = Object.entries(topicErrors)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([topic, count]) => ({ topic, count }));
    return {
      score: session.score,
      total: session.total,
      pct,
      wrong: session.total - session.score,
      wrongInSession: session.wrongInSession,
      topicsToReview,
      elapsed,
      mode: session.mode,
      queueLen: session.queue.length
    };
  }

  // exam mode: get results after finishing
  function getExamResults() {
    if (!session || !session.examMode) return null;
    const results = session.queue.map(id => {
      const q = getById(id);
      const userAns = session.examAnswers[id] || '';
      const correct = userAns === q.ans;
      return { q, userAns, correct };
    });
    const score = results.filter(r => r.correct).length;
    const total = results.length;
    const pct = Math.round(score / total * 100);
    return { results, score, total, pct };
  }

  // ─── Overall statistics ────────────────────────────────────────────────────
  function getOverallStats() {
    const prog = getProgress();
    const ids = Object.keys(prog).map(Number);
    const seen = ids.length;
    const correct = ids.reduce((s, id) => s + (prog[id].correct || 0), 0);
    const wrong = ids.reduce((s, id) => s + (prog[id].wrong || 0), 0);
    const total = correct + wrong;
    const pct = total > 0 ? Math.round(correct / total * 100) : 0;
    const wrongIds = getWrongIds();

    // per-topic breakdown
    const topicMap = {};
    ALL_QUESTIONS.forEach(q => {
      if (!topicMap[q.topic]) topicMap[q.topic] = { seen: 0, correct: 0, wrong: 0 };
      const p = prog[q.id];
      if (p) {
        topicMap[q.topic].seen++;
        topicMap[q.topic].correct += p.correct;
        topicMap[q.topic].wrong += p.wrong;
      }
    });

    return { seen, total: ALL_QUESTIONS.length, correct, wrong, pct, wrongCount: wrongIds.length, topicMap };
  }

  // ─── Hints ────────────────────────────────────────────────────────────────
  function getHints(questionId, level) {
    const q = getById(questionId);
    if (!q) return [];
    const hints = [
      `Tema: ${q.topic}`,
      `La respuesta tiene ${q.ans.length} opción${q.ans.length > 1 ? 'es' : ''}: ${q.ans.split('').join(', ')}`
    ];
    return hints.slice(0, level);
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
    save(KEY_PROGRESS, {});
    save(KEY_WRONGS, []);
    save(KEY_SESSION, null);
    session = null;
  }

  // ─── Public API ────────────────────────────────────────────────────────────
  return {
    init,
    getAll,
    getById,
    getTotal,
    startSession,
    restoreSession,
    getSession,
    getCurrentQuestion,
    hasNext,
    hasPrev,
    goNext,
    goPrev,
    goToIndex,
    goToQuestionId,
    checkAnswer,
    getSessionStats,
    getExamResults,
    getOverallStats,
    getProgress,
    getWrongIds,
    getWrongQuestions,
    clearWrongs,
    getHints,
    resetAll,
    shuffle
  };

})();
