/* Карточки по принципу Anki с фиксированным графиком: слово повторяется на 1-й, 3-й, 7-й и 21-й день
   после изучения (обязательно), затем закрепление через 60 и 180 дней. Ошибка возвращает карточку в начало графика. */
(function () {
  const { h, speakBtn, types } = Engine;
  // due-смещение от даты изучения для каждой стадии: после стадии s карточка ждёт intro + DUE_AFTER[s]
  const DUE_AFTER = [1, 3, 7, 21, 60, 180, null];
  const STAGE_LABEL = ['1-й день', '3-й день', '7-й день', '21-й день', 'закрепление (2 мес.)', 'закрепление (6 мес.)', 'выучено'];
  const KNOWN = 6;

  let ALL = null, BY_ID = null;
  function all() {
    if (ALL) return ALL;
    ALL = []; BY_ID = {};
    let rank = 0;
    for (const chunk of (ST_DATA.freqRaw || [])) {
      for (const line of chunk.split('\n')) {
        const t = line.trim(); if (!t) continue;
        const [es, ru, ex, exRu] = t.split('|').map((s) => s.trim());
        rank++;
        const w = { id: 'f' + rank, rank, es, ru, ex: ex || '', exRu: exRu || '' };
        ALL.push(w); BY_ID[w.id] = w;
      }
    }
    return ALL;
  }
  function word(id) { all(); return BY_ID[id]; }
  function st() { const s = Store.get(); if (!s.cards) s.cards = {}; if (!s.cardLog) s.cardLog = {}; return s; }
  function cardState(id) { return st().cards[id]; }
  function today() { return Store.today(); }

  // ---- планирование ----
  function due(limit) {
    const s = st(); const t = today();
    const ids = Object.keys(s.cards).filter((id) => { const c = s.cards[id]; return !c.k && c.due && c.due <= t; });
    ids.sort((a, b) => (s.cards[a].due < s.cards[b].due ? -1 : s.cards[a].due > s.cards[b].due ? 1 : 0) || (word(a).rank - word(b).rank));
    return limit ? ids.slice(0, limit) : ids;
  }
  function newToday() { const l = st().cardLog[today()]; return l ? l.n || 0 : 0; }
  function newLeft() { return Math.max(0, (st().settings.newPerDay || 20) - newToday()); }
  function nextNew(n) {
    const s = st(); const out = [];
    for (const w of all()) { if (!s.cards[w.id]) { out.push(w.id); if (out.length >= n) break; } }
    return out;
  }
  function log(field) { const s = st(); const t = today(); const l = s.cardLog[t] || (s.cardLog[t] = { n: 0, r: 0 }); l[field] = (l[field] || 0) + 1; }

  function rate(id, rating) {
    const s = st(); const t = today();
    let c = s.cards[id];
    if (rating === 'known') { s.cards[id] = { s: KNOWN, k: 1, intro: t, due: null, reps: c ? c.reps : 0, lapses: c ? c.lapses : 0 }; Store.save(); return; }
    if (rating === 'learn' || !c) {
      s.cards[id] = { s: 0, intro: t, due: Store.addDays(t, DUE_AFTER[0]), reps: 0, lapses: 0, last: t };
      log('n'); Store.save(); return;
    }
    c.reps = (c.reps || 0) + 1; c.last = t; log('r');
    if (rating === 'again') {
      c.s = 0; c.intro = t; c.lapses = (c.lapses || 0) + 1; c.due = Store.addDays(t, DUE_AFTER[0]);
    } else {
      c.s = Math.min(KNOWN, c.s + 1);
      const off = DUE_AFTER[c.s];
      if (off === null) { c.due = null; }
      else { const planned = Store.addDays(c.intro, off); c.due = planned > t ? planned : Store.addDays(t, 1); }
    }
    Store.save();
  }
  function reset(id) { delete st().cards[id]; Store.save(); }
  function markKnownUpTo(rank) {
    const s = st(); const t = today();
    for (const w of all()) { if (w.rank > rank) break; if (!s.cards[w.id]) s.cards[w.id] = { s: KNOWN, k: 1, intro: t, due: null, reps: 0, lapses: 0 }; }
    Store.save();
  }

  function stats() {
    const s = st(); const t = today();
    let known = 0, learning = 0, longterm = 0, dueN = 0, dueTomorrow = 0, dueWeek = 0;
    const tomorrow = Store.addDays(t, 1), week = Store.addDays(t, 7);
    for (const id in s.cards) {
      const c = s.cards[id];
      if (c.k) known++; else if (c.s >= 4) longterm++; else learning++;
      if (!c.k && c.due) { if (c.due <= t) dueN++; else if (c.due === tomorrow) dueTomorrow++; if (c.due > t && c.due <= week) dueWeek++; }
    }
    const total = all().length;
    return { total, known, learning, longterm, due: dueN, dueTomorrow, dueWeek, fresh: total - known - learning - longterm, newLeft: newLeft(), newToday: newToday() };
  }

  function kind(w) {
    if (/^(el|la|los|las)\s/.test(w.es)) return 'n';
    if (/^[a-záéíóúñ]+(ar|er|ir)(se)?$/.test(w.es)) return 'v';
    if (/\s/.test(w.es)) return 'p';
    return 'a';
  }
  // Три дистрактора того же типа и близкого ранга
  function distractors(w, dir) {
    const list = all(); const k = kind(w);
    const val = (x) => (dir === 'es' ? x.ru : x.es);
    const taken = new Set([val(w)]);
    const pool = list.filter((x) => x.id !== w.id && kind(x) === k && Math.abs(x.rank - w.rank) <= 200);
    const wide = list.filter((x) => x.id !== w.id && kind(x) === k);
    const out = [];
    for (const src of [pool, wide, list]) {
      const arr = Engine.shuffle(src);
      for (const x of arr) { if (out.length >= 3) break; const v = val(x); if (x.id === w.id || taken.has(v)) continue; taken.add(v); out.push(v); }
      if (out.length >= 3) break;
    }
    return out;
  }
  function modeFor(c, w) {
    const pref = st().settings.cardMode || 'mix';
    if (pref !== 'mix') return pref;
    return ((c.s + w.rank) % 2 === 0) ? 'self' : 'mc';
  }
  function dirFor(c, w) {
    const pref = st().settings.cardDir || 'both';
    if (pref !== 'both') return pref;
    return (c.s % 2 === 0) ? 'es' : 'ru';
  }
  // Шаги для урока / сессии
  function steps(ids, isNew) {
    return ids.map((id) => {
      const w = word(id); if (!w) return null;
      if (isNew) return { type: 'ex', card: id, ex: { t: 'ankiNew', w } };
      const c = cardState(id) || { s: 0, intro: today() };
      const dir = dirFor(c, w); const mode = modeFor(c, w);
      const ex = { t: mode === 'mc' ? 'ankiMc' : 'anki', w, dir, stage: c.s, day: Store.daysBetween(c.intro, today()) };
      if (mode === 'mc') { ex.options = distractors(w, dir); ex.answer = dir === 'es' ? w.ru : w.es; ex.e = w.ex + (w.exRu ? ' — ' + w.exRu : ''); }
      return { type: 'ex', card: id, ex };
    }).filter(Boolean);
  }

  // ---- типы упражнений ----
  function highlight(ex, es) {
    const stem = es.replace(/^(el|la|los|las|un|una)\s+/, '').replace(/se$/, '').slice(0, 4).toLowerCase();
    if (!stem) return ex;
    const re = new RegExp('(\\S*' + stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\S*)', 'i');
    const parts = ex.split(re);
    return parts.map((p, i) => i % 2 ? h('em', null, p) : p);
  }
  types.anki = function (ex) {
    const w = ex.w; let rating = null; let shown = false;
    const front = h('div', { class: 'anki-front' },
      h('div', { class: 'ex-label' }, (ex.dir === 'es' ? 'Вспомни перевод' : 'Вспомни по-испански') + ' · ' + STAGE_LABEL[ex.stage] + (ex.day > DUE_AFTER[ex.stage] ? ' (с опозданием)' : '')),
      h('div', { class: 'ex-q big' }, ex.dir === 'es' ? w.es : w.ru, ex.dir === 'es' ? speakBtn(w.es) : null),
      h('button', { type: 'button', class: 'btn big', onclick: reveal }, 'Показать ответ'));
    const back = h('div', { class: 'anki-back', hidden: '' },
      h('div', { class: 'anki-es' }, w.es, speakBtn(w.es)),
      h('div', { class: 'anki-ru' }, w.ru),
      w.ex ? h('div', { class: 'anki-ex' }, h('div', null, highlight(w.ex, w.es), speakBtn(w.ex)), w.exRu ? h('div', { class: 'anki-exru' }, w.exRu) : null) : null,
      h('div', { class: 'anki-rate' },
        h('button', { type: 'button', class: 'btn rate-again', onclick: () => pick('again') }, 'Не помню', h('small', null, 'снова с 1-го дня')),
        h('button', { type: 'button', class: 'btn rate-good', onclick: () => pick('good') }, 'Помню', h('small', null, nextLabel(ex.stage)))));
    const el = h('div', { class: 'ex anki' }, front, back);
    function reveal() { shown = true; front.querySelector('.btn').hidden = true; back.hidden = false; }
    function pick(r) { rating = r; el.querySelectorAll('.anki-rate .btn').forEach((b) => (b.disabled = true)); el.dispatchEvent(new CustomEvent('ready', { bubbles: true, detail: { auto: true } })); }
    el.addEventListener('keydown', (e) => { if (e.key === ' ' && !shown) { e.preventDefault(); reveal(); } });
    return { el, autoCheck: true, isReady() { return rating !== null; }, check() { return { correct: rating === 'good', rating, skipFeedback: true }; } };
  };
  function nextLabel(stage) {
    const off = DUE_AFTER[Math.min(KNOWN, stage + 1)];
    return off === null ? 'выучено' : 'следующий: ' + STAGE_LABEL[stage + 1];
  }
  types.ankiNew = function (ex) {
    const w = ex.w; let rating = null;
    const el = h('div', { class: 'ex anki' },
      h('div', { class: 'ex-label' }, 'Новое слово · №' + w.rank + ' по частоте'),
      h('div', { class: 'anki-es big' }, w.es, speakBtn(w.es)),
      h('div', { class: 'anki-ru' }, w.ru),
      w.ex ? h('div', { class: 'anki-ex' }, h('div', null, highlight(w.ex, w.es), speakBtn(w.ex)), w.exRu ? h('div', { class: 'anki-exru' }, w.exRu) : null) : null,
      h('div', { class: 'anki-rate' },
        h('button', { type: 'button', class: 'btn', onclick: () => pick('known') }, 'Уже знаю', h('small', null, 'не показывать')),
        h('button', { type: 'button', class: 'btn primary', onclick: () => pick('learn') }, 'Учить', h('small', null, 'повторы: 1, 3, 7, 21 день'))));
    function pick(r) { rating = r; el.querySelectorAll('.anki-rate .btn').forEach((b) => (b.disabled = true)); el.dispatchEvent(new CustomEvent('ready', { bubbles: true, detail: { auto: true } })); }
    return { el, autoCheck: true, isReady() { return rating !== null; }, check() { return { correct: true, rating, skipFeedback: true }; } };
  };

  // Режим с выбором из четырёх вариантов
  types.ankiMc = function (ex) {
    const w = ex.w; let chosen = null;
    const opts = Engine.shuffle([ex.answer].concat(ex.options));
    const el = h('div', { class: 'ex anki' },
      h('div', { class: 'ex-label' }, (ex.dir === 'es' ? 'Выбери перевод' : 'Выбери испанское слово') + ' · ' + STAGE_LABEL[ex.stage] + (ex.requeue ? ' · повтор' : '')),
      h('div', { class: 'ex-q big' }, ex.dir === 'es' ? w.es : w.ru, ex.dir === 'es' ? speakBtn(w.es) : null),
      h('div', { class: 'options' }, opts.map((o) => h('button', { type: 'button', class: 'opt', onclick: (e) => {
        if (chosen !== null) return;
        chosen = o; e.currentTarget.classList.add('sel');
        el.dispatchEvent(new CustomEvent('ready', { bubbles: true, detail: { auto: true } }));
      } }, o))));
    return {
      el, autoCheck: true, isReady() { return chosen !== null; },
      check() {
        const correct = chosen === ex.answer;
        el.querySelectorAll('.opt').forEach((b) => { if (b.textContent === ex.answer) b.classList.add('right'); else if (b.textContent === chosen) b.classList.add('wrong'); b.disabled = true; });
        return { correct, rating: correct ? 'good' : 'again', answerText: w.es + ' — ' + w.ru };
      }
    };
  };

  // ---- экран ----
  function screen(app, ctx) {
    const s = st(); const S = stats();
    const frag = h('div', { class: 'screen' }, h('h1', null, 'Карточки: ' + S.total + ' частотных слов'));
    const started = Object.keys(s.cards).length > 0;
    frag.append(h('section', { class: 'card' },
      h('div', { class: 'hero-row' },
        h('div', { class: 'stat' }, h('b', null, S.due), h('span', null, 'к повторению')),
        h('div', { class: 'stat' }, h('b', null, S.newLeft), h('span', null, 'новых сегодня')),
        h('div', { class: 'stat' }, h('b', null, S.learning), h('span', null, 'в графике')),
        h('div', { class: 'stat' }, h('b', null, S.longterm + S.known), h('span', null, 'выучено'))),
      h('div', { class: 'bar' }, h('div', { class: 'bar-fill ok', style: 'width:' + Math.round(((S.longterm + S.known) / S.total) * 100) + '%' })),
      h('p', { class: 'muted small' }, 'Каждое слово возвращается на 1-й, 3-й, 7-й и 21-й день после изучения, потом закрепляется через 2 и 6 месяцев. Просроченные карточки обязательно появляются в начале следующего урока. Слово с ошибкой показывается снова в той же сессии, пока не ответишь верно.'),
      h('div', { class: 'row-links' },
        (S.due || S.newLeft) ? h('button', { class: 'btn primary big', type: 'button', onclick: () => session(ctx, true, true) }, 'Заниматься' + (S.due ? ': повторить ' + S.due : '') + (S.newLeft && S.fresh ? (S.due ? ' + ' : ': ') + Math.min(S.newLeft, S.fresh) + ' новых' : '')) : h('p', { class: 'muted' }, 'На сегодня всё сделано. Завтра к повторению: ' + S.dueTomorrow + '.'),
        S.due ? h('button', { class: 'btn', type: 'button', onclick: () => session(ctx, true, false) }, 'Только повторение') : null,
        S.newLeft && S.fresh ? h('button', { class: 'btn', type: 'button', onclick: () => session(ctx, false, true) }, 'Только новые') : null),
      h('p', { class: 'muted small' }, 'Завтра: ' + S.dueTomorrow + ' · за 7 дней: ' + S.dueWeek + ' · ещё не начаты: ' + S.fresh)
    ));

    // стартовая точка
    const sel = h('select', { class: 'inp' }, [[0, 'с самого начала'], [300, 'пропустить первые 300 (базовые слова A1)'], [600, 'пропустить первые 600 (A1)'], [1000, 'пропустить первые 1000 (A2)'], [1500, 'пропустить первые 1500 (A2+)']].map(([v, l]) => h('option', { value: v }, l)));
    frag.append(h('section', { class: 'card' }, h('h3', null, started ? 'Отметить известные слова' : 'С какого места начать?'),
      h('p', { class: 'muted small' }, 'Список идёт от самых частых слов к более редким. Если первые сотни ты уже знаешь, отметь их известными: они не будут попадать в карточки. Отдельное слово можно отметить кнопкой «Уже знаю».'),
      h('div', { class: 'row-links' }, sel, h('button', { class: 'btn', type: 'button', onclick: () => { const n = Number(sel.value); if (!n) { ctx.toast('Ничего не отмечено'); return; } if (confirm('Отметить слова 1–' + n + ' как известные?')) { markKnownUpTo(n); ctx.toast('Отмечено'); ctx.rerender(); } } }, 'Отметить'))));

    // настройки
    const set = (k, v) => { s.settings[k] = v; Store.save(); };
    frag.append(h('section', { class: 'card' }, h('h3', null, 'Настройки карточек'),
      h('label', { class: 'switch' }, h('span', null, 'Новых слов в день', h('small', null, '20 в день = 3000 слов за 5 месяцев; 50 в день = за 2 месяца')), h('input', { class: 'inp short', type: 'number', min: '0', max: '200', value: s.settings.newPerDay, onchange: (e) => { set('newPerDay', Math.max(0, Math.min(200, Number(e.target.value) || 0))); ctx.rerender(); } })),
      h('label', { class: 'switch' }, h('span', null, 'Режим карточек', h('small', null, 'Самооценка: вспомнил и сам оцениваешь. Выбор: четыре варианта ответа.')), h('select', { class: 'inp', onchange: (e) => set('cardMode', e.target.value) },
        [['mix', 'чередовать'], ['self', 'самооценка (Anki)'], ['mc', 'выбор из 4 вариантов']].map(([v, l]) => h('option', { value: v, selected: (s.settings.cardMode || 'mix') === v ? '' : null }, l)))),
      h('label', { class: 'switch' }, h('span', null, 'Направление карточек'), h('select', { class: 'inp', onchange: (e) => set('cardDir', e.target.value) },
        [['both', 'чередовать'], ['es', 'испанский → перевод'], ['ru', 'перевод → испанский']].map(([v, l]) => h('option', { value: v, selected: (s.settings.cardDir || 'both') === v ? '' : null }, l))))));

    // поиск и список
    const search = h('input', { class: 'inp wide', type: 'search', placeholder: 'Найти слово по-испански или по-русски…' });
    const list = h('div', { class: 'dict' });
    function renderList() {
      const q = Engine.norm(search.value);
      let items = all();
      if (q) items = items.filter((w) => Engine.norm(w.es).includes(q) || Engine.norm(w.ru).includes(q));
      else items = items.filter((w) => !s.cards[w.id]).slice(0, 20);
      list.replaceChildren(h('p', { class: 'muted small' }, q ? 'Найдено: ' + items.length + (items.length > 100 ? ', показаны первые 100' : '') : 'Следующие 20 новых слов:'), ...items.slice(0, 100).map((w) => {
        const c = s.cards[w.id];
        const status = !c ? 'ещё не учится' : c.k ? 'известно' : c.s >= KNOWN ? 'выучено' : c.s >= 4 ? 'долгосрочная память · след. ' + c.due : 'в графике · ' + STAGE_LABEL[c.s] + ' · след. ' + c.due;
        return h('div', { class: 'dict-item' + (c ? (c.k || c.s >= 4 ? ' known' : '') : ' new') },
          h('div', null, h('span', { class: 'muted small' }, w.rank + '. '), h('b', null, w.es), speakBtn(w.es), h('span', { class: 'muted' }, ' — ' + w.ru)),
          w.ex ? h('div', { class: 'small' }, w.ex, w.exRu ? h('span', { class: 'muted' }, ' — ' + w.exRu) : null) : null,
          h('div', { class: 'dict-meta' }, status, ' · ', c ? h('a', { href: '#', onclick: (e) => { e.preventDefault(); reset(w.id); renderList(); } }, 'сбросить') : h('a', { href: '#', onclick: (e) => { e.preventDefault(); rate(w.id, 'known'); renderList(); } }, 'уже знаю')));
      }));
    }
    search.addEventListener('input', renderList); renderList();
    frag.append(h('section', { class: 'card' }, h('h3', null, 'Все слова'), search, list));
    app.replaceChildren(frag);
  }

  function session(ctx, withDue, withNew) {
    const stp = [];
    if (withDue) { const d = due(100); if (d.length) stp.push({ type: 'section', title: 'Повторение карточек', text: d.length + ' слов по графику 1–3–7–21.' }, ...steps(d, false)); }
    if (withNew) { const n = nextNew(newLeft()); if (n.length) stp.push({ type: 'section', title: 'Новые слова', text: n.length + ' новых слов. Первое повторение завтра.' }, ...steps(n, true)); }
    if (!stp.length) { ctx.toast('Нечего повторять'); return; }
    ctx.startCustomLesson('Карточки', stp);
  }

  window.Cards = { all, word, cardState, due, newLeft, nextNew, rate, reset, markKnownUpTo, stats, steps, screen, session, DUE_AFTER, STAGE_LABEL };
})();
