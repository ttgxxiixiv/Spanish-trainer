/* Модуль 4 · Дни 19–24 · Subjuntivo I */
(function (D) {
D[19] = {
  title: 'Presente de subjuntivo: формы',
  grammar: { title: 'Как образуется subjuntivo', html: `
<p>Subjuntivo — наклонение для того, что <b>не утверждается как факт</b>: желания, сомнения, оценки, цели. Сегодня — только формы.</p>
<p>Берём форму <b>yo</b> presente, убираем -o, «меняем гласную»: -ar → <b>e</b>, -er/-ir → <b>a</b>.</p>
<table><tr><th></th><th>hablar</th><th>comer</th><th>vivir</th><th>tener (tengo)</th></tr>
<tr><td>yo</td><td>habl<b>e</b></td><td>com<b>a</b></td><td>viv<b>a</b></td><td>teng<b>a</b></td></tr>
<tr><td>tú</td><td>habl<b>es</b></td><td>com<b>as</b></td><td>viv<b>as</b></td><td>teng<b>as</b></td></tr>
<tr><td>él</td><td>habl<b>e</b></td><td>com<b>a</b></td><td>viv<b>a</b></td><td>teng<b>a</b></td></tr>
<tr><td>nosotros</td><td>habl<b>emos</b></td><td>com<b>amos</b></td><td>viv<b>amos</b></td><td>teng<b>amos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>éis</b></td><td>com<b>áis</b></td><td>viv<b>áis</b></td><td>teng<b>áis</b></td></tr>
<tr><td>ellos</td><td>habl<b>en</b></td><td>com<b>an</b></td><td>viv<b>an</b></td><td>teng<b>an</b></td></tr></table>
<p>Так же от yo-формы: hago → haga, pongo → ponga, salgo → salga, digo → diga, conozco → conozca, veo → vea.</p>
<p>Шесть совсем особых: <b>ser</b> → sea, <b>estar</b> → esté, <b>ir</b> → vaya, <b>haber</b> → haya, <b>saber</b> → sepa, <b>dar</b> → dé.</p>
<p>Чередование сохраняется как в presente: piense, pensemos; vuelva, volvamos; в -ir с o→ue/e→ie nosotros получает u/i: durmamos, sintamos; e→i везде: pida, pidamos.</p>
<p>Орфография: busque, llegue, empiece.</p>` },
  vocab: [
    ['querer que', 'хотеть, чтобы', 'Quiero que vengas.'],
    ['esperar que', 'надеяться, что', 'Espero que apruebes.'],
    ['ojalá', 'хоть бы, дай бог', 'Ojalá llueva mañana.'],
    ['pedir que', 'просить, чтобы', 'Te pido que me escuches.'],
    ['necesitar que', 'нуждаться в том, чтобы', 'Necesito que me ayudes.'],
    ['preferir que', 'предпочитать, чтобы', 'Prefiero que vayamos en tren.'],
    ['aprobar', 'сдать (экзамен), одобрить', 'Espero que apruebe el examen.'],
    ['la solicitud', 'заявка, заявление', 'Envié la solicitud ayer.']
  ],
  exercises: [
    { t: 'conj', verbs: ['hablar', 'comer', 'tener', 'hacer', 'poner', 'salir', 'conocer', 'decir'], tenses: ['subj'], n: 5 },
    { t: 'conj', verbs: ['ser', 'estar', 'ir', 'saber', 'dar', 'haber'], tenses: ['subj'], n: 4 },
    { t: 'conj', verbs: ['pensar', 'volver', 'dormir', 'pedir', 'buscar', 'llegar', 'empezar'], tenses: ['subj'], n: 4 },
    { t: 'mc', q: 'Quiero que (tú) ___ a la fiesta.', o: ['vengas', 'vienes', 'venir'], a: 0 },
    { t: 'fill', q: 'Ojalá ___ (nosotros, aprobar) el examen.', a: ['aprobemos'] },
    { t: 'order', s: 'Espero que la solicitud llegue a tiempo.' },
    { t: 'tr', q: 'Хоть бы завтра не было дождя.', a: ['Ojalá no llueva mañana.', 'Ojalá mañana no llueva.', 'Ojalá no llueva mañana'] },
    { t: 'dict', s: 'Prefiero que vayamos en tren y que salgamos temprano.', ru: 'Я предпочитаю, чтобы мы поехали на поезде и выехали рано.' }
  ]
};
D[20] = {
  title: 'Желания и влияние',
  grammar: { title: 'Querer que, pedir que, ojalá + subjuntivo', html: `
<p>Когда один субъект <b>хочет, просит, советует, требует</b>, чтобы <b>другой</b> что-то сделал — после <b>que</b> идёт subjuntivo.</p>
<table><tr><th>Один субъект → инфинитив</th><th>Два субъекта → que + subjuntivo</th></tr>
<tr><td>Quiero <em>ir</em>.</td><td>Quiero que <em>vayas</em>.</td></tr>
<tr><td>Espero <em>aprobar</em>.</td><td>Espero que <em>apruebes</em>.</td></tr>
<tr><td>Prefiero <em>quedarme</em>.</td><td>Prefiero que <em>te quedes</em>.</td></tr></table>
<p>Глаголы влияния: querer, desear, esperar, pedir, rogar, exigir, recomendar, aconsejar, sugerir, permitir, prohibir, necesitar, hacer falta que.</p>
<p><b>Ojalá</b> (+ que необязательно) + subjuntivo: Ojalá <em>venga</em>. <b>Que</b> + subj — пожелание: ¡Que <em>tengas</em> suerte! ¡Que <em>aproveche</em>!</p>
<div class="tip">С pedir/aconsejar адресат — косвенное дополнение: <em>Te</em> pido que… <em>Le</em> aconsejo que…</div>` },
  vocab: [
    ['recomendar', 'рекомендовать', 'Te recomiendo que pruebes el pulpo.'],
    ['sugerir', 'предлагать (идею)', 'Sugiero que empecemos ya.'],
    ['exigir', 'требовать', 'Exigen que paguemos ahora.'],
    ['prohibir', 'запрещать', 'Prohíben que se fume aquí.'],
    ['permitir', 'позволять', 'No permiten que entremos.'],
    ['hacer falta', 'быть нужным', 'Hace falta que alguien ayude.'],
    ['la pareja', 'пара, партнёр', 'Mi pareja quiere que nos mudemos.'],
    ['discutir', 'спорить, ссориться; обсуждать', 'Discutimos por tonterías.']
  ],
  exercises: [
    { t: 'fill', q: 'Mi pareja quiere que ___ (nosotros, mudarse) a otra ciudad.', a: ['nos mudemos'] },
    { t: 'mc', q: 'Te recomiendo que ___ el pulpo: está buenísimo.', o: ['pruebes', 'pruebas', 'probar'], a: 0 },
    { t: 'mc', q: 'Espero ___ el examen la semana que viene.', o: ['aprobar', 'que apruebo', 'que apruebe'], a: 0, e: 'Один субъект → инфинитив.' },
    { t: 'fill', q: 'Le pido que no ___ (discutir) delante de los niños.', a: ['discuta', 'discutas'] },
    { t: 'fill', q: '¡Que ___ (tú, tener) un buen viaje!', a: ['tengas'] },
    { t: 'fill', q: 'Hace falta que alguien ___ (hacer) la compra.', a: ['haga'] },
    { t: 'order', s: 'Sugiero que empecemos la reunión sin esperar a Luis.' },
    { t: 'tr', q: 'Мне нужно, чтобы ты мне помог.', a: ['Necesito que me ayudes.', 'Necesito que me ayudes'] },
    { t: 'mc', q: 'Mis padres no permiten que ___ tarde entre semana.', o: ['salga', 'salgo', 'saldré'], a: 0 },
    { t: 'tr', q: 'Хоть бы они пришли вовремя.', a: ['Ojalá lleguen a tiempo.', 'Ojalá vengan a tiempo.', 'Ojalá que lleguen a tiempo.', 'Ojalá lleguen a tiempo'] },
    { t: 'dict', s: 'Exigen que entreguemos la solicitud antes del viernes.', ru: 'Они требуют, чтобы мы сдали заявку до пятницы.' }
  ]
};
D[21] = {
  title: 'Эмоции и оценка',
  grammar: { title: 'Me alegra que, es importante que + subjuntivo', html: `
<p>Реакция и оценка на чужое действие → <b>que + subjuntivo</b>.</p>
<table><tr><th>Эмоция</th><th>Оценка (es + adj + que)</th></tr>
<tr><td>Me alegra que <em>estés</em> aquí.<br>Me molesta que <em>griten</em>.<br>Siento que no <em>puedas</em> venir.<br>Me da miedo que <em>conduzca</em> así.<br>Me sorprende que no <em>sepa</em>.</td><td>Es importante que <em>descanses</em>.<br>Es normal que <em>tenga</em> miedo.<br>Es una pena que <em>llueva</em>.<br>Es mejor que <em>vayamos</em> ya.<br>No es justo que <em>pague</em> yo.</td></tr></table>
<p>Тот же субъект → инфинитив: Me alegro de <em>verte</em>. Es importante <em>descansar</em> (общее правило).</p>
<p>Внимание: es verdad que, es evidente que, está claro que → <b>indicativo</b> (это утверждение факта). Об этом завтра.</p>
<div class="tip">Alegrarse <b>de</b> que, tener miedo <b>de</b> que, estar contento <b>de</b> que; но me alegra que (без de).</div>` },
  vocab: [
    ['alegrarse de', 'радоваться', 'Me alegro de que estés bien.'],
    ['molestar', 'раздражать, мешать', 'Me molesta que llegue tarde.'],
    ['sorprender', 'удивлять', 'Me sorprende que no lo sepa.'],
    ['dar miedo', 'пугать', 'Me da miedo que viaje sola.'],
    ['es una pena que', 'жаль, что', 'Es una pena que no vengas.'],
    ['es lógico que', 'логично, что', 'Es lógico que esté cansado.'],
    ['sentir', 'сожалеть; чувствовать', 'Siento que no puedas venir.'],
    ['la vergüenza', 'стыд', 'Me da vergüenza hablar en público.']
  ],
  exercises: [
    { t: 'fill', q: 'Me alegro de que ___ (tú, estar) mejor.', a: ['estés'] },
    { t: 'mc', q: 'Es una pena que no ___ venir a la boda.', o: ['puedas', 'puedes', 'poder'], a: 0 },
    { t: 'fill', q: 'Es importante que los niños ___ (dormir) ocho horas.', a: ['duerman'] },
    { t: 'mc', q: 'Me molesta ___ tan tarde.', o: ['levantarme', 'que me levante', 'que me levanto'], a: 0, e: 'Один субъект → инфинитив.' },
    { t: 'fill', q: 'Me sorprende que Ana no ___ (saber) nada del tema.', a: ['sepa'] },
    { t: 'fill', q: 'Es lógico que ___ (ellos, tener) miedo: es su primer vuelo.', a: ['tengan'] },
    { t: 'order', s: 'Me da miedo que mi hija viaje sola por Asia.' },
    { t: 'tr', q: 'Мне жаль, что ты не можешь остаться.', a: ['Siento que no puedas quedarte.', 'Siento que no te puedas quedar.', 'Lamento que no puedas quedarte.'] },
    { t: 'mc', q: 'No es justo que siempre ___ yo la cuenta.', o: ['pague', 'pago', 'pagar'], a: 0 },
    { t: 'tr', q: 'Мне стыдно, что он так себя ведёт.', a: ['Me da vergüenza que se comporte así.', 'Me da vergüenza que se porte así.'] },
    { t: 'dict', s: 'Es mejor que hablemos con calma y que nadie grite.', ru: 'Лучше, чтобы мы поговорили спокойно и никто не кричал.' }
  ]
};
D[22] = {
  title: 'Мнение и сомнение',
  grammar: { title: 'Creo que + indicativo / No creo que + subjuntivo', html: `
<p>Утверждаем → indicativo. Отрицаем или сомневаемся → subjuntivo.</p>
<table><tr><th>Indicativo</th><th>Subjuntivo</th></tr>
<tr><td>Creo que <em>tiene</em> razón.</td><td>No creo que <em>tenga</em> razón.</td></tr>
<tr><td>Pienso que <em>es</em> caro.</td><td>No pienso que <em>sea</em> caro.</td></tr>
<tr><td>Es verdad que <em>trabaja</em> mucho.</td><td>No es verdad que <em>trabaje</em> mucho.</td></tr>
<tr><td>Está claro que <em>viene</em>.</td><td>Dudo que <em>venga</em>.</td></tr>
<tr><td>Estoy seguro de que <em>sabe</em>.</td><td>No estoy seguro de que <em>sepa</em>.</td></tr></table>
<p>Всегда subjuntivo: dudar que, no creer que, no parecer que, es posible que, es probable que, puede que.</p>
<p>Всегда indicativo: creer, pensar, opinar, parecer, suponer, estar seguro de, es evidente/obvio/cierto/verdad que (в утверждении).</p>
<div class="tip">Вопрос ¿Crees que…? — обычно indicativo: ¿Crees que <em>lloverá</em>?</div>` },
  vocab: [
    ['dudar', 'сомневаться', 'Dudo que llegue a tiempo.'],
    ['estar seguro/a de', 'быть уверенным в', 'Estoy segura de que es él.'],
    ['es evidente que', 'очевидно, что', 'Es evidente que no le gusta.'],
    ['puede que', 'возможно, что', 'Puede que llueva.'],
    ['opinar', 'считать, полагать', '¿Qué opinas del tema?'],
    ['tener razón', 'быть правым', 'Creo que tienes razón.'],
    ['la opinión', 'мнение', 'En mi opinión, es un error.'],
    ['equivocarse', 'ошибаться', 'No creo que se equivoque.']
  ],
  exercises: [
    { t: 'mc', q: 'Creo que Luis ___ razón.', o: ['tiene', 'tenga', 'tener'], a: 0 },
    { t: 'mc', q: 'No creo que Luis ___ razón.', o: ['tenga', 'tiene', 'tendrá'], a: 0 },
    { t: 'fill', q: 'Dudo que el paquete ___ (llegar) hoy.', a: ['llegue'] },
    { t: 'fill', q: 'Es evidente que no le ___ (gustar) la idea.', a: ['gusta'] },
    { t: 'fill', q: 'Puede que ___ (nosotros, equivocarse), pero lo intentaremos.', a: ['nos equivoquemos'] },
    { t: 'mc', q: 'No es verdad que los españoles ___ siempre tarde.', o: ['cenen', 'cenan', 'cenar'], a: 0 },
    { t: 'mc', q: 'Estoy seguro de que ___ el trabajo.', o: ['conseguirás', 'consigas', 'consiguieras'], a: 0 },
    { t: 'order', s: 'No pienso que sea una buena idea gastar tanto.' },
    { t: 'tr', q: 'Я не думаю, что он знает правду.', a: ['No creo que sepa la verdad.', 'No creo que él sepa la verdad.', 'No pienso que sepa la verdad.'] },
    { t: 'tr', q: 'Я думаю, что он ошибается.', a: ['Creo que se equivoca.', 'Creo que él se equivoca.', 'Pienso que se equivoca.'] },
    { t: 'dict', s: 'En mi opinión, es probable que cambien la fecha.', ru: 'По моему мнению, вероятно, что они поменяют дату.' }
  ]
};
D[23] = {
  title: 'Цель: para que',
  grammar: { title: 'Para + inf, para que + subjuntivo', html: `
<p>Цель с тем же субъектом → <b>para + инфинитив</b>. Цель для другого субъекта → <b>para que + subjuntivo</b>.</p>
<div class="ex">Trabajo <em>para vivir</em>. — Trabajo <em>para que mis hijos vivan</em> mejor.</div>
<p>Синонимы с subjuntivo: <b>a fin de que</b>, <b>con el fin de que</b>, <b>con el objetivo de que</b> (формальнее).</p>
<p>Другие союзы, требующие subjuntivo всегда: <b>sin que</b> (без того чтобы), <b>antes de que</b> (прежде чем), <b>a no ser que / a menos que</b> (если только не), <b>en caso de que</b> (в случае если), <b>con tal de que</b> (при условии что).</p>
<div class="ex"><span data-say="Reciclamos para que el planeta no se llene de basura.">Reciclamos <em>para que</em> el planeta no <em>se llene</em> de basura.</span></div>
<div class="tip">Не путай: <b>porque</b> + indicativo (причина) vs <b>para que</b> + subjuntivo (цель).</div>` },
  vocab: [
    ['el medio ambiente', 'окружающая среда', 'Hay que proteger el medio ambiente.'],
    ['reciclar', 'перерабатывать', 'Reciclamos el vidrio y el papel.'],
    ['la basura', 'мусор', 'Separo la basura en casa.'],
    ['contaminar', 'загрязнять', 'Las fábricas contaminan el río.'],
    ['la contaminación', 'загрязнение', 'La contaminación del aire es grave.'],
    ['el cambio climático', 'изменение климата', 'El cambio climático es real.'],
    ['ahorrar energía', 'экономить энергию', 'Apaga la luz para ahorrar energía.'],
    ['el residuo', 'отход', 'Reducimos los residuos plásticos.']
  ],
  exercises: [
    { t: 'mc', q: 'Separo la basura ___ reciclar más fácilmente.', o: ['para', 'para que', 'porque'], a: 0 },
    { t: 'fill', q: 'Te lo explico para que lo ___ (entender).', a: ['entiendas'] },
    { t: 'mc', q: 'Apagan las luces ___ ahorrar energía.', o: ['para', 'para que', 'sin que'], a: 0 },
    { t: 'fill', q: 'Cerraron la fábrica para que no ___ (contaminar) el río.', a: ['contaminara', 'contamine'], e: 'Реально здесь contaminara, но presente тоже принимаем: главное — subjuntivo.' },
    { t: 'fill', q: 'Salió de casa sin que nadie lo ___ (ver).', a: ['viera', 'vea'] },
    { t: 'mc', q: 'No reciclo ___ no tengo contenedores cerca.', o: ['porque', 'para que', 'a fin de que'], a: 0 },
    { t: 'order', s: 'Reducimos los residuos para que el planeta esté más limpio.' },
    { t: 'tr', q: 'Я звоню тебе, чтобы ты знал новость.', a: ['Te llamo para que sepas la noticia.', 'Te llamo para que sepas la noticia'] },
    { t: 'fill', q: 'Iremos a la playa a menos que ___ (llover).', a: ['llueva'] },
    { t: 'fill', q: 'En caso de que ___ (haber) problemas, avísame.', a: ['haya'] },
    { t: 'dict', s: 'Hay que actuar ya para que el cambio climático no empeore.', ru: 'Нужно действовать уже сейчас, чтобы изменение климата не ухудшалось.' }
  ]
};
D[24] = {
  title: 'Проверка модуля 4', review: true,
  grammar: { title: 'Шпаргалка модуля 4', html: `
<ul><li>Формы: от yo-формы presente, -ar → e, -er/-ir → a. Особые: sea, esté, vaya, haya, sepa, dé.</li>
<li>Желание/влияние (querer, pedir, esperar, ojalá, recomendar) → que + subj; тот же субъект → инфинитив.</li>
<li>Эмоция и оценка (me alegra que, es importante que, es una pena que) → subj.</li>
<li>Мнение: creo que + ind; no creo / dudo / es posible que + subj; es verdad que + ind.</li>
<li>Цель: para + inf / para que + subj; всегда subj после sin que, antes de que, a menos que, en caso de que.</li></ul>` },
  vocab: [],
  exercises: [
    { t: 'conj', verbs: ['tener', 'hacer', 'ser', 'ir', 'saber', 'poder', 'volver', 'pedir', 'llegar'], tenses: ['subj'], n: 6 },
    { t: 'mc', q: 'Quiero ___ contigo esta tarde.', o: ['hablar', 'que hable', 'que hablo'], a: 0 },
    { t: 'mc', q: 'Quiero que ___ conmigo esta tarde.', o: ['hables', 'hablas', 'hablar'], a: 0 },
    { t: 'fill', q: 'Es importante que ___ (vosotros, llegar) puntuales.', a: ['lleguéis'] },
    { t: 'fill', q: 'No creo que el tren ___ (salir) a su hora.', a: ['salga'] },
    { t: 'fill', q: 'Creo que el tren ___ (salir) a su hora.', a: ['sale', 'saldrá'] },
    { t: 'mc', q: 'Me alegro de que ___ conseguido el puesto.', o: ['hayas', 'has', 'habías'], a: 0, e: 'Perfecto de subjuntivo: haya + participio.' },
    { t: 'fill', q: 'Te presto el libro para que lo ___ (leer) este fin de semana.', a: ['leas'] },
    { t: 'mc', q: 'Es evidente que ___ mucho para el examen.', o: ['has estudiado', 'hayas estudiado', 'estudies'], a: 0 },
    { t: 'order', s: 'Ojalá mis padres me permitan viajar sola este verano.' },
    { t: 'tr', q: 'Мне жаль, что вы (vosotros) не можете прийти.', a: ['Siento que no podáis venir.', 'Es una pena que no podáis venir.', 'Lamento que no podáis venir.'] },
    { t: 'tr', q: 'Возможно, они правы.', a: ['Puede que tengan razón.', 'Es posible que tengan razón.', 'Quizás tengan razón.'] },
    { t: 'fill', q: 'Dudo que ___ (haber) entradas para el sábado.', a: ['haya'] },
    { t: 'match', pairs: [['reciclar', 'перерабатывать'], ['dudar', 'сомневаться'], ['exigir', 'требовать'], ['molestar', 'раздражать'], ['la basura', 'мусор'], ['tener razón', 'быть правым']] },
    { t: 'dict', s: 'Espero que no sea demasiado tarde para reducir la contaminación.', ru: 'Надеюсь, что ещё не слишком поздно, чтобы уменьшить загрязнение.' }
  ]
};
})(window.ST_DATA.days);
