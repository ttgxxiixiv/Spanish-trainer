// node test/cards.test.js — график повторений 1–3–7–21 и поведение при ошибке/опоздании
const fs = require('fs'); const vm = require('vm');
const mem = {};
const ctx = {
  window: { ST_DATA: { freqRaw: ['uno|один|Uno.\ndos|два|Dos.\ntres|три|Tres.'] } },
  localStorage: { getItem: (k) => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); } },
  TextEncoder, TextDecoder, btoa: (s) => Buffer.from(s, 'binary').toString('base64'), atob: (s) => Buffer.from(s, 'base64').toString('binary'),
  console
};
ctx.Engine = { h: () => ({ querySelectorAll: () => [], addEventListener() {}, dispatchEvent() {} }), speakBtn: () => null, types: {} };
ctx.ST_DATA = ctx.window.ST_DATA;
vm.createContext(ctx);
const load = (f) => vm.runInContext(fs.readFileSync(__dirname + '/../' + f, 'utf8'), ctx, { filename: f });
load('js/store.js'); ctx.Store = ctx.window.Store; load('js/cards.js');
const { Store, Cards } = ctx.window;
// подменяем «сегодня»
let day = 0; const base = '2026-01-01';
Store.today = () => Store.addDays(base, day);
let fail = 0;
const eq = (a, b, msg) => { if (a !== b) { fail++; console.error('FAIL', msg, '\n  got', a, '\n  exp', b); } };

Cards.rate('f1', 'learn');
eq(Cards.cardState('f1').due, Store.addDays(base, 1), 'после изучения — повтор на 1-й день');
eq(Cards.due().length, 0, 'в день изучения карточка не должна быть due');
day = 1; eq(Cards.due()[0], 'f1', 'на 1-й день карточка due');
Cards.rate('f1', 'good'); eq(Cards.cardState('f1').due, Store.addDays(base, 3), 'после 1-го дня — 3-й день');
day = 3; eq(Cards.due()[0], 'f1', 'на 3-й день due'); Cards.rate('f1', 'good'); eq(Cards.cardState('f1').due, Store.addDays(base, 7), 'после 3-го — 7-й');
day = 7; Cards.rate('f1', 'good'); eq(Cards.cardState('f1').due, Store.addDays(base, 21), 'после 7-го — 21-й');
day = 21; Cards.rate('f1', 'good'); eq(Cards.cardState('f1').due, Store.addDays(base, 60), 'после 21-го — закрепление через 60 дней');
eq(Cards.stats().longterm, 1, 'после 21-го дня слово в долгосрочной памяти');
day = 60; Cards.rate('f1', 'good'); eq(Cards.cardState('f1').due, Store.addDays(base, 180), 'после 60 — 180');
day = 180; Cards.rate('f1', 'good'); eq(Cards.cardState('f1').due, null, 'после 180 — выучено');

// ошибка возвращает в начало
day = 200; Cards.rate('f2', 'learn'); day = 201; Cards.rate('f2', 'good'); day = 203; Cards.rate('f2', 'again');
eq(Cards.cardState('f2').s, 0, 'ошибка → стадия 0'); eq(Cards.cardState('f2').due, Store.addDays(base, 204), 'ошибка → повтор завтра'); eq(Cards.cardState('f2').lapses, 1, 'счётчик ошибок');
eq(Cards.cardState('f2').intro, Store.addDays(base, 203), 'ошибка → новая дата изучения');

// опоздание: график не сдвигается вперёд без нужды
day = 300; Cards.rate('f3', 'learn'); day = 305; eq(Cards.due().includes('f3'), true, 'просроченная карточка остаётся due');
Cards.rate('f3', 'good'); eq(Cards.cardState('f3').due, Store.addDays(base, 306), 'опоздали на 1-й день: следующий — завтра, не в прошлом');
day = 306; Cards.rate('f3', 'good'); eq(Cards.cardState('f3').due, Store.addDays(base, 307), '7-й день от изучения (день 307) сохраняется');

// известные слова и лимит новых
Cards.markKnownUpTo(2); eq(Cards.stats().known >= 0, true, 'markKnown не падает');
Store.get().settings.newPerDay = 1; day = 400; eq(Cards.newLeft(), 1, 'лимит новых в день');
eq(Cards.nextNew(5).length, 0, 'все три слова уже в работе');
// экспорт/импорт сохраняет карточки
const code = Store.exportCode(); const parsed = Store.parseImport(code); eq(Object.keys(parsed.cards).length, 3, 'карточки в экспорте');

console.log(fail ? fail + ' failures' : 'cards: schedule checks passed');
process.exit(fail ? 1 : 0);
