/* Модуль 6 · Дни 31–36 · Косвенная речь и нереальные условия */
(function (D) {
D[31] = {
  title: 'Косвенная речь в настоящем',
  grammar: { title: 'Dice que…, pregunta si…', html: `
<p>Если глагол речи в <b>presente / perfecto</b> (dice, ha dicho, pregunta), времена <b>не меняются</b>, но меняются лицо, местоимения и указатели.</p>
<table><tr><th>Прямая речь</th><th>Косвенная</th></tr>
<tr><td>«Estoy cansado.»</td><td>Dice que <em>está</em> cansado.</td></tr>
<tr><td>«¿Vienes mañana?»</td><td>Pregunta <em>si</em> vengo mañana.</td></tr>
<tr><td>«¿Dónde vives?»</td><td>Pregunta <em>dónde</em> vivo. (вопросительное слово с ударением)</td></tr>
<tr><td>«Ven aquí.» (imperativo)</td><td>Dice que <em>venga</em>. (→ subjuntivo)</td></tr>
<tr><td>«No lo toques.»</td><td>Dice que no lo <em>toque</em>.</td></tr></table>
<p>Приказ и просьба передаются через <b>que + subjuntivo</b> или pedir/ordenar que + subj.</p>
<p>Указатели: aquí → allí, este → ese, mi → su, ahora → en ese momento (если контекст меняется).</p>` },
  vocab: [
    ['el mensaje', 'сообщение', 'Me ha dejado un mensaje.'],
    ['el recado', 'сообщение (устное), поручение', '¿Quiere dejar un recado?'],
    ['comunicar', 'сообщать', 'Nos comunican que hay huelga.'],
    ['añadir', 'добавлять', 'Añade que llegará tarde.'],
    ['la huelga', 'забастовка', 'Mañana hay huelga de metro.'],
    ['confirmar', 'подтверждать', 'Confirma que viene.'],
    ['la reunión de vecinos', 'собрание жильцов', 'Hay reunión de vecinos el jueves.'],
    ['el asunto', 'вопрос, дело, тема', 'Es un asunto delicado.']
  ],
  exercises: [
    { t: 'mc', q: '«Tengo mucho trabajo.» → Dice que ___ mucho trabajo.', o: ['tiene', 'tenga', 'tenía'], a: 0 },
    { t: 'fill', q: '«¿Vas a venir a la reunión?» → Pregunta ___ voy a ir a la reunión.', a: ['si'] },
    { t: 'fill', q: '«¿Dónde está la parada?» → Pregunta ___ está la parada.', a: ['dónde'] },
    { t: 'mc', q: '«Llámame esta noche.» → Me dice que ___ esta noche.', o: ['le llame', 'le llamo', 'llamarle'], a: 0, e: 'Императив → subjuntivo.' },
    { t: 'fill', q: '«No toquéis nada.» → Nos pide que no ___ (tocar) nada.', a: ['toquemos'] },
    { t: 'order', s: 'El vecino dice que mañana hay huelga de metro.' },
    { t: 'tr', q: 'Она спрашивает, есть ли у меня время.', a: ['Pregunta si tengo tiempo.', 'Ella pregunta si tengo tiempo.', 'Me pregunta si tengo tiempo.'] },
    { t: 'tr', q: 'Он говорит, чтобы мы подождали здесь.', a: ['Dice que esperemos aquí.', 'Él dice que esperemos aquí.', 'Nos dice que esperemos aquí.'] },
    { t: 'mc', q: '«Confirmaré la cita mañana.» → Ha dicho que ___ la cita mañana.', o: ['confirmará', 'confirme', 'confirmaría'], a: 0, e: 'Глагол речи в perfecto → времена не меняются.' },
    { t: 'fill', q: '«¿Has leído el mensaje?» → Me pregunta si ___ (leer) el mensaje.', a: ['he leído'] },
    { t: 'dict', s: 'Ana pregunta si hay reunión de vecinos y añade que ella no puede ir.', ru: 'Ана спрашивает, будет ли собрание жильцов, и добавляет, что она не сможет пойти.' }
  ]
};
D[32] = {
  title: 'Косвенная речь в прошлом',
  grammar: { title: 'Dijo que…: сдвиг времён', html: `
<p>Если глагол речи в <b>indefinido / imperfecto</b> (dijo, preguntó, contó), времена сдвигаются назад:</p>
<table><tr><th>Прямая речь</th><th>Косвенная (dijo que…)</th></tr>
<tr><td>presente: «Vivo aquí.»</td><td>imperfecto: Dijo que <em>vivía</em> allí.</td></tr>
<tr><td>perfecto: «He terminado.»</td><td>pluscuamperfecto: Dijo que <em>había terminado</em>.</td></tr>
<tr><td>indefinido: «Fui a Roma.»</td><td>pluscuamperfecto: Dijo que <em>había ido</em> a Roma.</td></tr>
<tr><td>futuro: «Llamaré.»</td><td>condicional: Dijo que <em>llamaría</em>.</td></tr>
<tr><td>imperfecto: «Era feliz.»</td><td>imperfecto: Dijo que <em>era</em> feliz. (без изменений)</td></tr>
<tr><td>imperativo / subj: «Ven.»</td><td>imperfecto de subj: Dijo que <em>viniera</em>. (завтра)</td></tr></table>
<p>Указатели: hoy → ese día, ayer → el día anterior, mañana → al día siguiente, ahora → entonces, aquí → allí.</p>
<div class="tip">Если факт по-прежнему верен, можно не сдвигать: Dijo que Madrid <em>es</em> la capital.</div>` },
  vocab: [
    ['la noticia', 'новость', 'Nos dio la noticia ayer.'],
    ['el periodista / la periodista', 'журналист', 'El periodista preguntó por el asunto.'],
    ['el titular', 'заголовок', 'El titular era alarmante.'],
    ['la entrevista', 'интервью', 'Concedió una entrevista.'],
    ['al día siguiente', 'на следующий день', 'Dijo que llamaría al día siguiente.'],
    ['el día anterior', 'накануне', 'Había llegado el día anterior.'],
    ['la fuente', 'источник', 'Según fuentes oficiales…'],
    ['declarar', 'заявлять', 'El ministro declaró que dimitiría.']
  ],
  exercises: [
    { t: 'mc', q: '«Estoy enfermo.» → Dijo que ___ enfermo.', o: ['estaba', 'está', 'estuvo'], a: 0 },
    { t: 'fill', q: '«He perdido las llaves.» → Me contó que ___ (perder) las llaves.', a: ['había perdido'] },
    { t: 'fill', q: '«Te llamaré mañana.» → Me dijo que me ___ (llamar) al día siguiente.', a: ['llamaría'] },
    { t: 'mc', q: '«¿Dónde trabajas?» → Me preguntó dónde ___ .', o: ['trabajaba', 'trabajo', 'trabajaría'], a: 0 },
    { t: 'fill', q: '«Fuimos a Roma el año pasado.» → Dijeron que ___ (ir) a Roma el año anterior.', a: ['habían ido'] },
    { t: 'order', s: 'El ministro declaró que dimitiría al día siguiente.' },
    { t: 'tr', q: 'Она сказала, что не сможет прийти.', a: ['Dijo que no podría venir.', 'Ella dijo que no podría venir.', 'Dijo que no podía venir.'] },
    { t: 'tr', q: 'Журналист спросил, приедет ли президент.', a: ['El periodista preguntó si vendría el presidente.', 'El periodista preguntó si el presidente vendría.', 'El periodista preguntó si iba a venir el presidente.'] },
    { t: 'mc', q: '«Espera aquí.» → Me dijo que ___ allí.', o: ['esperara', 'espere', 'esperaba'], a: 0, e: 'Императив после dijo → imperfecto de subjuntivo.' },
    { t: 'fill', q: '«Hoy no tengo tiempo.» → Dijo que ese día no ___ (tener) tiempo.', a: ['tenía'] },
    { t: 'dict', s: 'Según la fuente, el titular decía que la huelga había terminado.', ru: 'По данным источника, заголовок гласил, что забастовка закончилась.' }
  ]
};
D[33] = {
  title: 'Imperfecto de subjuntivo',
  grammar: { title: 'Формы -ra и когда они нужны', html: `
<p>Берём <b>3-е лицо мн. ч. indefinido</b>, убираем <b>-ron</b>, добавляем <b>-ra, -ras, -ra, -´ramos, -rais, -ran</b>.</p>
<table><tr><th>hablaron → habla-</th><th>tuvieron → tuvie-</th><th>fueron → fue-</th><th>dijeron → dije-</th></tr>
<tr><td>hablara<br>hablaras<br>hablara<br>habláramos<br>hablarais<br>hablaran</td><td>tuviera<br>tuvieras<br>tuviera<br>tuviéramos<br>tuvierais<br>tuvieran</td><td>fuera<br>fueras<br>fuera<br>fuéramos<br>fuerais<br>fueran</td><td>dijera<br>dijeras<br>dijera<br>dijéramos<br>dijerais<br>dijeran</td></tr></table>
<p>Есть равноправная форма на -se (hablase, tuviese), но -ra встречается чаще.</p>
<p>Когда используется:</p>
<ul><li>Те же триггеры, что и для presente de subjuntivo, но главный глагол в прошлом: Quería que <em>vinieras</em>. Me alegré de que <em>estuvieras</em> bien. No creía que <em>fuera</em> verdad.</li>
<li>После <b>como si</b> (как будто): Habla <em>como si lo supiera</em> todo.</li>
<li>Вежливое желание: <em>Quisiera</em> un café.</li>
<li>Нереальное условие с si (завтра).</li></ul>` },
  vocab: [
    ['como si', 'как будто', 'Actúa como si nada hubiera pasado.'],
    ['quisiera', 'я хотел бы (вежл.)', 'Quisiera pedir un favor.'],
    ['el sueño', 'мечта; сон', 'Mi sueño era vivir en Roma.'],
    ['cumplir un sueño', 'осуществить мечту', 'Cumplió su sueño de viajar.'],
    ['el deseo', 'желание', 'Pide un deseo.'],
    ['esperanza', 'надежда', 'No pierdas la esperanza.'],
    ['lograr', 'добиться', 'Logró que le subieran el sueldo.'],
    ['el esfuerzo', 'усилие', 'Con esfuerzo se consigue todo.']
  ],
  exercises: [
    { t: 'conj', verbs: ['hablar', 'tener', 'ser', 'hacer', 'poder', 'decir', 'ir', 'venir', 'saber'], tenses: ['subjImp'], n: 6 },
    { t: 'fill', q: 'Mi madre quería que ___ (yo, estudiar) medicina.', a: ['estudiara', 'estudiase'] },
    { t: 'mc', q: 'Habla de París como si ___ allí toda la vida.', o: ['hubiera vivido', 'vivió', 'viva'], a: 0 },
    { t: 'fill', q: 'No creía que ___ (ser) tan difícil cumplir ese sueño.', a: ['fuera', 'fuese'] },
    { t: 'fill', q: '___ (yo, querer) reservar una mesa para esta noche, por favor.', a: ['Quisiera', 'quisiera'] },
    { t: 'mc', q: 'Me pidió que le ___ con la mudanza.', o: ['ayudara', 'ayude', 'ayudaba'], a: 0 },
    { t: 'order', s: 'Logró que le subieran el sueldo con mucho esfuerzo.' },
    { t: 'tr', q: 'Мне было жаль, что ты не смог прийти.', a: ['Sentí que no pudieras venir.', 'Me dio pena que no pudieras venir.', 'Lamenté que no pudieras venir.'] },
    { t: 'fill', q: 'Se comporta como si ___ (tener) veinte años.', a: ['tuviera', 'tuviese'] },
    { t: 'dict', s: 'Esperaba que mis padres me dejaran cumplir mi sueño.', ru: 'Я надеялся, что родители позволят мне осуществить мечту.' }
  ]
};
D[34] = {
  title: 'Нереальное условие в настоящем',
  grammar: { title: 'Si tuviera dinero, viajaría', html: `
<p>Тип II — условие <b>нереальное или маловероятное</b> сейчас или в будущем.</p>
<div class="ex"><b>Si + imperfecto de subjuntivo, condicional simple</b><br><span data-say="Si tuviera más tiempo, aprendería italiano.">Si <em>tuviera</em> más tiempo, <em>aprendería</em> italiano.</span></div>
<table><tr><th>Реальное (тип I)</th><th>Нереальное (тип II)</th></tr>
<tr><td>Si <em>tengo</em> tiempo, te <em>ayudo</em>.</td><td>Si <em>tuviera</em> tiempo, te <em>ayudaría</em>. (но его нет)</td></tr>
<tr><td>Si <em>ganas</em>, te invito.</td><td>Si <em>ganaras</em> la lotería, ¿qué <em>harías</em>?</td></tr></table>
<p>Порядок частей свободный: <em>Viajaría</em> más si <em>tuviera</em> dinero.</p>
<p>Совет: Si yo <em>fuera</em> tú, no lo <em>haría</em>. = Yo que tú / Yo en tu lugar no lo haría.</p>
<div class="tip">Никогда: si + condicional (*si tendría). После si — imperfecto de subjuntivo.</div>` },
  vocab: [
    ['la lotería', 'лотерея', 'Si me tocara la lotería…'],
    ['tocar (la lotería)', 'выиграть (в лотерею)', 'Le tocó la lotería.'],
    ['el premio', 'приз', 'Ganó el primer premio.'],
    ['invertir', 'инвестировать', 'Invertiría en una casa.'],
    ['donar', 'пожертвовать', 'Donaría una parte.'],
    ['la ONG', 'НКО, благотворительная организация', 'Colabora con una ONG.'],
    ['dejar el trabajo', 'бросить работу', 'Dejaría el trabajo.'],
    ['dar la vuelta al mundo', 'объехать весь мир', 'Daría la vuelta al mundo.']
  ],
  exercises: [
    { t: 'fill', q: 'Si me ___ (tocar) la lotería, ___ (dar) la vuelta al mundo.', a: [['tocara', 'tocase'], ['daría']] },
    { t: 'mc', q: 'Si ___ tú, aceptaría la oferta.', o: ['fuera', 'sería', 'soy'], a: 0 },
    { t: 'fill', q: '¿Qué ___ (tú, hacer) si ___ (ganar) el premio?', a: [['harías'], ['ganaras', 'ganases']] },
    { t: 'mc', q: 'Si ___ más dinero, invertiría en vivienda.', o: ['tuviera', 'tendría', 'tengo'], a: 0, e: 'После si нет condicional.' },
    { t: 'fill', q: 'Donaría una parte a una ONG si ___ (poder).', a: ['pudiera', 'pudiese'] },
    { t: 'order', s: 'Si no trabajara tanto, tendría tiempo para viajar.' },
    { t: 'tr', q: 'Если бы я жил в Испании, я бы говорил лучше.', a: ['Si viviera en España, hablaría mejor.', 'Si viviese en España, hablaría mejor.', 'Si viviera en España hablaría mejor'] },
    { t: 'tr', q: 'На твоём месте я бы бросил эту работу.', a: ['Yo en tu lugar dejaría ese trabajo.', 'Yo que tú dejaría ese trabajo.', 'Si yo fuera tú, dejaría ese trabajo.', 'Yo en tu lugar dejaría este trabajo.'] },
    { t: 'mc', q: 'Si los vecinos no ___ tanto ruido, dormiríamos mejor.', o: ['hicieran', 'hacen', 'harían'], a: 0 },
    { t: 'conj', verbs: ['tener', 'ser', 'poder', 'hacer', 'vivir'], tenses: ['subjImp'], n: 4 },
    { t: 'dict', s: 'Si tuviera un premio así, dejaría el trabajo sin pensarlo.', ru: 'Если бы у меня был такой приз, я бы бросил работу не задумываясь.' }
  ]
};
D[35] = {
  title: 'Нереальное условие в прошлом',
  grammar: { title: 'Si hubiera sabido, habría venido', html: `
<p>Тип III — о прошлом, которое <b>уже не изменить</b>: сожаление, упрёк, «если бы тогда».</p>
<div class="ex"><b>Si + pluscuamperfecto de subjuntivo, condicional compuesto</b><br><span data-say="Si hubiera sabido que venías, habría preparado algo.">Si <em>hubiera sabido</em> que venías, <em>habría preparado</em> algo.</span></div>
<p>Pluscuamperfecto de subjuntivo = hubiera (hubieras, hubiera, hubiéramos, hubierais, hubieran) + participio.</p>
<p>Смешанный тип: условие в прошлом, следствие сейчас: Si <em>hubiera estudiado</em> medicina, ahora <em>sería</em> médico.</p>
<p>Сожаление без si: <b>Ojalá hubiera</b> + participio: Ojalá <em>hubiera venido</em>. <b>Tendría que / Debería haber</b> + participio: Deberías <em>haber llamado</em>.</p>
<div class="tip">В разговорной речи в главной части часто тоже hubiera: Si lo hubiera sabido, <em>hubiera</em> venido. Это допустимо.</div>` },
  vocab: [
    ['arrepentirse de', 'сожалеть, раскаиваться', 'Me arrepiento de no haber ido.'],
    ['el arrepentimiento', 'сожаление, раскаяние', 'No sirve de nada el arrepentimiento.'],
    ['la oportunidad', 'возможность, шанс', 'Perdí una gran oportunidad.'],
    ['perder la oportunidad', 'упустить шанс', 'No pierdas la oportunidad.'],
    ['el error', 'ошибка', 'Fue un error grave.'],
    ['darse prisa', 'спешить', 'Si te hubieras dado prisa…'],
    ['a tiempo', 'вовремя', 'Llegamos a tiempo.'],
    ['la culpa', 'вина', 'No fue culpa mía.']
  ],
  exercises: [
    { t: 'fill', q: 'Si ___ (tú, darse) prisa, ___ (llegar) a tiempo.', a: [['te hubieras dado', 'te hubieses dado'], ['habrías llegado', 'hubieras llegado']] },
    { t: 'mc', q: 'Si hubiera sabido la verdad, no ___ nada.', o: ['habría dicho', 'diría', 'había dicho'], a: 0 },
    { t: 'fill', q: 'Ojalá no ___ (yo, perder) aquella oportunidad.', a: ['hubiera perdido', 'hubiese perdido'] },
    { t: 'mc', q: 'Si ___ más de joven, ahora hablaría mejor inglés.', o: ['hubiera estudiado', 'estudiara', 'habría estudiado'], a: 0, e: 'Смешанный тип: прошлое условие, настоящее следствие.' },
    { t: 'fill', q: 'Me arrepiento de no ___ (aceptar) aquel puesto.', a: ['haber aceptado'] },
    { t: 'order', s: 'Si no hubiera sido culpa mía, no habría pedido perdón.' },
    { t: 'tr', q: 'Если бы ты мне сказал, я бы тебе помог.', a: ['Si me lo hubieras dicho, te habría ayudado.', 'Si me lo hubieras dicho, te hubiera ayudado.', 'Si me lo hubieses dicho, te habría ayudado.', 'Si me hubieras dicho, te habría ayudado.'] },
    { t: 'tr', q: 'Тебе следовало позвонить раньше.', a: ['Deberías haber llamado antes.', 'Tendrías que haber llamado antes.', 'Deberías haber llamado más temprano.'] },
    { t: 'conj', verbs: ['saber', 'ver', 'hacer', 'decir', 'llegar'], tenses: ['subjPlusc'], n: 4 },
    { t: 'mc', q: 'Si no ___ el error, la empresa no habría perdido tanto dinero.', o: ['hubieran cometido', 'cometieran', 'habrían cometido'], a: 0 },
    { t: 'dict', s: 'Si hubiéramos salido antes, no habríamos perdido el tren.', ru: 'Если бы мы вышли раньше, мы бы не опоздали на поезд.' }
  ]
};
D[36] = {
  title: 'Проверка модуля 6', review: true,
  grammar: { title: 'Шпаргалка модуля 6', html: `
<ul><li>Dice que + без сдвига; dijo que: presente → imperfecto, perfecto/indefinido → pluscuamperfecto, futuro → condicional, imperativo → imperfecto de subj.</li>
<li>Pregunta si… / pregunta dónde (с ударением).</li>
<li>Imperfecto de subj: 3-е л. мн. indefinido без -ron + -ra…; como si + imperf. subj.</li>
<li>Тип II: si + imperf. subj → condicional. Тип III: si + hubiera + part. → habría + part.</li>
<li>Сожаление: ojalá hubiera…, debería haber…</li></ul>` },
  vocab: [],
  exercises: [
    { t: 'fill', q: '«Vendré a las cinco.» → Dijo que ___ (venir) a las cinco.', a: ['vendría'] },
    { t: 'fill', q: '«He terminado el informe.» → Dijo que ___ (terminar) el informe.', a: ['había terminado'] },
    { t: 'mc', q: '«¿Tienes hambre?» → Me preguntó si ___ hambre.', o: ['tenía', 'tengo', 'tuviera'], a: 0 },
    { t: 'mc', q: '«Cierra la puerta.» → Me pidió que ___ la puerta.', o: ['cerrara', 'cierre', 'cerraba'], a: 0 },
    { t: 'conj', verbs: ['tener', 'ser', 'hacer', 'poder', 'ir', 'decir'], tenses: ['subjImp'], n: 5 },
    { t: 'fill', q: 'Si ___ (yo, tener) más tiempo, ___ (hacer) más deporte.', a: [['tuviera', 'tuviese'], ['haría']] },
    { t: 'fill', q: 'Si ___ (nosotros, saber) que venías, ___ (esperar).', a: [['hubiéramos sabido', 'hubiésemos sabido'], ['habríamos esperado', 'hubiéramos esperado']] },
    { t: 'mc', q: 'Gasta dinero como si ___ millonario.', o: ['fuera', 'es', 'sea'], a: 0 },
    { t: 'mc', q: 'Si ___ tú, no aceptaría.', o: ['fuera', 'sería', 'fui'], a: 0 },
    { t: 'order', s: 'Me dijo que no podría venir al día siguiente.' },
    { t: 'tr', q: 'Если бы я знал, я бы тебе позвонил.', a: ['Si lo hubiera sabido, te habría llamado.', 'Si lo hubiera sabido, te hubiera llamado.', 'Si lo hubiese sabido, te habría llamado.', 'Si hubiera sabido, te habría llamado.'] },
    { t: 'tr', q: 'Она хотела, чтобы я остался.', a: ['Quería que me quedara.', 'Ella quería que me quedara.', 'Quería que me quedase.'] },
    { t: 'fill', q: 'Ojalá ___ (yo, aceptar) aquella oferta; ahora tendría mejor sueldo.', a: ['hubiera aceptado', 'hubiese aceptado'] },
    { t: 'match', pairs: [['arrepentirse de', 'сожалеть о'], ['darse prisa', 'спешить'], ['lograr', 'добиться'], ['declarar', 'заявлять'], ['al día siguiente', 'на следующий день'], ['como si', 'как будто']] },
    { t: 'dict', s: 'Nos comunicó que la huelga había terminado el día anterior.', ru: 'Он сообщил нам, что забастовка закончилась накануне.' }
  ]
};
})(window.ST_DATA.days);
