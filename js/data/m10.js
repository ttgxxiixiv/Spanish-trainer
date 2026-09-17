/* Модуль 10 · Дни 55–60 · Консолидация B2 */
(function (D) {
D[55] = {
  title: 'Subjuntivo: сводное повторение',
  grammar: { title: 'Все триггеры subjuntivo на одной странице', html: `
<table><tr><th>Группа</th><th>Триггеры</th><th>Пример</th></tr>
<tr><td>Желание / влияние</td><td>querer, pedir, esperar, ojalá, recomendar, hace falta que</td><td>Quiero que <em>vengas</em>.</td></tr>
<tr><td>Эмоция / оценка</td><td>me alegra que, es una pena que, es importante que</td><td>Es lógico que <em>tenga</em> miedo.</td></tr>
<tr><td>Отрицание мнения / сомнение</td><td>no creo que, dudo que, es posible que, quizás</td><td>No creo que <em>sea</em> verdad.</td></tr>
<tr><td>Цель</td><td>para que, a fin de que</td><td>Te lo digo para que lo <em>sepas</em>.</td></tr>
<tr><td>Время (будущее)</td><td>cuando, en cuanto, hasta que, antes de que</td><td>Cuando <em>llegue</em>, te aviso.</td></tr>
<tr><td>Неизвестный объект</td><td>busco un… que, no hay nadie que</td><td>Busco un piso que <em>tenga</em> luz.</td></tr>
<tr><td>Уступка (гипотеза)</td><td>aunque, por mucho que</td><td>Aunque <em>llueva</em>, iré.</td></tr>
<tr><td>Условие</td><td>a menos que, en caso de que, con tal de que, sin que, como (угроза)</td><td>Iré a menos que <em>llueva</em>.</td></tr>
<tr><td>Прошлое</td><td>те же триггеры в прошлом → imperf. subj; como si</td><td>Quería que <em>vinieras</em>.</td></tr></table>
<p>Времена subjuntivo: presente (venga), perfecto (haya venido), imperfecto (viniera), pluscuamperfecto (hubiera venido).</p>` },
  vocab: [
    ['la asignatura', 'учебный предмет', 'Mi asignatura favorita era historia.'],
    ['la beca', 'стипендия', 'Solicitó una beca.'],
    ['matricularse', 'записаться (на курс)', 'Me matriculé en un máster.'],
    ['suspender', 'провалить (экзамен)', 'Suspendió dos asignaturas.'],
    ['el profesorado', 'преподавательский состав', 'El profesorado es excelente.'],
    ['la formación', 'образование, подготовка', 'Tiene una buena formación.'],
    ['el alumnado', 'учащиеся', 'El alumnado participa mucho.'],
    ['la nota', 'оценка', 'Sacó buena nota.']
  ],
  exercises: [
    { t: 'fill', q: 'Espero que ___ (tú, conseguir) la beca este año.', a: ['consigas'] },
    { t: 'fill', q: 'Me matricularé en cuanto ___ (abrir) el plazo.', a: ['abran', 'se abra'] },
    { t: 'fill', q: 'No creo que el profesorado ___ (estar) de acuerdo.', a: ['esté'] },
    { t: 'fill', q: 'Es una pena que ___ (ella, suspender) la asignatura.', a: ['haya suspendido', 'suspendiera', 'suspendiese'] },
    { t: 'fill', q: 'Busco un curso que ___ (ofrecer) formación práctica.', a: ['ofrezca'] },
    { t: 'fill', q: 'Aunque ___ (sacar, yo) mala nota, no voy a abandonar. (даже если)', a: ['saque'] },
    { t: 'fill', q: 'Mis padres querían que ___ (yo, estudiar) derecho.', a: ['estudiara', 'estudiase'] },
    { t: 'fill', q: 'Habla como si ___ (saber) más que el profesor.', a: ['supiera', 'supiese'] },
    { t: 'fill', q: 'Te presto los apuntes con tal de que me los ___ (devolver).', a: ['devuelvas'] },
    { t: 'mc', q: 'Creo que el alumnado ___ mucho este año.', o: ['ha mejorado', 'haya mejorado', 'mejore'], a: 0 },
    { t: 'order', s: 'Ojalá hubiera sabido antes que existía esa beca.' },
    { t: 'tr', q: 'Мне нужно, чтобы ты мне объяснил это до того, как начнётся экзамен.', a: ['Necesito que me lo expliques antes de que empiece el examen.', 'Necesito que me lo expliques antes de que comience el examen.'] },
    { t: 'dict', s: 'Dudo que haya alguien que no haya suspendido nunca una asignatura.', ru: 'Сомневаюсь, что есть кто-то, кто никогда не проваливал предмет.' }
  ]
};
D[56] = {
  title: 'Прошедшие времена: сводное повторение',
  grammar: { title: 'Пять прошедших на одной странице', html: `
<table><tr><th>Время</th><th>Когда</th><th>Пример</th></tr>
<tr><td>Perfecto (he hecho)</td><td>период не закончился; результат сейчас</td><td>Hoy <em>he ido</em> al médico.</td></tr>
<tr><td>Indefinido (hice)</td><td>завершённое событие в закрытом периоде</td><td>Ayer <em>fui</em> al médico.</td></tr>
<tr><td>Imperfecto (hacía)</td><td>фон, привычка, описание, процесс</td><td><em>Iba</em> al médico cada mes.</td></tr>
<tr><td>Pluscuamperfecto (había hecho)</td><td>раньше другого прошедшего</td><td>Ya <em>había ido</em> cuando llamaste.</td></tr>
<tr><td>Estar + gerundio</td><td>процесс в момент</td><td><em>Estaba esperando</em> al médico.</td></tr></table>
<p>Косвенная речь: presente → imperfecto, indefinido/perfecto → pluscuamperfecto, futuro → condicional.</p>
<p>Оттенки: sabía/supe, conocía/conocí, quería/quise, podía/pude, tenía que/tuve que.</p>
<div class="ex"><span data-say="Esta mañana he ido al médico. Me ha dicho que tenía que descansar porque había trabajado demasiado.">Esta mañana <em>he ido</em> al médico. Me <em>ha dicho</em> que <em>tenía</em> que descansar porque <em>había trabajado</em> demasiado.</span></div>` },
  vocab: [
    ['el síntoma', 'симптом', 'Tenía varios síntomas.'],
    ['la consulta', 'приём (у врача), кабинет', 'Fui a la consulta.'],
    ['recetar', 'прописать (лекарство)', 'Me recetó antibióticos.'],
    ['la baja', 'больничный', 'Estuvo de baja un mes.'],
    ['el análisis', 'анализ', 'Me hicieron un análisis de sangre.'],
    ['la tensión', 'давление (артериальное)', 'Tenía la tensión alta.'],
    ['el seguro médico', 'медицинская страховка', 'El seguro cubre la consulta.'],
    ['recuperarse', 'выздороветь', 'Se recuperó en dos semanas.']
  ],
  exercises: [
    { t: 'fill', q: 'Esta mañana ___ (yo, ir) al médico porque ___ (tener) fiebre desde ayer.', a: [['he ido'], ['tenía']] },
    { t: 'fill', q: 'Cuando ___ (llegar) a la consulta, ya ___ (haber) mucha gente.', a: [['llegué'], ['había']] },
    { t: 'fill', q: 'El médico me ___ (recetar) unas pastillas y me ___ (decir) que ___ (descansar).', a: [['recetó'], ['dijo'], ['descansara', 'descansase']] },
    { t: 'fill', q: 'Mientras ___ (yo, esperar), ___ (leer) una revista.', a: [['esperaba'], ['leía', 'leí']] },
    { t: 'fill', q: 'Nunca ___ (yo, estar) de baja hasta el año pasado.', a: ['había estado'] },
    { t: 'mc', q: 'No ___ que tenía la tensión alta hasta que me hicieron el análisis.', o: ['sabía', 'supe', 'he sabido'], a: 0 },
    { t: 'mc', q: '___ que ir a urgencias porque el dolor era insoportable.', o: ['Tuve', 'Tenía', 'He tenido que'], a: 0 },
    { t: 'fill', q: 'Me dijo que el seguro ___ (cubrir) la consulta.', a: ['cubría', 'cubriría'] },
    { t: 'order', s: 'Se recuperó en dos semanas porque había seguido el tratamiento.' },
    { t: 'tr', q: 'Когда я пришёл, врач уже ушёл.', a: ['Cuando llegué, el médico ya se había ido.', 'Cuando llegué el médico ya se había ido', 'Cuando llegué, la médica ya se había ido.'] },
    { t: 'tr', q: 'Я никогда не был в Аргентине.', a: ['Nunca he estado en Argentina.', 'No he estado nunca en Argentina.'] },
    { t: 'conj', verbs: ['ir', 'hacer', 'tener', 'decir', 'poder'], tenses: ['indef', 'imperf', 'perf', 'plusc'], n: 4 },
    { t: 'dict', s: 'Estuve de baja un mes y todavía no me he recuperado del todo.', ru: 'Я был на больничном месяц и ещё не полностью выздоровел.' }
  ]
};
D[57] = {
  title: 'Условия и гипотезы: сводное повторение',
  grammar: { title: 'Три типа условных на одной странице', html: `
<table><tr><th>Тип</th><th>Si + …</th><th>Главная часть</th><th>Пример</th></tr>
<tr><td>I реальное</td><td>presente</td><td>presente / futuro / imperativo</td><td>Si <em>llueve</em>, no <em>salimos</em>.</td></tr>
<tr><td>II нереальное сейчас</td><td>imperf. subj</td><td>condicional</td><td>Si <em>lloviera</em>, no <em>saldríamos</em>.</td></tr>
<tr><td>III нереальное в прошлом</td><td>plusc. subj</td><td>cond. compuesto</td><td>Si <em>hubiera llovido</em>, no <em>habríamos salido</em>.</td></tr>
<tr><td>смешанный</td><td>plusc. subj</td><td>condicional</td><td>Si <em>hubiera estudiado</em>, ahora <em>tendría</em> trabajo.</td></tr></table>
<p>Другие способы: <b>de + infinitivo</b> (De haberlo sabido, habría venido), <b>a menos que / a no ser que</b> + subj, <b>en caso de que</b> + subj, <b>con tal de que</b> + subj, <b>siempre que</b> + subj (при условии что), <b>como</b> + subj (угроза).</p>
<p>Догадки: futuro (о настоящем), futuro compuesto и condicional (о прошлом), deber de + inf.</p>` },
  vocab: [
    ['la sequía', 'засуха', 'La sequía afecta a la agricultura.'],
    ['el incendio', 'пожар', 'Hubo un incendio forestal.'],
    ['la inundación', 'наводнение', 'Las inundaciones causaron daños.'],
    ['las energías renovables', 'возобновляемые источники энергии', 'Apuestan por las renovables.'],
    ['el consumo', 'потребление', 'Reducir el consumo es clave.'],
    ['desperdiciar', 'растрачивать, выбрасывать', 'No desperdicies agua.'],
    ['la huella de carbono', 'углеродный след', 'Calcula tu huella de carbono.'],
    ['sostenible', 'устойчивый, экологичный', 'Un modelo sostenible.']
  ],
  exercises: [
    { t: 'fill', q: 'Si ___ (nosotros, reducir) el consumo, la huella de carbono ___ (bajar).', a: [['reducimos'], ['bajará', 'baja']] },
    { t: 'fill', q: 'Si todos ___ (usar) energías renovables, el aire ___ (estar) más limpio.', a: [['usaran', 'usasen', 'usáramos', 'usásemos'], ['estaría']] },
    { t: 'fill', q: 'Si no ___ (haber) tanta sequía, no ___ (producirse) tantos incendios el verano pasado.', a: [['hubiera habido', 'hubiese habido'], ['se habrían producido', 'se hubieran producido']] },
    { t: 'mc', q: 'Si ___ más agua en los embalses, ahora no tendríamos restricciones.', o: ['hubiera llovido', 'lloviera', 'llovería'], a: 0 },
    { t: 'mc', q: 'No habrá inundaciones ___ llueva mucho más de lo previsto.', o: ['a menos que', 'porque', 'así que'], a: 0 },
    { t: 'fill', q: '___ (de + saber) lo de la tormenta, no habríamos salido.', a: ['De haber sabido'] },
    { t: 'fill', q: 'En caso de que ___ (haber) incendio, llame al 112.', a: ['haya'] },
    { t: 'mc', q: 'El río está muy alto… ___ llovido mucho en la sierra.', o: ['Habrá', 'Ha', 'Habría'], a: 0 },
    { t: 'order', s: 'Si no desperdiciáramos tanta comida, el sistema sería más sostenible.' },
    { t: 'tr', q: 'Если бы ты пришёл раньше, ты бы её увидел.', a: ['Si hubieras venido antes, la habrías visto.', 'Si hubieras llegado antes, la habrías visto.', 'Si hubieses venido antes, la habrías visto.', 'Si hubieras venido antes, la hubieras visto.'] },
    { t: 'tr', q: 'Если завтра будет дождь, мы отменим экскурсию.', a: ['Si mañana llueve, cancelaremos la excursión.', 'Si llueve mañana, cancelaremos la excursión.', 'Si mañana llueve, cancelamos la excursión.', 'Si llueve mañana, cancelamos la excursión.'] },
    { t: 'conj', verbs: ['tener', 'hacer', 'ser', 'poder'], tenses: ['subjImp', 'subjPlusc', 'cond', 'condPerf'], n: 4 },
    { t: 'dict', s: 'Si apostáramos por las renovables, el consumo sería más sostenible.', ru: 'Если бы мы сделали ставку на возобновляемые источники, потребление было бы более устойчивым.' }
  ]
};
D[58] = {
  title: 'Лексика B2: коллокации и ложные друзья',
  grammar: { title: 'Слова, которые ходят парами', html: `
<p>На B2 оценивают не отдельные слова, а <b>сочетания</b>. Учим глагол вместе с его существительным.</p>
<table><tr><th>tomar</th><th>hacer</th><th>dar</th><th>echar</th></tr>
<tr><td>una decisión, medidas, el sol, apuntes, en serio, el pelo</td><td>caso, falta, daño, una pregunta, cola, las maletas, ilusión</td><td>un paseo, la vuelta, igual, miedo, las gracias, a luz, de comer</td><td>de menos, una mano, un vistazo, la culpa, a perder, una siesta</td></tr></table>
<table><tr><th>poner</th><th>tener</th><th>llevar / traer</th><th>sacar</th></tr>
<tr><td>la mesa, en marcha, de acuerdo, una excusa, en peligro</td><td>lugar, en cuenta, ganas, prisa, sentido, éxito, que ver con</td><td>a cabo, la contraria, razón, ventaja</td><td>buenas notas, fotos, entradas, conclusiones, provecho</td></tr></table>
<p><b>Ложные друзья</b> (испанский ≠ русский/английский): <em>éxito</em> — успех (не выход: salida); <em>embarazada</em> — беременная; <em>actual</em> — нынешний; <em>constipado</em> — простуженный; <em>largo</em> — длинный; <em>carpeta</em> — папка; <em>ropa</em> — одежда; <em>sensible</em> — чувствительный (разумный — sensato); <em>asistir a</em> — присутствовать; <em>pretender</em> — намереваться; <em>realizar</em> — осуществлять; <em>soportar</em> — терпеть.</p>` },
  vocab: [
    ['tomar una decisión', 'принять решение', 'Hay que tomar una decisión ya.'],
    ['hacer caso', 'слушаться, обращать внимание', 'No me hace caso.'],
    ['tener en cuenta', 'принимать во внимание', 'Ten en cuenta el plazo.'],
    ['llevar a cabo', 'осуществить', 'Llevaron a cabo el proyecto.'],
    ['echar un vistazo', 'взглянуть', 'Échale un vistazo al informe.'],
    ['sacar provecho', 'извлечь пользу', 'Saca provecho de la oportunidad.'],
    ['tener éxito', 'иметь успех', 'La campaña tuvo éxito.'],
    ['dar las gracias', 'поблагодарить', 'Les di las gracias.']
  ],
  exercises: [
    { t: 'mc', q: 'Antes de firmar, ___ un vistazo al contrato.', o: ['echa', 'haz', 'da'], a: 0 },
    { t: 'mc', q: 'Nunca ___ caso a los consejos de su madre.', o: ['hace', 'toma', 'da'], a: 0 },
    { t: 'fill', q: 'Hay que ___ en cuenta que el plazo termina el viernes.', a: ['tener'] },
    { t: 'mc', q: 'El proyecto se ___ a cabo el año pasado.', o: ['llevó', 'hizo', 'puso'], a: 0 },
    { t: 'mc', q: 'Está ___ : tendrá el bebé en marzo.', o: ['embarazada', 'avergonzada', 'constipada'], a: 0, e: 'Ложный друг: embarazada = беременная.' },
    { t: 'mc', q: 'La película fue un ___ de taquilla.', o: ['éxito', 'salida', 'suceso'], a: 0, e: 'Éxito = успех.' },
    { t: 'fill', q: '___ (nosotros, tomar) la decisión de mudarnos al campo.', a: ['Tomamos', 'tomamos', 'Hemos tomado', 'hemos tomado'] },
    { t: 'mc', q: 'No ___ el ruido de la obra: me voy a la biblioteca.', o: ['soporto', 'apoyo', 'sostengo'], a: 0, e: 'Soportar = терпеть.' },
    { t: 'order', s: 'Saca provecho del curso y da las gracias a tus profesores.' },
    { t: 'tr', q: 'Это не имеет отношения к делу.', a: ['No tiene nada que ver con el asunto.', 'No tiene que ver con el asunto.', 'Eso no tiene nada que ver con el asunto.'] },
    { t: 'match', pairs: [['hacer cola', 'стоять в очереди'], ['poner en marcha', 'запустить'], ['dar a luz', 'родить'], ['echar una mano', 'помочь'], ['tener ganas', 'хотеть'], ['sacar buenas notas', 'получать хорошие оценки']] },
    { t: 'dict', s: 'Ten en cuenta que la situación actual no tiene nada que ver con la de antes.', ru: 'Имей в виду, что нынешняя ситуация не имеет ничего общего с прежней.' }
  ]
};
D[59] = {
  title: 'Текст: понимание и связность',
  grammar: { title: 'Читаем как на B2: структура текста', html: `
<p>Прочитай текст и обрати внимание на связки (выделены). Потом ответь на вопросы.</p>
<div class="ex"><b>El regreso al pueblo</b><br>
Hace diez años, Lucía dejó su pueblo <em>para</em> buscar trabajo en la capital. <em>Al principio</em> todo le parecía emocionante: el ritmo, la gente, las oportunidades. <em>Sin embargo</em>, <em>con el tiempo</em> empezó a echar de menos la tranquilidad. <em>Aunque</em> ganaba bien, <em>cada vez</em> tenía <em>menos</em> tiempo para ella misma.<br>
El año pasado, <em>cuando</em> la empresa le ofreció teletrabajar, no lo dudó: volvió al pueblo. <em>Ahora</em> trabaja desde una casa con vistas a la sierra. Dice que, <em>si hubiera sabido</em> lo bien que se vive allí, <em>habría vuelto</em> mucho antes. <em>Lo único que</em> le preocupa es que la conexión a internet falle, <em>ya que</em> depende totalmente de ella. <em>En cualquier caso</em>, asegura que no cambiaría su vida actual <em>por nada del mundo</em>.</div>
<p>Связки времени: al principio, con el tiempo, ahora, mientras tanto, al final. Связки логики: sin embargo, aunque, ya que, en cualquier caso, por nada del mundo.</p>
<p>Стратегия: сначала найди <b>кто, когда, почему</b>; потом смотри на связки, они показывают поворот мысли.</p>` },
  vocab: [
    ['al principio', 'вначале', 'Al principio fue difícil.'],
    ['con el tiempo', 'со временем', 'Con el tiempo se acostumbró.'],
    ['en cualquier caso', 'в любом случае', 'En cualquier caso, avísame.'],
    ['por nada del mundo', 'ни за что на свете', 'No lo cambiaría por nada del mundo.'],
    ['lo único que', 'единственное, что', 'Lo único que me preocupa es el precio.'],
    ['asegurar', 'уверять; обеспечивать', 'Asegura que es verdad.'],
    ['el ritmo', 'ритм, темп', 'El ritmo de la ciudad es rápido.'],
    ['las vistas', 'вид (из окна)', 'Una casa con vistas al mar.']
  ],
  exercises: [
    { t: 'mc', q: 'Según el texto, ¿por qué se fue Lucía a la capital?', o: ['Para buscar trabajo', 'Para estudiar', 'Porque no le gustaba el pueblo'], a: 0 },
    { t: 'mc', q: '¿Qué empezó a echar de menos con el tiempo?', o: ['La tranquilidad', 'El sueldo', 'A su familia'], a: 0 },
    { t: 'mc', q: '¿Qué le permitió volver al pueblo?', o: ['Que la empresa le ofreciera teletrabajar', 'Que la despidieran', 'Que ganara la lotería'], a: 0 },
    { t: 'mc', q: '«Si hubiera sabido lo bien que se vive allí, habría vuelto mucho antes» significa que…', o: ['no sabía lo bien que se vivía y por eso no volvió antes', 'sabía que se vivía bien y volvió pronto', 'no quiere volver'], a: 0 },
    { t: 'mc', q: '¿Qué es lo único que le preocupa?', o: ['Que falle la conexión a internet', 'Que la empresa cierre', 'Que suban los precios'], a: 0 },
    { t: 'mc', q: 'En el texto, «sin embargo» introduce…', o: ['un contraste', 'una causa', 'un ejemplo'], a: 0 },
    { t: 'fill', q: '___ (al + principio) todo le parecía emocionante.', a: ['Al principio', 'al principio'] },
    { t: 'fill', q: 'No cambiaría su vida actual por ___ del mundo.', a: ['nada'] },
    { t: 'order', s: 'Con el tiempo empezó a echar de menos la tranquilidad del pueblo.' },
    { t: 'tr', q: 'Единственное, что меня беспокоит, это цена.', a: ['Lo único que me preocupa es el precio.', 'Lo único que me preocupa es el precio'] },
    { t: 'tr', q: 'В любом случае, я не поменял бы это ни за что на свете.', a: ['En cualquier caso, no lo cambiaría por nada del mundo.', 'En cualquier caso no lo cambiaría por nada del mundo'] },
    { t: 'dict', s: 'Asegura que el ritmo de la capital ya no le interesa.', ru: 'Она уверяет, что темп столицы её больше не интересует.' }
  ]
};
D[60] = {
  title: 'Финальный экзамен B2', review: true,
  grammar: { title: 'Перед экзаменом', html: `
<p>Это итоговая проверка всего курса: 30 заданий по всем темам. Подсказок нет. Результат 70 % и выше — уверенный B2 по грамматике курса.</p>
<ul><li>Читай задание целиком: маркер времени подсказывает форму.</li><li>После si — никогда futuro и никогда condicional.</li><li>Спроси себя: факт (indicativo) или нет (subjuntivo)?</li><li>Проверь согласование: местоимение, род, число, ударение.</li></ul>
<p>¡Mucha suerte!</p>` },
  vocab: [],
  exercises: [
    { t: 'mc', q: 'La boda ___ en un castillo que ___ a las afueras.', o: ['es / está', 'está / es', 'es / es'], a: 0 },
    { t: 'fill', q: 'Ayer ___ (yo, tener) que ir al médico porque no ___ (encontrarse) bien.', a: [['tuve'], ['me encontraba']] },
    { t: 'fill', q: 'Cuando llegamos, la película ya ___ (empezar).', a: ['había empezado'] },
    { t: 'fill', q: 'Este año ___ (nosotros, viajar) tres veces al extranjero.', a: ['hemos viajado'] },
    { t: 'mc', q: '¿Le has dado las llaves a Marta? — Sí, ___ he dado.', o: ['se las', 'le las', 'las le'], a: 0 },
    { t: 'fill', q: 'Dentro de diez años ___ (nosotros, vivir) en otra ciudad.', a: ['viviremos'] },
    { t: 'mc', q: 'No contesta; ___ en el gimnasio.', o: ['estará', 'estaría', 'esté'], a: 0 },
    { t: 'fill', q: 'Yo en tu lugar ___ (hablar) con el jefe.', a: ['hablaría'] },
    { t: 'fill', q: 'Quiero que ___ (tú, venir) a la cena del sábado.', a: ['vengas'] },
    { t: 'fill', q: 'Es importante que ___ (vosotros, llegar) a tiempo.', a: ['lleguéis'] },
    { t: 'mc', q: 'No creo que ___ razón, la verdad.', o: ['tenga', 'tiene', 'tendrá'], a: 0 },
    { t: 'fill', q: 'Te lo explico otra vez para que lo ___ (entender).', a: ['entiendas'] },
    { t: 'fill', q: 'Cuando ___ (yo, terminar) la carrera, buscaré trabajo fuera.', a: ['termine'] },
    { t: 'mc', q: 'Busco un compañero de piso que no ___ .', o: ['fume', 'fuma', 'fumar'], a: 0 },
    { t: 'fill', q: 'Niños, no ___ (tocar) eso: es peligroso.', a: ['toquéis'] },
    { t: 'mc', q: 'Aunque ___ cansado, iré a la fiesta. (даже если)', o: ['esté', 'estoy', 'estaré'], a: 0 },
    { t: 'fill', q: 'Me dijo que ___ (llamar) al día siguiente, pero no llamó.', a: ['llamaría'] },
    { t: 'fill', q: 'Me preguntó si ___ (yo, haber) visto sus gafas.', a: ['había'] },
    { t: 'fill', q: 'Si ___ (yo, tener) más tiempo, ___ (aprender) a tocar el piano.', a: [['tuviera', 'tuviese'], ['aprendería']] },
    { t: 'fill', q: 'Si me lo ___ (tú, decir) antes, te ___ (ayudar).', a: [['hubieras dicho', 'hubieses dicho'], ['habría ayudado', 'hubiera ayudado']] },
    { t: 'mc', q: '___ tres sospechosos en la frontera.', o: ['Se detuvo a', 'Se detuvieron', 'Fue detenido'], a: 0 },
    { t: 'mc', q: 'Lo hice ___ ti, ___ que estés tranquilo.', o: ['por / para', 'para / por', 'por / por'], a: 0 },
    { t: 'mc', q: '___ llovía, suspendieron el partido.', o: ['Como', 'Porque', 'Así que'], a: 0 },
    { t: 'mc', q: 'No quiero vino, ___ agua.', o: ['sino', 'pero', 'sin embargo'], a: 0 },
    { t: 'fill', q: '___ (yo, llevar) dos años ___ (estudiar) español.', a: [['Llevo', 'llevo'], ['estudiando']] },
    { t: 'mc', q: 'Cuando le dieron el premio, ___ a llorar de la emoción.', o: ['se puso', 'se volvió', 'se hizo'], a: 0 },
    { t: 'fill', q: '¡___ (a mí, olvidar) el móvil en casa!', a: ['Se me ha olvidado', 'se me ha olvidado', 'Se me olvidó', 'se me olvidó'] },
    { t: 'mc', q: 'A mis padres ___ los pueblos pequeños.', o: ['les encantan', 'les encanta', 'le encantan'], a: 0 },
    { t: 'fill', q: 'Cuanto ___ practiques, ___ seguro te sentirás.', a: [['más'], ['más']] },
    { t: 'tr', q: 'Хоть бы ты мог остаться ещё на несколько дней.', a: ['Ojalá pudieras quedarte unos días más.', 'Ojalá pudieras quedarte algunos días más.', 'Ojalá te pudieras quedar unos días más.', 'Ojalá pudieses quedarte unos días más.'] },
    { t: 'tr', q: 'Мне было бы интересно узнать, что ты об этом думаешь.', a: ['Me interesaría saber qué piensas de esto.', 'Me interesaría saber qué opinas de esto.', 'Me interesaría saber lo que piensas de esto.', 'Me gustaría saber qué piensas de esto.'] },
    { t: 'dict', s: 'Si hubiera empezado este curso antes, ya habría alcanzado el nivel B2.', ru: 'Если бы я начал этот курс раньше, я бы уже достиг уровня B2.' }
  ]
};
})(window.ST_DATA.days);
