// node test/plan.test.js — дни отдыха не прерывают серию
const fs = require('fs'); const vm = require('vm');
const mem = {};
const ctx = { window: {}, localStorage: { getItem: (k) => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); } }, TextEncoder, TextDecoder, btoa: (s) => Buffer.from(s, 'binary').toString('base64'), atob: (s) => Buffer.from(s, 'base64').toString('binary'), console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(__dirname + '/../js/store.js', 'utf8'), ctx, { filename: 'store.js' });
const Store = ctx.window.Store; let day = 0; const base = '2026-03-02';
Store.setClock(() => Store.addDays(base, day)); Store.get();
let fail = 0; const eq = (a, b, m) => { if (a !== b) { fail++; console.error('FAIL', m, 'got', a, 'exp', b); } };
Store.touch(60); day = 1; Store.touch(60); eq(Store.currentStreak(), 2, 'два дня подряд');
Store.setPlan(Store.addDays(base, 2), 'rest'); day = 3; eq(Store.currentStreak(), 2, 'на следующий день после отдыха серия жива');
Store.touch(60); eq(Store.currentStreak(), 3, 'после отдыха серия продолжается');
day = 5; eq(Store.currentStreak(), 0, 'пропуск без отдыха обнуляет'); Store.touch(60); eq(Store.currentStreak(), 1, 'новая серия');
Store.setPlan(Store.addDays(base, 6), 'rest'); Store.setPlan(Store.addDays(base, 7), 'rest'); day = 8; Store.touch(60); eq(Store.currentStreak(), 2, 'два дня отдыха подряд не рвут серию');
eq(Store.getPlan(Store.addDays(base, 6)), 'rest', 'план читается'); Store.setPlan(Store.addDays(base, 6), null); eq(Store.getPlan(Store.addDays(base, 6)), null, 'план снимается');
const data = Store.parseImport(Store.exportCode()); eq(data.plan[Store.addDays(base, 7)], 'rest', 'план в экспорте');
console.log(fail ? fail + ' failures' : 'plan: rest-day checks passed'); process.exit(fail ? 1 : 0);
