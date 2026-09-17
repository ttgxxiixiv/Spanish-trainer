/* Модуль 7 · Дни 37–42 · Пассив, por/para, связки */
(function (D) {
D[37] = {
  title: 'Пассив и безличные конструкции',
  grammar: { title: 'Ser + participio, pasiva refleja, se impersonal', html: `
<table><tr><th>Конструкция</th><th>Пример</th><th>Где</th></tr>
<tr><td><b>Pasiva con ser</b> + participio (согласуется)</td><td>La ley <em>fue aprobada</em> por el Parlamento.</td><td>пресса, формальный стиль</td></tr>
<tr><td><b>Pasiva refleja</b>: se + глагол в 3 л. (согласуется с подлежащим)</td><td><em>Se venden</em> pisos. <em>Se aprobó</em> la ley.</td><td>самая частая</td></tr>
<tr><td><b>Se impersonal</b>: se + 3 л. ед. ч.</td><td><em>Se vive</em> bien aquí. <em>Se dice</em> que…</td><td>«люди», «говорят»</td></tr>
<tr><td><b>3 л. мн. ч.</b> без подлежащего</td><td><em>Han robado</em> un banco. <em>Llaman</em> a la puerta.</td><td>разговорная</td></tr></table>
<p>Результат состояния — <b>estar + participio</b>: La tienda <em>está cerrada</em> (закрыта сейчас) vs La tienda <em>fue cerrada</em> por la policía (действие).</p>
<div class="tip">С людьми-дополнением используем se impersonal + a: <em>Se</em> detuvo <em>a</em> los sospechosos. (не *se detuvieron)</div>` },
  vocab: [
    ['aprobar una ley', 'принять закон', 'Se aprobó la ley.'],
    ['la ley', 'закон', 'La ley entra en vigor mañana.'],
    ['detener', 'задержать, арестовать', 'Fue detenido ayer.'],
    ['el sospechoso / la sospechosa', 'подозреваемый', 'Se detuvo a dos sospechosos.'],
    ['la manifestación', 'демонстрация', 'Se convocó una manifestación.'],
    ['convocar', 'созывать, объявлять', 'Se ha convocado una huelga.'],
    ['el gobierno', 'правительство', 'El gobierno anunció medidas.'],
    ['la medida', 'мера', 'Se tomaron medidas urgentes.']
  ],
  exercises: [
    { t: 'mc', q: 'La ley ___ por el Parlamento la semana pasada.', o: ['fue aprobada', 'fue aprobado', 'se aprobaron'], a: 0, e: 'Participio согласуется: la ley → aprobada.' },
    { t: 'fill', q: '___ (vender, se) pisos en esta zona a buen precio.', a: ['Se venden', 'se venden'] },
    { t: 'fill', q: 'En España ___ (cenar, se) muy tarde.', a: ['se cena'] },
    { t: 'mc', q: '___ a tres sospechosos cerca de la estación.', o: ['Se detuvo', 'Se detuvieron', 'Fue detenido'], a: 0, e: 'Se impersonal + a + люди: se detuvo a.' },
    { t: 'mc', q: 'La tienda ___ desde las ocho: no hay nadie.', o: ['está cerrada', 'es cerrada', 'se cierra que'], a: 0 },
    { t: 'fill', q: '___ (convocar, se) una manifestación para el sábado.', a: ['Se ha convocado', 'se ha convocado', 'Se convocó', 'se convocó', 'Se convoca', 'se convoca'] },
    { t: 'order', s: 'Se dice que el gobierno tomará medidas urgentes.' },
    { t: 'tr', q: 'Здесь говорят по-испански.', a: ['Aquí se habla español.', 'Se habla español aquí.'] },
    { t: 'tr', q: 'Ограбили банк в центре.', a: ['Han robado un banco en el centro.', 'Robaron un banco en el centro.', 'Se ha robado un banco en el centro.'] },
    { t: 'fill', q: 'Las medidas ___ (ser, indefinido) anunciadas por el ministro.', a: ['fueron'] },
    { t: 'dict', s: 'Se han tomado medidas para que no se repita.', ru: 'Были приняты меры, чтобы это не повторилось.' }
  ]
};
D[38] = {
  title: 'Ser y estar: продвинутый уровень',
  grammar: { title: 'Выражения с ser и estar', html: `
<table><tr><th>estar</th><th>ser</th></tr>
<tr><td>estar de acuerdo — быть согласным<br>estar de vacaciones / de viaje<br>estar a punto de — вот-вот<br>estar harto de — сыт по горло<br>estar hecho polvo — быть разбитым<br>estar en forma<br>estar de moda<br>estar a favor / en contra</td><td>ser de fiar — надёжный<br>ser un rollo — скукотища<br>ser capaz de — быть способным<br>ser consciente de — осознавать<br>ser de + материал/происхождение<br>ser para + цель: Es para ti.<br>es que… — дело в том, что</td></tr></table>
<p>Ещё пары: estar bueno (вкусный/привлекательный) — ser bueno (хороший); estar negro (злой) — ser negro; estar despierto (бодрствовать) — ser despierto (сообразительный); estar seguro (уверен) — ser seguro (безопасный).</p>
<p><b>Estar + participio</b> = результат: está roto, está hecho, está resuelto. <b>Ser + participio</b> = действие (пассив).</p>` },
  vocab: [
    ['estar de acuerdo', 'быть согласным', 'No estoy de acuerdo contigo.'],
    ['estar a punto de', 'вот-вот (сделать)', 'Estoy a punto de terminar.'],
    ['estar harto/a de', 'быть сытым по горло', 'Estoy harta de esperar.'],
    ['estar hecho/a polvo', 'быть без сил', 'Después del viaje estoy hecho polvo.'],
    ['ser de fiar', 'быть надёжным', 'Ese tipo no es de fiar.'],
    ['ser un rollo', 'быть скукотищей', 'La clase fue un rollo.'],
    ['ser capaz de', 'быть способным на', 'Es capaz de todo.'],
    ['es que', 'дело в том, что', 'Es que no tengo tiempo.']
  ],
  exercises: [
    { t: 'mc', q: '¿Vienes? — ___ no tengo tiempo, lo siento.', o: ['Es que', 'Está que', 'Es de'], a: 0 },
    { t: 'fill', q: 'No ___ de acuerdo con la decisión del gobierno.', a: ['estoy', 'estamos', 'están'] },
    { t: 'mc', q: 'Ese tipo no ___ de fiar: miente siempre.', o: ['es', 'está', 'hay'], a: 0 },
    { t: 'fill', q: 'Ya ___ (yo) a punto de salir cuando llamaste.', a: ['estaba'] },
    { t: 'mc', q: 'Esta sopa ___ buenísima, ¿quién la ha hecho?', o: ['está', 'es', 'sea'], a: 0, e: 'Вкус конкретного блюда — estar.' },
    { t: 'mc', q: 'El cristal ___ roto; alguien lo ___ anoche.', o: ['está / rompió', 'es / rompió', 'está / era roto'], a: 0 },
    { t: 'order', s: 'Estoy harta de que la reunión sea siempre un rollo.' },
    { t: 'tr', q: 'После работы я без сил.', a: ['Después del trabajo estoy hecho polvo.', 'Después del trabajo estoy hecha polvo.', 'Después de trabajar estoy hecho polvo.'] },
    { t: 'fill', q: '¿___ (tú) seguro de que la puerta ___ cerrada?', a: [['Estás', 'estás'], ['está']] },
    { t: 'mc', q: 'Mi hermano ___ capaz de comerse tres pizzas.', o: ['es', 'está', 'hace'], a: 0 },
    { t: 'dict', s: 'Es que estoy a punto de terminar y no puedo parar ahora.', ru: 'Дело в том, что я вот-вот закончу и не могу сейчас остановиться.' }
  ]
};
D[39] = {
  title: 'Por y para',
  grammar: { title: 'Por: причина, путь, обмен. Para: цель, адресат, срок', html: `
<table><tr><th>POR</th><th>PARA</th></tr>
<tr><td>причина: Lo hice <em>por</em> ti. Cerrado <em>por</em> vacaciones.</td><td>цель: Estudio <em>para</em> aprobar.</td></tr>
<tr><td>движение через/по: Paseamos <em>por</em> el parque.</td><td>направление: Salgo <em>para</em> Madrid.</td></tr>
<tr><td>приблизительное время/место: <em>por</em> la mañana, <em>por</em> aquí.</td><td>срок: Lo necesito <em>para</em> el lunes.</td></tr>
<tr><td>обмен/цена: Lo compré <em>por</em> 20 euros.</td><td>адресат: Es <em>para</em> ti.</td></tr>
<tr><td>средство: <em>por</em> teléfono, <em>por</em> correo.</td><td>мнение: <em>Para</em> mí, es un error.</td></tr>
<tr><td>агент пассива: escrito <em>por</em> Cervantes.</td><td>сравнение с ожиданием: <em>Para</em> ser extranjero, habla muy bien.</td></tr>
<tr><td>«ещё не»: Está <em>por</em> hacer.</td><td>«вот-вот»: Está <em>para</em> llover.</td></tr></table>
<p>Устойчивые: por fin, por supuesto, por ejemplo, por eso, por si acaso, por lo visto, por cierto — para siempre, para nada, para colmo.</p>` },
  vocab: [
    ['por lo visto', 'по-видимому', 'Por lo visto, no viene.'],
    ['por si acaso', 'на всякий случай', 'Lleva paraguas por si acaso.'],
    ['por cierto', 'кстати', 'Por cierto, ¿has visto a Luis?'],
    ['para colmo', 'в довершение всего', 'Y para colmo, llovía.'],
    ['para nada', 'вовсе нет', 'No me molesta para nada.'],
    ['el viaje de negocios', 'командировка', 'Está de viaje de negocios.'],
    ['la sede', 'штаб-квартира, офис', 'La sede está en Bilbao.'],
    ['el proveedor', 'поставщик', 'Negociamos con el proveedor.']
  ],
  exercises: [
    { t: 'mc', q: 'Salgo ___ Bilbao mañana ___ la mañana.', o: ['para / por', 'por / para', 'para / para'], a: 0 },
    { t: 'mc', q: 'Necesito el informe ___ el viernes.', o: ['para', 'por', 'en'], a: 0 },
    { t: 'fill', q: 'Gracias ___ tu ayuda; este regalo es ___ ti.', a: [['por'], ['para']] },
    { t: 'mc', q: 'Compré el billete ___ cien euros ___ internet.', o: ['por / por', 'para / por', 'por / para'], a: 0 },
    { t: 'mc', q: '___ ser tan joven, dirige la empresa muy bien.', o: ['Para', 'Por', 'De'], a: 0 },
    { t: 'fill', q: 'Cerrado ___ reformas. Disculpen las molestias.', a: ['por'] },
    { t: 'order', s: 'Por lo visto el proveedor no viene a la sede hasta el jueves.' },
    { t: 'tr', q: 'Возьми зонт на всякий случай.', a: ['Lleva paraguas por si acaso.', 'Coge el paraguas por si acaso.', 'Lleva el paraguas por si acaso.', 'Llévate el paraguas por si acaso.'] },
    { t: 'fill', q: 'La novela fue escrita ___ una autora chilena.', a: ['por'] },
    { t: 'mc', q: 'Trabajo mucho ___ que mis hijos tengan un futuro.', o: ['para', 'por', 'porque'], a: 0 },
    { t: 'dict', s: 'Por cierto, el viaje de negocios se aplazó por la huelga.', ru: 'Кстати, командировку отложили из-за забастовки.' }
  ]
};
D[40] = {
  title: 'Причина и следствие',
  grammar: { title: 'Como, ya que, puesto que / así que, por lo tanto', html: `
<table><tr><th>Причина</th><th>Следствие</th></tr>
<tr><td><b>porque</b> (после главной): No fui <em>porque</em> llovía.<br><b>como</b> (в начале): <em>Como</em> llovía, no fui.<br><b>ya que / puesto que / dado que</b>: <em>Ya que</em> estás aquí, ayúdame.<br><b>debido a / a causa de</b> + сущ.: <em>Debido al</em> mal tiempo…<br><b>por</b> + сущ./inf: Lo multaron <em>por</em> exceso de velocidad.<br><b>gracias a</b>: <em>Gracias a</em> ti, aprobé.</td><td><b>así que</b>: Llovía, <em>así que</em> nos quedamos.<br><b>por eso / por lo tanto / por consiguiente</b>: Está enfermo, <em>por lo tanto</em> no vendrá.<br><b>de modo que / de manera que</b>: Habló claro, <em>de modo que</em> todos entendieron.<br><b>tan… que / tanto… que</b>: Era <em>tan</em> caro <em>que</em> no lo compré.<br><b>entonces</b> (разг.): Entonces, ¿nos vamos?</td></tr></table>
<p>Отрицание причины: <b>no porque</b> + subjuntivo: No lo hago <em>porque quiera</em>, sino porque debo.</p>
<div class="tip">Como всегда в начале предложения; porque никогда в начале ответа на письме, кроме ответа на ¿por qué?</div>` },
  vocab: [
    ['ya que', 'раз уж, поскольку', 'Ya que insistes, iré.'],
    ['puesto que', 'поскольку', 'Puesto que no hay quórum, aplazamos.'],
    ['debido a', 'из-за', 'Debido a la lluvia, se canceló.'],
    ['así que', 'так что', 'Estoy cansado, así que me voy.'],
    ['por lo tanto', 'следовательно', 'Por lo tanto, no es posible.'],
    ['de modo que', 'так что, таким образом', 'Habló claro, de modo que todos entendieron.'],
    ['el argumento', 'аргумент', 'Es un argumento sólido.'],
    ['la consecuencia', 'последствие', 'Tendrá consecuencias.']
  ],
  exercises: [
    { t: 'mc', q: '___ no tenía dinero, me quedé en casa.', o: ['Como', 'Porque', 'Así que'], a: 0, e: 'В начале предложения — como.' },
    { t: 'mc', q: 'No tenía dinero, ___ me quedé en casa.', o: ['así que', 'como', 'ya que'], a: 0 },
    { t: 'fill', q: 'Se canceló el vuelo ___ a la tormenta.', a: ['debido'] },
    { t: 'mc', q: '___ estás aquí, ayúdame con las cajas.', o: ['Ya que', 'Por lo tanto', 'De modo que'], a: 0 },
    { t: 'mc', q: 'No estudio español ___ tenga que hacerlo, sino porque me gusta.', o: ['porque', 'como', 'ya que'], a: 0, e: 'No porque + subjuntivo.' },
    { t: 'fill', q: 'Era ___ caro ___ no lo compramos.', a: [['tan'], ['que']] },
    { t: 'order', s: 'Puesto que nadie está de acuerdo, aplazamos la decisión.' },
    { t: 'tr', q: 'Так как шёл дождь, мы остались дома.', a: ['Como llovía, nos quedamos en casa.', 'Como estaba lloviendo, nos quedamos en casa.', 'Como llovía nos quedamos en casa'] },
    { t: 'tr', q: 'Он болен, поэтому не придёт.', a: ['Está enfermo, por eso no vendrá.', 'Está enfermo, así que no vendrá.', 'Está enfermo, por lo tanto no vendrá.', 'Está enfermo, así que no viene.'] },
    { t: 'mc', q: 'Aprobé ___ tu ayuda.', o: ['gracias a', 'debido a', 'a causa de'], a: 0, e: 'Положительная причина — gracias a.' },
    { t: 'dict', s: 'El argumento era sólido, de modo que aceptaron la propuesta.', ru: 'Аргумент был убедительным, так что они приняли предложение.' }
  ]
};
D[41] = {
  title: 'Контраст и добавление',
  grammar: { title: 'Sin embargo, en cambio, no obstante, además', html: `
<table><tr><th>Контраст</th><th>Добавление</th></tr>
<tr><td><b>pero</b> — но<br><b>sin embargo</b> — однако (после точки/;)<br><b>no obstante</b> — тем не менее (формально)<br><b>en cambio</b> — зато, напротив<br><b>mientras que</b> — тогда как<br><b>aunque</b> — хотя<br><b>sino</b> — а (после отрицания): No es rojo, <em>sino</em> azul.<br><b>sino que</b> + глагол: No canta, <em>sino que</em> grita.</td><td><b>además</b> — кроме того<br><b>incluso</b> — даже<br><b>es más</b> — более того<br><b>asimismo</b> — также (формально)<br><b>por un lado… por otro (lado)</b><br><b>en primer lugar… en segundo lugar… por último</b><br><b>tanto… como…</b> — как…, так и…</td></tr></table>
<div class="ex"><span data-say="El piso es caro; sin embargo, la ubicación es perfecta. Además, tiene terraza.">El piso es caro; <em>sin embargo</em>, la ubicación es perfecta. <em>Además</em>, tiene terraza.</span></div>
<div class="tip">Pero vs sino: sino только после отрицания и для замены: No quiero té, <em>sino</em> café. No quiero té, <em>pero</em> tomaré uno.</div>` },
  vocab: [
    ['sin embargo', 'однако', 'Es caro; sin embargo, lo compraré.'],
    ['no obstante', 'тем не менее', 'No obstante, hay dudas.'],
    ['en cambio', 'зато, напротив', 'Yo madrugo; él, en cambio, no.'],
    ['mientras que', 'тогда как', 'Ella ahorra, mientras que él gasta.'],
    ['además', 'кроме того', 'Además, es barato.'],
    ['incluso', 'даже', 'Incluso los niños lo entienden.'],
    ['el debate', 'дебаты, обсуждение', 'El debate fue intenso.'],
    ['la postura', 'позиция (во мнении)', 'Mantuvo su postura.']
  ],
  exercises: [
    { t: 'mc', q: 'No quiero café, ___ té.', o: ['sino', 'pero', 'sin embargo'], a: 0 },
    { t: 'mc', q: 'El hotel era pequeño; ___ , estaba muy limpio.', o: ['sin embargo', 'sino', 'además que'], a: 0 },
    { t: 'fill', q: 'Marta ahorra cada mes, ___ que su hermano lo gasta todo.', a: ['mientras'] },
    { t: 'mc', q: 'Es barato y, ___ , está cerca del centro.', o: ['además', 'en cambio', 'sino'], a: 0 },
    { t: 'mc', q: 'No canta, ___ grita.', o: ['sino que', 'sino', 'pero que'], a: 0, e: 'Перед глаголом — sino que.' },
    { t: 'fill', q: '___ los expertos se equivocaron con la previsión.', a: ['Incluso', 'incluso'] , hint: 'даже' },
    { t: 'order', s: 'Por un lado es caro, pero por otro lado la calidad es excelente.' },
    { t: 'tr', q: 'Я встаю рано; он, напротив, спит до полудня.', a: ['Yo madrugo; él, en cambio, duerme hasta el mediodía.', 'Yo madrugo; él en cambio duerme hasta el mediodía.', 'Yo me levanto temprano; él, en cambio, duerme hasta el mediodía.'] },
    { t: 'tr', q: 'Это не проблема, а возможность.', a: ['No es un problema, sino una oportunidad.', 'No es un problema sino una oportunidad'] },
    { t: 'mc', q: 'Mantuvo su postura; ___ , aceptó escuchar al resto.', o: ['no obstante', 'sino', 'mientras que'], a: 0 },
    { t: 'dict', s: 'El debate fue duro; no obstante, ambas partes mantuvieron el respeto.', ru: 'Дебаты были жёсткими; тем не менее обе стороны сохранили уважение.' }
  ]
};
D[42] = {
  title: 'Проверка модуля 7', review: true,
  grammar: { title: 'Шпаргалка модуля 7', html: `
<ul><li>Pasiva: ser + participio (согласуется); se + 3 л. (pasiva refleja); se impersonal + a + люди; estar + participio = результат.</li>
<li>Estar: de acuerdo, a punto de, harto de, hecho polvo. Ser: de fiar, un rollo, capaz de; es que.</li>
<li>Por: причина, путь, обмен, средство, агент. Para: цель, адресат, срок, мнение.</li>
<li>Причина: como (в начале), porque, ya que, debido a, gracias a. Следствие: así que, por lo tanto, de modo que, tan… que.</li>
<li>Контраст: sin embargo, en cambio, no obstante, sino (que). Добавление: además, incluso, es más.</li></ul>` },
  vocab: [],
  exercises: [
    { t: 'fill', q: 'En este restaurante ___ (servir, se) tapas muy buenas.', a: ['se sirven'] },
    { t: 'mc', q: 'El puente ___ construido en el siglo XVI.', o: ['fue', 'estuvo', 'se'], a: 0 },
    { t: 'mc', q: '___ a los responsables del robo esta mañana.', o: ['Se detuvo', 'Se detuvieron', 'Fueron detenido'], a: 0 },
    { t: 'fill', q: 'Estoy ___ de esperar: llevo una hora aquí.', a: ['harto', 'harta'] },
    { t: 'mc', q: 'Lo hice ___ ti, no ___ obligación.', o: ['por / por', 'para / por', 'por / para'], a: 0 },
    { t: 'mc', q: 'Necesitamos la respuesta ___ el lunes.', o: ['para', 'por', 'hasta que'], a: 0 },
    { t: 'mc', q: '___ estaba enfermo, no fue a trabajar.', o: ['Como', 'Porque', 'Así que'], a: 0 },
    { t: 'fill', q: 'No es que no quiera, ___ que no puedo.', a: ['sino', 'es'], e: 'No es que…, sino que… (или «es que»).' },
    { t: 'mc', q: 'La película es larga; ___ , no aburre.', o: ['sin embargo', 'sino', 'además'], a: 0 },
    { t: 'order', s: 'Debido a la huelga, se aplazó la manifestación.' },
    { t: 'tr', q: 'Дело в том, что я не согласен.', a: ['Es que no estoy de acuerdo.', 'Es que no estoy de acuerdo'] },
    { t: 'tr', q: 'Здесь хорошо живётся, но всё очень дорого.', a: ['Aquí se vive bien, pero todo es muy caro.', 'Se vive bien aquí, pero todo es muy caro.', 'Aquí se vive bien pero todo es muy caro'] },
    { t: 'fill', q: 'Habló muy claro, de ___ que todos entendieron.', a: ['modo', 'manera'] },
    { t: 'match', pairs: [['por si acaso', 'на всякий случай'], ['por lo visto', 'по-видимому'], ['en cambio', 'зато'], ['además', 'кроме того'], ['la medida', 'мера'], ['estar a punto de', 'вот-вот']] },
    { t: 'dict', s: 'Para colmo, la sede estaba cerrada por reformas.', ru: 'В довершение всего офис был закрыт на ремонт.' }
  ]
};
})(window.ST_DATA.days);
