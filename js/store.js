/* Хранилище прогресса: localStorage + экспорт/импорт + интервальное повторение (SRS). */
(function () {
  const KEY = 'spanish_trainer_v1';
  const VERSION = 1;

  function today() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function addDays(iso, n) {
    const d = new Date(iso + 'T00:00:00');
    d.setDate(d.getDate() + n);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function daysBetween(a, b) {
    return Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 86400000);
  }

  function blank() {
    return {
      version: VERSION,
      createdAt: today(),
      startDate: null,
      days: {},          // { '1': { score, done, time, attempts } }
      srs: {},           // { wordId: { n, ef, iv, due, seen, wrong } }
      xp: 0,
      streak: 0,
      bestStreak: 0,
      lastActive: null,
      activity: {},      // { 'YYYY-MM-DD': секунды }
      mistakes: {},      // { key: { day, count, last } }
      stats: { answered: 0, correct: 0 },
      settings: { tts: true, unlockAll: false, strictAccents: false, dailyGoalMin: 15 }
    };
  }

  let state = null;
  function load() {
    if (state) return state;
    try {
      const raw = localStorage.getItem(KEY);
      state = raw ? migrate(JSON.parse(raw)) : blank();
    } catch (e) {
      console.warn('progress load failed', e);
      state = blank();
    }
    return state;
  }
  function migrate(obj) {
    const b = blank();
    const out = Object.assign(b, obj);
    out.settings = Object.assign(b.settings, obj.settings || {});
    out.stats = Object.assign(b.stats, obj.stats || {});
    out.version = VERSION;
    return out;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { console.warn('save failed', e); }
  }
  function reset() { state = blank(); save(); }

  // ---- активность и серия дней ----
  function touch(seconds) {
    const t = today();
    if (state.lastActive !== t) {
      if (state.lastActive && daysBetween(state.lastActive, t) === 1) state.streak += 1;
      else if (state.lastActive !== t) state.streak = 1;
      state.lastActive = t;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
    }
    if (!state.startDate) state.startDate = t;
    if (seconds) state.activity[t] = (state.activity[t] || 0) + seconds;
    save();
  }
  function currentStreak() {
    if (!state.lastActive) return 0;
    const gap = daysBetween(state.lastActive, today());
    return gap <= 1 ? state.streak : 0;
  }

  // ---- уроки ----
  function completeDay(day, score, seconds) {
    const prev = state.days[day];
    state.days[day] = {
      score: prev ? Math.max(prev.score, score) : score,
      done: prev ? prev.done : today(),
      last: today(),
      time: (prev ? prev.time : 0) + seconds,
      attempts: (prev ? prev.attempts : 0) + 1
    };
    const bonus = prev ? 10 : 30;
    state.xp += bonus;
    touch(seconds);
  }
  function recordAnswer(key, day, correct) {
    state.stats.answered += 1;
    if (correct) { state.stats.correct += 1; state.xp += 5; }
    else {
      const m = state.mistakes[key] || { day, count: 0 };
      m.count += 1; m.last = today();
      state.mistakes[key] = m;
    }
  }
  function clearMistake(key) { delete state.mistakes[key]; save(); }

  // ---- SRS (упрощённый SM-2) ----
  function srsIntroduce(id) {
    if (!state.srs[id]) state.srs[id] = { n: 0, ef: 2.5, iv: 0, due: addDays(today(), 1), seen: 0, wrong: 0 };
  }
  function srsRate(id, correct) {
    const it = state.srs[id] || (srsIntroduce(id), state.srs[id]);
    it.seen += 1;
    if (correct) {
      it.n += 1;
      if (it.n === 1) it.iv = 1;
      else if (it.n === 2) it.iv = 3;
      else it.iv = Math.round(it.iv * it.ef);
      it.ef = Math.min(2.8, it.ef + 0.08);
    } else {
      it.n = 0; it.iv = 1; it.wrong += 1;
      it.ef = Math.max(1.3, it.ef - 0.2);
    }
    it.due = addDays(today(), it.iv);
    save();
  }
  function srsDue(limit) {
    const t = today();
    const ids = Object.keys(state.srs).filter((id) => state.srs[id].due <= t);
    ids.sort((a, b) => (state.srs[a].due < state.srs[b].due ? -1 : 1) || state.srs[b].wrong - state.srs[a].wrong);
    return limit ? ids.slice(0, limit) : ids;
  }
  function srsMastery() {
    const all = Object.values(state.srs);
    const known = all.filter((x) => x.n >= 3).length;
    const learning = all.filter((x) => x.n > 0 && x.n < 3).length;
    return { total: all.length, known, learning, fresh: all.length - known - learning };
  }

  // ---- экспорт/импорт ----
  function exportJSON() {
    return JSON.stringify({ app: 'spanish-trainer', version: VERSION, exportedAt: new Date().toISOString(), data: state }, null, 0);
  }
  function exportCode() {
    const json = exportJSON();
    const bytes = new TextEncoder().encode(json);
    let bin = '';
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return 'ST1.' + btoa(bin);
  }
  function parseImport(text) {
    text = String(text || '').trim();
    let json = text;
    if (text.startsWith('ST1.')) {
      const bin = atob(text.slice(4));
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      json = new TextDecoder().decode(bytes);
    }
    const obj = JSON.parse(json);
    const data = obj && obj.app === 'spanish-trainer' ? obj.data : obj;
    if (!data || typeof data !== 'object' || !data.days || !data.srs) throw new Error('Это не файл прогресса тренажёра');
    return migrate(data);
  }
  function applyImport(data, mode) {
    if (mode === 'merge') {
      for (const d in data.days) {
        const a = state.days[d], b = data.days[d];
        state.days[d] = !a ? b : { score: Math.max(a.score, b.score), done: a.done < b.done ? a.done : b.done, last: a.last > b.last ? a.last : b.last, time: a.time + b.time, attempts: a.attempts + b.attempts };
      }
      for (const id in data.srs) {
        const a = state.srs[id], b = data.srs[id];
        state.srs[id] = !a ? b : (b.n > a.n ? b : a);
      }
      for (const day in data.activity) state.activity[day] = Math.max(state.activity[day] || 0, data.activity[day]);
      for (const k in data.mistakes) if (!state.mistakes[k]) state.mistakes[k] = data.mistakes[k];
      state.xp = Math.max(state.xp, data.xp);
      state.bestStreak = Math.max(state.bestStreak, data.bestStreak);
      if (!state.startDate || (data.startDate && data.startDate < state.startDate)) state.startDate = data.startDate;
      state.stats.answered = Math.max(state.stats.answered, data.stats.answered);
      state.stats.correct = Math.max(state.stats.correct, data.stats.correct);
    } else {
      state = data;
    }
    save();
  }

  window.Store = {
    today, addDays, daysBetween,
    get: load, save, reset, touch, currentStreak,
    completeDay, recordAnswer, clearMistake,
    srsIntroduce, srsRate, srsDue, srsMastery,
    exportJSON, exportCode, parseImport, applyImport
  };
})();
