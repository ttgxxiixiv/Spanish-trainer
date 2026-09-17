/* Модуль 9 · Дни 49–54 · Коммуникация уровня B2 */
(function (D) {
D[49] = {
  title: 'Выражаем мнение и аргументируем',
  grammar: { title: 'Структура аргумента на B2', html: `
<table><tr><th>Шаг</th><th>Фразы</th></tr>
<tr><td>Ввести мнение</td><td>En mi opinión / Desde mi punto de vista / A mi modo de ver / Personalmente creo que… (+ ind)</td></tr>
<tr><td>Аргументировать</td><td>En primer lugar… En segundo lugar… Por un lado… por otro… Además… Es más…</td></tr>
<tr><td>Пример</td><td>Por ejemplo / Un claro ejemplo es / Basta con ver…</td></tr>
<tr><td>Согласие / несогласие</td><td>Estoy totalmente de acuerdo con… / No comparto esa opinión / Tienes razón en parte, pero… / No estoy de acuerdo en absoluto</td></tr>
<tr><td>Уступка</td><td>Es cierto que…, pero… / Aunque…, / Si bien es verdad que…</td></tr>
<tr><td>Вывод</td><td>En definitiva / En resumen / Por todo ello / En conclusión</td></tr></table>
<p>Смягчение: <em>Me parece que</em>, <em>Diría que</em>, <em>Quizás sea</em>… На B2 важно не только сказать «нет», но и обосновать.</p>
<div class="ex"><span data-say="Si bien es verdad que las redes sociales conectan a la gente, diría que también crean dependencia.">Si bien es verdad que las redes sociales conectan a la gente, <em>diría que</em> también crean dependencia.</span></div>` },
  vocab: [
    ['desde mi punto de vista', 'с моей точки зрения', 'Desde mi punto de vista, es un acierto.'],
    ['en definitiva', 'в итоге, в конечном счёте', 'En definitiva, merece la pena.'],
    ['compartir la opinión', 'разделять мнение', 'No comparto esa opinión.'],
    ['las redes sociales', 'социальные сети', 'Las redes sociales crean dependencia.'],
    ['la dependencia', 'зависимость', 'Genera dependencia.'],
    ['la ventaja / la desventaja', 'преимущество / недостаток', 'Tiene más ventajas que desventajas.'],
    ['la inteligencia artificial', 'искусственный интеллект', 'La IA cambiará el trabajo.'],
    ['la privacidad', 'приватность', 'La privacidad está en peligro.']
  ],
  exercises: [
    { t: 'mc', q: '___ , las redes sociales tienen más ventajas que desventajas.', o: ['Desde mi punto de vista', 'Por lo tanto', 'Sin embargo'], a: 0 },
    { t: 'mc', q: 'Es cierto que la IA ahorra tiempo, ___ también elimina empleos.', o: ['pero', 'sino', 'así que'], a: 0 },
    { t: 'mc', q: 'Tienes razón ___ , pero no del todo.', o: ['en parte', 'de parte', 'a parte'], a: 0 },
    { t: 'fill', q: 'No ___ (compartir) tu opinión: creo que la privacidad es más importante.', a: ['comparto'] },
    { t: 'fill', q: 'Me parece que la dependencia del móvil ___ (ser) un problema real.', a: ['es'] },
    { t: 'mc', q: 'No creo que la tecnología ___ la solución a todo.', o: ['sea', 'es', 'será'], a: 0 },
    { t: 'order', s: 'En definitiva, la inteligencia artificial cambiará nuestra forma de trabajar.' },
    { t: 'tr', q: 'Я полностью с тобой согласен.', a: ['Estoy totalmente de acuerdo contigo.', 'Estoy completamente de acuerdo contigo.', 'Estoy totalmente de acuerdo contigo'] },
    { t: 'tr', q: 'С одной стороны, это удобно; с другой, это опасно.', a: ['Por un lado es cómodo; por otro, es peligroso.', 'Por un lado, es cómodo; por otro lado, es peligroso.', 'Por un lado es cómodo, por otro es peligroso.', 'Por un lado es cómodo; por otro lado es peligroso.'] },
    { t: 'mc', q: '___ es verdad que es caro, la calidad lo justifica.', o: ['Si bien', 'Aunque que', 'Por más'], a: 0 },
    { t: 'dict', s: 'A mi modo de ver, la privacidad debería ser una prioridad.', ru: 'На мой взгляд, приватность должна быть приоритетом.' }
  ]
};
D[50] = {
  title: 'Письмо: формальный и неформальный регистр',
  grammar: { title: 'Как писать электронные письма', html: `
<table><tr><th></th><th>Формальное (usted)</th><th>Неформальное (tú)</th></tr>
<tr><td>Приветствие</td><td>Estimado/a Sr./Sra. García: · Muy señor mío: · A quien corresponda:</td><td>Hola, Marta: · Querido Luis: · ¡Hola!</td></tr>
<tr><td>Цель</td><td>Me dirijo a usted para… · Le escribo con motivo de… · En relación con…</td><td>Te escribo para… · ¿Qué tal todo?</td></tr>
<tr><td>Просьба</td><td>Le agradecería que + imperf. subj · ¿Sería tan amable de…? · Le ruego que…</td><td>¿Me puedes…? · ¿Te importaría…?</td></tr>
<tr><td>Прикрепление</td><td>Adjunto le envío… · Le adjunto…</td><td>Te mando…</td></tr>
<tr><td>Прощание</td><td>Quedo a la espera de su respuesta. · Reciba un cordial saludo. · Atentamente,</td><td>Un abrazo · Un beso · ¡Hasta pronto! · Cuídate</td></tr></table>
<p>После приветствия в испанском ставится <b>двоеточие</b>, не запятая: Estimada señora López<b>:</b></p>
<div class="tip">Формальные просьбы: <em>Le agradecería que me enviara</em> el presupuesto. <em>Quisiera</em> solicitar información.</div>` },
  vocab: [
    ['estimado/a', 'уважаемый (в письме)', 'Estimado señor Ruiz:'],
    ['dirigirse a', 'обращаться к', 'Me dirijo a usted para…'],
    ['adjuntar', 'прикреплять (файл)', 'Le adjunto mi currículum.'],
    ['el currículum', 'резюме', 'Envíe su currículum.'],
    ['solicitar', 'запрашивать, подавать заявку', 'Quisiera solicitar información.'],
    ['agradecer', 'благодарить', 'Le agradecería una respuesta.'],
    ['atentamente', 'с уважением', 'Atentamente, Juan Pérez.'],
    ['quedar a la espera', 'ждать (ответа)', 'Quedo a la espera de su respuesta.']
  ],
  exercises: [
    { t: 'mc', q: 'Приветствие в официальном письме незнакомому адресату:', o: ['Estimado señor:', 'Querido señor,', 'Hola señor!'], a: 0 },
    { t: 'mc', q: 'Le ___ que me enviara el presupuesto lo antes posible.', o: ['agradecería', 'agradezco que', 'agradecía'], a: 0 },
    { t: 'fill', q: 'Me ___ (dirigir) a usted para solicitar información sobre el curso.', a: ['dirijo'] },
    { t: 'fill', q: 'Le ___ (adjuntar) mi currículum y una carta de presentación.', a: ['adjunto'] },
    { t: 'mc', q: 'Прощание в официальном письме:', o: ['Quedo a la espera de su respuesta. Atentamente,', 'Un abrazo fuerte,', 'Cuídate mucho,'], a: 0 },
    { t: 'mc', q: '¿___ tan amable de confirmarme la fecha?', o: ['Sería', 'Es', 'Será que'], a: 0 },
    { t: 'order', s: 'Le escribo con motivo de la oferta publicada en su página web.' },
    { t: 'tr', q: 'Я хотел бы запросить информацию о курсах.', a: ['Quisiera solicitar información sobre los cursos.', 'Me gustaría solicitar información sobre los cursos.', 'Quisiera pedir información sobre los cursos.'] },
    { t: 'tr', q: 'Не мог бы ты отправить мне фотографии? (неформально)', a: ['¿Me puedes enviar las fotos?', '¿Me podrías enviar las fotos?', '¿Podrías enviarme las fotos?', '¿Puedes enviarme las fotos?', '¿Me puedes mandar las fotos?', '¿Te importaría enviarme las fotos?'] },
    { t: 'mc', q: 'Le ___ que disculpe las molestias.', o: ['ruego', 'pido de', 'quiero'], a: 0 },
    { t: 'dict', s: 'Le agradecería que me confirmara la recepción de este correo.', ru: 'Я был бы благодарен, если бы вы подтвердили получение этого письма.' }
  ]
};
D[51] = {
  title: 'Жалобы и претензии',
  grammar: { title: 'Как пожаловаться вежливо, но твёрдо', html: `
<table><tr><th>Ситуация</th><th>Фразы</th></tr>
<tr><td>Начать</td><td>Perdone, pero… · Disculpe, quería presentar una queja. · Me gustaría hablar con el responsable.</td></tr>
<tr><td>Изложить</td><td>Resulta que… · El caso es que… · Llevo tres semanas esperando… · Todavía no he recibido…</td></tr>
<tr><td>Требовать</td><td>Exijo que me devuelvan el dinero. · Quiero que se solucione hoy mismo. · Les ruego que lo revisen.</td></tr>
<tr><td>Пригрозить (формально)</td><td>De lo contrario, me veré obligado/a a presentar una reclamación. · Si no, pondré una hoja de reclamaciones.</td></tr>
<tr><td>Ответ</td><td>Lamentamos las molestias. · Nos haremos cargo de… · Le pedimos disculpas.</td></tr></table>
<p>Ключевые глаголы: reclamar, devolver, reembolsar, cambiar, arreglar, solucionar, compensar.</p>
<p>Условие-угроза: <b>como</b> + subjuntivo: <em>Como no me lo arreglen</em>, pido el reembolso.</p>` },
  vocab: [
    ['la queja', 'жалоба', 'Quiero presentar una queja.'],
    ['la reclamación', 'претензия, рекламация', 'Pusimos una reclamación.'],
    ['la hoja de reclamaciones', 'книга жалоб', 'Pido la hoja de reclamaciones.'],
    ['el reembolso', 'возврат денег', 'Exijo el reembolso.'],
    ['la molestia', 'неудобство', 'Lamentamos las molestias.'],
    ['solucionar', 'решить (проблему)', 'Quiero que lo solucionen hoy.'],
    ['de lo contrario', 'в противном случае', 'De lo contrario, reclamaré.'],
    ['hacerse cargo de', 'взять на себя', 'Nos haremos cargo de los gastos.']
  ],
  exercises: [
    { t: 'mc', q: 'Disculpe, ___ presentar una queja.', o: ['quería', 'quiero que', 'querré'], a: 0 },
    { t: 'fill', q: 'Exijo que me ___ (devolver, ustedes) el dinero hoy mismo.', a: ['devuelvan'] },
    { t: 'fill', q: '___ (yo, llevar) tres semanas ___ (esperar) el pedido.', a: [['Llevo', 'llevo'], ['esperando']] },
    { t: 'mc', q: 'Si no lo solucionan, ___ obligado a poner una reclamación.', o: ['me veré', 'me vi', 'me vea'], a: 0 },
    { t: 'mc', q: '___ no me lo arreglen esta semana, pediré el reembolso.', o: ['Como', 'Porque', 'Aunque'], a: 0, e: 'Como + subjuntivo = условие-угроза.' },
    { t: 'fill', q: 'Lamentamos las molestias y nos ___ (hacer) cargo de los gastos.', a: ['haremos', 'hacemos'] },
    { t: 'order', s: 'El caso es que todavía no he recibido el pedido.' },
    { t: 'tr', q: 'Я хочу, чтобы это решили сегодня же.', a: ['Quiero que lo solucionen hoy mismo.', 'Quiero que se solucione hoy mismo.', 'Quiero que lo resuelvan hoy mismo.'] },
    { t: 'tr', q: 'В противном случае я подам претензию.', a: ['De lo contrario, presentaré una reclamación.', 'De lo contrario, pondré una reclamación.', 'De lo contrario presentaré una reclamación'] },
    { t: 'mc', q: 'Le ___ que revisen la factura, porque hay un error.', o: ['ruego', 'digo', 'pregunto'], a: 0 },
    { t: 'dict', s: 'Quería presentar una queja porque el producto llegó roto.', ru: 'Я хотел подать жалобу, потому что товар пришёл сломанным.' }
  ]
};
D[52] = {
  title: 'Идиомы и разговорные выражения',
  grammar: { title: 'Что говорят испанцы на самом деле', html: `
<table><tr><th>Выражение</th><th>Значение</th></tr>
<tr><td>tomar el pelo a alguien</td><td>подшучивать, дурачить</td></tr>
<tr><td>no tener pelos en la lengua</td><td>говорить без обиняков</td></tr>
<tr><td>estar en las nubes</td><td>витать в облаках</td></tr>
<tr><td>costar un ojo de la cara</td><td>стоить бешеных денег</td></tr>
<tr><td>meter la pata</td><td>сесть в лужу, оплошать</td></tr>
<tr><td>ser pan comido</td><td>проще простого</td></tr>
<tr><td>no pegar ojo</td><td>не сомкнуть глаз</td></tr>
<tr><td>tirar la toalla</td><td>сдаться</td></tr>
<tr><td>dar en el clavo</td><td>попасть в точку</td></tr>
<tr><td>estar como una cabra</td><td>быть чокнутым</td></tr>
<tr><td>ponerse las pilas</td><td>взяться за ум, собраться</td></tr>
<tr><td>hacer la vista gorda</td><td>закрыть глаза (на что-то)</td></tr></table>
<p>Разговорные слова: <b>vale</b> (ок), <b>guay</b> (круто), <b>mola</b> (клёво), <b>flipar</b> (обалдеть), <b>currar</b> (работать), <b>la pasta</b> (деньги), <b>tío/tía</b> (чувак), <b>un montón</b> (куча), <b>en plan</b> (типа).</p>` },
  vocab: [
    ['tomar el pelo', 'дурачить, разыгрывать', '¿Me estás tomando el pelo?'],
    ['meter la pata', 'оплошать', 'Metí la pata en la reunión.'],
    ['ser pan comido', 'быть проще простого', 'El examen fue pan comido.'],
    ['no pegar ojo', 'не сомкнуть глаз', 'Anoche no pegué ojo.'],
    ['tirar la toalla', 'сдаться', 'No tires la toalla.'],
    ['ponerse las pilas', 'взяться за ум', 'Tienes que ponerte las pilas.'],
    ['costar un ojo de la cara', 'стоить бешеных денег', 'Ese coche cuesta un ojo de la cara.'],
    ['dar en el clavo', 'попасть в точку', 'Has dado en el clavo.']
  ],
  exercises: [
    { t: 'mc', q: 'El examen fue facilísimo, ___ .', o: ['pan comido', 'un ojo de la cara', 'en las nubes'], a: 0 },
    { t: 'mc', q: 'Anoche ___ por el ruido de los vecinos.', o: ['no pegué ojo', 'metí la pata', 'tiré la toalla'], a: 0 },
    { t: 'fill', q: 'Ese abrigo cuesta un ___ de la cara.', a: ['ojo'] },
    { t: 'mc', q: 'Si quieres aprobar, tienes que ___ .', o: ['ponerte las pilas', 'tomarme el pelo', 'estar en las nubes'], a: 0 },
    { t: 'fill', q: 'En la cena le pregunté por su exmujer. ¡Metí la ___ hasta el fondo!', a: ['pata'] },
    { t: 'mc', q: '¿Cien euros por un café? ¿Me estás ___ el pelo?', o: ['tomando', 'metiendo', 'tirando'], a: 0 },
    { t: 'order', s: 'No tires la toalla ahora que has dado en el clavo.' },
    { t: 'tr', q: 'Не сдавайся, ты почти закончил.', a: ['No tires la toalla, ya casi has terminado.', 'No tires la toalla, casi has terminado.', 'No tires la toalla, ya casi terminas.', 'No te rindas, ya casi has terminado.'] },
    { t: 'mc', q: 'Mi hermano siempre dice lo que piensa: no tiene ___ en la lengua.', o: ['pelos', 'pilas', 'ojos'], a: 0 },
    { t: 'match', pairs: [['currar', 'работать (разг.)'], ['la pasta', 'деньги (разг.)'], ['flipar', 'обалдеть'], ['guay', 'круто'], ['un montón', 'куча']] },
    { t: 'dict', s: 'Tío, esa moto cuesta un ojo de la cara, ¿me tomas el pelo?', ru: 'Чувак, этот мотоцикл стоит бешеных денег, ты меня разыгрываешь?' }
  ]
};
D[53] = {
  title: 'Описываем данные и сравниваем',
  grammar: { title: 'Cuanto más…, más; сравнения и данные', html: `
<table><tr><th>Конструкция</th><th>Пример</th></tr>
<tr><td>más / menos + adj + que</td><td>Es <em>más caro que</em> antes.</td></tr>
<tr><td>tan + adj + como / tanto + сущ. + como</td><td>Es <em>tan alto como</em> tú. Tiene <em>tanto dinero como</em> yo.</td></tr>
<tr><td>el/la más + adj + de</td><td>Es <em>la ciudad más cara de</em> Europa.</td></tr>
<tr><td>-ísimo</td><td>car<em>ísimo</em>, rap<em>idísimo</em>, riqu<em>ísimo</em></td></tr>
<tr><td><b>cuanto más…, más/menos…</b></td><td><em>Cuanto más</em> estudias, <em>más</em> aprendes. <em>Cuanto menos</em> duermo, <em>peor</em> trabajo.</td></tr>
<tr><td>cada vez más / menos</td><td>Hay <em>cada vez más</em> turistas.</td></tr>
<tr><td>особые</td><td>mejor, peor, mayor, menor; superior/inferior a</td></tr></table>
<p>Описание графика: aumentar / crecer / subir (расти), disminuir / bajar / reducirse (падать), mantenerse estable, alcanzar un máximo, duplicarse, la mitad, un tercio, el doble, el 20 % (el veinte por ciento).</p>
<div class="ex"><span data-say="El paro ha disminuido un tres por ciento, mientras que los precios han subido el doble.">El paro <em>ha disminuido un 3 %</em>, mientras que los precios <em>han subido el doble</em>.</span></div>` },
  vocab: [
    ['aumentar', 'увеличиваться', 'El precio ha aumentado.'],
    ['disminuir', 'уменьшаться', 'El paro ha disminuido.'],
    ['el paro', 'безработица', 'El paro juvenil es alto.'],
    ['la tasa', 'показатель, ставка', 'La tasa de natalidad baja.'],
    ['el porcentaje', 'процент', 'Un porcentaje alto.'],
    ['duplicarse', 'удвоиться', 'Las ventas se han duplicado.'],
    ['mantenerse estable', 'оставаться стабильным', 'Los precios se mantienen estables.'],
    ['cada vez más', 'всё больше', 'Hay cada vez más tráfico.']
  ],
  exercises: [
    { t: 'fill', q: 'Cuanto ___ leo en español, ___ rápido entiendo.', a: [['más'], ['más']] },
    { t: 'mc', q: 'Madrid es ___ ciudad más grande ___ España.', o: ['la / de', 'la / que', 'una / en'], a: 0 },
    { t: 'mc', q: 'Este coche es ___ rápido ___ el tuyo.', o: ['tan / como', 'tanto / como', 'tan / que'], a: 0 },
    { t: 'fill', q: 'Las ventas ___ (duplicarse) desde 2020.', a: ['se han duplicado'] },
    { t: 'mc', q: 'El paro ___ un 3 % este año, según el informe.', o: ['ha disminuido', 'se ha mantenido que', 'ha disminuido de'], a: 0 },
    { t: 'fill', q: 'Cada vez ___ (hay) más turistas en la costa.', a: ['hay'] },
    { t: 'order', s: 'Cuanto menos duermo, peor trabajo al día siguiente.' },
    { t: 'tr', q: 'Цены выросли вдвое за пять лет.', a: ['Los precios han subido el doble en cinco años.', 'Los precios se han duplicado en cinco años.', 'Los precios han aumentado el doble en cinco años.'] },
    { t: 'tr', q: 'Чем больше работаешь, тем меньше у тебя времени.', a: ['Cuanto más trabajas, menos tiempo tienes.', 'Cuanto más trabajas menos tiempo tienes'] },
    { t: 'mc', q: 'La tasa de natalidad se mantiene ___ desde hace una década.', o: ['estable', 'estabilidad', 'establemente que'], a: 0 },
    { t: 'dict', s: 'El porcentaje de jóvenes en paro ha bajado a la mitad.', ru: 'Процент безработной молодёжи снизился вдвое.' }
  ]
};
D[54] = {
  title: 'Проверка модуля 9', review: true,
  grammar: { title: 'Шпаргалка модуля 9', html: `
<ul><li>Мнение: desde mi punto de vista, diría que, no comparto esa opinión, si bien es verdad que…, en definitiva.</li>
<li>Официальное письмо: Estimado/a…: · Me dirijo a usted para… · Le agradecería que + imperf. subj · Atentamente.</li>
<li>Жалоба: quería presentar una queja, exijo que + subj, de lo contrario…, como no + subj (угроза).</li>
<li>Идиомы: meter la pata, tomar el pelo, pan comido, no pegar ojo, tirar la toalla, ponerse las pilas.</li>
<li>Сравнение: cuanto más…, más; cada vez más; tan… como; el más… de; aumentar/disminuir.</li></ul>` },
  vocab: [],
  exercises: [
    { t: 'mc', q: '___ , el teletrabajo tiene más ventajas que inconvenientes.', o: ['A mi modo de ver', 'De lo contrario', 'Cuanto más'], a: 0 },
    { t: 'mc', q: 'Es cierto que ahorra tiempo, ___ aísla a la gente.', o: ['pero', 'sino', 'por eso'], a: 0 },
    { t: 'fill', q: 'Le ___ (agradecer, condicional) que me ___ (enviar) la factura.', a: [['agradecería'], ['enviara', 'enviase']] },
    { t: 'mc', q: 'Приветствие письма подруге:', o: ['Querida Ana:', 'Estimada Ana,', 'Muy señora mía:'], a: 0 },
    { t: 'fill', q: 'Exijo que ___ (ustedes, solucionar) el problema hoy; de lo ___ , reclamaré.', a: [['solucionen'], ['contrario']] },
    { t: 'mc', q: 'Me equivoqué de nombre delante de todos: ___ .', o: ['metí la pata', 'tiré la toalla', 'di en el clavo'], a: 0 },
    { t: 'mc', q: 'Este ejercicio es ___ : lo terminas en cinco minutos.', o: ['pan comido', 'un ojo de la cara', 'una cabra'], a: 0 },
    { t: 'fill', q: 'Cuanto ___ practico, ___ errores cometo.', a: [['más'], ['menos']] },
    { t: 'mc', q: 'El número de usuarios ___ en los últimos dos años.', o: ['se ha duplicado', 'ha duplicado', 'se duplica que'], a: 0 },
    { t: 'order', s: 'Quedo a la espera de su respuesta y le saludo atentamente.' },
    { t: 'tr', q: 'Я не разделяю это мнение.', a: ['No comparto esa opinión.', 'No comparto esta opinión.', 'No comparto esa opinión'] },
    { t: 'tr', q: 'Всё больше людей работает из дома.', a: ['Cada vez más gente trabaja desde casa.', 'Cada vez más personas trabajan desde casa.', 'Hay cada vez más gente que trabaja desde casa.'] },
    { t: 'mc', q: '¿Sería tan amable ___ confirmarme la reserva?', o: ['de', 'a', 'que'], a: 0 },
    { t: 'match', pairs: [['la queja', 'жалоба'], ['adjuntar', 'прикреплять'], ['el reembolso', 'возврат денег'], ['no pegar ojo', 'не сомкнуть глаз'], ['el paro', 'безработица'], ['la ventaja', 'преимущество']] },
    { t: 'dict', s: 'Si bien es verdad que el precio ha aumentado, la calidad es cada vez mejor.', ru: 'Хотя цена действительно выросла, качество становится всё лучше.' }
  ]
};
})(window.ST_DATA.days);
