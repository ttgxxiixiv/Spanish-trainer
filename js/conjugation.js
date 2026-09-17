/* Генератор спряжений: правильные глаголы по правилам, неправильные — из таблицы.
   Времена: pres, indef, imperf, fut, cond, subj, subjImp, perf, plusc, imp (утв.), impNeg */
(function () {
  const P = ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos/ellas'];

  const END = {
    pres: { ar: ['o', 'as', 'a', 'amos', 'áis', 'an'], er: ['o', 'es', 'e', 'emos', 'éis', 'en'], ir: ['o', 'es', 'e', 'imos', 'ís', 'en'] },
    indef: { ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'], er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'], ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'] },
    imperf: { ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'], er: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'], ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'] },
    fut: ['é', 'ás', 'á', 'emos', 'éis', 'án'],
    cond: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
    subj: { ar: ['e', 'es', 'e', 'emos', 'éis', 'en'], er: ['a', 'as', 'a', 'amos', 'áis', 'an'], ir: ['a', 'as', 'a', 'amos', 'áis', 'an'] }
  };

  const HABER = {
    pres: ['he', 'has', 'ha', 'hemos', 'habéis', 'han'],
    imperf: ['había', 'habías', 'había', 'habíamos', 'habíais', 'habían'],
    fut: ['habré', 'habrás', 'habrá', 'habremos', 'habréis', 'habrán'],
    cond: ['habría', 'habrías', 'habría', 'habríamos', 'habríais', 'habrían'],
    subj: ['haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
    subjImp: ['hubiera', 'hubieras', 'hubiera', 'hubiéramos', 'hubierais', 'hubieran']
  };

  // Неправильные глаголы. Можно задать любое время полностью; остальное считается по правилам.
  // futStem — основа для futuro/condicional; subjStem — основа для presente de subjuntivo; part — причастие; ger — герундий; impTu — imperativo tú.
  const IRR = {
    ser: { pres: ['soy', 'eres', 'es', 'somos', 'sois', 'son'], indef: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'], imperf: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'], subj: ['sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'], impTu: 'sé' },
    estar: { pres: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'], indef: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'], subj: ['esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'] },
    ir: { pres: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'], indef: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'], imperf: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'], subj: ['vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'], ger: 'yendo', impTu: 've' },
    haber: { pres: HABER.pres, subj: HABER.subj, futStem: 'habr' },
    tener: { pres: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'], indef: ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'], futStem: 'tendr', subjStem: 'teng', impTu: 'ten' },
    hacer: { pres: ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'], indef: ['hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'], futStem: 'har', subjStem: 'hag', part: 'hecho', impTu: 'haz' },
    poder: { pres: ['puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'], indef: ['pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'pudieron'], futStem: 'podr', subj: ['pueda', 'puedas', 'pueda', 'podamos', 'podáis', 'puedan'], ger: 'pudiendo' },
    poner: { pres: ['pongo', 'pones', 'pone', 'ponemos', 'ponéis', 'ponen'], indef: ['puse', 'pusiste', 'puso', 'pusimos', 'pusisteis', 'pusieron'], futStem: 'pondr', subjStem: 'pong', part: 'puesto', impTu: 'pon' },
    decir: { pres: ['digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'], indef: ['dije', 'dijiste', 'dijo', 'dijimos', 'dijisteis', 'dijeron'], futStem: 'dir', subjStem: 'dig', part: 'dicho', ger: 'diciendo', impTu: 'di' },
    venir: { pres: ['vengo', 'vienes', 'viene', 'venimos', 'venís', 'vienen'], indef: ['vine', 'viniste', 'vino', 'vinimos', 'vinisteis', 'vinieron'], futStem: 'vendr', subjStem: 'veng', ger: 'viniendo', impTu: 'ven' },
    querer: { pres: ['quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren'], indef: ['quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron'], futStem: 'querr', subj: ['quiera', 'quieras', 'quiera', 'queramos', 'queráis', 'quieran'] },
    saber: { pres: ['sé', 'sabes', 'sabe', 'sabemos', 'sabéis', 'saben'], indef: ['supe', 'supiste', 'supo', 'supimos', 'supisteis', 'supieron'], futStem: 'sabr', subj: ['sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'] },
    dar: { pres: ['doy', 'das', 'da', 'damos', 'dais', 'dan'], indef: ['di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'], subj: ['dé', 'des', 'dé', 'demos', 'deis', 'den'] },
    ver: { pres: ['veo', 'ves', 've', 'vemos', 'veis', 'ven'], indef: ['vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'], imperf: ['veía', 'veías', 'veía', 'veíamos', 'veíais', 'veían'], subjStem: 've', part: 'visto' },
    salir: { pres: ['salgo', 'sales', 'sale', 'salimos', 'salís', 'salen'], futStem: 'saldr', subjStem: 'salg', impTu: 'sal' },
    traer: { pres: ['traigo', 'traes', 'trae', 'traemos', 'traéis', 'traen'], indef: ['traje', 'trajiste', 'trajo', 'trajimos', 'trajisteis', 'trajeron'], subjStem: 'traig', ger: 'trayendo' },
    conocer: { pres: ['conozco', 'conoces', 'conoce', 'conocemos', 'conocéis', 'conocen'], subjStem: 'conozc' },
    leer: { indef: ['leí', 'leíste', 'leyó', 'leímos', 'leísteis', 'leyeron'], ger: 'leyendo', part: 'leído' },
    oír: { pres: ['oigo', 'oyes', 'oye', 'oímos', 'oís', 'oyen'], indef: ['oí', 'oíste', 'oyó', 'oímos', 'oísteis', 'oyeron'], subjStem: 'oig', ger: 'oyendo', part: 'oído', impTu: 'oye' },
    pensar: { pres: ['pienso', 'piensas', 'piensa', 'pensamos', 'pensáis', 'piensan'], subj: ['piense', 'pienses', 'piense', 'pensemos', 'penséis', 'piensen'] },
    empezar: { pres: ['empiezo', 'empiezas', 'empieza', 'empezamos', 'empezáis', 'empiezan'], subj: ['empiece', 'empieces', 'empiece', 'empecemos', 'empecéis', 'empiecen'] },
    entender: { pres: ['entiendo', 'entiendes', 'entiende', 'entendemos', 'entendéis', 'entienden'], subj: ['entienda', 'entiendas', 'entienda', 'entendamos', 'entendáis', 'entiendan'] },
    volver: { pres: ['vuelvo', 'vuelves', 'vuelve', 'volvemos', 'volvéis', 'vuelven'], subj: ['vuelva', 'vuelvas', 'vuelva', 'volvamos', 'volváis', 'vuelvan'], part: 'vuelto' },
    encontrar: { pres: ['encuentro', 'encuentras', 'encuentra', 'encontramos', 'encontráis', 'encuentran'], subj: ['encuentre', 'encuentres', 'encuentre', 'encontremos', 'encontréis', 'encuentren'] },
    dormir: { pres: ['duermo', 'duermes', 'duerme', 'dormimos', 'dormís', 'duermen'], indef: ['dormí', 'dormiste', 'durmió', 'dormimos', 'dormisteis', 'durmieron'], subj: ['duerma', 'duermas', 'duerma', 'durmamos', 'durmáis', 'duerman'], ger: 'durmiendo' },
    pedir: { pres: ['pido', 'pides', 'pide', 'pedimos', 'pedís', 'piden'], indef: ['pedí', 'pediste', 'pidió', 'pedimos', 'pedisteis', 'pidieron'], subj: ['pida', 'pidas', 'pida', 'pidamos', 'pidáis', 'pidan'], ger: 'pidiendo' },
    seguir: { pres: ['sigo', 'sigues', 'sigue', 'seguimos', 'seguís', 'siguen'], indef: ['seguí', 'seguiste', 'siguió', 'seguimos', 'seguisteis', 'siguieron'], subj: ['siga', 'sigas', 'siga', 'sigamos', 'sigáis', 'sigan'], ger: 'siguiendo' },
    sentir: { pres: ['siento', 'sientes', 'siente', 'sentimos', 'sentís', 'sienten'], indef: ['sentí', 'sentiste', 'sintió', 'sentimos', 'sentisteis', 'sintieron'], subj: ['sienta', 'sientas', 'sienta', 'sintamos', 'sintáis', 'sientan'], ger: 'sintiendo' },
    preferir: { pres: ['prefiero', 'prefieres', 'prefiere', 'preferimos', 'preferís', 'prefieren'], indef: ['preferí', 'preferiste', 'prefirió', 'preferimos', 'preferisteis', 'prefirieron'], subj: ['prefiera', 'prefieras', 'prefiera', 'prefiramos', 'prefiráis', 'prefieran'], ger: 'prefiriendo' },
    jugar: { pres: ['juego', 'juegas', 'juega', 'jugamos', 'jugáis', 'juegan'], subj: ['juegue', 'juegues', 'juegue', 'juguemos', 'juguéis', 'jueguen'] },
    escribir: { part: 'escrito' },
    abrir: { part: 'abierto' },
    romper: { part: 'roto' },
    morir: { pres: ['muero', 'mueres', 'muere', 'morimos', 'morís', 'mueren'], indef: ['morí', 'moriste', 'murió', 'morimos', 'moristeis', 'murieron'], subj: ['muera', 'mueras', 'muera', 'muramos', 'muráis', 'mueran'], part: 'muerto', ger: 'muriendo' },
    construir: { pres: ['construyo', 'construyes', 'construye', 'construimos', 'construís', 'construyen'], indef: ['construí', 'construiste', 'construyó', 'construimos', 'construisteis', 'construyeron'], subjStem: 'construy', ger: 'construyendo' },
    andar: { indef: ['anduve', 'anduviste', 'anduvo', 'anduvimos', 'anduvisteis', 'anduvieron'] },
    caber: { pres: ['quepo', 'cabes', 'cabe', 'cabemos', 'cabéis', 'caben'], indef: ['cupe', 'cupiste', 'cupo', 'cupimos', 'cupisteis', 'cupieron'], futStem: 'cabr', subjStem: 'quep' },
    conducir: { pres: ['conduzco', 'conduces', 'conduce', 'conducimos', 'conducís', 'conducen'], indef: ['conduje', 'condujiste', 'condujo', 'condujimos', 'condujisteis', 'condujeron'], subjStem: 'conduzc' },
    producir: { pres: ['produzco', 'produces', 'produce', 'producimos', 'producís', 'producen'], indef: ['produje', 'produjiste', 'produjo', 'produjimos', 'produjisteis', 'produjeron'], subjStem: 'produzc' },
    elegir: { pres: ['elijo', 'eliges', 'elige', 'elegimos', 'elegís', 'eligen'], indef: ['elegí', 'elegiste', 'eligió', 'elegimos', 'elegisteis', 'eligieron'], subj: ['elija', 'elijas', 'elija', 'elijamos', 'elijáis', 'elijan'], ger: 'eligiendo' },
    recordar: { pres: ['recuerdo', 'recuerdas', 'recuerda', 'recordamos', 'recordáis', 'recuerdan'], subj: ['recuerde', 'recuerdes', 'recuerde', 'recordemos', 'recordéis', 'recuerden'] },
    contar: { pres: ['cuento', 'cuentas', 'cuenta', 'contamos', 'contáis', 'cuentan'], subj: ['cuente', 'cuentes', 'cuente', 'contemos', 'contéis', 'cuenten'] },
    cerrar: { pres: ['cierro', 'cierras', 'cierra', 'cerramos', 'cerráis', 'cierran'], subj: ['cierre', 'cierres', 'cierre', 'cerremos', 'cerréis', 'cierren'] },
    perder: { pres: ['pierdo', 'pierdes', 'pierde', 'perdemos', 'perdéis', 'pierden'], subj: ['pierda', 'pierdas', 'pierda', 'perdamos', 'perdáis', 'pierdan'] },
    servir: { pres: ['sirvo', 'sirves', 'sirve', 'servimos', 'servís', 'sirven'], indef: ['serví', 'serviste', 'sirvió', 'servimos', 'servisteis', 'sirvieron'], subj: ['sirva', 'sirvas', 'sirva', 'sirvamos', 'sirváis', 'sirvan'], ger: 'sirviendo' },
    repetir: { pres: ['repito', 'repites', 'repite', 'repetimos', 'repetís', 'repiten'], indef: ['repetí', 'repetiste', 'repitió', 'repetimos', 'repetisteis', 'repitieron'], subj: ['repita', 'repitas', 'repita', 'repitamos', 'repitáis', 'repitan'], ger: 'repitiendo' },
    reír: { pres: ['río', 'ríes', 'ríe', 'reímos', 'reís', 'ríen'], indef: ['reí', 'reíste', 'rio', 'reímos', 'reísteis', 'rieron'], subj: ['ría', 'rías', 'ría', 'riamos', 'riais', 'rían'], ger: 'riendo', part: 'reído' },
    valer: { pres: ['valgo', 'vales', 'vale', 'valemos', 'valéis', 'valen'], futStem: 'valdr', subjStem: 'valg' }
  };

  function group(v) { return v.slice(-2); }
  function stem(v) { return v.slice(0, -2); }
  function accentLast(s) {
    const map = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
    for (let i = s.length - 1; i >= 0; i--) {
      if (map[s[i]]) return s.slice(0, i) + map[s[i]] + s.slice(i + 1);
    }
    return s;
  }
  function spell(st) { // c→qu, g→gu, z→c перед e
    if (st.endsWith('c')) return st.slice(0, -1) + 'qu';
    if (st.endsWith('g')) return st.slice(0, -1) + 'gu';
    if (st.endsWith('z')) return st.slice(0, -1) + 'c';
    return st;
  }

  function simple(verb, tense) {
    const ir = IRR[verb] || {};
    if (ir[tense]) return ir[tense].slice();
    const g = group(verb), st = stem(verb);
    switch (tense) {
      case 'pres': return END.pres[g].map(e => st + e);
      case 'indef': {
        const f = END.indef[g].map(e => st + e);
        if (g === 'ar') f[0] = spell(st) + 'é';
        return f;
      }
      case 'imperf': return END.imperf[g].map(e => st + e);
      case 'fut': return END.fut.map(e => (ir.futStem || verb) + e);
      case 'cond': return END.cond.map(e => (ir.futStem || verb) + e);
      case 'subj': {
        let s = ir.subjStem;
        if (!s) {
          const yo = simple(verb, 'pres')[0];
          s = yo.endsWith('o') ? yo.slice(0, -1) : st;
          if (g === 'ar') s = spell(s);
        }
        return END.subj[g].map(e => s + e);
      }
      case 'subjImp': {
        const p3 = simple(verb, 'indef')[5];
        const base = p3.slice(0, -3); // hablaron → habla
        return [base + 'ra', base + 'ras', base + 'ra', accentLast(base) + 'ramos', base + 'rais', base + 'ran'];
      }
      case 'perf': return HABER.pres.map(h => h + ' ' + participle(verb));
      case 'plusc': return HABER.imperf.map(h => h + ' ' + participle(verb));
      case 'futPerf': return HABER.fut.map(h => h + ' ' + participle(verb));
      case 'condPerf': return HABER.cond.map(h => h + ' ' + participle(verb));
      case 'subjPerf': return HABER.subj.map(h => h + ' ' + participle(verb));
      case 'subjPlusc': return HABER.subjImp.map(h => h + ' ' + participle(verb));
      case 'imp': {
        const sj = simple(verb, 'subj');
        const tu = ir.impTu || simple(verb, 'pres')[2];
        return [null, tu, sj[2], sj[3], verb.slice(0, -1) + 'd', sj[5]];
      }
      case 'impNeg': {
        const sj = simple(verb, 'subj');
        return [null, 'no ' + sj[1], 'no ' + sj[2], 'no ' + sj[3], 'no ' + sj[4], 'no ' + sj[5]];
      }
    }
    throw new Error('unknown tense ' + tense);
  }

  function participle(verb) {
    const ir = IRR[verb];
    if (ir && ir.part) return ir.part;
    return stem(verb) + (group(verb) === 'ar' ? 'ado' : 'ido');
  }
  function gerund(verb) {
    const ir = IRR[verb];
    if (ir && ir.ger) return ir.ger;
    const st = stem(verb);
    if (group(verb) === 'ar') return st + 'ando';
    if (/[aeo]$/.test(st)) return st + 'yendo';
    return st + 'iendo';
  }

  const TENSE_NAMES = {
    pres: 'presente', indef: 'pretérito indefinido', imperf: 'pretérito imperfecto', fut: 'futuro simple',
    cond: 'condicional simple', subj: 'presente de subjuntivo', subjImp: 'imperfecto de subjuntivo',
    perf: 'pretérito perfecto', plusc: 'pluscuamperfecto', futPerf: 'futuro compuesto', condPerf: 'condicional compuesto',
    subjPerf: 'perfecto de subjuntivo', subjPlusc: 'pluscuamperfecto de subjuntivo', imp: 'imperativo afirmativo', impNeg: 'imperativo negativo'
  };

  window.Conj = { PRONOUNS: P, TENSE_NAMES, IRR, conjugate: simple, participle, gerund };
})();
