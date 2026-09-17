// node test/words.check.js — проверка словаря карточек: количество, дубликаты, формат
const fs = require('fs'); const vm = require('vm'); const path = require('path');
const ctx = { window: { ST_DATA: {} } }; vm.createContext(ctx);
const dir = path.join(__dirname, '..', 'js', 'data', 'words');
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /^w\d+\.js$/.test(f)).sort() : [];
for (const f of files) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
const raw = ctx.window.ST_DATA.freqRaw || [];
const errors = []; const seen = new Map(); let n = 0; const perFile = [];
raw.forEach((chunk, fi) => {
  let cnt = 0;
  chunk.split('\n').forEach((line, li) => {
    const t = line.trim(); if (!t) return;
    n++; cnt++;
    const parts = t.split('|');
    if (parts.length !== 4) { errors.push(`${files[fi]}:${li + 1}: expected 4 fields, got ${parts.length}: ${t}`); return; }
    const [es, ru, ex, exRu] = parts.map((s) => s.trim());
    if (!es || !ru || !ex || !exRu) errors.push(`${files[fi]}:${li + 1}: empty field: ${t}`);
    if (!/[\u0400-\u04FF]/.test(exRu)) errors.push(`${files[fi]}:${li + 1}: example translation without Cyrillic: ${t}`);
    const key = es.toLowerCase().replace(/\s*\(.*\)$/, '');
    if (seen.has(key)) errors.push(`${files[fi]}:${li + 1}: duplicate "${es}" (first in ${seen.get(key)})`); else seen.set(key, files[fi] + ':' + (li + 1));
    if (ex && !/[.!?]$/.test(ex)) errors.push(`${files[fi]}:${li + 1}: example without final punctuation: ${ex}`);
    if (/[\u0400-\u04FF]/.test(es + ex)) errors.push(`${files[fi]}:${li + 1}: Cyrillic in Spanish field: ${t}`);
    if (!/[\u0400-\u04FF]/.test(ru)) errors.push(`${files[fi]}:${li + 1}: translation without Cyrillic: ${t}`);
  });
  perFile.push(files[fi] + '=' + cnt);
});
console.log('files:', perFile.join(' '), '| total words:', n);
if (errors.length) { console.error(errors.slice(0, 40).join('\n')); if (errors.length > 40) console.error('... and', errors.length - 40, 'more'); process.exit(1); }
if (process.argv[2] === 'strict' && n !== 3000) { console.error('expected 3000 words, got ' + n); process.exit(1); }
console.log('words: OK');
