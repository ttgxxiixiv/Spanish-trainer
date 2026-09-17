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
    const elapsed = Store.daysBetween(st.startDate, Store.today());
    const expected = Math.min(TOTAL_DAYS, elapsed + 1);
    const done = Object.keys(st.days).length;
    return { expected, done, diff: done - expected, endDate: Store.addDays(st.startDate, TOTAL_DAYS - 1) };
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

    if (L.i >= total) return renderSummary(body, foot);
    const step = L.steps[L.i];
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
      let checked = false;
      function doCheck() {
        if (checked) return; checked = true;
        const r = inst.check();
        L.total++;
        if (r.correct) L.correct++; else L.wrong.push(step);
        if (step.srs) Store.srsRate(step.srs, r.correct);
        if (step.key) Store.recordAnswer(step.key, step.day || L.day, r.correct);
        if (L.custom && r.correct && step.key) Store.clearMistake(step.key);
        Store.save();
        const fb = h('div', { class: 'feedback ' + (r.correct ? 'ok' : 'bad') },
          h('b', null, r.correct ? (r.accent ? 'Почти! Проверь ударения: ' : '¡Correcto!') : 'Не совсем.'),
          r.answerText && (!r.correct || r.accent) ? h('div', { class: 'fb-ans' }, r.answerText) : null,
          step.ex.e ? h('div', { class: 'fb-exp' }, step.ex.e) : null,
          step.ex.say || (step.ex.t === 'order' || step.ex.t === 'dict' || step.ex.t === 'tr') ? speakBtn(step.ex.say || step.ex.s || (step.ex.a && step.ex.a[0]), '🔊 Прослушать') : null
        );
        foot.replaceChildren();
        if (r.skipFeedback && r.correct) { L.i++; setTimeout(renderLessonStep, 350); return; }
        foot.append(fb, nextBtn());
        setTimeout(() => foot.querySelector('.btn').focus(), 30);
      }
    }
  }

  function renderSummary(body, foot) {
    const L = lesson;
    const secs = Math.min(40 * 60, Math.round((Date.now() - L.start) / 1000));
    const score = L.total ? Math.round((L.correct / L.total) * 100) : 100;
    if (!L.saved) {
      L.saved = true;
      if (L.day) {
        Store.completeDay(L.day, score, secs);
        wordsOfDay(L.day).forEach((w) => Store.srsIntroduce(w.id));
        Store.save();
      } else {
        Store.touch(secs);
        if (L.onDone) L.onDone(L);
      }
    }
    const st = Store.get();
    const nd = nextDay();
    const msg = score >= 90 ? '¡Excelente!' : score >= 70 ? '¡Muy bien!' : score >= 50 ? 'Неплохо, но стоит повторить.' : 'Сложно? Прорешай ошибки и вернись к уроку.';
    body.append(h('div', { class: 'card center summary' },
      h('div', { class: 'score' }, score + '%'), h('h2', null, msg),
      h('div', { class: 'hero-row' },
        h('div', { class: 'stat' }, h('b', null, L.correct + '/' + L.total), h('span', null, 'верно')),
        h('div', { class: 'stat' }, h('b', null, fmtTime(secs)), h('span', null, 'время')),
        h('div', { class: 'stat' }, h('b', null, Store.currentStreak()), h('span', null, '🔥 серия')),
        h('div', { class: 'stat' }, h('b', null, st.xp), h('span', null, '⭐ очков'))),
      L.day && ST_DATA.days[L.day].review ? h('p', { class: 'muted' }, score >= 70 ? 'Модуль закрыт. Уровень растёт.' : 'Рекомендуется вернуться к урокам модуля, где были ошибки.') : null
    ));
    if (L.wrong.length) foot.append(h('button', { class: 'btn ghost big', type: 'button', onclick: () => startCustomLesson('Работа над ошибками', L.wrong.map((s) => Object.assign({}, s, { srs: null }))) }, 'Прорешать ошибки (' + L.wrong.length + ')'));
    foot.append(h('a', { class: 'btn primary big', href: nd && !L.custom ? '#home' : '#home', onclick: () => { lesson = null; } }, 'На главную'));
  }

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
