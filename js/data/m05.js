/* Модуль 5 · Дни 25–30 · Subjuntivo II и повелительное */
(function (D) {
D[25] = {
  title: 'Временные союзы',
  grammar: { title: 'Cuando + subjuntivo для будущего', html: `
<p>Когда речь о <b>будущем</b>, после временных союзов ставится <b>subjuntivo</b>. Когда о привычке или прошлом — indicativo.</p>
<table><tr><th>Будущее → subjuntivo</th><th>Привычка / прошлое → indicativo</th></tr>
<tr><td>Cuando <em>llegue</em>, te llamo.</td><td>Cuando <em>llego</em>, siempre llamo. / Cuando <em>llegué</em>, llamé.</td></tr>
<tr><td>En cuanto <em>termine</em>, salimos.</td><td>En cuanto <em>terminaba</em>, salía.</td></tr>
<tr><td>Esperaré hasta que <em>vuelvas</em>.</td><td>Esperé hasta que <em>volvió</em>.</td></tr></table>
<p>Союзы: <b>cuando</b>, <b>en cuanto / tan pronto como</b> (как только), <b>hasta que</b> (пока не), <b>mientras</b> (пока), <b>después de que</b>, <b>siempre que</b> (всякий раз, когда).</p>
<p><b>Antes de que</b> — всегда subjuntivo: Vete antes de que <em>llegue</em> tu padre.</p>
<div class="tip">Тот же субъект → инфинитив: Antes de <em>salir</em>, apaga la luz. Después de <em>cenar</em>, paseamos.</div>` },
  vocab: [
    ['en cuanto', 'как только', 'En cuanto llegue, te aviso.'],
    ['tan pronto como', 'как только', 'Tan pronto como pueda, te escribo.'],
    ['hasta que', 'пока не', 'Espera hasta que vuelva.'],
    ['mientras', 'пока (в течение)', 'Mientras estés aquí, ayúdame.'],
    ['siempre que', 'всякий раз, когда; при условии', 'Siempre que vengas, avísame.'],
    ['la fecha límite', 'крайний срок', 'La fecha límite es el lunes.'],
    ['aplazar', 'отложить', 'Aplazaron la reunión.'],
    ['de antemano', 'заранее', 'Gracias de antemano.']
  ],
  exercises: [
    { t: 'fill', q: 'Cuando ___ (yo, terminar) el informe, te lo envío.', a: ['termine'] },
    { t: 'fill', q: 'Cuando ___ (yo, terminar) el informe ayer, te lo envié.', a: ['terminé'] },
    { t: 'mc', q: 'En cuanto ___ noticias, te llamo.', o: ['tenga', 'tengo', 'tendré'], a: 0 },
    { t: 'fill', q: 'No te vayas hasta que ___ (venir) el médico.', a: ['venga'] },
    { t: 'mc', q: 'Antes de ___ , revisa la fecha límite.', o: ['enviarlo', 'que lo envíes', 'que lo envías'], a: 0, e: 'Тот же субъект → инфинитив.' },
    { t: 'fill', q: 'Aplazaremos la reunión antes de que ___ (ser) demasiado tarde.', a: ['sea'] },
    { t: 'order', s: 'Tan pronto como sepa algo, te lo diré.' },
    { t: 'tr', q: 'Когда ты приедешь, мы поужинаем вместе.', a: ['Cuando llegues, cenaremos juntos.', 'Cuando vengas, cenaremos juntos.', 'Cuando llegues, cenamos juntos.', 'Cuando llegues cenaremos juntos'] },
    { t: 'mc', q: 'Siempre que ___ a Madrid, visito a mi tía.', o: ['voy', 'vaya', 'iré'], a: 0, e: 'Привычка → indicativo.' },
    { t: 'fill', q: 'Mientras ___ (tú, estar) de viaje, yo cuidaré del perro.', a: ['estés'] },
    { t: 'dict', s: 'Avísame de antemano cuando sepas la fecha límite.', ru: 'Предупреди меня заранее, когда узнаешь крайний срок.' }
  ]
};
D[26] = {
  title: 'Относительные предложения',
  grammar: { title: 'Busco un piso que tenga / Tengo un piso que tiene', html: `
<p>Если объект <b>известен и существует</b> → indicativo. Если объект <b>искомый, гипотетический или его нет</b> → subjuntivo.</p>
<table><tr><th>Indicativo (конкретный)</th><th>Subjuntivo (неизвестный / нет)</th></tr>
<tr><td>Tengo un piso que <em>tiene</em> terraza.</td><td>Busco un piso que <em>tenga</em> terraza.</td></tr>
<tr><td>Conozco a alguien que <em>habla</em> chino.</td><td>¿Conoces a alguien que <em>hable</em> chino?</td></tr>
<tr><td>Hay un bar que <em>abre</em> a las seis.</td><td>No hay ningún bar que <em>abra</em> a las seis.</td></tr></table>
<p>Обобщающие: <b>quien</b>, <b>donde</b>, <b>lo que</b>, <b>el que</b> + subjuntivo, если неизвестно: Haz <em>lo que quieras</em>. Que venga <em>quien quiera</em>. Iremos <em>donde tú digas</em>.</p>
<div class="tip">Личное «a» перед конкретным человеком: Busco <em>a</em> la chica que trabaja aquí. Без «a» — если человек не конкретный: Busco una persona que sepa inglés.</div>` },
  vocab: [
    ['el piso', 'квартира', 'Busco un piso que sea luminoso.'],
    ['luminoso/a', 'светлый', 'Es un piso muy luminoso.'],
    ['la terraza', 'терраса, балкон', 'Quiero un piso con terraza.'],
    ['el casero / la casera', 'арендодатель', 'El casero es muy amable.'],
    ['la fianza', 'залог', 'Piden dos meses de fianza.'],
    ['amueblado/a', 'меблированный', 'Está amueblado.'],
    ['las afueras', 'окраина, пригород', 'Viven en las afueras.'],
    ['el inquilino / la inquilina', 'квартиросъёмщик', 'Los inquilinos pagan puntualmente.']
  ],
  exercises: [
    { t: 'mc', q: 'Busco un piso que ___ cerca del metro.', o: ['esté', 'está', 'estar'], a: 0 },
    { t: 'mc', q: 'Vivo en un piso que ___ cerca del metro.', o: ['está', 'esté', 'estuviera'], a: 0 },
    { t: 'fill', q: '¿Conoces a alguien que ___ (alquilar) habitaciones en las afueras?', a: ['alquile'] },
    { t: 'fill', q: 'No hay ningún casero que no ___ (pedir) fianza.', a: ['pida'] },
    { t: 'fill', q: 'Tengo un amigo que ___ (trabajar) en una inmobiliaria.', a: ['trabaja'] },
    { t: 'mc', q: 'Haz lo que ___ , pero decide ya.', o: ['quieras', 'quieres', 'querer'], a: 0 },
    { t: 'order', s: 'Necesitamos un inquilino que pague puntualmente.' },
    { t: 'tr', q: 'Я ищу квартиру, которая была бы меблирована.', a: ['Busco un piso que esté amueblado.', 'Busco un piso que esté amueblado'] },
    { t: 'mc', q: 'Iremos a cenar donde tú ___ .', o: ['digas', 'dices', 'dirás'], a: 0 },
    { t: 'fill', q: '¿Hay alguna tienda que ___ (abrir) los domingos por aquí?', a: ['abra'] },
    { t: 'dict', s: 'Quiero un piso luminoso que tenga terraza y que no esté en las afueras.', ru: 'Я хочу светлую квартиру, у которой есть терраса и которая не на окраине.' }
  ]
};
D[27] = {
  title: 'Imperativo',
  grammar: { title: 'Повелительное наклонение с местоимениями', html: `
<table><tr><th></th><th>Утвердительная</th><th>Отрицательная (= subjuntivo)</th></tr>
<tr><td>tú</td><td>habla, come, vive (= él presente)</td><td>no hables, no comas, no vivas</td></tr>
<tr><td>usted</td><td>hable, coma, viva (= subj)</td><td>no hable, no coma</td></tr>
<tr><td>nosotros</td><td>hablemos (= subj)</td><td>no hablemos</td></tr>
<tr><td>vosotros</td><td>hablad, comed, vivid (inf: -r → -d)</td><td>no habléis, no comáis</td></tr>
<tr><td>ustedes</td><td>hablen, coman</td><td>no hablen</td></tr></table>
<p>Особые tú: <b>ten, ven, pon, sal, haz, di, sé, ve</b>.</p>
<p>Местоимения: утвердительная — приклеиваются (<em>dímelo</em>, <em>levántate</em>, <em>póngase</em>); отрицательная — перед глаголом (<em>no me lo digas</em>, <em>no te levantes</em>).</p>
<p>Vosotros + os: sentad + os → <em>sentaos</em> (d выпадает). Nosotros + nos: vamos + nos → <em>vámonos</em>.</p>
<div class="tip">Рецепт по-испански — обычно infinitivo или imperativo usted/vosotros: <em>Pelar</em> las patatas / <em>Pele</em> las patatas / <em>Pelad</em> las patatas.</div>` },
  vocab: [
    ['pelar', 'чистить (овощи)', 'Pela las patatas.'],
    ['picar', 'мелко нарезать', 'Pica la cebolla.'],
    ['freír', 'жарить', 'Fríe los ajos a fuego lento.'],
    ['hervir', 'кипятить, варить', 'Hierve el agua.'],
    ['añadir', 'добавить', 'Añade una pizca de sal.'],
    ['la sartén', 'сковорода', 'Calienta la sartén.'],
    ['a fuego lento', 'на медленном огне', 'Cocina a fuego lento.'],
    ['remover', 'помешивать', 'Remueve bien la mezcla.']
  ],
  exercises: [
    { t: 'conj', verbs: ['tener', 'venir', 'poner', 'salir', 'hacer', 'decir', 'ser', 'ir'], tenses: ['imp'], persons: [1], n: 4 },
    { t: 'conj', verbs: ['hablar', 'comer', 'poner', 'hacer', 'ir', 'salir'], tenses: ['impNeg'], persons: [1, 2], n: 4 },
    { t: 'fill', q: 'Primero ___ (tú, pelar) las patatas y ___ (picar) la cebolla.', a: [['pela'], ['pica']] },
    { t: 'mc', q: 'La sal… ___ ahora, antes de remover.', o: ['añádela', 'la añade', 'añade la'], a: 0, e: 'Утвердительный императив + местоимение приклеено, с акцентом.' },
    { t: 'mc', q: '___ el aceite tan caliente: se quema.', o: ['No pongas', 'No pon', 'No pones'], a: 0 },
    { t: 'fill', q: '¿Le doy el recibo? — Sí, ___ (dar + me + lo, tú).', a: ['dámelo'] },
    { t: 'fill', q: '¿Le doy el recibo? — No, no ___ (dar + me + lo, tú).', a: ['me lo des'] },
    { t: 'order', s: 'Siéntese, por favor, y espere un momento.' },
    { t: 'tr', q: 'Не волнуйся (tú), всё будет хорошо.', a: ['No te preocupes, todo saldrá bien.', 'No te preocupes, todo irá bien.', 'No te preocupes, todo va a salir bien.', 'No te preocupes, todo estará bien.'] },
    { t: 'fill', q: 'Niños, ___ (vosotros, sentarse) y ___ (callarse).', a: [['sentaos'], ['callaos']] },
    { t: 'dict', s: 'Fríe los ajos a fuego lento y añade el tomate.', ru: 'Обжарь чеснок на медленном огне и добавь помидор.' }
  ]
};
D[28] = {
  title: 'Уступка: aunque',
  grammar: { title: 'Aunque + indicativo / subjuntivo', html: `
<p><b>Aunque + indicativo</b> — «хотя» (факт, известный собеседнику или утверждаемый). <b>Aunque + subjuntivo</b> — «даже если» (гипотеза) или «пусть даже» (факт, который говорящий считает неважным).</p>
<table><tr><th>Indicativo</th><th>Subjuntivo</th></tr>
<tr><td>Aunque <em>llueve</em>, saldré. (Дождь идёт, факт.)</td><td>Aunque <em>llueva</em>, saldré. (Даже если пойдёт.)</td></tr>
<tr><td>Aunque <em>es</em> caro, lo compro.</td><td>Aunque <em>sea</em> caro, lo compro. (Пусть дорого, неважно.)</td></tr></table>
<p>Синонимы: <b>a pesar de que</b> (+ ind), <b>a pesar de</b> + inf/сущ., <b>por mucho que / por más que</b> + subj (сколько бы ни), <b>por muy + adj + que</b> + subj.</p>
<div class="ex"><span data-say="Por mucho que insistas, no voy a cambiar de opinión.">Por mucho que <em>insistas</em>, no voy a cambiar de opinión.</span></div>` },
  vocab: [
    ['a pesar de', 'несмотря на', 'A pesar del frío, salimos.'],
    ['por mucho que', 'сколько бы ни', 'Por mucho que corras, no llegas.'],
    ['terco/a', 'упрямый', 'Es muy terca.'],
    ['sincero/a', 'искренний', 'Es sincero, aunque a veces duele.'],
    ['tímido/a', 'застенчивый', 'De niño era tímido.'],
    ['sensible', 'чувствительный', 'Es una persona muy sensible.'],
    ['insistir', 'настаивать', 'No insistas.'],
    ['ceder', 'уступать', 'Al final cedió.']
  ],
  exercises: [
    { t: 'mc', q: 'Aunque ___ mucho frío, hemos salido a pasear. (это факт)', o: ['hace', 'haga', 'hacer'], a: 0 },
    { t: 'mc', q: 'Aunque ___ mucho frío mañana, saldremos a pasear. (гипотеза)', o: ['haga', 'hace', 'hará'], a: 0 },
    { t: 'fill', q: 'Por mucho que ___ (tú, insistir), no voy a ceder.', a: ['insistas'] },
    { t: 'fill', q: 'A pesar de ___ (ser) tímida, dio un discurso estupendo.', a: ['ser'], e: 'A pesar de + инфинитив.' },
    { t: 'mc', q: 'Aunque no le ___ , siempre es sincero.', o: ['guste', 'gusta que', 'gustar'], a: 0, e: '«Даже если ему не нравится» — гипотеза.' },
    { t: 'order', s: 'Por muy terco que sea, al final siempre cede.' },
    { t: 'tr', q: 'Хотя он устал, он продолжил работать.', a: ['Aunque estaba cansado, siguió trabajando.', 'Aunque estaba cansado, continuó trabajando.', 'Aunque estaba cansado siguió trabajando'] },
    { t: 'tr', q: 'Даже если будет дорого, я это куплю.', a: ['Aunque sea caro, lo compraré.', 'Aunque sea caro, lo compro.', 'Aunque sea caro lo compraré'] },
    { t: 'fill', q: 'A pesar de que ___ (llover) toda la mañana, el partido se jugó.', a: ['llovió', 'había llovido', 'llovía'] },
    { t: 'mc', q: 'Por más que ___ , no encuentro las llaves.', o: ['busco', 'busque', 'buscar'], a: 1, e: 'Por más que + subjuntivo: busque.' },
    { t: 'dict', s: 'Aunque sea muy sensible, sabe decir las cosas con sinceridad.', ru: 'Пусть он и очень чувствительный, он умеет говорить вещи искренне.' }
  ]
};
D[29] = {
  title: 'Вероятность: quizás, tal vez',
  grammar: { title: 'Как говорить «возможно»', html: `
<table><tr><th>Выражение</th><th>Наклонение</th><th>Пример</th></tr>
<tr><td>quizá(s), tal vez, posiblemente, probablemente</td><td>subj (чаще) / ind</td><td>Quizás <em>venga</em>. Tal vez <em>llueva</em>.</td></tr>
<tr><td>a lo mejor, igual, lo mismo</td><td>только indicativo</td><td>A lo mejor <em>viene</em>. Igual <em>llueve</em>.</td></tr>
<tr><td>es posible / probable que, puede que</td><td>только subjuntivo</td><td>Es probable que <em>venga</em>.</td></tr>
<tr><td>seguramente, seguro que</td><td>indicativo</td><td>Seguro que <em>viene</em>.</td></tr></table>
<p>Если quizás стоит <b>после</b> глагола — indicativo: Viene, quizás.</p>
<p>Perfecto de subjuntivo (haya + participio) для прошлого: Quizás <em>haya salido</em> ya. Es posible que no <em>hayan recibido</em> el correo.</p>` },
  vocab: [
    ['quizás', 'может быть', 'Quizás llegue tarde.'],
    ['tal vez', 'возможно', 'Tal vez sea mejor esperar.'],
    ['igual', 'может быть (разг.); одинаково', 'Igual no viene.'],
    ['la previsión', 'прогноз', 'La previsión anuncia tormentas.'],
    ['la tormenta', 'гроза, буря', 'Se acerca una tormenta.'],
    ['despejado/a', 'ясный (о небе)', 'El cielo está despejado.'],
    ['nublado/a', 'облачный', 'Está nublado desde ayer.'],
    ['la ola de calor', 'волна жары', 'Llega una ola de calor.']
  ],
  exercises: [
    { t: 'mc', q: 'Quizás ___ tormenta esta tarde, según la previsión.', o: ['haya', 'hay', 'habrá que'], a: 0 },
    { t: 'mc', q: 'A lo mejor ___ mañana a la playa.', o: ['vamos', 'vayamos', 'fuéramos'], a: 0, e: 'A lo mejor → indicativo.' },
    { t: 'fill', q: 'Es probable que el cielo ___ (estar) despejado el domingo.', a: ['esté'] },
    { t: 'fill', q: 'Tal vez ___ (ellos, cancelar) el vuelo por la ola de calor.', a: ['cancelen'] },
    { t: 'mc', q: 'No contesta… quizás ___ ya.', o: ['haya salido', 'ha salido que', 'salga ya'], a: 0 },
    { t: 'mc', q: 'Seguro que ___ a tiempo, no te preocupes.', o: ['llegamos', 'lleguemos', 'llegáramos'], a: 0 },
    { t: 'order', s: 'Es posible que no hayan recibido nuestro correo.' },
    { t: 'tr', q: 'Возможно, завтра будет облачно.', a: ['Quizás mañana esté nublado.', 'Tal vez mañana esté nublado.', 'Es posible que mañana esté nublado.', 'Quizás esté nublado mañana.', 'Puede que mañana esté nublado.'] },
    { t: 'tr', q: 'Может быть, он не придёт.', a: ['A lo mejor no viene.', 'Quizás no venga.', 'Igual no viene.', 'Tal vez no venga.', 'Puede que no venga.'] },
    { t: 'conj', verbs: ['salir', 'ver', 'hacer', 'llegar'], tenses: ['subjPerf'], n: 3 },
    { t: 'dict', s: 'Igual la previsión se equivoca y al final hace sol.', ru: 'Может быть, прогноз ошибается, и в итоге будет солнечно.' }
  ]
};
D[30] = {
  title: 'Проверка модуля 5', review: true,
  grammar: { title: 'Шпаргалка модуля 5', html: `
<ul><li>Cuando / en cuanto / hasta que + subj для будущего; ind для привычки и прошлого; antes de que всегда subj.</li>
<li>Относительные: известный объект → ind; искомый или отсутствующий → subj.</li>
<li>Imperativo: tú = él presente (ten, ven, pon, sal, haz, di, sé, ve); отрицание = subj; местоимения приклеиваются в утвердительной форме.</li>
<li>Aunque + ind (факт) / + subj (даже если); por mucho que + subj.</li>
<li>Quizás / tal vez + subj; a lo mejor / igual + ind; es probable que + subj.</li></ul>` },
  vocab: [],
  exercises: [
    { t: 'fill', q: 'Cuando ___ (tú, tener) tiempo, llámame.', a: ['tengas'] },
    { t: 'fill', q: 'Busco a alguien que ___ (saber) arreglar ordenadores.', a: ['sepa'] },
    { t: 'mc', q: 'Conozco a un chico que ___ arreglar ordenadores.', o: ['sabe', 'sepa', 'supiera'], a: 0 },
    { t: 'conj', verbs: ['tener', 'poner', 'hacer', 'decir', 'venir', 'salir'], tenses: ['imp', 'impNeg'], persons: [1, 2], n: 5 },
    { t: 'fill', q: 'No ___ (tú, decir + se + lo) todavía: es una sorpresa.', a: ['se lo digas'] },
    { t: 'fill', q: '___ (usted, sentarse) aquí, por favor.', a: ['Siéntese', 'siéntese'] },
    { t: 'mc', q: 'Aunque ___ cansado, voy a ir al gimnasio. (даже если)', o: ['esté', 'estoy', 'estaré'], a: 0 },
    { t: 'mc', q: 'A lo mejor ___ la reunión a la semana que viene.', o: ['aplazan', 'aplacen', 'aplazaran'], a: 0 },
    { t: 'fill', q: 'Es probable que ___ (haber) tormenta esta noche.', a: ['haya'] },
    { t: 'fill', q: 'Esperaré hasta que ___ (terminar) la ola de calor.', a: ['termine'] },
    { t: 'order', s: 'No hay ningún piso que sea barato en el centro.' },
    { t: 'tr', q: 'Как только узнаю, я тебе скажу.', a: ['En cuanto lo sepa, te lo digo.', 'En cuanto lo sepa, te lo diré.', 'Tan pronto como lo sepa, te lo diré.', 'En cuanto lo sepa te lo diré', 'Cuando lo sepa, te lo diré.'] },
    { t: 'tr', q: 'Сколько бы ты ни настаивал, я не уступлю.', a: ['Por mucho que insistas, no cederé.', 'Por mucho que insistas, no voy a ceder.', 'Por más que insistas, no cederé.'] },
    { t: 'match', pairs: [['aplazar', 'отложить'], ['ceder', 'уступать'], ['la fianza', 'залог'], ['remover', 'помешивать'], ['despejado', 'ясный (о небе)'], ['de antemano', 'заранее']] },
    { t: 'dict', s: 'Pon la mesa antes de que lleguen los invitados.', ru: 'Накрой на стол до того, как придут гости.' }
  ]
};
})(window.ST_DATA.days);
