// node test/validate.js — проверка целостности контента курса
const fs = require('fs'); const vm = require('vm'); const path = require('path');
const ctx = { window: {} }; vm.createContext(ctx);
const load = (f) => vm.runInContext(fs.readFileSync(path.join(__dirname, '..', f), 'utf8'), ctx, { filename: f });
load('js/conjugation.js'); load('js/data/curriculum.js'); load('js/data/extras.js');
for (let i = 1; i <= 10; i++) load('js/data/m' + String(i).padStart(2, '0') + '.js');
const D = ctx.window.ST_DATA.days, M = ctx.window.ST_DATA.modules, Conj = ctx.window.Conj;
const errors = [], warnings = [];
let exCount = 0, wordCount = 0, conjCount = 0;
const seenModuleDays = new Set();
for (const m of M) for (const d of m.days) { if (seenModuleDays.has(d)) errors.push('day ' + d + ' in two modules'); seenModuleDays.add(d); }
for (let day = 1; day <= 60; day++) {
  const d = D[day];
  if (!d) { errors.push('missing day ' + day); continue; }
  if (!seenModuleDays.has(day)) errors.push('day ' + day + ' not in any module');
  if (!d.title) errors.push('day ' + day + ': no title');
  if (!d.grammar || !d.grammar.title || !d.grammar.html) errors.push('day ' + day + ': no grammar');
  if (!d.review) {
    if (!d.vocab || d.vocab.length < 6) errors.push('day ' + day + ': vocab < 6');
  }
  (d.vocab || []).forEach((w, i) => { wordCount++; if (!Array.isArray(w) || w.length < 2 || !w[0] || !w[1]) errors.push(`day ${day} vocab ${i} malformed`); });
  if (!d.exercises || d.exercises.length < (d.review ? 12 : 8)) errors.push('day ' + day + ': too few exercises (' + (d.exercises || []).length + ')');
  (d.exercises || []).forEach((ex, i) => {
    const tag = `day ${day} ex ${i} (${ex.t})`;
    exCount++;
    switch (ex.t) {
      case 'mc':
        if (!ex.q || !Array.isArray(ex.o) || ex.o.length < 2) errors.push(tag + ': bad mc');
        else { if (typeof ex.a !== 'number' || ex.a < 0 || ex.a >= ex.o.length) errors.push(tag + ': answer index out of range'); if (new Set(ex.o).size !== ex.o.length) errors.push(tag + ': duplicate options'); }
        break;
      case 'fill': {
        const blanks = (ex.q.match(/___/g) || []).length;
        if (!blanks) errors.push(tag + ': no blank');
        const multi = Array.isArray(ex.a[0]);
        const n = multi ? ex.a.length : 1;
        if (n !== blanks) errors.push(tag + `: ${blanks} blanks but ${n} answer groups`);
        const groups = multi ? ex.a : [ex.a];
        groups.forEach((g, gi) => { if (!Array.isArray(g) || !g.length || g.some((s) => typeof s !== 'string' || !s.trim())) errors.push(tag + `: bad answers group ${gi}`); });
        break;
      }
      case 'tr': case 'dict':
        if (ex.t === 'tr' && (!ex.q || !Array.isArray(ex.a) || !ex.a.length)) errors.push(tag + ': bad tr');
        if (ex.t === 'dict' && (!ex.s || !ex.ru)) errors.push(tag + ': bad dict');
        break;
      case 'order':
        if (!ex.s || ex.s.split(' ').length < 3) errors.push(tag + ': sentence too short');
        break;
      case 'match':
        if (!Array.isArray(ex.pairs) || ex.pairs.length < 2 || ex.pairs.some((p) => p.length !== 2)) errors.push(tag + ': bad pairs');
        else if (new Set(ex.pairs.map((p) => p[1])).size !== ex.pairs.length) errors.push(tag + ': duplicate translations');
        break;
      case 'conj':
        conjCount += ex.n || 4;
        for (const v of ex.verbs) for (const t of ex.tenses) {
          try { const f = Conj.conjugate(v, t); if (f.some((x, p) => x === null && p !== 0) || f.some((x, p) => p !== 0 && (!x || /undefined/.test(x)))) errors.push(tag + `: bad forms ${v} ${t}`); }
          catch (e) { errors.push(tag + `: ${v} ${t}: ${e.message}`); }
          if (!Conj.IRR[v] && !/(ar|er|ir)$/.test(v)) errors.push(tag + ': bad verb ' + v);
          if (!Conj.IRR[v]) warnings.push(`regular verb assumed: ${v}`);
        }
        break;
      default: errors.push(tag + ': unknown type');
    }
  });
}
for (let d = 1; d <= 60; d++) { const e = ctx.window.ST_DATA.extras[d]; if (!e || !e.q || !e.sample) errors.push('extras: missing writing prompt for day ' + d); else if (/[\u0400-\u04FF]/.test(e.sample)) errors.push('extras day ' + d + ': Cyrillic in sample'); }
const regs = [...new Set(warnings.map((w) => w.replace('regular verb assumed: ', '')))];
console.log(`days: ${Object.keys(D).length}, words: ${wordCount}, exercise entries: ${exCount}, generated conj items: ~${conjCount}`);
console.log('verbs conjugated by regular rules:', regs.join(', '));
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('validate: OK');
