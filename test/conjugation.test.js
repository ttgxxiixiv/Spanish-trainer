// node test/conjugation.test.js — проверка генератора спряжений на известных формах
const fs = require('fs'); const vm = require('vm');
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(__dirname + '/../js/conjugation.js', 'utf8'), ctx);
const C = ctx.window.Conj;
const cases = [
  ['hablar', 'pres', ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan']],
  ['comer', 'indef', ['comí', 'comiste', 'comió', 'comimos', 'comisteis', 'comieron']],
  ['vivir', 'imperf', ['vivía', 'vivías', 'vivía', 'vivíamos', 'vivíais', 'vivían']],
  ['buscar', 'indef', ['busqué', 'buscaste', 'buscó', 'buscamos', 'buscasteis', 'buscaron']],
  ['llegar', 'subj', ['llegue', 'llegues', 'llegue', 'lleguemos', 'lleguéis', 'lleguen']],
  ['empezar', 'indef', ['empecé', 'empezaste', 'empezó', 'empezamos', 'empezasteis', 'empezaron']],
  ['tener', 'fut', ['tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán']],
  ['hacer', 'cond', ['haría', 'harías', 'haría', 'haríamos', 'haríais', 'harían']],
  ['tener', 'subj', ['tenga', 'tengas', 'tenga', 'tengamos', 'tengáis', 'tengan']],
  ['ser', 'subjImp', ['fuera', 'fueras', 'fuera', 'fuéramos', 'fuerais', 'fueran']],
  ['hablar', 'subjImp', ['hablara', 'hablaras', 'hablara', 'habláramos', 'hablarais', 'hablaran']],
  ['decir', 'subjImp', ['dijera', 'dijeras', 'dijera', 'dijéramos', 'dijerais', 'dijeran']],
  ['dormir', 'subjImp', ['durmiera', 'durmieras', 'durmiera', 'durmiéramos', 'durmierais', 'durmieran']],
  ['hacer', 'perf', ['he hecho', 'has hecho', 'ha hecho', 'hemos hecho', 'habéis hecho', 'han hecho']],
  ['ver', 'plusc', ['había visto', 'habías visto', 'había visto', 'habíamos visto', 'habíais visto', 'habían visto']],
  ['tener', 'imp', [null, 'ten', 'tenga', 'tengamos', 'tened', 'tengan']],
  ['hablar', 'impNeg', [null, 'no hables', 'no hable', 'no hablemos', 'no habléis', 'no hablen']],
  ['ir', 'imp', [null, 've', 'vaya', 'vayamos', 'id', 'vayan']],
  ['conocer', 'subj', ['conozca', 'conozcas', 'conozca', 'conozcamos', 'conozcáis', 'conozcan']],
  ['leer', 'indef', ['leí', 'leíste', 'leyó', 'leímos', 'leísteis', 'leyeron']],
  ['pedir', 'subj', ['pida', 'pidas', 'pida', 'pidamos', 'pidáis', 'pidan']],
  ['vivir', 'subjPlusc', ['hubiera vivido', 'hubieras vivido', 'hubiera vivido', 'hubiéramos vivido', 'hubierais vivido', 'hubieran vivido']],
];
let fail = 0;
for (const [v, t, exp] of cases) {
  const got = C.conjugate(v, t);
  if (JSON.stringify(got) !== JSON.stringify(exp)) { fail++; console.error('FAIL', v, t, '\n  got', got, '\n  exp', exp); }
}
const ger = { ir: 'yendo', leer: 'leyendo', comer: 'comiendo', hablar: 'hablando', pedir: 'pidiendo', construir: 'construyendo' };
for (const v in ger) if (C.gerund(v) !== ger[v]) { fail++; console.error('FAIL gerund', v, C.gerund(v)); }
const part = { escribir: 'escrito', abrir: 'abierto', comer: 'comido', poner: 'puesto', volver: 'vuelto' };
for (const v in part) if (C.participle(v) !== part[v]) { fail++; console.error('FAIL participle', v, C.participle(v)); }
console.log(fail ? `${fail} failures` : `conjugation: ${cases.length + 11} checks passed`);
process.exit(fail ? 1 : 0);
