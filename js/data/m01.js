/* Модуль 1 · Дни 1–6 · Крепкий фундамент */
(function (D) {
D[1] = {
  title: 'Ser и estar',
  grammar: { title: 'Ser vs estar: когда какой', html: `
<p><em>Ser</em> — что-то <b>есть</b> по сути: национальность, профессия, характер, материал, время, происхождение, принадлежность.</p>
<p><em>Estar</em> — <b>состояние</b> и <b>место</b>: где находится, как себя чувствует, что с ним сейчас, а также estar + gerundio.</p>
<table><tr><th>ser</th><th>estar</th></tr>
<tr><td>Es médico. Es de Cádiz. Son las tres.</td><td>Está en casa. Está cansado. Está lloviendo.</td></tr>
<tr><td>La mesa es de madera.</td><td>La mesa está sucia.</td></tr></table>
<p>Ряд прилагательных меняет смысл:</p>
<table><tr><th></th><th>ser</th><th>estar</th></tr>
<tr><td>listo</td><td>умный</td><td>готовый</td></tr>
<tr><td>aburrido</td><td>скучный</td><td>скучающий</td></tr>
<tr><td>rico</td><td>богатый</td><td>вкусный</td></tr>
<tr><td>malo</td><td>плохой</td><td>больной</td></tr>
<tr><td>verde</td><td>зелёный</td><td>незрелый</td></tr>
<tr><td>atento</td><td>внимательный (вежливый)</td><td>сосредоточенный</td></tr></table>
<div class="tip">Событие (концерт, встреча) — <em>ser</em>: <span data-say="La reunión es en la sala grande.">La reunión <b>es</b> en la sala grande.</span> Предмет находится — <em>estar</em>: El coche <b>está</b> en el garaje.</div>` },
  vocab: [
    ['cansado/a', 'усталый', 'Hoy estoy muy cansada.'],
    ['listo/a', 'умный (ser) / готовый (estar)', '¿Estás listo? Es un chico muy listo.'],
    ['aburrido/a', 'скучный (ser) / скучающий (estar)', 'La película es aburrida.'],
    ['la reunión', 'встреча, совещание', 'La reunión es a las diez.'],
    ['de mal humor', 'в плохом настроении', 'Mi jefe está de mal humor.'],
    ['orgulloso/a', 'гордый', 'Estoy orgulloso de ti.'],
    ['la ubicación', 'местоположение', 'La ubicación del hotel es perfecta.'],
    ['ocupado/a', 'занятый', 'La línea está ocupada.']
  ],
  exercises: [
    { t: 'mc', q: 'Mi hermano ___ ingeniero, pero ahora ___ en paro.', o: ['es / está', 'está / es', 'es / es'], a: 0, e: 'Профессия — ser; временное состояние (безработный) — estar.' },
    { t: 'fill', q: 'La fiesta ___ en casa de Marta, no en el bar.', a: ['es'], e: 'Событие «происходит» — ser.' },
    { t: 'fill', q: 'Los niños ___ muy aburridos porque no hay nada que hacer.', a: ['están'], e: 'Скучающие сейчас — estar aburrido.' },
    { t: 'mc', q: '¡Qué ___ está la paella!', o: ['rica', 'rico', 'ricos'], a: 0, e: 'Estar rico = вкусный. Согласуем с la paella.' },
    { t: 'fill', q: 'Son las ocho y todavía no ___ listos. ¡Vamos a llegar tarde!', a: ['estamos', 'estáis', 'están'], e: 'Готовы — estar listo.' },
    { t: 'order', s: 'La reunión es a las diez en la sala grande.' },
    { t: 'tr', q: 'Мой отец очень горд тобой.', a: ['Mi padre está muy orgulloso de ti.', 'Mi padre está muy orgulloso de ti'], e: 'Estar orgulloso de — состояние.' },
    { t: 'mc', q: 'Estas manzanas no se pueden comer, ___ verdes.', o: ['están', 'son', 'hay'], a: 0, e: 'Незрелые — estar verde.' },
    { t: 'fill', q: '¿De dónde ___ (tú)? — ___ de Valencia.', a: [['eres'], ['soy']], e: 'Происхождение — ser de.' },
    { t: 'conj', verbs: ['ser', 'estar'], tenses: ['pres'], n: 3 },
    { t: 'dict', s: 'Mi jefe está de mal humor porque la reunión es muy temprano.', ru: 'Мой начальник в плохом настроении, потому что встреча очень рано.' }
  ]
};
D[2] = {
  title: 'Presente: неправильные глаголы',
  grammar: { title: 'Presente de indicativo: чередования и особые формы', html: `
<p>Три группы чередований в основе (кроме nosotros/vosotros):</p>
<table><tr><th>e → ie</th><th>o → ue</th><th>e → i</th></tr>
<tr><td>pensar → pienso<br>querer → quiero<br>empezar → empiezo<br>entender → entiendo</td><td>poder → puedo<br>volver → vuelvo<br>dormir → duermo<br>encontrar → encuentro</td><td>pedir → pido<br>servir → sirvo<br>repetir → repito<br>seguir → sigo</td></tr></table>
<p>Особая форма <b>yo</b>: tengo, vengo, pongo, salgo, hago, digo, traigo, conozco, sé, veo, doy.</p>
<p>Полностью особые: ser (soy, eres, es…), estar (estoy, estás…), ir (voy, vas, va, vamos, vais, van), haber (hay).</p>
<div class="ex"><span data-say="Los lunes empiezo a trabajar a las ocho, pero hoy no puedo, tengo médico.">Los lunes <em>empiezo</em> a trabajar a las ocho, pero hoy no <em>puedo</em>, <em>tengo</em> médico.</span></div>
<div class="tip">Nosotros/vosotros не меняют гласную: p<b>e</b>nsamos, d<b>o</b>rmís, p<b>e</b>dimos.</div>` },
  vocab: [
    ['madrugar', 'вставать рано', 'Entre semana madrugo mucho.'],
    ['el horario', 'расписание, график', 'Tengo un horario flexible.'],
    ['la jornada', 'рабочий день', 'La jornada empieza a las nueve.'],
    ['soler + inf', 'обычно делать', 'Suelo comer en la oficina.'],
    ['el descanso', 'перерыв, отдых', 'Hacemos un descanso a las once.'],
    ['a menudo', 'часто', 'A menudo trabajo desde casa.'],
    ['el compañero / la compañera', 'коллега', 'Mis compañeros son muy majos.'],
    ['el plazo', 'срок', 'El plazo termina el viernes.']
  ],
  exercises: [
    { t: 'fill', q: 'Los viernes ___ (nosotros, soler) salir a cenar.', a: ['solemos'], e: 'Soler — o→ue, но nosotros без чередования.' },
    { t: 'fill', q: 'Yo ___ (empezar) la jornada a las ocho y ___ (volver) a casa a las seis.', a: [['empiezo'], ['vuelvo']] },
    { t: 'mc', q: '¿Qué ___ (tú) de postre? — ___ un flan.', o: ['pides / Pido', 'pedes / Pedo', 'pides / Pedo'], a: 0, e: 'Pedir: e→i во всех формах, кроме nosotros/vosotros.' },
    { t: 'fill', q: 'No ___ (yo, conocer) a tu compañero nuevo.', a: ['conozco'], e: 'Conocer: yo conozco.' },
    { t: 'conj', verbs: ['pensar', 'poder', 'pedir', 'dormir', 'tener', 'hacer', 'venir', 'salir'], tenses: ['pres'], n: 5 },
    { t: 'order', s: 'Mis compañeros suelen madrugar mucho entre semana.' },
    { t: 'tr', q: 'Мы часто делаем перерыв в одиннадцать.', a: ['A menudo hacemos un descanso a las once.', 'Hacemos un descanso a las once a menudo.', 'A menudo hacemos un descanso a las once'] },
    { t: 'mc', q: 'El plazo ___ mañana, así que hoy no ___ salir antes.', o: ['termina / puedo', 'termina / podo', 'termino / puedo'], a: 0 },
    { t: 'fill', q: '¿A qué hora ___ (vosotros, empezar) a trabajar?', a: ['empezáis'], e: 'Vosotros — без чередования: empezáis.' },
    { t: 'dict', s: 'Suelo madrugar porque mi horario empieza a las siete.', ru: 'Я обычно встаю рано, потому что мой график начинается в семь.' }
  ]
};
D[3] = {
  title: 'Pretérito indefinido',
  grammar: { title: 'Indefinido: законченные действия в прошлом', html: `
<p>Indefinido — действие <b>завершено</b> в конкретный момент: ayer, la semana pasada, en 2015, hace dos años, de repente.</p>
<table><tr><th></th><th>hablar</th><th>comer / vivir</th></tr>
<tr><td>yo</td><td>habl<b>é</b></td><td>com<b>í</b></td></tr>
<tr><td>tú</td><td>habl<b>aste</b></td><td>com<b>iste</b></td></tr>
<tr><td>él</td><td>habl<b>ó</b></td><td>com<b>ió</b></td></tr>
<tr><td>nosotros</td><td>habl<b>amos</b></td><td>com<b>imos</b></td></tr>
<tr><td>vosotros</td><td>habl<b>asteis</b></td><td>com<b>isteis</b></td></tr>
<tr><td>ellos</td><td>habl<b>aron</b></td><td>com<b>ieron</b></td></tr></table>
<p>Неправильные с особой основой и <b>без ударений</b> (-e, -iste, -o, -imos, -isteis, -ieron):</p>
<table><tr><td>tener → tuv-</td><td>estar → estuv-</td><td>poder → pud-</td><td>poner → pus-</td></tr>
<tr><td>hacer → hic- (hizo)</td><td>querer → quis-</td><td>venir → vin-</td><td>saber → sup-</td></tr>
<tr><td>decir → dij- (dijeron)</td><td>traer → traj- (trajeron)</td><td>haber → hubo</td><td>andar → anduv-</td></tr></table>
<p>ser/ir: fui, fuiste, fue, fuimos, fuisteis, fueron · dar: di, diste, dio · ver: vi, viste, vio.</p>
<p>Орфография в yo: bus<b>qué</b>, lle<b>gué</b>, empe<b>cé</b>. Третье лицо: leer → le<b>yó</b>, dormir → d<b>u</b>rmió, pedir → p<b>i</b>dió.</p>` },
  vocab: [
    ['el vuelo', 'рейс, полёт', 'El vuelo salió con retraso.'],
    ['el retraso', 'задержка', 'Hubo un retraso de dos horas.'],
    ['alojarse', 'остановиться (в отеле)', 'Nos alojamos en un hostal céntrico.'],
    ['la maleta', 'чемодан', 'Perdí la maleta en el aeropuerto.'],
    ['el alquiler', 'аренда', 'El alquiler del coche fue barato.'],
    ['recorrer', 'объехать, обойти', 'Recorrimos toda la costa.'],
    ['el paisaje', 'пейзаж', 'El paisaje era impresionante.'],
    ['perderse', 'заблудиться', 'Nos perdimos en el casco antiguo.']
  ],
  exercises: [
    { t: 'fill', q: 'El año pasado ___ (nosotros, recorrer) el norte de España en coche.', a: ['recorrimos'] },
    { t: 'fill', q: 'El vuelo ___ (salir) con dos horas de retraso y ___ (nosotros, llegar) de noche.', a: [['salió'], ['llegamos']] },
    { t: 'mc', q: 'Ayer ___ mucho trabajo y no ___ salir.', o: ['tuve / pude', 'tuvo / pudo', 'tenía / podía'], a: 0, e: 'Yo: tuve, pude — без ударения.' },
    { t: 'fill', q: 'Ellos ___ (decir) que el hotel ___ (ser) horrible.', a: [['dijeron'], ['fue', 'era']], e: 'Dijeron — без i после j.' },
    { t: 'fill', q: 'Yo ___ (buscar) la maleta por todo el aeropuerto, pero no la ___ (encontrar).', a: [['busqué'], ['encontré']] },
    { t: 'conj', verbs: ['ir', 'hacer', 'tener', 'estar', 'poner', 'querer', 'venir', 'dar'], tenses: ['indef'], n: 5 },
    { t: 'order', s: 'Nos alojamos en un hostal y nos perdimos en el casco antiguo.' },
    { t: 'tr', q: 'Вчера я прочитал книгу за два часа.', a: ['Ayer leí un libro en dos horas.', 'Ayer leí el libro en dos horas.', 'Ayer me leí un libro en dos horas.'] },
    { t: 'mc', q: 'Mi abuelo ___ en 1950 y ___ a Madrid en 1975.', o: ['nació / se mudó', 'nació / se mudo', 'nacio / se mudó'], a: 0, e: 'Ударение в 3-м лице: nació, se mudó.' },
    { t: 'fill', q: '¿Cuándo ___ (vosotros, volver) del viaje? — ___ (nosotros, volver) el domingo.', a: [['volvisteis'], ['Volvimos', 'volvimos']] },
    { t: 'dict', s: 'El paisaje fue lo mejor del viaje, aunque el vuelo salió con retraso.', ru: 'Пейзаж был лучшим в поездке, хотя рейс вылетел с задержкой.' }
  ]
};
D[4] = {
  title: 'Pretérito imperfecto',
  grammar: { title: 'Imperfecto: описание, привычка, фон', html: `
<p>Imperfecto рисует <b>фон</b>: как было, что обычно делали, какой была обстановка. Не говорит, чем действие закончилось.</p>
<table><tr><th></th><th>-ar</th><th>-er / -ir</th></tr>
<tr><td>yo</td><td>cant<b>aba</b></td><td>com<b>ía</b></td></tr><tr><td>tú</td><td>cant<b>abas</b></td><td>com<b>ías</b></td></tr>
<tr><td>él</td><td>cant<b>aba</b></td><td>com<b>ía</b></td></tr><tr><td>nosotros</td><td>cant<b>ábamos</b></td><td>com<b>íamos</b></td></tr>
<tr><td>vosotros</td><td>cant<b>abais</b></td><td>com<b>íais</b></td></tr><tr><td>ellos</td><td>cant<b>aban</b></td><td>com<b>ían</b></td></tr></table>
<p>Только три неправильных: <b>ser</b> (era, eras, era, éramos, erais, eran), <b>ir</b> (iba, ibas…), <b>ver</b> (veía, veías…).</p>
<ul><li>Привычка: De niño <em>jugaba</em> en la calle todos los días.</li>
<li>Описание: La casa <em>era</em> pequeña y <em>tenía</em> un jardín.</li>
<li>Возраст, время, погода в прошлом: <em>Tenía</em> diez años. <em>Eran</em> las cinco. <em>Hacía</em> frío.</li>
<li>Вежливость: <em>Quería</em> pedirte un favor.</li></ul>
<div class="tip">Маркеры: antes, siempre, todos los días, de pequeño, normalmente, mientras.</div>` },
  vocab: [
    ['de pequeño/a', 'в детстве', 'De pequeña vivía en un pueblo.'],
    ['el recuerdo', 'воспоминание', 'Tengo buenos recuerdos de aquella época.'],
    ['la infancia', 'детство', 'Mi infancia fue muy feliz.'],
    ['travieso/a', 'шаловливый, непослушный', 'Era un niño muy travieso.'],
    ['el barrio', 'район', 'En mi barrio todos nos conocíamos.'],
    ['el vecino / la vecina', 'сосед', 'Los vecinos eran muy amables.'],
    ['echar de menos', 'скучать по', 'Echo de menos aquellos veranos.'],
    ['la época', 'эпоха, время', 'En aquella época no había móviles.']
  ],
  exercises: [
    { t: 'fill', q: 'De pequeño ___ (yo, vivir) en un barrio donde todos se ___ (conocer).', a: [['vivía'], ['conocían']] },
    { t: 'fill', q: 'Mis abuelos ___ (ser) muy amables y siempre nos ___ (dar) caramelos.', a: [['eran'], ['daban']] },
    { t: 'mc', q: 'Cuando ___ diez años, ___ al colegio andando.', o: ['tenía / iba', 'tuve / fui', 'tenía / fui'], a: 0, e: 'Возраст и привычка — imperfecto.' },
    { t: 'conj', verbs: ['ser', 'ir', 'ver', 'jugar', 'tener', 'vivir'], tenses: ['imperf'], n: 5 },
    { t: 'order', s: 'En aquella época no había móviles y jugábamos en la calle.' },
    { t: 'tr', q: 'Раньше я скучал по своему району.', a: ['Antes echaba de menos mi barrio.', 'Antes yo echaba de menos mi barrio.'] },
    { t: 'fill', q: '___ (ser) las cinco de la tarde y ___ (hacer) mucho calor.', a: [['Eran', 'eran'], ['hacía']], e: 'Время и погода на фоне — imperfecto.' },
    { t: 'mc', q: '___ preguntarte una cosa, si tienes un momento.', o: ['Quería', 'Quise', 'Quiero que'], a: 0, e: 'Imperfecto вежливости: quería preguntarte.' },
    { t: 'fill', q: 'Los domingos ___ (nosotros, ver) una película en familia.', a: ['veíamos'] },
    { t: 'dict', s: 'De pequeña era muy traviesa y mis vecinos siempre se quejaban.', ru: 'В детстве я была очень непослушной, и мои соседи всегда жаловались.' }
  ]
};
D[5] = {
  title: 'Indefinido vs imperfecto',
  grammar: { title: 'Рассказываем историю: два прошедших вместе', html: `
<p><b>Imperfecto</b> — декорации и фон. <b>Indefinido</b> — события, которые двигают сюжет.</p>
<div class="ex"><span data-say="Era de noche, llovía y no había nadie en la calle. De repente, sonó el teléfono.">Era de noche, <em>llovía</em> y no <em>había</em> nadie en la calle. De repente, <em>sonó</em> el teléfono.</span></div>
<table><tr><th>Imperfecto</th><th>Indefinido</th></tr>
<tr><td>Действие в процессе, прерванное другим:<br><em>Dormía</em> cuando…</td><td>…<em>llamaron</em> a la puerta.</td></tr>
<tr><td>Привычка: Antes <em>fumaba</em>.</td><td>Однократно: Ayer <em>fumó</em> un puro.</td></tr>
<tr><td>Незавершённость: <em>Quería</em> ir, pero…</td><td>Результат: Al final no <em>fui</em>.</td></tr>
<tr><td>Причина/состояние: No <em>salí</em> porque <em>estaba</em> enfermo.</td><td>Цепочка событий: Me <em>levanté</em>, <em>desayuné</em> y <em>salí</em>.</td></tr></table>
<p>Глаголы, меняющие оттенок: <b>sabía</b> (знал) / <b>supe</b> (узнал); <b>conocía</b> (был знаком) / <b>conocí</b> (познакомился); <b>quería</b> (хотел) / <b>quise</b> (попытался), no quiso (отказался); <b>podía</b> (мог) / <b>pude</b> (сумел).</p>` },
  vocab: [
    ['de repente', 'вдруг', 'De repente se apagó la luz.'],
    ['mientras', 'пока, в то время как', 'Mientras cenábamos, llamó Ana.'],
    ['al final', 'в конце концов', 'Al final no fuimos.'],
    ['enterarse de', 'узнать (о чём-то)', 'Me enteré de la noticia ayer.'],
    ['darse cuenta de', 'осознать, заметить', 'No me di cuenta del error.'],
    ['asustarse', 'испугаться', 'Me asusté mucho.'],
    ['la sorpresa', 'сюрприз, неожиданность', '¡Qué sorpresa verte aquí!'],
    ['entonces', 'тогда, затем', 'Entonces decidí volver.']
  ],
  exercises: [
    { t: 'fill', q: 'Mientras ___ (yo, ducharse), ___ (sonar) el teléfono.', a: [['me duchaba'], ['sonó']], e: 'Процесс — imperfecto; прерывающее событие — indefinido.' },
    { t: 'mc', q: 'Ayer ___ a Marta en el metro. No la ___ .', o: ['vi / conocía', 'veía / conocí', 'vi / conocí'], a: 0, e: 'Однократно увидел (vi); был знаком — conocía.' },
    { t: 'fill', q: 'No ___ (yo, ir) a la fiesta porque ___ (estar) muy cansado.', a: [['fui'], ['estaba']] },
    { t: 'fill', q: 'Cuando ___ (nosotros, enterarse) de la noticia, nos ___ (asustar) mucho.', a: [['nos enteramos'], ['asustamos']] },
    { t: 'mc', q: '___ mucho tiempo en el pueblo, pero ese verano solo ___ dos días.', o: ['Pasaba / pasé', 'Pasé / pasaba', 'Pasaba / pasaba'], a: 0 },
    { t: 'mc', q: 'Le pedí ayuda, pero no ___ ayudarme.', o: ['quiso', 'quería', 'quería que'], a: 0, e: 'No quiso = отказался.' },
    { t: 'order', s: 'Era de noche y llovía cuando de repente se apagó la luz.' },
    { t: 'tr', q: 'Я не заметил, что дверь была открыта.', a: ['No me di cuenta de que la puerta estaba abierta.', 'No me di cuenta de que la puerta estaba abierta'] },
    { t: 'fill', q: 'Al final ___ (nosotros, decidir) quedarnos en casa porque ___ (hacer) mal tiempo.', a: [['decidimos'], ['hacía']] },
    { t: 'fill', q: 'Antes ___ (ella, trabajar) en un banco, pero en 2020 ___ (cambiar) de trabajo.', a: [['trabajaba'], ['cambió']] },
    { t: 'dict', s: 'Entonces me di cuenta de que no tenía las llaves.', ru: 'Тогда я понял, что у меня нет ключей.' }
  ]
};
D[6] = {
  title: 'Проверка модуля 1', review: true,
  grammar: { title: 'Шпаргалка модуля 1', html: `
<ul><li><b>ser</b> — суть, профессия, происхождение, время, событие; <b>estar</b> — место, состояние, gerundio.</li>
<li>Presente: e→ie, o→ue, e→i (не в nosotros/vosotros); особые yo: tengo, pongo, salgo, conozco, sé.</li>
<li>Indefinido — завершённое событие; особые основы tuv-, estuv-, pud-, pus-, hic-, quis-, vin-, sup-, dij-.</li>
<li>Imperfecto — фон, привычка, описание; неправильные только ser, ir, ver.</li>
<li>История = фон в imperfecto + события в indefinido.</li></ul>` },
  vocab: [],
  exercises: [
    { t: 'mc', q: 'El concierto ___ en el parque, pero ahora ___ lloviendo.', o: ['es / está', 'está / es', 'es / es'], a: 0 },
    { t: 'fill', q: 'Mi hermana ___ muy lista, pero hoy no ___ lista para el examen.', a: [['es'], ['está']] },
    { t: 'fill', q: '¿A qué hora ___ (tú, volver) a casa normalmente? — ___ (yo, volver) a las seis.', a: [['vuelves'], ['Vuelvo', 'vuelvo']] },
    { t: 'fill', q: 'Ayer ___ (yo, tener) que madrugar y ___ (llegar) tarde igualmente.', a: [['tuve'], ['llegué']] },
    { t: 'conj', verbs: ['ser', 'ir', 'hacer', 'decir', 'poder', 'estar'], tenses: ['indef'], n: 4 },
    { t: 'conj', verbs: ['ser', 'ir', 'ver', 'tener'], tenses: ['imperf'], n: 3 },
    { t: 'mc', q: 'Cuando ___ pequeña, ___ mucho miedo a los perros.', o: ['era / tenía', 'fui / tuve', 'era / tuve'], a: 0 },
    { t: 'fill', q: '___ (nosotros, estar) cenando cuando ___ (llegar) los vecinos.', a: [['Estábamos', 'estábamos'], ['llegaron']] },
    { t: 'order', s: 'De repente me di cuenta de que había perdido la maleta.' },
    { t: 'tr', q: 'Мы остановились в отеле, который был очень старым.', a: ['Nos alojamos en un hotel que era muy antiguo.', 'Nos alojamos en un hotel que era muy viejo.'] },
    { t: 'tr', q: 'Обычно я встаю рано, но вчера проснулся в десять.', a: ['Suelo madrugar, pero ayer me desperté a las diez.', 'Normalmente madrugo, pero ayer me desperté a las diez.', 'Suelo levantarme temprano, pero ayer me desperté a las diez.'] },
    { t: 'mc', q: '¿Cómo ___ a tu novio? — Nos ___ en una boda.', o: ['conociste / conocimos', 'conocías / conocíamos', 'conociste / conocíamos'], a: 0 },
    { t: 'fill', q: 'Antes no ___ (yo, saber) cocinar, pero el año pasado ___ (aprender).', a: [['sabía'], ['aprendí']] },
    { t: 'match', pairs: [['echar de menos', 'скучать по'], ['enterarse de', 'узнать о'], ['darse cuenta de', 'осознать'], ['alojarse', 'остановиться'], ['madrugar', 'вставать рано'], ['recorrer', 'объехать']] },
    { t: 'dict', s: 'Mientras mis compañeros trabajaban, yo recorría la ciudad.', ru: 'Пока мои коллеги работали, я гулял по городу.' }
  ]
};
})(window.ST_DATA.days);
