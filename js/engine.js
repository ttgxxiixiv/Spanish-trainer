/* Движок упражнений: рендер, проверка, обратная связь. */
(function () {
  const $ = (sel, root) => (root || document).querySelector(sel);
  function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') el.className = attrs[k];
      else if (k === 'html') el.innerHTML = attrs[k];
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== null && attrs[k] !== undefined) el.setAttribute(k, attrs[k]);
    }
    for (const c of children.flat()) if (c !== null && c !== undefined) el.append(c.nodeType ? c : document.createTextNode(String(c)));
    return el;
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function pick(arr, n) { return shuffle(arr).slice(0, n); }

  // ---- нормализация ответов ----
  function norm(s) {
    return String(s || '').toLowerCase().replace(/[¿¡?!.,;:"«»()]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function stripAccents(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ñ/g, 'n~'); }
  // Возвращает 'ok' | 'accent' | 'no'
  function compare(user, accepted, strict) {
    const u = norm(user);
    if (!u) return 'no';
    for (const a of accepted) if (u === norm(a)) return 'ok';
    if (!strict) for (const a of accepted) if (stripAccents(u) === stripAccents(norm(a))) return 'accent';
    return 'no';
  }

  // ---- озвучка ----
  let voice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return null;
    const vs = speechSynthesis.getVoices();
    return vs.find((v) => /^es[-_]ES/i.test(v.lang)) || vs.find((v) => /^es/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) {
    voice = pickVoice();
    speechSynthesis.addEventListener('voiceschanged', () => { voice = pickVoice(); });
  }
  function canSpeak() { return 'speechSynthesis' in window; }
  function speak(text, rate) {
    if (!canSpeak()) return false;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'es-ES'; if (voice) u.voice = voice; u.rate = rate || 0.9;
      speechSynthesis.speak(u);
      return true;
    } catch (e) { return false; }
  }
  function speakBtn(text, label) {
    if (!canSpeak()) return null;
    return h('button', { class: 'btn-speak', type: 'button', title: 'Прослушать', onclick: (e) => { e.preventDefault(); speak(text); } }, label || '🔊');
  }

  /* Каждое упражнение: render(ex, ctx) → { el, check(): {correct, accent, answerText} , focus() }
     ctx.strict — строгие ударения; ctx.vocab — словарь для генерации дистракторов. */
  const types = {};

  types.mc = function (ex) {
    const options = ex.keep ? ex.o : shuffle(ex.o.map((o, i) => ({ o, i })));
    const list = ex.keep ? ex.o.map((o, i) => ({ o, i })) : options;
    let chosen = null;
    const el = h('div', { class: 'ex' },
      h('div', { class: 'ex-q' }, ex.q, ex.say ? speakBtn(ex.say) : null),
      ex.hint ? h('div', { class: 'ex-hint' }, ex.hint) : null,
      h('div', { class: 'options' }, list.map((it) => h('button', { class: 'opt', type: 'button', 'data-i': it.i, onclick: (e) => {
        el.querySelectorAll('.opt').forEach((b) => b.classList.remove('sel'));
        e.currentTarget.classList.add('sel'); chosen = it.i;
        el.dispatchEvent(new CustomEvent('ready', { bubbles: true }));
      } }, it.o)))
    );
    return {
      el,
      check() {
        const correct = chosen === ex.a;
        el.querySelectorAll('.opt').forEach((b) => {
          const i = Number(b.dataset.i);
          if (i === ex.a) b.classList.add('right'); else if (i === chosen) b.classList.add('wrong');
          b.disabled = true;
        });
        return { correct, answerText: ex.o[ex.a] };
      }
    };
  };

  types.fill = function (ex, ctx) {
    const parts = ex.q.split('___');
    const multi = Array.isArray(ex.a[0]);
    const answers = multi ? ex.a : [ex.a];
    const inputs = [];
    const q = h('div', { class: 'ex-q fill' });
    parts.forEach((p, i) => {
      q.append(document.createTextNode(p));
      if (i < parts.length - 1) {
        const inp = h('input', { class: 'inp', type: 'text', autocapitalize: 'off', autocomplete: 'off', spellcheck: 'false', size: Math.max(6, (answers[i] && answers[i][0] || '').length + 2) });
        inp.addEventListener('input', () => el.dispatchEvent(new CustomEvent('ready', { bubbles: true })));
        inputs.push(inp); q.append(inp);
      }
    });
    const el = h('div', { class: 'ex' }, q, ex.hint ? h('div', { class: 'ex-hint' }, ex.hint) : null, accentBar(inputs));
    return {
      el,
      focus() { inputs[0].focus(); },
      check() {
        let correct = true, accent = false;
        inputs.forEach((inp, i) => {
          const r = compare(inp.value, answers[i], ctx.strict);
          inp.disabled = true;
          if (r === 'no') { correct = false; inp.classList.add('wrong'); }
          else { inp.classList.add('right'); if (r === 'accent') accent = true; }
        });
        return { correct, accent, answerText: answersJoined(ex.q, answers) };
      }
    };
  };
  function answersJoined(q, answers) {
    let i = 0;
    return q.replace(/___/g, () => '[' + (answers[i++] || [''])[0] + ']');
  }
  function accentBar(inputs) {
    const chars = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'];
    let last = inputs[0];
    inputs.forEach((i) => i.addEventListener('focus', () => { last = i; }));
    return h('div', { class: 'accents' }, chars.map((c) => h('button', { type: 'button', class: 'acc', tabindex: '-1', onmousedown: (e) => e.preventDefault(), onclick: () => {
      if (last.disabled) return;
      const s = last.selectionStart, e2 = last.selectionEnd;
      last.value = last.value.slice(0, s) + c + last.value.slice(e2);
      last.selectionStart = last.selectionEnd = s + 1; last.focus();
      last.dispatchEvent(new Event('input', { bubbles: true }));
    } }, c)));
  }

  types.tr = function (ex, ctx) {
    const inp = h('textarea', { class: 'inp wide', rows: '2', autocapitalize: 'off', spellcheck: 'false' });
    inp.addEventListener('input', () => el.dispatchEvent(new CustomEvent('ready', { bubbles: true })));
    const el = h('div', { class: 'ex' },
      h('div', { class: 'ex-label' }, 'Переведи на испанский'),
      h('div', { class: 'ex-q' }, ex.q),
      ex.hint ? h('div', { class: 'ex-hint' }, ex.hint) : null,
      inp, accentBar([inp]));
    return {
      el, focus() { inp.focus(); },
      check() {
        const r = compare(inp.value, ex.a, ctx.strict);
        inp.disabled = true; inp.classList.add(r === 'no' ? 'wrong' : 'right');
        return { correct: r !== 'no', accent: r === 'accent', answerText: ex.a[0] };
      }
    };
  };

  types.order = function (ex) {
    const words = ex.s.split(' ');
    let pool = shuffle(words.map((w, i) => ({ w, i })));
    if (pool.map((x) => x.w).join(' ') === ex.s && words.length > 2) pool = pool.reverse();
    const built = [];
    const poolEl = h('div', { class: 'tiles pool' });
    const builtEl = h('div', { class: 'tiles built' });
    function render() {
      poolEl.replaceChildren(...pool.map((x) => h('button', { type: 'button', class: 'tile', onclick: () => { pool = pool.filter((y) => y !== x); built.push(x); render(); } }, x.w)));
      builtEl.replaceChildren(...built.map((x) => h('button', { type: 'button', class: 'tile in', onclick: () => { built.splice(built.indexOf(x), 1); pool.push(x); render(); } }, x.w)));
      if (!built.length) builtEl.append(h('span', { class: 'tiles-empty' }, 'нажимай на слова по порядку'));
      el.dispatchEvent(new CustomEvent('ready', { bubbles: true }));
    }
    const el = h('div', { class: 'ex' },
      h('div', { class: 'ex-label' }, 'Собери предложение'),
      ex.q ? h('div', { class: 'ex-q' }, ex.q) : null,
      builtEl, poolEl);
    render();
    return {
      el,
      check() {
        const got = built.map((x) => x.w).join(' ');
        const correct = got === ex.s || (ex.alt || []).includes(got);
        builtEl.classList.add(correct ? 'right' : 'wrong');
        el.querySelectorAll('.tile').forEach((t) => (t.disabled = true));
        return { correct, answerText: ex.s };
      }
    };
  };

  types.match = function (ex) {
    // pairs: [[es, ru], ...]; слева — испанский, справа — перевод
    const left = shuffle(ex.pairs.map((p, i) => ({ t: p[0], i })));
    const right = shuffle(ex.pairs.map((p, i) => ({ t: p[1], i })));
    let selL = null, selR = null; const done = new Set(); let errors = 0;
    const el = h('div', { class: 'ex' }, h('div', { class: 'ex-label' }, 'Соедини пары'), h('div', { class: 'match' },
      h('div', { class: 'col' }, left.map((x) => h('button', { type: 'button', class: 'mt', 'data-i': x.i, 'data-side': 'l', onclick: (e) => choose(e.currentTarget) }, x.t))),
      h('div', { class: 'col' }, right.map((x) => h('button', { type: 'button', class: 'mt', 'data-i': x.i, 'data-side': 'r', onclick: (e) => choose(e.currentTarget) }, x.t)))
    ));
    function choose(btn) {
      const side = btn.dataset.side;
      el.querySelectorAll('.mt[data-side="' + side + '"]').forEach((b) => b.classList.remove('sel'));
      btn.classList.add('sel');
      if (side === 'l') selL = btn; else selR = btn;
      if (selL && selR) {
        const ok = selL.dataset.i === selR.dataset.i;
        const a = selL, b = selR; selL = selR = null;
        if (ok) { done.add(a.dataset.i); [a, b].forEach((x) => { x.classList.remove('sel'); x.classList.add('done'); x.disabled = true; }); }
        else { errors++; [a, b].forEach((x) => { x.classList.remove('sel'); x.classList.add('shake'); setTimeout(() => x.classList.remove('shake'), 400); }); }
        if (done.size === ex.pairs.length) el.dispatchEvent(new CustomEvent('ready', { bubbles: true, detail: { auto: true } }));
      }
    }
    return { el, check() { return { correct: errors <= 1, answerText: errors > 1 ? 'Ошибок: ' + errors : '' , skipFeedback: errors === 0 }; }, autoCheck: true, isReady() { return done.size === ex.pairs.length; } };
  };

  // Диктант: слушаем и печатаем. Если озвучка недоступна — показываем перевод и просим написать испанское предложение.
  types.dict = function (ex, ctx) {
    const inp = h('textarea', { class: 'inp wide', rows: '2', autocapitalize: 'off', spellcheck: 'false' });
    inp.addEventListener('input', () => el.dispatchEvent(new CustomEvent('ready', { bubbles: true })));
    const tts = canSpeak() && ctx.tts;
    const el = h('div', { class: 'ex' },
      h('div', { class: 'ex-label' }, tts ? 'Диктант: прослушай и запиши' : 'Переведи на испанский'),
      tts ? h('div', { class: 'dict-controls' }, h('button', { type: 'button', class: 'btn', onclick: () => speak(ex.s, 0.85) }, '🔊 Прослушать'), h('button', { type: 'button', class: 'btn ghost', onclick: () => speak(ex.s, 0.6) }, '🐢 Медленно'))
        : h('div', { class: 'ex-q' }, ex.ru),
      inp, accentBar([inp]));
    if (tts) setTimeout(() => speak(ex.s, 0.85), 300);
    return {
      el, focus() { inp.focus(); },
      check() {
        const r = compare(inp.value, [ex.s].concat(ex.alt || []), ctx.strict);
        inp.disabled = true; inp.classList.add(r === 'no' ? 'wrong' : 'right');
        return { correct: r !== 'no', accent: r === 'accent', answerText: ex.s + (ex.ru ? ' — ' + ex.ru : '') };
      }
    };
  };

  // Карточка слова: показать слово, выбрать перевод из 4 вариантов
  types.card = function (ex) {
    // ex: { word, answer, distractors[], dir: 'es' | 'ru' }
    const opts = shuffle([ex.answer].concat(ex.distractors));
    let chosen = null;
    const el = h('div', { class: 'ex' },
      h('div', { class: 'ex-label' }, ex.dir === 'es' ? 'Что это значит?' : 'Как это по-испански?'),
      h('div', { class: 'ex-q big' }, ex.word, ex.dir === 'es' ? speakBtn(ex.word) : null),
      h('div', { class: 'options' }, opts.map((o) => h('button', { type: 'button', class: 'opt', onclick: (e) => {
        el.querySelectorAll('.opt').forEach((b) => b.classList.remove('sel'));
        e.currentTarget.classList.add('sel'); chosen = o; el.dispatchEvent(new CustomEvent('ready', { bubbles: true, detail: { auto: true } }));
      } }, o))));
    return {
      el, autoCheck: true, isReady() { return chosen !== null; },
      check() {
        const correct = chosen === ex.answer;
        el.querySelectorAll('.opt').forEach((b) => { if (b.textContent === ex.answer) b.classList.add('right'); else if (b.textContent === chosen) b.classList.add('wrong'); b.disabled = true; });
        return { correct, answerText: ex.answer, skipFeedback: correct };
      }
    };
  };

  // Раскрыть сгенерированные упражнения (conj) в конкретные fill-задания
  function expand(ex, rng) {
    if (ex.t !== 'conj') return [ex];
    const out = [];
    const combos = [];
    for (const v of ex.verbs) for (const t of ex.tenses) for (let p = 0; p < 6; p++) {
      if (ex.persons && !ex.persons.includes(p)) continue;
      if ((t === 'imp' || t === 'impNeg') && p === 0) continue;
      if (p === 4 && ex.noVosotros !== false) continue; // vosotros редко нужен: по умолчанию пропускаем
      combos.push({ v, t, p });
    }
    for (const c of pick(combos, ex.n || 4)) {
      const forms = Conj.conjugate(c.v, c.t);
      const form = forms[c.p];
      const pron = Conj.PRONOUNS[c.p];
      const label = Conj.TENSE_NAMES[c.t];
      out.push({ t: 'fill', q: (c.t === 'imp' || c.t === 'impNeg' ? '(' + pron + ') ' : pron + ' ') + '___', hint: c.v + ' — ' + label, a: [form], e: ex.e, key: 'conj:' + c.v + ':' + c.t + ':' + c.p });
    }
    return out;
  }

  window.Engine = { h, $, shuffle, pick, norm, compare, speak, canSpeak, speakBtn, types, expand };
})();
