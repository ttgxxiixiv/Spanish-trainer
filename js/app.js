/* Экраны приложения и логика урока. */
(function () {
  const { h, shuffle, pick, speak, canSpeak, speakBtn, types, expand } = Engine;
  const app = document.getElementById('app');
  const TOTAL_DAYS = 60;

  // ---- индекс слов ----
  const WORDS = {};
  for (const day in ST_DATA.days) {
    (ST_DATA.days[day].vocab || []).forEach((w, i) => {
      const id = 'd' + day + '_' + i;
      WORDS[id] = { id, es: w[0], ru: w[1], ex: w[2] || '', day: Number(day) };
    });
  }
  function wordsOfDay(day) { return Object.values(WORDS).filter((w) => w.day === day); }
  function moduleOf(day) { return ST_DATA.modules.find((m) => m.days.includes(day)); }

  // ---- утилиты ----
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2600);
  }
  function fmtTime(sec) { const m = Math.round(sec / 60); return m < 1 ? '<1 мин' : m + ' мин'; }
  function plural(n, one, few, many) { const m = n % 100, l = n % 10; return n + ' ' + ((m > 10 && m < 20) ? many : l === 1 ? one : (l > 1 && l < 5) ? few : many); }

  function nextDay() {
    const st = Store.get();
    for (let d = 1; d <= TOTAL_DAYS; d++) if (!st.days[d]) return d;
    return null;
  }
  function unlocked(day) {
    const st = Store.get();
    if (st.settings.unlockAll || day === 1) return true;
    return !!st.days[day - 1] || !!st.days[day];
  }
  function levelInfo() {
    const st = Store.get();
    const done = Object.keys(st.days).length;
    const scores = Object.values(st.days).map((d) => d.score);
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    let label;
    if (done >= 60 && avg >= 70) label = 'B2';
    else if (done >= 48) label = 'B1+ → B2';
    else if (done >= 36) label = 'B1+';
    else if (done >= 24) label = 'B1';
    else if (done >= 12) label = 'A2+';
    else label = 'A2';
    return { done, avg, label, pct: Math.round((done / TOTAL_DAYS) * 100) };
  }
  function scheduleInfo() {
    const st = Store.get();
    if (!st.startDate) return null;
    const t = Store.today();
    // расчётный день курса = учебные (не отдых) дни от старта по сегодня
    let expected = 0;
    for (let d = st.startDate; d <= t; d = Store.addDays(d, 1)) if (!Store.isRest(d)) expected++;
    expected = Math.max(1, Math.min(TOTAL_DAYS, expected));
    const done = Object.keys(st.days).length;
    // ожидаемый финиш: день, когда наберётся 60 учебных дней (по плану, дальше — без отдыха)
    let count = 0, endDate = t, guard = 0;
    for (let d = st.startDate; guard < 400; d = Store.addDays(d, 1), guard++) { if (!Store.isRest(d)) count++; if (count >= TOTAL_DAYS) { endDate = d; break; } }
    return { expected, done, diff: done - expected, endDate };
  }

  // ---- тренировки на выбор для плана недели ----
  const TRAININGS = {
    lesson: { label: 'Урок курса', short: 'Урок', icon: '📘', min: '12–18 мин', desc: 'следующий день программы' },
    cards: { label: 'Карточки', short: 'Карточки', icon: '🃏', min: '5–10 мин', desc: 'повторение по графику 1–3–7–21 и новые слова' },
    review: { label: 'Слова курса', short: 'Слова', icon: '🔁', min: '5 мин', desc: 'повторение слов из уроков' },
    mistakes: { label: 'Работа над ошибками', short: 'Ошибки', icon: '🩹', min: '5–10 мин', desc: 'упражнения, где были ошибки' },
    drill: { label: 'Спряжения', short: 'Глаголы', icon: '⚙️', min: '5 мин', desc: '10 форм из пройденных тем' },
    write: { label: 'Мини-письмо', short: 'Письмо', icon: '✍️', min: '5–10 мин', desc: 'тема пройденного урока с образцом' },
    pairs: { label: 'Найди пары', short: 'Пары', icon: '🧩', min: '5 мин', desc: 'пять раундов на словах в изучении' },
    rest: { label: 'День отдыха', short: 'Отдых', icon: '🌴', min: '', desc: 'серия не прервётся, план сдвинется на день' }
  };
  function completedDays() { const st = Store.get(); return Object.keys(st.days).map(Number).filter((d) => !ST_DATA.days[d].review).sort((a, b) => a - b); }
  function startTraining(type) {
    const ctx = { toast, startCustomLesson };
    const st = Store.get();
    if (type === 'lesson') { const nd = nextDay(); if (nd) location.hash = 'lesson/' + nd; else toast('Курс пройден'); return; }
    if (type === 'cards') { Cards.session(ctx, true, true); return; }
    if (type === 'pairs') { Cards.pairsSession(ctx, 'learning', 5); return; }
    if (type === 'review') {
      const due = Store.srsDue(); const ids = due.length ? due.slice(0, 20) : pick(Object.keys(st.srs), 10);
      if (!ids.length) { toast('Слова появятся после первого урока'); return; }
      startCustomLesson('Слова курса', buildSrsSteps(ids).map((s) => due.length ? s : Object.assign(s, { srs: null }))); return;
    }
    if (type === 'mistakes') {
      const keys = shuffle(Object.keys(st.mistakes)).slice(0, 15);
      const steps = keys.map((k) => { const ex = findExercise(k); return ex ? { type: 'ex', ex, key: k, day: st.mistakes[k].day } : null; }).filter(Boolean);
      if (!steps.length) { toast('Ошибок нет: нечего прорешивать'); return; }
      startCustomLesson('Работа над ошибками', steps); return;
    }
    if (type === 'drill') {
      const days = completedDays(); const src = days.length ? days : [1];
      const conjs = src.flatMap((d) => (ST_DATA.days[d].exercises || []).filter((e) => e.t === 'conj'));
      const verbs = [...new Set(conjs.flatMap((e) => e.verbs))]; const tenses = [...new Set(conjs.flatMap((e) => e.tenses))];
      const steps = expand({ t: 'conj', verbs: verbs.length ? verbs : ['ser', 'tener', 'hacer', 'ir'], tenses: tenses.length ? tenses : ['pres'], n: 10 }).map((e) => ({ type: 'ex', ex: e, key: e.key }));
      startCustomLesson('Спряжения', steps); return;
    }
    if (type === 'write') {
      const days = completedDays().filter((d) => ST_DATA.extras[d]); const d = days.length ? days[Math.floor(Math.random() * days.length)] : 1;
      const ex = ST_DATA.extras[d];
      startCustomLesson('Мини-письмо · день ' + d, [{ type: 'ex', ex: { t: 'write', q: ex.q, sample: ex.sample, hint: 'Тема дня ' + d + ': ' + ST_DATA.days[d].title } }]); return;
    }
  }
  const WD = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  function weekStart(iso, offsetWeeks) {
    const d = new Date(iso + 'T00:00:00'); const dow = (d.getDay() + 6) % 7;
    return Store.addDays(iso, -dow + 7 * (offsetWeeks || 0));
  }
  function fmtShort(iso) { const [, m, d] = iso.split('-'); return Number(d) + '.' + m; }
  function weekStrip(start, onPick, selected) {
    const st = Store.get(); const t = Store.today();
    return h('div', { class: 'week' }, Array.from({ length: 7 }, (_, i) => {
      const date = Store.addDays(start, i); const type = Store.getPlan(date) || 'lesson'; const tr = TRAININGS[type];
      const active = (st.activity[date] || 0) > 0;
      const cls = 'wday' + (date === t ? ' today' : '') + (date < t ? ' past' : '') + (type === 'rest' ? ' rest' : '') + (selected === date ? ' sel' : '') + (active ? ' active' : '');
      return h('button', { type: 'button', class: cls, onclick: () => onPick(date) }, h('span', { class: 'wd' }, WD[i] + ' ' + fmtShort(date)), h('span', { class: 'wi' }, tr.icon), h('span', { class: 'wl' }, tr.short), active ? h('span', { class: 'wdone' }, '✓') : null);
    }));
  }

  // ---- роутер ----
  const routes = {};
  function navigate() {
    const hash = location.hash.replace(/^#/, '') || 'home';
    const [name, arg] = hash.split('/');
    document.querySelectorAll('[data-nav]').forEach((a) => a.classList.toggle('active', a.dataset.nav === name || (name === 'lesson' && a.dataset.nav === 'home')));
    if (lesson && name !== 'lesson') { lesson = null; }
    (routes[name] || routes.home)(arg);
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', navigate);

  // ================= Главная =================
  routes.home = function () {
    const st = Store.get();
    const nd = nextDay();
    const lvl = levelInfo();
    const sched = scheduleInfo();
    const due = Store.srsDue().length;
    const mastery = Store.srsMastery();
    const todaySec = st.activity[Store.today()] || 0;
    const goalSec = st.settings.dailyGoalMin * 60;

    const frag = h('div', { class: 'screen' });
    frag.append(h('section', { class: 'hero' },
      h('div', { class: 'hero-row' },
        h('div', { class: 'stat' }, h('b', null, Store.currentStreak()), h('span', null, '🔥 дней подряд')),
        h('div', { class: 'stat' }, h('b', null, st.xp), h('span', null, '⭐ очков')),
        h('div', { class: 'stat' }, h('b', null, mastery.known), h('span', null, 'слов усвоено')),
        h('div', { class: 'stat' }, h('b', null, lvl.done + '/' + TOTAL_DAYS), h('span', null, 'уроков'))
      ),
      h('div', { class: 'level' },
        h('div', { class: 'level-labels' }, ['A2', 'A2+', 'B1', 'B1+', 'B2'].map((l) => h('span', null, l))),
        h('div', { class: 'bar' }, h('div', { class: 'bar-fill', style: 'width:' + lvl.pct + '%' })),
        h('div', { class: 'level-now' }, 'Ориентировочный уровень: ', h('b', null, lvl.label), lvl.done ? ' · средний результат ' + lvl.avg + '%' : '')
      )
    ));

    const todayType = Store.getPlan(Store.today()) || 'lesson';
    frag.append(h('section', { class: 'card' + (todayType === 'rest' ? ' rest-card' : '') },
      h('div', { class: 'card-kicker' }, 'План недели'),
      weekStrip(weekStart(Store.today(), 0), () => { location.hash = 'week'; }),
      todayType === 'rest'
        ? h('p', null, TRAININGS.rest.icon + ' Сегодня день отдыха. Серия не прервётся, а план сдвинется на день. Если всё же хочется, любая тренировка ниже доступна.')
        : todayType !== 'lesson'
          ? h('div', { class: 'row-links' }, h('button', { class: 'btn primary', type: 'button', onclick: () => startTraining(todayType) }, TRAININGS[todayType].icon + ' Сегодня: ' + TRAININGS[todayType].label + ' · ' + TRAININGS[todayType].min), h('a', { class: 'btn ghost', href: '#week' }, 'Изменить план'))
          : h('div', { class: 'row-links' }, h('a', { class: 'btn ghost', href: '#week' }, 'Выбрать тренировки на неделю'))
    ));
    if (nd) {
      const d = ST_DATA.days[nd]; const m = moduleOf(nd);
      frag.append(h('section', { class: 'card next' },
        h('div', { class: 'card-kicker' }, 'Модуль ' + m.id + ' · ' + m.title),
        h('h2', null, 'День ' + nd + ': ' + d.title),
        h('p', { class: 'muted' }, d.review ? 'Повторение и проверка модуля. ' : (d.grammar ? d.grammar.title + '. ' : ''), '≈ ' + (d.review ? '15–20' : '12–18') + ' минут'),
        h('a', { class: 'btn primary big', href: '#lesson/' + nd }, st.days[nd - 1] || nd === 1 ? 'Начать урок' : 'Начать урок')
      ));
    } else {
      frag.append(h('section', { class: 'card next' }, h('h2', null, '¡Enhorabuena! Курс пройден'), h('p', null, 'Все 60 уроков закрыты. Продолжай повторять слова и прорешивать ошибки, чтобы закрепить B2.')));
    }

    const todayRow = h('section', { class: 'card' },
      h('h3', null, 'Сегодня'),
      h('div', { class: 'goal' }, h('div', { class: 'bar' }, h('div', { class: 'bar-fill ok', style: 'width:' + Math.min(100, Math.round((todaySec / goalSec) * 100)) + '%' })), h('span', null, fmtTime(todaySec) + ' из ' + st.settings.dailyGoalMin + ' мин')),
      h('div', { class: 'row-links' },
        h('a', { class: 'btn ghost', href: '#review' }, due ? 'Повторить слова (' + due + ')' : 'Повторить слова'),
        Object.keys(st.mistakes).length ? h('a', { class: 'btn ghost', href: '#mistakes' }, 'Ошибки (' + Object.keys(st.mistakes).length + ')') : null
      )
    );
    frag.append(todayRow);
    const cs = Cards.stats();
    frag.append(h('section', { class: 'card' + (cs.due ? ' warn' : '') },
      h('h3', null, 'Карточки: 3000 слов'),
      h('p', { class: 'muted' }, cs.due ? 'К повторению сегодня: ' + cs.due + '. ' : 'Просроченных нет. ', cs.newLeft && cs.fresh ? 'Новых на сегодня: ' + Math.min(cs.newLeft, cs.fresh) + '. ' : '', 'Выучено: ' + (cs.longterm + cs.known) + ' из ' + cs.total + '.'),
      h('div', { class: 'row-links' }, h('a', { class: 'btn ' + (cs.due || (cs.newLeft && cs.fresh) ? 'primary' : 'ghost'), href: '#cards' }, cs.due ? 'Повторить карточки' : 'Открыть карточки'))
    ));

    if (sched) {
      let txt, cls = '';
      if (sched.diff >= 0) { txt = sched.diff === 0 ? 'Идёшь по плану.' : 'Опережаешь план на ' + plural(sched.diff, 'урок', 'урока', 'уроков') + '.'; cls = 'ok'; }
      else { txt = 'Отставание от плана: ' + plural(-sched.diff, 'урок', 'урока', 'уроков') + '. Можно пройти два урока за день.'; cls = 'warn'; }
      frag.append(h('section', { class: 'card ' + cls }, h('h3', null, 'План на два месяца'), h('p', null, 'Начало: ' + st.startDate + ' · финиш: ' + sched.endDate + '. Расчётный день курса: ' + sched.expected + '.'), h('p', null, txt)));
    } else {
      frag.append(h('section', { class: 'card' }, h('h3', null, 'Как это работает'), h('p', null, '60 уроков по 10–20 минут: один урок в день — и через два месяца ты на B2. Каждый урок: повторение слов, грамматика, новая лексика, 12–16 упражнений. Шестой день каждого модуля — проверка.'), h('p', null, 'Прогресс хранится на этом устройстве. Перенести его на другое можно в разделе «Прогресс».')));
    }
    app.replaceChildren(frag);
  };

  // ================= План =================
  routes.plan = function () {
    const st = Store.get();
    const frag = h('div', { class: 'screen' }, h('h1', null, 'План курса: 10 модулей, 60 дней'));
    for (const m of ST_DATA.modules) {
      const doneCount = m.days.filter((d) => st.days[d]).length;
      frag.append(h('section', { class: 'card module' },
        h('div', { class: 'card-kicker' }, 'Модуль ' + m.id + ' · ' + doneCount + '/' + m.days.length),
        h('h3', null, m.title), h('p', { class: 'muted' }, m.goal),
        h('div', { class: 'days' }, m.days.map((d) => {
          const dd = ST_DATA.days[d]; const done = st.days[d]; const open = unlocked(d);
          const cls = 'day' + (done ? ' done' : '') + (open ? '' : ' locked') + (dd.review ? ' rev' : '') + (d === nextDay() ? ' next' : '');
          const tile = h(open ? 'a' : 'div', { class: cls, href: open ? '#lesson/' + d : null },
            h('span', { class: 'day-n' }, dd.review ? d + ' · тест' : d), h('span', { class: 'day-t' }, dd.title), done ? h('span', { class: 'day-s' }, done.score + '%') : null);
          return tile;
        }))
      ));
    }
    app.replaceChildren(frag);
  };

  // ================= Урок =================
  let lesson = null;

  function buildSrsSteps(ids) {
    const all = Object.values(WORDS);
    return ids.map((id, i) => {
      const w = WORDS[id]; if (!w) return null;
      const dir = i % 2 === 0 ? 'es' : 'ru';
      const sameDay = all.filter((x) => x.day === w.day && x.id !== id);
      const others = all.filter((x) => x.day !== w.day);
      const dis = pick(sameDay, 2).concat(pick(others, 3)).slice(0, 3);
      return { type: 'ex', srs: id, ex: { t: 'card', dir, word: dir === 'es' ? w.es : w.ru, answer: dir === 'es' ? w.ru : w.es, distractors: dis.map((x) => dir === 'es' ? x.ru : x.es) } };
    }).filter(Boolean);
  }

  function buildLesson(day) {
    const d = ST_DATA.days[day];
    const steps = [];
    const cardsDue = Cards.due(50);
    if (cardsDue.length) steps.push({ type: 'section', title: 'Карточки к повторению', text: cardsDue.length + ' слов по графику 1–3–7–21. Это обязательная часть: график не ждёт.' + (Cards.due().length > 50 ? ' Остальные ' + (Cards.due().length - 50) + ' ждут в разделе «Карточки».' : '') }, ...Cards.steps(cardsDue, false));
    const due = Store.srsDue(d.review ? 10 : 6);
    if (due.length) steps.push({ type: 'section', title: 'Повторение слов', text: 'Слова из прошлых уроков, которые пора вспомнить.' }, ...buildSrsSteps(due));
    if (d.grammar) steps.push({ type: 'grammar', g: d.grammar });
    const vocab = wordsOfDay(day);
    if (vocab.length) {
      steps.push({ type: 'vocab', words: vocab });
      const half = Math.ceil(vocab.length / 2);
      steps.push({ type: 'ex', ex: { t: 'match', pairs: vocab.slice(0, half).map((w) => [w.es, w.ru]) }, key: 'd' + day + ':m1' });
      if (vocab.length > half) steps.push({ type: 'ex', ex: { t: 'match', pairs: vocab.slice(half).map((w) => [w.es, w.ru]) }, key: 'd' + day + ':m2' });
    }
    steps.push({ type: 'section', title: d.review ? 'Проверка модуля' : 'Упражнения', text: d.review ? 'Без подсказок: покажи, что усвоил за модуль.' : 'Отвечай на первой попытке — за это идут очки.' });
    (d.exercises || []).forEach((ex, i) => {
      for (const e of expand(ex)) steps.push({ type: 'ex', ex: e, key: e.key || ('d' + day + ':e' + i), day });
    });
    steps.push({ type: 'extras', day, done: {} });
    return steps;
  }

  routes.lesson = function (arg) {
    if (arg === 'custom') { if (lesson && lesson.custom) return renderLessonStep(); location.hash = 'home'; return; }
    const day = Number(arg);
    if (!ST_DATA.days[day]) { location.hash = 'home'; return; }
    if (!unlocked(day)) { toast('Сначала пройди предыдущий урок'); location.hash = 'plan'; return; }
    if (!lesson || lesson.day !== day) {
      lesson = { day, steps: buildLesson(day), i: 0, correct: 0, total: 0, wrong: [], start: Date.now(), custom: false };
    }
    renderLessonStep();
  };

  function startCustomLesson(title, steps, onDone) {
    lesson = { day: null, title, steps, i: 0, correct: 0, total: 0, wrong: [], start: Date.now(), custom: true, onDone };
    location.hash = 'lesson/custom';
  }

  function renderLessonStep() {
    const L = lesson;
    if (!L) return;
    const d = L.day ? ST_DATA.days[L.day] : null;
    const title = d ? 'День ' + L.day + ': ' + d.title : L.title;
    const total = L.steps.length;
    const head = h('div', { class: 'lesson-head' },
      h('a', { class: 'back', href: '#home', onclick: () => { lesson = null; } }, '✕'),
      h('div', { class: 'lesson-title' }, title),
      h('div', { class: 'bar thin' }, h('div', { class: 'bar-fill', style: 'width:' + Math.round((L.i / total) * 100) + '%' }))
    );
    const body = h('div', { class: 'lesson-body' });
    const foot = h('div', { class: 'lesson-foot' });
    app.replaceChildren(h('div', { class: 'screen lesson' }, head, body, foot));

    if (L.keyHandler) { document.removeEventListener('keydown', L.keyHandler); L.keyHandler = null; }
    if (L.i >= total) return renderSummary(body, foot);
    const step = L.steps[L.i];
    if (step.type === 'extras') return renderExtras(body, foot, step);
    const nextBtn = (label) => h('button', { class: 'btn primary big', type: 'button', onclick: () => { L.i++; renderLessonStep(); } }, label || 'Дальше');

    if (step.type === 'section') {
      body.append(h('div', { class: 'card center' }, h('h2', null, step.title), h('p', { class: 'muted' }, step.text)));
      foot.append(nextBtn('Поехали'));
    } else if (step.type === 'grammar') {
      body.append(h('div', { class: 'card grammar' }, h('div', { class: 'card-kicker' }, 'Грамматика'), h('h2', null, step.g.title), h('div', { class: 'gtext', html: step.g.html })));
      body.querySelectorAll('[data-say]').forEach((el) => { const b = speakBtn(el.dataset.say); if (b) el.append(' ', b); });
      foot.append(nextBtn('Понятно, дальше'));
    } else if (step.type === 'vocab') {
      body.append(h('div', { class: 'card' }, h('div', { class: 'card-kicker' }, 'Новые слова'), h('h2', null, plural(step.words.length, 'слово', 'слова', 'слов') + ' на сегодня'),
        h('ul', { class: 'vocab' }, step.words.map((w) => h('li', null, h('div', { class: 'v-es' }, w.es, speakBtn(w.es)), h('div', { class: 'v-ru' }, w.ru), w.ex ? h('div', { class: 'v-ex' }, w.ex, speakBtn(w.ex)) : null)))));
      foot.append(nextBtn('Запомнил, дальше'));
    } else if (step.type === 'ex') {
      const st = Store.get();
      const inst = types[step.ex.t](step.ex, { strict: st.settings.strictAccents, tts: st.settings.tts });
      body.append(inst.el);
      const checkBtn = h('button', { class: 'btn primary big', type: 'button', disabled: '', onclick: doCheck }, 'Проверить');
      foot.append(checkBtn);
      if (inst.autoCheck) checkBtn.hidden = true;
      inst.el.addEventListener('ready', (e) => {
        if (inst.autoCheck) { if (inst.isReady()) doCheck(); }
        else checkBtn.disabled = false;
      });
      inst.el.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey && !checkBtn.disabled && !checkBtn.hidden) { e.preventDefault(); doCheck(); } });
      if (inst.focus) setTimeout(() => inst.focus(), 50);
      // горячие клавиши для карточек: пробел — показать ответ, 1 — не помню, 2 — помню
      L.keyHandler = (e) => {
        if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
        if (e.key === ' ') { const b = body.querySelector('.anki-front .btn:not([hidden])'); if (b) { e.preventDefault(); b.click(); } }
        else if (e.key === '1') { const b = body.querySelector('.rate-again:not(:disabled)'); if (b) b.click(); }
        else if (e.key === '2') { const b = body.querySelector('.rate-good:not(:disabled)'); if (b) b.click(); }
        else if (/^[1-4]$/.test(e.key)) { const opts = body.querySelectorAll('.opt:not(:disabled)'); const o = opts[Number(e.key) - 1]; if (o && !body.querySelector('.anki-rate')) o.click(); }
      };
      document.addEventListener('keydown', L.keyHandler);
      let checked = false;
      function doCheck() {
        if (checked) return; checked = true;
        const r = inst.check();
        if (!step.requeue) { L.total++; if (r.correct) L.correct++; else L.wrong.push(step); }
        if (step.srs && !step.requeue) Store.srsRate(step.srs, r.correct);
        if (step.card && !step.requeue) Cards.rate(step.card, r.rating);
        // слово с ошибкой возвращается в конец текущей сессии, пока не будет отвечено верно
        if (!r.correct && (step.card || step.srs) && step.ex.t !== 'ankiNew') {
          const again = Object.assign({}, step, { requeue: true, ex: Object.assign({}, step.ex, { requeue: true }) });
          // вставляем через три карточки, но не дальше конца текущего блока карточек
          let pos = L.i + 1, n = 0;
          while (pos < L.steps.length && L.steps[pos].type === 'ex' && (L.steps[pos].card || L.steps[pos].srs) && n < 3) { pos++; n++; }
          L.steps.splice(pos, 0, again);
        }
        if (step.key) Store.recordAnswer(step.key, step.day || L.day, r.correct);
        if (L.custom && r.correct && step.key) Store.clearMistake(step.key);
        Store.save();
        const fb = h('div', { class: 'feedback ' + (r.correct ? 'ok' : 'bad') },
          h('b', null, r.correct ? (r.accent ? 'Почти! Проверь ударения: ' : '¡Correcto!') : 'Не совсем.'),
          r.answerText && (!r.correct || r.accent || r.pairsStats) ? h('div', { class: 'fb-ans' }, r.answerText) : null,
          step.ex.e ? h('div', { class: 'fb-exp' }, step.ex.e) : null,
          step.ex.say || (step.ex.t === 'order' || step.ex.t === 'dict' || step.ex.t === 'tr') ? speakBtn(step.ex.say || step.ex.s || (step.ex.a && step.ex.a[0]), '🔊 Прослушать') : null
        );
        foot.replaceChildren();
        if (r.skipFeedback) { L.i++; setTimeout(renderLessonStep, r.correct ? 350 : 120); return; }
        foot.append(fb, nextBtn());
        setTimeout(() => foot.querySelector('.btn').focus(), 30);
      }
    }
  }

  function finishLesson() {
    const L = lesson;
    const secs = Math.min(40 * 60, Math.round((Date.now() - L.start) / 1000));
    const score = L.total ? Math.round((L.correct / L.total) * 100) : 100;
    if (!L.saved) {
      L.saved = true; L.frozen = { score, secs, correct: L.correct, total: L.total };
      if (L.day) {
        Store.completeDay(L.day, score, secs);
        wordsOfDay(L.day).forEach((w) => Store.srsIntroduce(w.id));
        Store.save();
      } else {
        Store.touch(secs);
        if (L.onDone) L.onDone(L);
      }
    }
    return L.frozen;
  }

  // ---- необязательные блоки после урока ----
  const MODULE_TENSES = { 1: ['pres', 'indef', 'imperf'], 2: ['perf', 'plusc'], 3: ['fut', 'cond'], 4: ['subj'], 5: ['subj', 'imp'], 6: ['subjImp', 'cond'], 7: ['indef', 'subj'], 8: ['pres', 'perf'], 9: ['subj', 'cond'], 10: ['subj', 'subjImp', 'indef'] };
  function extraConj(day) {
    const d = ST_DATA.days[day]; const m = moduleOf(day);
    const conjs = (d.exercises || []).filter((e) => e.t === 'conj');
    let verbs = [...new Set(conjs.flatMap((e) => e.verbs))];
    let tenses = [...new Set(conjs.flatMap((e) => e.tenses))];
    if (!verbs.length) verbs = wordsOfDay(day).map((w) => w.es).filter((v) => /^[a-záéíóúñ]+(ar|er|ir)$/.test(v)).slice(0, 4);
    if (!verbs.length) verbs = ['tener', 'hacer', 'poder', 'decir', 'ir'];
    if (!tenses.length) tenses = MODULE_TENSES[m.id] || ['pres'];
    return expand({ t: 'conj', verbs, tenses, n: 5 }).map((e) => ({ type: 'ex', ex: e, key: e.key, day }));
  }
  function mistakesByDay() {
    const st = Store.get(); const by = {};
    for (const k in st.mistakes) { const m = st.mistakes[k]; by[m.day] = (by[m.day] || 0) + m.count; }
    return by;
  }
  function extraInterleave(day) {
    const st = Store.get(); const by = mistakesByDay();
    const days = []; for (let d = 1; d < day; d++) if (st.days[d] && !ST_DATA.days[d].review) days.push(d);
    if (!days.length) for (let d = 1; d < day; d++) if (!ST_DATA.days[d].review) days.push(d);
    if (!days.length) return [];
    // слабые темы встречаются чаще
    const weighted = days.flatMap((d) => Array(1 + Math.min(3, by[d] || 0)).fill(d));
    const out = []; const used = new Set();
    for (let tries = 0; tries < 30 && out.length < 3; tries++) {
      const d = weighted[Math.floor(Math.random() * weighted.length)];
      const exs = ST_DATA.days[d].exercises.map((e, i) => ({ e, i })).filter((x) => x.e.t !== 'conj' && x.e.t !== 'match' && x.e.t !== 'dict');
      const pickd = exs[Math.floor(Math.random() * exs.length)];
      const key = 'd' + d + ':e' + pickd.i; if (used.has(key)) continue; used.add(key);
      out.push({ type: 'ex', ex: Object.assign({}, pickd.e, { hint: (pickd.e.hint ? pickd.e.hint + ' · ' : '') + 'день ' + d + ': ' + ST_DATA.days[d].title }), key, day: d });
    }
    return out;
  }
  function extraShadow(day) {
    const vocab = wordsOfDay(day).filter((w) => w.ex);
    let items = vocab.slice(0, 3).map((w) => ({ s: w.ex, ru: w.es + ' — ' + w.ru }));
    if (!items.length) items = (ST_DATA.days[day].exercises || []).filter((e) => e.t === 'dict').map((e) => ({ s: e.s, ru: e.ru }));
    return items.map((it) => ({ type: 'ex', ex: { t: 'shadow', s: it.s, ru: it.ru } }));
  }
  function extraPairs(day) {
    let words = wordsOfDay(day).map((w) => ({ es: w.es, ru: w.ru }));
    if (words.length < 6) words = Cards.pairsPool('learning');
    return Cards.pairsSteps(words, 1, 6);
  }
  function renderExtras(body, foot, step) {
    const L = lesson; const F = finishLesson();
    const ex = ST_DATA.extras[step.day];
    const blocks = [
      ['conj', 'Спряжения', '5 форм по теме дня, ≈2 мин', () => extraConj(step.day)],
      ['mix', 'Задания из прошлых тем', '3 задания, чаще из слабых тем, ≈3 мин', () => extraInterleave(step.day)],
      ['write', 'Мини-письмо', 'напиши 2–3 предложения и сравни с образцом, ≈4 мин', () => ex ? [{ type: 'ex', ex: { t: 'write', q: ex.q, sample: ex.sample } }] : []],
      ['shadow', 'Произношение', 'повтори вслух 3 фразы' + (Engine.canListen() ? ', с проверкой микрофоном' : '') + ', ≈2 мин', () => extraShadow(step.day)],
      ['pairs', 'Найди пары', 'один раунд на словах дня, ≈1 мин', () => extraPairs(step.day)]
    ];
    body.append(h('div', { class: 'card' },
      h('div', { class: 'card-kicker' }, 'Урок засчитан: ' + F.score + '%'),
      h('h2', null, 'Дополнительно, по желанию'),
      h('p', { class: 'muted' }, 'Эти блоки не обязательны и не меняют результат урока. Каждый занимает пару минут; можно сделать один, все или ни одного.'),
      h('div', { class: 'extras' }, blocks.map(([id, title, desc, build]) => h('button', { type: 'button', class: 'extra' + (step.done[id] ? ' done' : ''), disabled: step.done[id] ? '' : null, onclick: () => {
        const stepsToAdd = build();
        if (!stepsToAdd.length) { toast('Для этого дня блок недоступен'); return; }
        step.done[id] = true;
        L.steps.splice(L.i + 1, 0, ...stepsToAdd, step);
        L.i++; renderLessonStep();
      } }, h('b', null, (step.done[id] ? '✓ ' : '') + title), h('span', null, desc))))
    ));
    foot.append(h('button', { class: 'btn primary big', type: 'button', onclick: () => { L.i = L.steps.length; renderLessonStep(); } }, Object.keys(step.done).length ? 'К итогам урока' : 'Пропустить и перейти к итогам'));
  }

  function renderSummary(body, foot) {
    const L = lesson;
    const F = finishLesson();
    const secs = F.secs; const score = F.score;
    const st = Store.get();
    const nd = nextDay();
    const msg = score >= 90 ? '¡Excelente!' : score >= 70 ? '¡Muy bien!' : score >= 50 ? 'Неплохо, но стоит повторить.' : 'Сложно? Прорешай ошибки и вернись к уроку.';
    body.append(h('div', { class: 'card center summary' },
      h('div', { class: 'score' }, score + '%'), h('h2', null, msg),
      h('div', { class: 'hero-row' },
        h('div', { class: 'stat' }, h('b', null, F.correct + '/' + F.total), h('span', null, 'верно')),
        h('div', { class: 'stat' }, h('b', null, fmtTime(secs)), h('span', null, 'время')),
        h('div', { class: 'stat' }, h('b', null, Store.currentStreak()), h('span', null, '🔥 серия')),
        h('div', { class: 'stat' }, h('b', null, st.xp), h('span', null, '⭐ очков'))),
      L.day && ST_DATA.days[L.day].review ? h('p', { class: 'muted' }, score >= 70 ? 'Модуль закрыт. Уровень растёт.' : 'Рекомендуется вернуться к урокам модуля, где были ошибки.') : null
    ));
    const csum = Cards.stats();
    if (L.day && csum.newLeft && csum.fresh) foot.append(h('button', { class: 'btn ghost big', type: 'button', onclick: () => Cards.session({ toast, startCustomLesson }, false, true) }, 'Выучить ' + Math.min(csum.newLeft, csum.fresh) + ' новых карточек'));
    if (L.wrong.length) foot.append(h('button', { class: 'btn ghost big', type: 'button', onclick: () => startCustomLesson('Работа над ошибками', L.wrong.map((s) => Object.assign({}, s, { srs: null }))) }, 'Прорешать ошибки (' + L.wrong.length + ')'));
    foot.append(h('a', { class: 'btn primary big', href: nd && !L.custom ? '#home' : '#home', onclick: () => { lesson = null; } }, 'На главную'));
  }

  // ================= План недели =================
  let weekOffset = 0, weekSel = null;
  routes.week = function () {
    const t = Store.today();
    const start = weekStart(t, weekOffset);
    if (!weekSel || weekSel < start || weekSel > Store.addDays(start, 6)) weekSel = weekOffset === 0 ? t : start;
    const frag = h('div', { class: 'screen' }, h('h1', null, 'План недели'));
    frag.append(h('section', { class: 'card' },
      h('div', { class: 'week-nav' },
        h('button', { class: 'btn ghost', type: 'button', onclick: () => { weekOffset--; weekSel = null; routes.week(); } }, '‹ пред.'),
        h('b', null, fmtShort(start) + ' – ' + fmtShort(Store.addDays(start, 6)) + (weekOffset === 0 ? ' · эта неделя' : weekOffset === 1 ? ' · следующая' : '')),
        h('button', { class: 'btn ghost', type: 'button', onclick: () => { weekOffset++; weekSel = null; routes.week(); } }, 'след. ›')),
      weekStrip(start, (date) => { weekSel = date; routes.week(); }, weekSel),
      h('p', { class: 'muted small' }, 'Нажми на день и выбери тренировку или отдых. Без выбора день считается уроком курса. Дни отдыха не прерывают серию и сдвигают расчёт двухмесячного плана.')
    ));
    const cur = Store.getPlan(weekSel) || 'lesson';
    const dowIdx = (new Date(weekSel + 'T00:00:00').getDay() + 6) % 7;
    frag.append(h('section', { class: 'card' },
      h('h3', null, WD[dowIdx] + ' ' + fmtShort(weekSel) + (weekSel === t ? ' · сегодня' : '') + ': что делать?'),
      h('div', { class: 'extras' }, Object.keys(TRAININGS).map((type) => { const tr = TRAININGS[type]; return h('button', { type: 'button', class: 'extra' + (cur === type ? ' chosen' : ''), onclick: () => { Store.setPlan(weekSel, type === 'lesson' ? null : type); routes.week(); } },
        h('b', null, tr.icon + ' ' + tr.label + (tr.min ? ' · ' + tr.min : '')), h('span', null, tr.desc)); })),
      weekSel === t && cur !== 'rest' ? h('div', { class: 'row-links' }, h('button', { class: 'btn primary', type: 'button', onclick: () => startTraining(cur) }, 'Начать: ' + TRAININGS[cur].label)) : null
    ));
    const applyPreset = (fn) => { for (let i = 0; i < 7; i++) { const d = Store.addDays(start, i); const type = fn(i); Store.setPlan(d, type === 'lesson' ? null : type); } routes.week(); };
    frag.append(h('section', { class: 'card' }, h('h3', null, 'Быстрые шаблоны на эту неделю'),
      h('div', { class: 'row-links' },
        h('button', { class: 'btn', type: 'button', onclick: () => applyPreset(() => 'lesson') }, 'Каждый день урок'),
        h('button', { class: 'btn', type: 'button', onclick: () => applyPreset((i) => (i >= 5 ? 'rest' : 'lesson')) }, 'Будни урок, выходные отдых'),
        h('button', { class: 'btn', type: 'button', onclick: () => applyPreset((i) => (i === 6 ? 'rest' : i % 2 ? 'cards' : 'lesson')) }, 'Урок, карточки, урок… и отдых в вс'),
        h('button', { class: 'btn', type: 'button', onclick: () => applyPreset((i) => (i === 5 ? 'mistakes' : i === 6 ? 'rest' : 'lesson')) }, 'Пн–Пт урок, сб ошибки, вс отдых'))));
    app.replaceChildren(frag);
  };

  // ================= Карточки =================
  routes.cards = function () {
    Cards.screen(app, { toast, startCustomLesson, rerender: () => routes.cards() });
  };

  // ================= Повторение слов =================
  routes.review = function () {
    const st = Store.get();
    const due = Store.srsDue();
    const mastery = Store.srsMastery();
    const frag = h('div', { class: 'screen' }, h('h1', null, 'Слова'));
    frag.append(h('section', { class: 'card' },
      h('div', { class: 'hero-row' },
        h('div', { class: 'stat' }, h('b', null, due.length), h('span', null, 'к повторению')),
        h('div', { class: 'stat' }, h('b', null, mastery.known), h('span', null, 'усвоено')),
        h('div', { class: 'stat' }, h('b', null, mastery.learning), h('span', null, 'учатся')),
        h('div', { class: 'stat' }, h('b', null, mastery.total), h('span', null, 'всего'))),
      due.length ? h('button', { class: 'btn primary big', type: 'button', onclick: () => startCustomLesson('Повторение слов', [{ type: 'section', title: 'Повторение', text: plural(Math.min(20, due.length), 'слово', 'слова', 'слов') + ' по методу интервальных повторений.' }].concat(buildSrsSteps(due.slice(0, 20)))) }, 'Повторить ' + Math.min(20, due.length) + ' слов')
        : h('p', { class: 'muted' }, mastery.total ? 'На сегодня всё повторено. Новые слова появятся после следующего урока.' : 'Слова появятся после первого урока.'),
      mastery.total ? h('button', { class: 'btn ghost', type: 'button', onclick: () => {
        const ids = pick(Object.keys(st.srs), 10);
        startCustomLesson('Случайные слова', buildSrsSteps(ids).map((s) => Object.assign(s, { srs: null })));
      } }, 'Случайные 10 слов без учёта') : null
    ));
    // словарь
    const search = h('input', { class: 'inp wide', type: 'search', placeholder: 'Поиск по словарю…' });
    const list = h('div', { class: 'dict' });
    function renderList() {
      const q = Engine.norm(search.value);
      const learned = Object.values(WORDS).filter((w) => st.srs[w.id] || st.settings.unlockAll);
      const items = (q ? Object.values(WORDS) : learned).filter((w) => !q || Engine.norm(w.es).includes(q) || Engine.norm(w.ru).includes(q));
      list.replaceChildren(...items.slice(0, 200).map((w) => {
        const s = st.srs[w.id];
        return h('div', { class: 'dict-item' + (s ? (s.n >= 3 ? ' known' : '') : ' new') }, h('div', null, h('b', null, w.es), speakBtn(w.es), h('span', { class: 'muted' }, ' — ' + w.ru)), h('div', { class: 'dict-meta' }, 'день ' + w.day + (s ? ' · повторов: ' + s.seen + ' · след.: ' + s.due : ' · ещё не изучено')));
      }));
      if (!items.length) list.append(h('p', { class: 'muted' }, 'Ничего не найдено.'));
    }
    search.addEventListener('input', renderList); renderList();
    frag.append(h('section', { class: 'card' }, h('h3', null, 'Словарь курса'), search, list));
    app.replaceChildren(frag);
  };

  // ================= Ошибки =================
  function findExercise(key) {
    if (key.startsWith('conj:')) {
      const [, v, t, p] = key.split(':');
      const forms = Conj.conjugate(v, t); const pi = Number(p);
      return { t: 'fill', q: (t === 'imp' || t === 'impNeg' ? '(' + Conj.PRONOUNS[pi] + ') ' : Conj.PRONOUNS[pi] + ' ') + '___', hint: v + ' — ' + Conj.TENSE_NAMES[t], a: [forms[pi]] };
    }
    const m = key.match(/^d(\d+):(e(\d+)|m[12])$/);
    if (!m) return null;
    const d = ST_DATA.days[Number(m[1])]; if (!d) return null;
    if (m[3] !== undefined) { const ex = d.exercises[Number(m[3])]; return ex && ex.t !== 'conj' ? ex : null; }
    const vocab = wordsOfDay(Number(m[1])); const half = Math.ceil(vocab.length / 2);
    const part = m[2] === 'm1' ? vocab.slice(0, half) : vocab.slice(half);
    return { t: 'match', pairs: part.map((w) => [w.es, w.ru]) };
  }
  routes.mistakes = function () {
    const st = Store.get();
    const keys = Object.keys(st.mistakes).sort((a, b) => st.mistakes[b].count - st.mistakes[a].count);
    const frag = h('div', { class: 'screen' }, h('h1', null, 'Работа над ошибками'));
    if (!keys.length) { frag.append(h('p', { class: 'muted' }, 'Ошибок нет. Так держать.')); app.replaceChildren(frag); return; }
    const steps = keys.slice(0, 15).map((k) => { const ex = findExercise(k); return ex ? { type: 'ex', ex, key: k, day: st.mistakes[k].day } : null; }).filter(Boolean);
    frag.append(h('section', { class: 'card' },
      h('p', null, plural(keys.length, 'упражнение', 'упражнения', 'упражнений') + ' с ошибками. Правильный ответ убирает упражнение из списка.'),
      h('button', { class: 'btn primary big', type: 'button', onclick: () => startCustomLesson('Работа над ошибками', shuffle(steps)) }, 'Прорешать ' + steps.length),
      h('ul', { class: 'mist' }, keys.slice(0, 30).map((k) => { const ex = findExercise(k); const m = st.mistakes[k]; return h('li', null, h('span', { class: 'muted' }, 'день ' + m.day + ' · ×' + m.count + ' · '), ex ? (ex.q || ex.s || (ex.hint) || ex.t) : k); }))
    ));
    app.replaceChildren(frag);
  };

  // ================= Прогресс и настройки =================
  routes.settings = function () {
    const st = Store.get();
    const lvl = levelInfo();
    const frag = h('div', { class: 'screen' }, h('h1', null, 'Прогресс'));
    const totalSec = Object.values(st.activity).reduce((a, b) => a + b, 0);
    frag.append(h('section', { class: 'card' }, h('h3', null, 'Статистика'),
      h('div', { class: 'hero-row' },
        h('div', { class: 'stat' }, h('b', null, lvl.done), h('span', null, 'уроков')),
        h('div', { class: 'stat' }, h('b', null, lvl.avg + '%'), h('span', null, 'средний балл')),
        h('div', { class: 'stat' }, h('b', null, fmtTime(totalSec)), h('span', null, 'занятий')),
        h('div', { class: 'stat' }, h('b', null, st.bestStreak), h('span', null, 'лучшая серия'))),
      h('p', { class: 'muted' }, 'Ответов: ' + st.stats.answered + ', верных: ' + st.stats.correct + (st.stats.answered ? ' (' + Math.round((st.stats.correct / st.stats.answered) * 100) + '%)' : '') + '. Начало курса: ' + (st.startDate || 'ещё не начат') + '.'),
      heat(st)
    ));

    // слабые темы
    const by = mistakesByDay();
    const weak = Object.keys(by).map((d) => ({ d: Number(d), n: by[d] })).filter((x) => ST_DATA.days[x.d]).sort((a, b) => b.n - a.n).slice(0, 5);
    if (weak.length) frag.append(h('section', { class: 'card' }, h('h3', null, 'Слабые темы'),
      h('p', { class: 'muted small' }, 'Дни, где больше всего ошибок. Прорешай упражнения с ошибками из этого дня или пройди урок заново из плана.'),
      h('ul', { class: 'weak' }, weak.map((x) => h('li', null, h('span', null, 'День ' + x.d + ': ' + ST_DATA.days[x.d].title, h('span', { class: 'muted' }, ' · ' + plural(x.n, 'ошибка', 'ошибки', 'ошибок'))),
        h('button', { class: 'btn', type: 'button', onclick: () => {
          const keys = Object.keys(st.mistakes).filter((k) => st.mistakes[k].day === x.d);
          const steps = keys.map((k) => { const ex = findExercise(k); return ex ? { type: 'ex', ex, key: k, day: x.d } : null; }).filter(Boolean);
          if (!steps.length) { toast('Нет упражнений'); return; }
          startCustomLesson('День ' + x.d + ': работа над ошибками', shuffle(steps));
        } }, 'Прорешать'))))));

    // экспорт / импорт
    const codeArea = h('textarea', { class: 'inp wide mono', rows: '3', placeholder: 'Сюда можно вставить код прогресса с другого устройства' });
    const modeSel = h('select', { class: 'inp' }, h('option', { value: 'merge' }, 'Объединить с текущим прогрессом'), h('option', { value: 'replace' }, 'Заменить текущий прогресс'));
    const fileInp = h('input', { type: 'file', accept: '.json,application/json,text/plain', hidden: '' });
    function doImport(text) {
      try {
        const data = Store.parseImport(text);
        const n = Object.keys(data.days).length, w = Object.keys(data.srs).length;
        if (!confirm('В файле: ' + plural(n, 'урок', 'урока', 'уроков') + ', ' + plural(w, 'слово', 'слова', 'слов') + ', ' + data.xp + ' очков. ' + (modeSel.value === 'replace' ? 'Заменить текущий прогресс?' : 'Объединить с текущим?'))) return;
        Store.applyImport(data, modeSel.value);
        toast('Прогресс импортирован'); routes.settings();
      } catch (e) { alert('Не удалось импортировать: ' + e.message); }
    }
    fileInp.addEventListener('change', () => { const f = fileInp.files[0]; if (!f) return; f.text().then(doImport); fileInp.value = ''; });
    frag.append(h('section', { class: 'card' }, h('h3', null, 'Сохранить и перенести прогресс'),
      h('p', { class: 'muted' }, 'Прогресс хранится в браузере этого устройства. Чтобы продолжить на другом устройстве, сохрани файл или скопируй код и импортируй там.'),
      h('div', { class: 'row-links' },
        h('button', { class: 'btn primary', type: 'button', onclick: () => {
          const blob = new Blob([Store.exportJSON()], { type: 'application/json' });
          const a = h('a', { href: URL.createObjectURL(blob), download: 'spanish-trainer-' + Store.today() + '.json' }); document.body.append(a); a.click(); a.remove();
        } }, '⬇ Скачать файл'),
        h('button', { class: 'btn', type: 'button', onclick: async () => {
          const code = Store.exportCode();
          try { await navigator.clipboard.writeText(code); toast('Код скопирован в буфер обмена'); }
          catch (e) { codeArea.value = code; codeArea.select(); toast('Скопируй код из поля ниже'); }
        } }, '📋 Скопировать код'),
        h('button', { class: 'btn', type: 'button', onclick: () => fileInp.click() }, '⬆ Импорт из файла'), fileInp),
      h('div', { class: 'import' }, modeSel, codeArea, h('button', { class: 'btn', type: 'button', onclick: () => { if (codeArea.value.trim()) doImport(codeArea.value); else toast('Вставь код или выбери файл'); } }, 'Импортировать код'))
    ));

    // настройки
    const set = (k, v) => { st.settings[k] = v; Store.save(); };
    const chk = (label, k, desc) => h('label', { class: 'switch' }, h('input', { type: 'checkbox', checked: st.settings[k] ? '' : null, onchange: (e) => set(k, e.target.checked) }), h('span', null, label, desc ? h('small', null, desc) : null));
    frag.append(h('section', { class: 'card' }, h('h3', null, 'Настройки'),
      chk('Озвучка слов и диктанты', 'tts', canSpeak() ? 'Использует голоса системы; на многих устройствах работают оффлайн.' : 'В этом браузере озвучка недоступна: диктанты заменяются переводом.'),
      chk('Строгая проверка ударений', 'strictAccents', 'Без этой настройки «esta» вместо «está» засчитывается с предупреждением.'),
      chk('Открыть все уроки', 'unlockAll', 'Можно перескакивать вперёд. По умолчанию уроки открываются по порядку.'),
      h('label', { class: 'switch' }, h('span', null, 'Цель в день, минут'), h('input', { class: 'inp short', type: 'number', min: '5', max: '60', value: st.settings.dailyGoalMin, onchange: (e) => set('dailyGoalMin', Math.max(5, Math.min(60, Number(e.target.value) || 15))) })),
      h('div', { class: 'row-links' }, h('button', { class: 'btn danger', type: 'button', onclick: () => { if (confirm('Удалить весь прогресс на этом устройстве? Сначала лучше скачать файл.')) { Store.reset(); toast('Прогресс сброшен'); routes.settings(); } } }, 'Сбросить прогресс'))
    ));
    frag.append(h('p', { class: 'muted small' }, 'Приложение работает без интернета: после первого открытия все уроки сохранены в браузере. На телефоне выбери «Добавить на главный экран».'));
    app.replaceChildren(frag);
  };

  function heat(st) {
    const days = []; const t = Store.today();
    for (let i = 55; i >= 0; i--) days.push(Store.addDays(t, -i));
    const goal = st.settings.dailyGoalMin * 60;
    return h('div', { class: 'heat', title: 'Активность за 8 недель' }, days.map((d) => { const s = st.activity[d] || 0; const lvl = s === 0 ? 0 : s < goal / 2 ? 1 : s < goal ? 2 : 3; return h('span', { class: 'h' + lvl, title: d + ': ' + fmtTime(s) }); }));
  }

  // ---- оффлайн-индикатор, service worker ----
  function updateOnline() { document.getElementById('offline-badge').hidden = navigator.onLine; }
  window.addEventListener('online', updateOnline); window.addEventListener('offline', updateOnline); updateOnline();
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch((e) => console.warn('sw', e));
  }

  navigate();
})();
