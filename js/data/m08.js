/* Модуль 8 · Дни 43–48 · Перифразы и глаголы изменения */
(function (D) {
D[43] = {
  title: 'Перифразы длительности и долга',
  grammar: { title: 'Llevar + gerundio, seguir + gerundio, tener que / haber que', html: `
<table><tr><th>Перифраза</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>llevar + tiempo + gerundio</b></td><td>уже … как делаю</td><td><em>Llevo</em> dos años <em>estudiando</em> español.</td></tr>
<tr><td><b>llevar + tiempo + sin + inf</b></td><td>уже … как не делаю</td><td><em>Llevo</em> un mes <em>sin fumar</em>.</td></tr>
<tr><td><b>seguir / continuar + gerundio</b></td><td>продолжать</td><td><em>Sigue lloviendo</em>.</td></tr>
<tr><td><b>ir + gerundio</b></td><td>постепенно</td><td><em>Voy entendiendo</em> mejor.</td></tr>
<tr><td><b>venir + gerundio</b></td><td>уже давно и до сих пор</td><td><em>Vengo diciéndolo</em> hace tiempo.</td></tr>
<tr><td><b>tener que / deber + inf</b></td><td>должен (лично)</td><td><em>Tengo que</em> irme.</td></tr>
<tr><td><b>hay que + inf</b></td><td>нужно (безлично)</td><td><em>Hay que</em> reciclar.</td></tr>
<tr><td><b>deber de + inf</b></td><td>должно быть (догадка)</td><td><em>Debe de</em> ser tarde.</td></tr></table>
<p>Синоним llevar: <b>hace + tiempo + que</b>: <em>Hace</em> dos años <em>que</em> estudio español. = Estudio español <em>desde hace</em> dos años.</p>` },
  vocab: [
    ['llevar + gerundio', 'уже (столько-то) делать', 'Llevo un año viviendo aquí.'],
    ['seguir + gerundio', 'продолжать делать', 'Sigo trabajando allí.'],
    ['hay que', 'нужно (безлично)', 'Hay que tener paciencia.'],
    ['deber de', 'должно быть (догадка)', 'Debe de estar en casa.'],
    ['desde hace', 'вот уже (о времени)', 'Vivo aquí desde hace tres años.'],
    ['la paciencia', 'терпение', 'Hay que tener paciencia.'],
    ['la rutina', 'рутина', 'Mi rutina no cambia.'],
    ['el ejercicio', 'упражнение; физическая нагрузка', 'Hago ejercicio cada día.']
  ],
  exercises: [
    { t: 'fill', q: '___ (yo, llevar) tres años ___ (vivir) en Madrid.', a: [['Llevo', 'llevo'], ['viviendo']] },
    { t: 'mc', q: 'Hace dos meses que no fumo. = ___ dos meses sin fumar.', o: ['Llevo', 'Sigo', 'Voy'], a: 0 },
    { t: 'fill', q: '¿Todavía trabajas en el banco? — Sí, ___ (seguir) ___ (trabajar) allí.', a: [['sigo'], ['trabajando']] },
    { t: 'mc', q: '___ que hacer ejercicio para estar en forma; es una regla general.', o: ['Hay', 'Tiene', 'Debe'], a: 0 },
    { t: 'mc', q: 'No contesta. ___ estar en una reunión.', o: ['Debe de', 'Debe', 'Hay que'], a: 0, e: 'Догадка — deber de.' },
    { t: 'fill', q: 'Poco a poco ___ (yo, ir) ___ (entender) el subjuntivo.', a: [['voy'], ['entendiendo']] },
    { t: 'order', s: 'Llevo desde el lunes sin hacer ejercicio por la rutina del trabajo.' },
    { t: 'tr', q: 'Я уже два часа тебя жду.', a: ['Llevo dos horas esperándote.', 'Hace dos horas que te espero.', 'Te espero desde hace dos horas.', 'Llevo dos horas esperando.'] },
    { t: 'tr', q: 'Нужно иметь терпение.', a: ['Hay que tener paciencia.', 'Hay que tener paciencia'] },
    { t: 'mc', q: 'Vivo en este barrio ___ hace diez años.', o: ['desde', 'hace', 'durante'], a: 0 },
    { t: 'dict', s: 'Llevo meses intentando cambiar mi rutina y sigo sin conseguirlo.', ru: 'Я уже месяцы пытаюсь изменить свою рутину и всё ещё не могу.' }
  ]
};
D[44] = {
  title: 'Глаголы изменения',
  grammar: { title: 'Ponerse, volverse, hacerse, quedarse, llegar a ser', html: `
<table><tr><th>Глагол</th><th>Тип изменения</th><th>Пример</th></tr>
<tr><td><b>ponerse</b> + adj</td><td>временное состояние, внезапное (эмоции, цвет, здоровье)</td><td><em>Se puso</em> rojo / nervioso / enfermo.</td></tr>
<tr><td><b>volverse</b> + adj</td><td>длительное изменение характера, часто негативное</td><td><em>Se ha vuelto</em> muy tacaño.</td></tr>
<tr><td><b>hacerse</b> + сущ./adj</td><td>изменение по воле или постепенно: профессия, идеология, религия</td><td><em>Se hizo</em> médico / budista / rico.</td></tr>
<tr><td><b>quedarse</b> + adj</td><td>результат, часто потеря</td><td><em>Se quedó</em> ciego / viudo / sin trabajo / dormido.</td></tr>
<tr><td><b>llegar a ser</b></td><td>достичь после усилий</td><td><em>Llegó a ser</em> director.</td></tr>
<tr><td><b>convertirse en</b> + сущ.</td><td>превратиться в</td><td>La ciudad <em>se convirtió en</em> un centro turístico.</td></tr></table>
<p>Без местоимения — «делать кого-то каким-то»: La noticia <em>me puso</em> triste. El dinero lo <em>ha vuelto</em> arrogante.</p>` },
  vocab: [
    ['ponerse nervioso/a', 'занервничать', 'Se puso nerviosa antes del examen.'],
    ['volverse', 'стать (о характере)', 'Se ha vuelto muy callado.'],
    ['hacerse', 'стать (профессия, взгляды)', 'Se hizo abogado.'],
    ['quedarse sin', 'остаться без', 'Nos quedamos sin gasolina.'],
    ['llegar a ser', 'стать (добиться)', 'Llegó a ser presidenta.'],
    ['convertirse en', 'превратиться в', 'Se convirtió en un éxito.'],
    ['tacaño/a', 'скупой', 'Se ha vuelto tacaño.'],
    ['callado/a', 'молчаливый', 'Es una persona callada.']
  ],
  exercises: [
    { t: 'mc', q: 'Cuando vio el examen, ___ muy nervioso.', o: ['se puso', 'se volvió', 'se hizo'], a: 0 },
    { t: 'mc', q: 'Desde que ganó dinero ___ muy tacaño.', o: ['se ha vuelto', 'se ha puesto', 'se ha quedado'], a: 0 },
    { t: 'fill', q: 'Estudió mucho y ___ (hacerse) abogada.', a: ['se hizo'] },
    { t: 'mc', q: 'Con la crisis muchas familias ___ sin trabajo.', o: ['se quedaron', 'se pusieron', 'se hicieron'], a: 0 },
    { t: 'fill', q: 'Empezó de becario y ___ (llegar) a ser director de la empresa.', a: ['llegó'] },
    { t: 'mc', q: 'El pueblo ___ en un destino turístico muy popular.', o: ['se convirtió', 'se volvió', 'se puso'], a: 0 },
    { t: 'order', s: 'Se quedó dormido en el sofá viendo la televisión.' },
    { t: 'tr', q: 'Она покраснела, когда услышала это.', a: ['Se puso roja cuando lo oyó.', 'Se puso roja al oírlo.', 'Se puso colorada cuando lo oyó.'] },
    { t: 'tr', q: 'Он стал очень молчаливым после переезда.', a: ['Se ha vuelto muy callado después de la mudanza.', 'Se volvió muy callado después de la mudanza.', 'Se ha vuelto muy callado tras la mudanza.', 'Se volvió muy callado tras la mudanza.'] },
    { t: 'fill', q: 'La noticia nos ___ (poner) muy tristes a todos.', a: ['puso'] },
    { t: 'dict', s: 'Se hizo vegetariano y, con los años, se volvió más tranquilo.', ru: 'Он стал вегетарианцем и с годами стал спокойнее.' }
  ]
};
D[45] = {
  title: 'Значения se',
  grammar: { title: 'Se: возвратное, взаимное, случайное', html: `
<table><tr><th>Тип</th><th>Пример</th></tr>
<tr><td>Возвратное (на себя)</td><td><em>Se</em> lava. <em>Se</em> viste.</td></tr>
<tr><td>Взаимное (друг друга)</td><td><em>Se</em> quieren. <em>Se</em> escriben cada día.</td></tr>
<tr><td>Замена le → se</td><td><em>Se</em> lo di.</td></tr>
<tr><td>Безличное / pasiva refleja</td><td><em>Se</em> vive bien. <em>Se</em> venden pisos.</td></tr>
<tr><td><b>Случайное</b> (se + me/te/le + глагол)</td><td><em>Se me</em> ha caído el vaso. <em>Se le</em> olvidaron las llaves.</td></tr>
<tr><td>Меняет смысл глагола</td><td>ir → irse (уходить), dormir → dormirse (засыпать), llevar → llevarse (уносить), quedar → quedarse (оставаться), comer → comerse (съесть целиком)</td></tr></table>
<p>Случайное se снимает ответственность: «само сломалось». Глагол согласуется с предметом: Se me <em>rompió</em> el plato / Se me <em>rompieron</em> los platos.</p>
<div class="tip">Частые: caerse, romperse, olvidarse, perderse, acabarse, quedarse, estropearse, ocurrirse (прийти в голову).</div>` },
  vocab: [
    ['caerse', 'упасть, уронить(ся)', 'Se me cayó el móvil.'],
    ['romperse', 'сломаться', 'Se nos rompió la lavadora.'],
    ['estropearse', 'испортиться, сломаться', 'Se ha estropeado el ascensor.'],
    ['acabarse', 'закончиться', 'Se ha acabado la leche.'],
    ['ocurrirse', 'прийти в голову', 'Se me ocurre una idea.'],
    ['olvidarse', 'забыться', 'Se me olvidó tu cumpleaños.'],
    ['irse', 'уходить', 'Me voy, es tarde.'],
    ['llevarse bien', 'ладить', 'Se llevan muy bien.']
  ],
  exercises: [
    { t: 'fill', q: '___ (a mí, olvidar) las llaves en casa.', a: ['Se me olvidaron', 'se me olvidaron', 'Se me han olvidado', 'se me han olvidado'] },
    { t: 'mc', q: '¡Cuidado! ___ ha caído el vaso.', o: ['Se te', 'Te se', 'Se'], a: 0 },
    { t: 'fill', q: '___ (a nosotros, acabar) el pan; hay que comprar más.', a: ['Se nos ha acabado', 'se nos ha acabado', 'Se nos acabó', 'se nos acabó'] },
    { t: 'mc', q: 'Ana y Luis ___ desde hace diez años.', o: ['se conocen', 'conocen', 'les conocen'], a: 0, e: 'Взаимное se.' },
    { t: 'mc', q: '___ una idea genial para el regalo.', o: ['Se me ha ocurrido', 'Me he ocurrido', 'Se ocurre'], a: 0 },
    { t: 'fill', q: 'A Marta ___ (romper) las gafas en el viaje.', a: ['se le rompieron', 'se le han roto'] },
    { t: 'order', s: 'Mis hermanos se llevan muy bien desde pequeños.' },
    { t: 'tr', q: 'У меня сломался телефон.', a: ['Se me ha roto el móvil.', 'Se me rompió el móvil.', 'Se me ha estropeado el móvil.', 'Se me ha roto el teléfono.', 'Se me rompió el teléfono.'] },
    { t: 'tr', q: 'Мы ушли рано, потому что было поздно.', a: ['Nos fuimos pronto porque era tarde.', 'Nos fuimos temprano porque era tarde.'] },
    { t: 'mc', q: 'El ascensor ___ otra vez; subimos por la escalera.', o: ['se ha estropeado', 'ha estropeado', 'se estropea a'], a: 0 },
    { t: 'dict', s: 'Se me ha olvidado el cargador y se me acaba la batería.', ru: 'Я забыл зарядку, и у меня заканчивается батарея.' }
  ]
};
D[46] = {
  title: 'Глаголы типа gustar',
  grammar: { title: 'Gustar, parecer, dar miedo и местоимения-ударные', html: `
<p>Схема: <b>(A mí) me + глагол в 3 л. + подлежащее</b>. Глагол согласуется с тем, что нравится: Me gusta <em>el café</em> / Me gustan <em>los cafés</em> / Me gusta <em>viajar</em>.</p>
<table><tr><th>Глаголы</th><th>Примеры</th></tr>
<tr><td>encantar, interesar, importar, molestar, preocupar, apetecer, doler, faltar, sobrar, quedar, parecer, dar miedo/pena/rabia/igual, caer bien/mal, hacer ilusión, costar (быть трудным)</td><td>Me <em>apetece</em> un helado. Nos <em>faltan</em> dos sillas. ¿Te <em>importa</em> cerrar? Le <em>cae bien</em> tu hermano. Me <em>cuesta</em> madrugar. Me <em>da igual</em>.</td></tr></table>
<p>Ударные местоимения для уточнения/контраста: <b>a mí, a ti, a él/ella/usted, a nosotros, a vosotros, a ellos</b>: A mí me gusta, pero a él no.</p>
<p>Ответы: ¿Te gusta? — A mí <em>también</em>. / A mí <em>no</em>. ¿No te gusta? — A mí <em>tampoco</em>. / A mí <em>sí</em>.</p>
<p>После предлогов: para <em>mí</em>, sin <em>ti</em>, con<em>migo</em>, con<em>tigo</em>, entre <em>tú y yo</em>, según <em>tú</em>.</p>` },
  vocab: [
    ['apetecer', 'хотеться', 'Me apetece un café.'],
    ['importar', 'быть важным; возражать', '¿Te importa si abro?'],
    ['caer bien/mal', 'нравиться / не нравиться (о человеке)', 'Tu jefe me cae bien.'],
    ['dar igual', 'быть всё равно', 'Me da igual.'],
    ['dar rabia', 'бесить', 'Me da rabia esperar.'],
    ['hacer ilusión', 'радовать (предвкушение)', 'Me hace ilusión el viaje.'],
    ['costar', 'стоить; даваться с трудом', 'Me cuesta concentrarme.'],
    ['sobrar', 'быть лишним, оставаться', 'Sobra comida.']
  ],
  exercises: [
    { t: 'fill', q: 'A mí ___ ___ (encantar) los domingos sin planes.', a: [['me'], ['encantan']] },
    { t: 'mc', q: '¿Te ___ si abro la ventana? — No, ___ igual.', o: ['importa / me da', 'importas / me da', 'importa / doy'], a: 0 },
    { t: 'mc', q: 'A mis padres ___ mucha ilusión el viaje.', o: ['les hace', 'le hacen', 'les hacen'], a: 0 },
    { t: 'fill', q: '¿Qué te ___ (parecer) estas ideas?', a: ['parecen'] },
    { t: 'mc', q: '¿Te gusta el flamenco? — A mí ___ .', o: ['también', 'tampoco', 'sí que no'], a: 0 },
    { t: 'mc', q: 'No me gusta madrugar. — A mí ___ .', o: ['tampoco', 'también', 'no también'], a: 0 },
    { t: 'fill', q: 'Me ___ (costar) mucho concentrarme por las tardes.', a: ['cuesta'] },
    { t: 'order', s: 'A ella le cae fatal el nuevo compañero de oficina.' },
    { t: 'tr', q: 'Мне не хочется никуда идти сегодня.', a: ['No me apetece ir a ningún sitio hoy.', 'Hoy no me apetece ir a ningún sitio.', 'No me apetece salir hoy.', 'No me apetece ir a ninguna parte hoy.'] },
    { t: 'tr', q: 'Ты идёшь со мной или с ним?', a: ['¿Vienes conmigo o con él?', 'Vienes conmigo o con él', '¿Vas conmigo o con él?'] },
    { t: 'dict', s: 'Me da rabia que sobre comida cuando hay gente que no tiene nada.', ru: 'Меня бесит, что еда остаётся, когда есть люди, у которых нет ничего.' }
  ]
};
D[47] = {
  title: 'Глаголы с предлогами',
  grammar: { title: 'Soñar con, pensar en, depender de…', html: `
<table><tr><th>con</th><th>en</th><th>de</th><th>a</th></tr>
<tr><td>soñar con<br>casarse con<br>contar con (рассчитывать)<br>quedar con (договориться встретиться)<br>conformarse con<br>dar con (натолкнуться)</td><td>pensar en<br>confiar en<br>insistir en<br>fijarse en (обратить внимание)<br>tardar en<br>consistir en<br>quedar en (договориться о)</td><td>depender de<br>acordarse de<br>olvidarse de<br>enamorarse de<br>darse cuenta de<br>tratar de (пытаться)<br>dejar de<br>quejarse de<br>enterarse de<br>alegrarse de</td><td>acostumbrarse a<br>aprender a<br>ayudar a<br>atreverse a<br>negarse a<br>dedicarse a<br>parecerse a<br>oler a / saber a</td></tr></table>
<p>Перед que предлог сохраняется: Me alegro <em>de que</em> vengas. Insistió <em>en que</em> pagara. Depende <em>de que</em> haga buen tiempo.</p>
<div class="tip">Pensar <em>en</em> (думать о) vs pensar <em>de</em> (думать о = мнение: ¿Qué piensas <em>de</em> él?) vs pensar + inf (собираться).</div>` },
  vocab: [
    ['soñar con', 'мечтать о', 'Sueño con vivir en la costa.'],
    ['contar con', 'рассчитывать на', 'Cuento contigo.'],
    ['quedar con', 'договориться встретиться с', 'He quedado con Ana a las ocho.'],
    ['fijarse en', 'обратить внимание на', 'Fíjate en los detalles.'],
    ['acordarse de', 'помнить о', '¿Te acuerdas de mí?'],
    ['enamorarse de', 'влюбиться в', 'Se enamoró de ella enseguida.'],
    ['atreverse a', 'осмелиться', 'No me atrevo a decírselo.'],
    ['negarse a', 'отказываться', 'Se negó a firmar.']
  ],
  exercises: [
    { t: 'fill', q: 'Sueño ___ dar la vuelta al mundo.', a: ['con'] },
    { t: 'fill', q: '¿Te acuerdas ___ la casa de la abuela?', a: ['de'] },
    { t: 'mc', q: 'He quedado ___ Luis a las siete; no llegues tarde.', o: ['con', 'a', 'en'], a: 0 },
    { t: 'fill', q: 'Todo depende ___ que el jefe apruebe el presupuesto.', a: ['de'] },
    { t: 'mc', q: 'No me atrevo ___ decirle la verdad.', o: ['a', 'de', 'en'], a: 0 },
    { t: 'fill', q: 'Se negó ___ firmar el contrato y se quejó ___ las condiciones.', a: [['a'], ['de']] },
    { t: 'mc', q: 'Fíjate ___ los detalles antes de firmar.', o: ['en', 'a', 'con'], a: 0 },
    { t: 'order', s: 'Se enamoró de ella en cuanto la vio en la fiesta.' },
    { t: 'tr', q: 'Ты можешь на меня рассчитывать.', a: ['Puedes contar conmigo.', 'Puedes contar conmigo'] },
    { t: 'tr', q: 'Я думаю о тебе каждый день.', a: ['Pienso en ti cada día.', 'Pienso en ti todos los días.'] },
    { t: 'mc', q: 'Tardó dos años ___ acostumbrarse ___ vivir solo.', o: ['en / a', 'a / en', 'de / a'], a: 0 },
    { t: 'dict', s: 'Insistió en que nos fijáramos en la letra pequeña.', ru: 'Он настоял на том, чтобы мы обратили внимание на мелкий шрифт.' }
  ]
};
D[48] = {
  title: 'Проверка модуля 8', review: true,
  grammar: { title: 'Шпаргалка модуля 8', html: `
<ul><li>Llevar + время + gerundio / sin + inf; seguir + gerundio; ir + gerundio; hay que (безлично); deber de (догадка).</li>
<li>Ponerse (временно), volverse (характер), hacerse (по воле/профессия), quedarse (результат), llegar a ser, convertirse en.</li>
<li>Se: возвратное, взаимное, безличное, случайное (se me cayó), меняющее смысл (irse, dormirse).</li>
<li>Gustar-глаголы: me + 3 л. + подлежащее; a mí también / tampoco; conmigo, contigo.</li>
<li>Предлоги: soñar con, pensar en, depender de, acordarse de, atreverse a, negarse a; предлог сохраняется перед que.</li></ul>` },
  vocab: [],
  exercises: [
    { t: 'fill', q: '___ (nosotros, llevar) media hora ___ (esperar) el autobús.', a: [['Llevamos', 'llevamos'], ['esperando']] },
    { t: 'mc', q: '¿Sigues ___ en la misma empresa?', o: ['trabajando', 'trabajar', 'que trabajas'], a: 0 },
    { t: 'mc', q: 'Cuando le dieron la noticia, ___ pálido.', o: ['se puso', 'se hizo', 'se volvió'], a: 0 },
    { t: 'mc', q: 'Con los años ___ una persona muy desconfiada.', o: ['se ha vuelto', 'se ha puesto', 'se ha quedado'], a: 0 },
    { t: 'fill', q: 'Después del accidente ___ (quedarse) sin coche.', a: ['se quedó', 'me quedé', 'nos quedamos', 'se quedaron'] },
    { t: 'fill', q: '¡___ (a mí, caer) el café encima del ordenador!', a: ['Se me ha caído', 'se me ha caído', 'Se me cayó', 'se me cayó'] },
    { t: 'mc', q: 'A Juan y a mí ___ mucho las películas de terror.', o: ['nos gustan', 'nos gusta', 'les gustan'], a: 0 },
    { t: 'mc', q: 'No me apetece salir. — A mí ___ .', o: ['tampoco', 'también', 'sí tampoco'], a: 0 },
    { t: 'fill', q: 'No cuentes ___ él para la mudanza: siempre se niega ___ ayudar.', a: [['con'], ['a']] },
    { t: 'fill', q: 'Me alegro ___ que te ___ (gustar) el regalo.', a: [['de'], ['guste']] },
    { t: 'order', s: 'Hay que darse cuenta de que el tiempo se acaba.' },
    { t: 'tr', q: 'Мне трудно вставать рано.', a: ['Me cuesta madrugar.', 'Me cuesta levantarme temprano.', 'Me cuesta mucho madrugar.', 'Me cuesta levantarme pronto.'] },
    { t: 'tr', q: 'Она стала врачом после многих лет учёбы.', a: ['Se hizo médica después de muchos años de estudio.', 'Se hizo médica tras muchos años de estudio.', 'Se hizo médico después de muchos años de estudio.', 'Llegó a ser médica después de muchos años de estudio.'] },
    { t: 'match', pairs: [['apetecer', 'хотеться'], ['dar igual', 'быть всё равно'], ['fijarse en', 'обратить внимание на'], ['negarse a', 'отказываться'], ['tacaño', 'скупой'], ['estropearse', 'сломаться']] },
    { t: 'dict', s: 'Se me ocurrió que podríamos quedar con ellos el sábado.', ru: 'Мне пришло в голову, что мы могли бы встретиться с ними в субботу.' }
  ]
};
})(window.ST_DATA.days);
