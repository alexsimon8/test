// ui.js — All screen rendering and event handling

const UI = (() => {

  let root = null;
  let hintLevel = 0;
  let examNumInput = 40;

  // ─── Bootstrap ────────────────────────────────────────────────────────────
  function mount(rootEl) {
    root = rootEl;
    Engine.init();
    const saved = Engine.restoreSession();
    if (saved && saved.queue && saved.queue.length > 0 && !saved.examMode) {
      renderHome(true);
    } else {
      renderHome(false);
    }
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────
  function el(tag, attrs, ...children) {
    const e = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'cls') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    });
    children.forEach(c => {
      if (c == null) return;
      if (typeof c === 'string') e.appendChild(document.createTextNode(c));
      else e.appendChild(c);
    });
    return e;
  }

  function qs(selector) { return root.querySelector(selector); }

  function render(node) {
    root.innerHTML = '';
    root.appendChild(node);
    root.scrollTop = 0;
  }

  function pct(a, b) { return b > 0 ? Math.round(a / b * 100) : 0; }

  // ─── HOME ──────────────────────────────────────────────────────────────────
  function renderHome(hasSaved) {
    const stats = Engine.getOverallStats();
    const wrongCount = Engine.getWrongIds().length;

    const wrap = el('div', { cls: 'screen home' });

    // header
    wrap.appendChild(el('div', { cls: 'home-logo' }, 'ServiceNow CSA'));
    wrap.appendChild(el('div', { cls: 'home-sub' },
      `${Engine.getTotal()} preguntas · Examen oficial actualizado Feb 2026`));

    // global progress bar
    if (stats.seen > 0) {
      const bar = el('div', { cls: 'global-bar' });
      const fill = el('div', { cls: 'global-bar-fill' });
      fill.style.width = pct(stats.seen, stats.total) + '%';
      bar.appendChild(fill);
      const barLabel = el('div', { cls: 'global-bar-label' },
        `${stats.seen} de ${stats.total} preguntas vistas · ${stats.pct}% aciertos`);
      wrap.appendChild(bar);
      wrap.appendChild(barLabel);
    }

    // menu cards
    const grid = el('div', { cls: 'menu-grid' });

    grid.appendChild(menuCard('▶', 'Estudiar en orden', 'Q1 → Q408 secuencialmente', () => {
      Engine.startSession('sequential');
      hintLevel = 0;
      renderQuestion();
    }));

    grid.appendChild(menuCard('🔀', 'Orden aleatorio', 'Preguntas mezcladas', () => {
      Engine.startSession('random');
      hintLevel = 0;
      renderQuestion();
    }));

    grid.appendChild(menuCard('🎯', 'Ir a pregunta', 'Salta a cualquier número', () => {
      renderGotoScreen();
    }));

    grid.appendChild(menuCard('📝', 'Examen simulado', 'Sin respuestas hasta el final', () => {
      renderExamSetup();
    }));

    const reviewCard = menuCard('🔁', 'Repasar errores',
      wrongCount > 0 ? `${wrongCount} pregunta${wrongCount !== 1 ? 's' : ''} fallada${wrongCount !== 1 ? 's' : ''}` : 'Sin errores guardados',
      wrongCount > 0 ? () => { Engine.startSession('review'); hintLevel = 0; renderQuestion(); } : null
    );
    if (!wrongCount) reviewCard.classList.add('disabled');
    grid.appendChild(reviewCard);

    grid.appendChild(menuCard('🧠', 'Repaso inteligente', 'Prioriza tus puntos débiles', () => {
      Engine.startSession('spaced');
      hintLevel = 0;
      renderQuestion();
    }));

    wrap.appendChild(grid);

    // continue button
    if (hasSaved) {
      const s = Engine.getSession();
      const q = Engine.getCurrentQuestion();
      if (s && q) {
        const btn = el('button', { cls: 'btn-continue', onclick: () => { hintLevel = 0; renderQuestion(); } },
          `↩ Continuar — Pregunta ${q.id} (${s.current + 1}/${s.queue.length})`);
        wrap.appendChild(btn);
      }
    }

    // stats footer
    if (stats.seen > 0) {
      wrap.appendChild(el('div', { cls: 'home-stats' },
        el('span', {}, `✓ ${stats.correct}`),
        el('span', {}, `✗ ${stats.wrong}`),
        el('span', {}, `${stats.pct}% precisión global`)
      ));
    }

    // reset link
    wrap.appendChild(el('button', { cls: 'btn-link', onclick: () => {
      if (confirm('¿Resetear todo el progreso? Esta acción no se puede deshacer.')) {
        Engine.resetAll();
        renderHome(false);
      }
    }}, '⚙ Borrar todo el progreso'));

    render(wrap);
  }

  function menuCard(icon, title, desc, onClick) {
    const card = el('div', { cls: 'menu-card' });
    if (onClick) card.addEventListener('click', onClick);
    card.appendChild(el('div', { cls: 'card-icon' }, icon));
    card.appendChild(el('div', { cls: 'card-title' }, title));
    card.appendChild(el('div', { cls: 'card-desc' }, desc));
    return card;
  }

  // ─── GOTO SCREEN ──────────────────────────────────────────────────────────
  function renderGotoScreen() {
    const wrap = el('div', { cls: 'screen goto-screen' });
    wrap.appendChild(el('h2', { cls: 'screen-title' }, 'Ir a pregunta'));
    wrap.appendChild(el('p', { cls: 'screen-desc' }, `Introduce un número entre 1 y ${Engine.getTotal()}`));

    const inputWrap = el('div', { cls: 'goto-input-wrap' });
    const input = el('input', {
      type: 'number', min: '1', max: String(Engine.getTotal()),
      placeholder: '1 – 408', cls: 'goto-input'
    });
    inputWrap.appendChild(input);
    wrap.appendChild(inputWrap);

    const go = () => {
      const n = parseInt(input.value);
      if (!n || n < 1 || n > Engine.getTotal()) {
        input.classList.add('error');
        return;
      }
      input.classList.remove('error');
      Engine.startSession('goto', { startId: n });
      hintLevel = 0;
      renderQuestion();
    };

    input.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    wrap.appendChild(el('button', { cls: 'btn-primary', onclick: go }, 'Ir'));
    wrap.appendChild(el('button', { cls: 'btn-secondary', onclick: () => renderHome(Engine.restoreSession() !== null) }, '← Volver'));

    render(wrap);
  }

  // ─── EXAM SETUP ───────────────────────────────────────────────────────────
  function renderExamSetup() {
    const wrap = el('div', { cls: 'screen exam-setup' });
    wrap.appendChild(el('h2', { cls: 'screen-title' }, 'Examen simulado'));
    wrap.appendChild(el('p', { cls: 'screen-desc' }, 'Las respuestas se muestran al finalizar.'));

    const row = el('div', { cls: 'exam-row' });
    row.appendChild(el('label', { cls: 'exam-label' }, 'Número de preguntas:'));
    const input = el('input', { type: 'number', min: '5', max: '408', cls: 'exam-input' });
    input.value = String(examNumInput);
    input.addEventListener('input', () => { examNumInput = parseInt(input.value) || 40; });
    row.appendChild(input);
    wrap.appendChild(row);

    wrap.appendChild(el('button', { cls: 'btn-primary', onclick: () => {
      const n = Math.max(5, Math.min(408, parseInt(input.value) || 40));
      Engine.startSession('exam', { count: n });
      hintLevel = 0;
      renderQuestion();
    }}, 'Comenzar examen'));

    wrap.appendChild(el('button', { cls: 'btn-secondary', onclick: () => renderHome(Engine.restoreSession() !== null) }, '← Volver'));

    render(wrap);
  }

  // ─── QUESTION SCREEN ──────────────────────────────────────────────────────
  function renderQuestion() {
    const s = Engine.getSession();
    const q = Engine.getCurrentQuestion();
    if (!s || !q) { renderHome(false); return; }

    const isMulti = q.ans.length > 1;
    const isExam = s.examMode;
    const progress = s.current + 1;
    const total = s.queue.length;
    const prog = Engine.getProgress();
    const qProg = prog[q.id];

    const wrap = el('div', { cls: 'screen question-screen' });

    // ── Top bar ──
    const topBar = el('div', { cls: 'q-topbar' });
    topBar.appendChild(el('button', { cls: 'btn-home', onclick: () => renderHome(true) }, '⌂'));

    const progWrap = el('div', { cls: 'q-progress-wrap' });
    const progBar = el('div', { cls: 'q-progress-bar' });
    const progFill = el('div', { cls: 'q-progress-fill' });
    progFill.style.width = pct(progress, total) + '%';
    progBar.appendChild(progFill);
    progWrap.appendChild(progBar);
    progWrap.appendChild(el('div', { cls: 'q-progress-label' }, `${progress} / ${total}`));
    topBar.appendChild(progWrap);

    // score chip
    topBar.appendChild(el('div', { cls: 'q-score-chip' },
      `✓${s.score}  ✗${s.total - s.score}`));
    wrap.appendChild(topBar);

    // ── Question meta ──
    const meta = el('div', { cls: 'q-meta' });
    meta.appendChild(el('span', { cls: 'q-num' }, `#${q.id}`));
    meta.appendChild(el('span', { cls: 'q-topic' }, q.topic));
    if (isMulti) meta.appendChild(el('span', { cls: 'q-multi' }, `Elige ${q.ans.length}`));
    if (isExam) meta.appendChild(el('span', { cls: 'q-exam-badge' }, 'EXAMEN'));
    wrap.appendChild(meta);

    // ── Question text ──
    wrap.appendChild(el('div', { cls: 'q-text' }, q.q));

    // ── Options ──
    const optsWrap = el('div', { cls: 'q-opts', id: 'opts-wrap' });
    const selectedLetters = new Set();
    let answered = false;

    q.opts.forEach(opt => {
      const letter = opt.charAt(0);
      const text = opt.slice(3);
      const optEl = el('div', { cls: 'q-opt', 'data-letter': letter });
      optEl.appendChild(el('span', { cls: 'opt-letter' }, letter));
      optEl.appendChild(el('span', { cls: 'opt-text' }, text));

      optEl.addEventListener('click', () => {
        if (answered) return;
        if (isMulti) {
          if (selectedLetters.has(letter)) {
            selectedLetters.delete(letter);
            optEl.classList.remove('selected');
          } else {
            selectedLetters.add(letter);
            optEl.classList.add('selected');
          }
        } else {
          // single select: clear others
          wrap.querySelectorAll('.q-opt').forEach(o => o.classList.remove('selected'));
          selectedLetters.clear();
          selectedLetters.add(letter);
          optEl.classList.add('selected');
        }
        // enable confirm
        const confirmBtn = qs('#btn-confirm');
        if (confirmBtn) confirmBtn.disabled = selectedLetters.size === 0;
      });

      optsWrap.appendChild(optEl);
    });
    wrap.appendChild(optsWrap);

    // ── Hints (not in exam mode) ──
    if (!isExam) {
      const hintsWrap = el('div', { cls: 'hints-wrap', id: 'hints-wrap' });
      renderHints(hintsWrap, q.id);
      wrap.appendChild(hintsWrap);
    }

    // ── Feedback area ──
    const feedbackWrap = el('div', { cls: 'feedback-wrap', id: 'feedback-wrap' });
    wrap.appendChild(feedbackWrap);

    // ── Action buttons ──
    const actions = el('div', { cls: 'q-actions', id: 'q-actions' });

    // Confirm answer
    const confirmBtn = el('button', {
      cls: 'btn-primary', id: 'btn-confirm', disabled: 'true',
      onclick: () => {
        if (answered || selectedLetters.size === 0) return;
        answered = true;
        const userAns = [...selectedLetters].sort().join('');
        const { correct, correctAns } = Engine.checkAnswer(q.id, userAns);

        // color options
        const correctSet = new Set(correctAns.split(''));
        wrap.querySelectorAll('.q-opt').forEach(o => {
          const l = o.getAttribute('data-letter');
          o.classList.remove('selected');
          if (correctSet.has(l)) o.classList.add('correct');
          else if (selectedLetters.has(l)) o.classList.add('wrong');
        });

        // show feedback
        if (!isExam) {
          const fb = el('div', { cls: `feedback ${correct ? 'feedback-ok' : 'feedback-err'}` });
          fb.appendChild(el('div', { cls: 'fb-verdict' },
            correct ? '✓ Correcto' : `✗ Incorrecto · Respuesta: ${correctAns.split('').join(', ')}`));
          if (!correct || true) {
            fb.appendChild(el('div', { cls: 'fb-exp' }, q.exp));
          }
          feedbackWrap.appendChild(fb);
        }

        // swap buttons
        confirmBtn.style.display = 'none';
        if (!isExam) {
          hintLevel = 0; // reset hints for next question
          const hintsWrap = qs('#hints-wrap');
          if (hintsWrap) hintsWrap.innerHTML = '';
        }

        // next / finish button
        const isLast = !Engine.hasNext();
        const nextBtn = el('button', {
          cls: 'btn-primary', id: 'btn-next',
          onclick: () => {
            if (isLast) {
              if (isExam) renderExamResults();
              else renderSessionEnd();
            } else {
              Engine.goNext();
              hintLevel = 0;
              renderQuestion();
            }
          }
        }, isLast ? (isExam ? 'Ver resultados →' : 'Finalizar sesión →') : 'Siguiente →');
        actions.appendChild(nextBtn);
      }
    }, 'Confirmar respuesta');
    confirmBtn.disabled = true;
    actions.appendChild(confirmBtn);

    // Hint button (not in exam mode)
    if (!isExam) {
      const maxHints = 2;
      if (hintLevel < maxHints) {
        const hintBtn = el('button', {
          cls: 'btn-hint', id: 'btn-hint',
          onclick: () => {
            hintLevel = Math.min(hintLevel + 1, maxHints);
            const hw = qs('#hints-wrap');
            if (hw) renderHints(hw, q.id);
            if (hintLevel >= maxHints) {
              const hb = qs('#btn-hint');
              if (hb) hb.style.display = 'none';
            }
          }
        }, `💡 Pista (${hintLevel}/${maxHints})`);
        actions.appendChild(hintBtn);
      }
    }

    // Prev / Next nav (always visible even before answering)
    const navWrap = el('div', { cls: 'q-nav' });
    if (Engine.hasPrev()) {
      navWrap.appendChild(el('button', { cls: 'btn-nav', onclick: () => {
        Engine.goPrev(); hintLevel = 0; renderQuestion();
      }}, '← Anterior'));
    }
    navWrap.appendChild(el('button', { cls: 'btn-nav', onclick: () => renderHome(true) }, '⌂ Menú'));
    if (Engine.hasNext()) {
      navWrap.appendChild(el('button', { cls: 'btn-nav', onclick: () => {
        Engine.goNext(); hintLevel = 0; renderQuestion();
      }}, 'Siguiente →'));
    }

    wrap.appendChild(actions);
    wrap.appendChild(navWrap);

    render(wrap);
  }

  function renderHints(container, questionId) {
    container.innerHTML = '';
    const hints = Engine.getHints(questionId, hintLevel);
    hints.forEach(h => {
      container.appendChild(el('div', { cls: 'hint-box' }, `💡 ${h}`));
    });
  }

  // ─── SESSION END ──────────────────────────────────────────────────────────
  function renderSessionEnd() {
    const stats = Engine.getSessionStats();
    if (!stats) { renderHome(false); return; }

    const wrap = el('div', { cls: 'screen end-screen' });
    const emoji = stats.pct >= 85 ? '🏆' : stats.pct >= 70 ? '👍' : stats.pct >= 50 ? '📚' : '💪';
    const msg = stats.pct >= 85 ? '¡Excelente! Listo para el examen.' :
                stats.pct >= 70 ? 'Buen progreso. Repasa los temas fallados.' :
                stats.pct >= 50 ? 'Sigue practicando.' : 'Repasa los conceptos clave.';

    wrap.appendChild(el('div', { cls: 'end-emoji' }, emoji));
    wrap.appendChild(el('div', { cls: 'end-title' }, 'Sesión completada'));
    wrap.appendChild(el('div', { cls: 'end-pct' }, `${stats.pct}%`));
    wrap.appendChild(el('div', { cls: 'end-msg' }, msg));

    const statRow = el('div', { cls: 'end-stats' });
    statRow.appendChild(statChip('Correctas', stats.score, 'ok'));
    statRow.appendChild(statChip('Incorrectas', stats.wrong, 'err'));
    statRow.appendChild(statChip('Total', stats.total, 'neutral'));
    wrap.appendChild(statRow);

    if (stats.topicsToReview.length) {
      wrap.appendChild(el('div', { cls: 'end-section-title' }, 'Temas a reforzar:'));
      const topicList = el('div', { cls: 'topic-list' });
      stats.topicsToReview.forEach(({ topic, count }) => {
        topicList.appendChild(el('div', { cls: 'topic-item' },
          el('span', {}, topic),
          el('span', { cls: 'topic-err' }, `${count} error${count !== 1 ? 'es' : ''}`)
        ));
      });
      wrap.appendChild(topicList);
    }

    wrap.appendChild(el('div', { cls: 'end-section-title' }, 'Recomendaciones:'));
    const recs = el('ul', { cls: 'recs' });
    if (stats.topicsToReview.length) {
      stats.topicsToReview.slice(0, 3).forEach(({ topic }) => {
        recs.appendChild(el('li', {}, `Repasa el tema: ${topic}`));
      });
    }
    if (stats.pct < 75) recs.appendChild(el('li', {}, 'Usa el modo Repaso inteligente para priorizar puntos débiles.'));
    if (stats.pct >= 85) recs.appendChild(el('li', {}, 'Considera hacer un examen simulado completo.'));
    wrap.appendChild(recs);

    const btnRow = el('div', { cls: 'end-btns' });
    if (stats.wrongInSession.length) {
      btnRow.appendChild(el('button', { cls: 'btn-primary', onclick: () => {
        Engine.startSession('review'); hintLevel = 0; renderQuestion();
      }}, '🔁 Repasar errores'));
    }
    btnRow.appendChild(el('button', { cls: 'btn-secondary', onclick: () => renderHome(false) }, '⌂ Menú principal'));
    wrap.appendChild(btnRow);

    render(wrap);
  }

  // ─── EXAM RESULTS ─────────────────────────────────────────────────────────
  function renderExamResults() {
    const data = Engine.getExamResults();
    if (!data) { renderHome(false); return; }

    const { results, score, total, pct: examPct } = data;
    const wrap = el('div', { cls: 'screen exam-results' });
    const emoji = examPct >= 75 ? '🏆' : examPct >= 60 ? '📚' : '💪';

    wrap.appendChild(el('div', { cls: 'end-emoji' }, emoji));
    wrap.appendChild(el('div', { cls: 'end-title' }, 'Resultado del examen'));
    wrap.appendChild(el('div', { cls: 'end-pct' }, `${examPct}%`));
    wrap.appendChild(el('div', { cls: 'end-msg' },
      examPct >= 75 ? '¡Aprobado! (≥75% requerido)' : 'No alcanzado el 75%. ¡Sigue practicando!'));

    const statRow = el('div', { cls: 'end-stats' });
    statRow.appendChild(statChip('Correctas', score, 'ok'));
    statRow.appendChild(statChip('Incorrectas', total - score, 'err'));
    statRow.appendChild(statChip('Total', total, 'neutral'));
    wrap.appendChild(statRow);

    // detailed results
    wrap.appendChild(el('div', { cls: 'end-section-title' }, 'Correcciones detalladas:'));
    const details = el('div', { cls: 'exam-details' });

    results.forEach(({ q, userAns, correct }) => {
      const item = el('div', { cls: `exam-detail-item ${correct ? 'detail-ok' : 'detail-err'}` });
      item.appendChild(el('div', { cls: 'detail-header' },
        el('span', { cls: 'detail-num' }, `#${q.id}`),
        el('span', { cls: 'detail-verdict' }, correct ? '✓' : '✗'),
        el('span', { cls: 'detail-topic' }, q.topic)
      ));
      item.appendChild(el('div', { cls: 'detail-q' }, q.q));
      if (!correct) {
        item.appendChild(el('div', { cls: 'detail-ans' },
          `Tu respuesta: ${userAns || '—'}  ·  Correcta: ${q.ans}`));
        item.appendChild(el('div', { cls: 'detail-exp' }, q.exp));
      }
      details.appendChild(item);
    });
    wrap.appendChild(details);

    const btnRow = el('div', { cls: 'end-btns' });
    btnRow.appendChild(el('button', { cls: 'btn-secondary', onclick: () => renderHome(false) }, '⌂ Menú principal'));
    wrap.appendChild(btnRow);

    render(wrap);
  }

  // ─── Small helper ─────────────────────────────────────────────────────────
  function statChip(label, value, type) {
    const chip = el('div', { cls: `stat-chip stat-${type}` });
    chip.appendChild(el('div', { cls: 'chip-value' }, String(value)));
    chip.appendChild(el('div', { cls: 'chip-label' }, label));
    return chip;
  }

  // ─── Public ───────────────────────────────────────────────────────────────
  return { mount };

})();
