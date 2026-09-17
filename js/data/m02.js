/* Модуль 2 · Дни 7–12 · Прошедшие времена в глубину */
(function (D) {
D[7] = {
  title: 'Pretérito perfecto vs indefinido',
  grammar: { title: 'He hecho или hice?', html: `
<p><b>Pretérito perfecto</b> = haber (he, has, ha, hemos, habéis, han) + participio (-ado / -ido). Действие связано с <b>настоящим</b>: период ещё не закончился или важен результат сейчас.</p>
<table><tr><th>Perfecto (hoy, esta semana, este año, ya, todavía no, alguna vez, nunca)</th><th>Indefinido (ayer, la semana pasada, en 2010, hace un mes)</th></tr>
<tr><td>Hoy <em>he comido</em> con Juan.</td><td>Ayer <em>comí</em> con Juan.</td></tr>
<tr><td>¿<em>Has estado</em> alguna vez en Perú?</td><td>¿<em>Estuviste</em> en Perú el año pasado?</td></tr>
<tr><td>Todavía no <em>he terminado</em>.</td><td>Lo <em>terminé</em> hace una hora.</td></tr></table>
<p>Неправильные причастия: hecho, dicho, puesto, visto, escrito, abierto, vuelto, roto, muerto, descubierto, resuelto.</p>
<div class="tip">В Латинской Америке и на севере Испании часто говорят «hoy comí»: это норма. В курсе держимся стандарта Испании.</div>` },
  vocab: [
    ['la experiencia', 'опыт', 'Ha sido una experiencia inolvidable.'],
    ['alguna vez', 'когда-нибудь', '¿Has probado alguna vez el gazpacho?'],
    ['todavía no', 'ещё не', 'Todavía no he leído el correo.'],
    ['últimamente', 'в последнее время', 'Últimamente duermo poco.'],
    ['probar', 'пробовать', 'Hemos probado el vino de la zona.'],
    ['inolvidable', 'незабываемый', 'Fue un viaje inolvidable.'],
    ['el extranjero', 'заграница', 'Nunca he vivido en el extranjero.'],
    ['mudarse', 'переезжать', 'Nos hemos mudado este mes.']
  ],
  exercises: [
    { t: 'fill', q: 'Esta semana ___ (yo, tener) mucho trabajo.', a: ['he tenido'] },
    { t: 'fill', q: '¿___ (tú, ver) alguna vez una ballena? — Sí, la ___ (ver) en 2019 en Canarias.', a: [['Has visto', 'has visto'], ['vi']] },
    { t: 'mc', q: 'Todavía no ___ el informe, lo termino mañana.', o: ['he escrito', 'escribí', 'escribía'], a: 0, e: 'Todavía no → perfecto.' },
    { t: 'mc', q: 'Mis padres ___ a Sevilla en 1998.', o: ['se mudaron', 'se han mudado', 'se mudaban'], a: 0, e: 'Конкретный год в прошлом → indefinido.' },
    { t: 'conj', verbs: ['hacer', 'ver', 'escribir', 'poner', 'volver', 'abrir', 'decir'], tenses: ['perf'], n: 4 },
    { t: 'order', s: 'Nunca he vivido en el extranjero, pero me gustaría.' },
    { t: 'tr', q: 'В последнее время я много работал.', a: ['Últimamente he trabajado mucho.', 'Últimamente he trabajado mucho'] },
    { t: 'fill', q: 'Ayer ___ (nosotros, probar) un restaurante nuevo; ___ (ser) una experiencia inolvidable.', a: [['probamos'], ['fue']] },
    { t: 'mc', q: 'Este año ___ tres veces a Lisboa.', o: ['he ido', 'fui', 'iba'], a: 0, e: 'Este año ещё длится → perfecto.' },
    { t: 'fill', q: '¿Ya ___ (vosotros, abrir) el regalo? — No, todavía no lo ___ (abrir).', a: [['habéis abierto'], ['hemos abierto']] },
    { t: 'dict', s: 'Todavía no he probado el plato típico de la región.', ru: 'Я ещё не попробовал типичное блюдо региона.' }
  ]
};
D[8] = {
  title: 'Pluscuamperfecto',
  grammar: { title: 'Había hecho: прошлое до прошлого', html: `
<p><b>Pluscuamperfecto</b> = haber в imperfecto (había, habías, había, habíamos, habíais, habían) + participio. Действие произошло <b>раньше</b> другого действия в прошлом.</p>
<div class="ex"><span data-say="Cuando llegué a la estación, el tren ya había salido.">Cuando <em>llegué</em> a la estación, el tren ya <em>había salido</em>.</span></div>
<ul><li>Ya / todavía no часто стоят перед формой: Todavía no <em>había terminado</em> cuando me llamaron.</li>
<li>Опыт до момента в прошлом: Nunca <em>había visto</em> el mar hasta los veinte años.</li>
<li>Объяснение причины: No pude entrar porque <em>había olvidado</em> las llaves.</li></ul>
<table><tr><th>Цепочка</th><th>Формы</th></tr>
<tr><td>1. Se fue (antes) → 2. Llegué</td><td>Cuando llegué, ya <em>se había ido</em>.</td></tr></table>
<div class="tip">Местоимения ставятся перед haber: <em>me había</em> duchado, <em>lo había</em> visto. Между haber и причастием ничего не ставится.</div>` },
  vocab: [
    ['el acontecimiento', 'событие', 'Fue un acontecimiento histórico.'],
    ['olvidarse de', 'забыть о', 'Me había olvidado de la cita.'],
    ['la cita', 'встреча, приём, свидание', 'Tengo cita con el dentista.'],
    ['agotado/a', 'измотанный; распроданный', 'Las entradas estaban agotadas.'],
    ['la entrada', 'билет (на мероприятие), вход', 'Compré dos entradas.'],
    ['avisar', 'предупредить', 'Nadie me había avisado.'],
    ['el aviso', 'уведомление, объявление', 'Recibí un aviso del banco.'],
    ['ya', 'уже', 'Ya había cenado cuando llegaste.']
  ],
  exercises: [
    { t: 'fill', q: 'Cuando llegamos al cine, la película ya ___ (empezar).', a: ['había empezado'] },
    { t: 'fill', q: 'No pude entrar porque ___ (yo, olvidarse) de la entrada en casa.', a: ['me había olvidado'] },
    { t: 'mc', q: 'Nadie me ___ , así que no sabía nada.', o: ['había avisado', 'ha avisado', 'avisó que'], a: 0 },
    { t: 'conj', verbs: ['hacer', 'ver', 'decir', 'salir', 'terminar', 'romper'], tenses: ['plusc'], n: 4 },
    { t: 'order', s: 'Cuando llegué a la taquilla, las entradas ya estaban agotadas.' },
    { t: 'tr', q: 'Я никогда не видел снега до того года.', a: ['Nunca había visto la nieve hasta aquel año.', 'Nunca había visto la nieve hasta ese año.', 'No había visto nunca la nieve hasta aquel año.'] },
    { t: 'fill', q: 'Ella me contó que ___ (vivir) tres años en Chile.', a: ['había vivido'] },
    { t: 'mc', q: 'Estaba agotado porque ___ toda la noche.', o: ['no había dormido', 'no ha dormido', 'no dormía que'], a: 0 },
    { t: 'fill', q: 'Ya ___ (nosotros, cenar) cuando ___ (llegar) los invitados.', a: [['habíamos cenado'], ['llegaron']] },
    { t: 'dict', s: 'Cuando me llamaron, ya había salido de casa.', ru: 'Когда мне позвонили, я уже вышел из дома.' }
  ]
};
D[9] = {
  title: 'Перифразы прошлого',
  grammar: { title: 'Estaba haciendo, acabar de, dejar de, volver a', html: `
<p><b>Estar + gerundio</b> подчёркивает процесс: <em>Estaba trabajando</em> cuando llamaste. <em>Estuve trabajando</em> toda la tarde (процесс, но законченный период).</p>
<table><tr><th>Перифраза</th><th>Значение</th><th>Пример</th></tr>
<tr><td>acabar de + inf</td><td>только что</td><td><em>Acabo de</em> llegar. <em>Acababa de</em> salir cuando…</td></tr>
<tr><td>empezar a + inf</td><td>начать</td><td><em>Empezó a</em> llover.</td></tr>
<tr><td>dejar de + inf</td><td>перестать, бросить</td><td><em>Dejé de</em> fumar hace un año.</td></tr>
<tr><td>volver a + inf</td><td>снова сделать</td><td>No <em>volví a</em> verla.</td></tr>
<tr><td>ponerse a + inf</td><td>приняться, взяться</td><td><em>Se puso a</em> llorar.</td></tr>
<tr><td>terminar de + inf</td><td>закончить</td><td><em>Terminé de</em> leer a las dos.</td></tr></table>
<p>Герундий: -ando / -iendo. Особые: leyendo, oyendo, yendo, durmiendo, pidiendo, diciendo, viniendo, pudiendo.</p>` },
  vocab: [
    ['dejar de + inf', 'перестать', 'Dejó de fumar hace dos años.'],
    ['volver a + inf', 'снова сделать', 'Nunca volví a verlo.'],
    ['acabar de + inf', 'только что сделать', 'Acabo de llegar.'],
    ['ponerse a + inf', 'приняться за', 'Se puso a estudiar de repente.'],
    ['el cambio', 'перемена, изменение', 'Fue un gran cambio en mi vida.'],
    ['la costumbre', 'привычка, обычай', 'Es una costumbre muy sana.'],
    ['el hábito', 'привычка', 'Cambié de hábitos.'],
    ['la etapa', 'этап', 'Empezó una nueva etapa.']
  ],
  exercises: [
    { t: 'fill', q: '___ (yo, estar) cocinando cuando se fue la luz.', a: ['Estaba', 'estaba'] },
    { t: 'fill', q: 'Marta ___ de fumar el año pasado y ahora hace deporte.', a: ['dejó'], hint: 'перестала' },
    { t: 'mc', q: 'No te preocupes, ___ de llamar a Pedro: viene en diez minutos.', o: ['acabo', 'dejo', 'vuelvo'], a: 0 },
    { t: 'mc', q: 'Tras el accidente nunca ___ a conducir.', o: ['volvió', 'acabó', 'terminó'], a: 0 },
    { t: 'fill', q: 'Cuando vio la nota, ___ (ponerse) a llorar.', a: ['se puso'] },
    { t: 'fill', q: 'Ayer ___ (yo, estar) ___ (leer) toda la tarde.', a: [['estuve'], ['leyendo']], e: 'Законченный период + процесс: estuve leyendo.' },
    { t: 'order', s: 'Acababa de salir de casa cuando empezó a llover.' },
    { t: 'tr', q: 'Мы только что закончили ужинать.', a: ['Acabamos de terminar de cenar.', 'Acabamos de cenar.'] },
    { t: 'mc', q: 'Los niños ___ durmiendo cuando llegamos.', o: ['estaban', 'estuvieron', 'fueron'], a: 0 },
    { t: 'fill', q: 'Cambió de hábitos: ___ (empezar) a correr y ___ (dejar) de comer dulces.', a: [['empezó'], ['dejó']] },
    { t: 'dict', s: 'Empezó una nueva etapa cuando dejó de trabajar en la ciudad.', ru: 'Начался новый этап, когда он перестал работать в городе.' }
  ]
};
D[10] = {
  title: 'Рассказываем историю',
  grammar: { title: 'Маркеры повествования', html: `
<p>Хороший рассказ держится на связках. Запомни блоками:</p>
<table><tr><th>Начало</th><th>Развитие</th><th>Поворот</th><th>Финал</th></tr>
<tr><td>Hace unos años… / Un día… / Resulta que…</td><td>Entonces… / Luego… / Después… / Mientras tanto…</td><td>De repente… / De pronto… / En ese momento… / Sin embargo…</td><td>Al final… / Total, que… / Por suerte… / Por desgracia…</td></tr></table>
<p><b>Resulta que</b> вводит суть: <em>Resulta que</em> el tren no existía. <b>Total, que</b> подводит итог в разговоре: <em>Total, que</em> volvimos andando.</p>
<p><b>Soler</b> в imperfecto — «бывало, обычно»: <em>Solíamos</em> ir a la playa en agosto.</p>
<div class="ex"><span data-say="Hace unos años fuimos a Granada. Resulta que el hotel había perdido la reserva. Total, que dormimos en el coche.">Hace unos años fuimos a Granada. <em>Resulta que</em> el hotel había perdido la reserva. <em>Total, que</em> dormimos en el coche.</span></div>` },
  vocab: [
    ['resulta que', 'оказывается, дело в том, что', 'Resulta que el bar estaba cerrado.'],
    ['total, que', 'в общем, короче', 'Total, que no fuimos.'],
    ['mientras tanto', 'тем временем', 'Mientras tanto, yo esperaba fuera.'],
    ['por suerte', 'к счастью', 'Por suerte no pasó nada.'],
    ['por desgracia', 'к сожалению', 'Por desgracia llegamos tarde.'],
    ['la anécdota', 'забавный случай', 'Te voy a contar una anécdota.'],
    ['la reserva', 'бронь', 'Habían perdido la reserva.'],
    ['el susto', 'испуг', '¡Qué susto me diste!']
  ],
  exercises: [
    { t: 'mc', q: '___ el hotel no tenía nuestra reserva.', o: ['Resulta que', 'Total, que', 'Mientras tanto'], a: 0 },
    { t: 'mc', q: 'Perdimos el tren, llovía… ___ volvimos en taxi.', o: ['Total, que', 'Resulta que', 'De pequeño'], a: 0 },
    { t: 'fill', q: '___ (nosotros, soler) pasar los veranos en el pueblo de mi abuela.', a: ['Solíamos', 'solíamos'] },
    { t: 'fill', q: 'Yo hacía la cena; ___ tanto, mi hermano ponía la mesa.', a: ['mientras'] },
    { t: 'order', s: 'Por suerte encontramos un hostal abierto a las dos de la mañana.' },
    { t: 'tr', q: 'К сожалению, музей был закрыт.', a: ['Por desgracia, el museo estaba cerrado.', 'Por desgracia el museo estaba cerrado.'] },
    { t: 'fill', q: 'Un día, cuando ___ (yo, tener) ocho años, ___ (perderse) en el mercado. ¡Qué susto!', a: [['tenía'], ['me perdí']] },
    { t: 'mc', q: 'Estábamos tranquilos y ___ oímos un ruido enorme.', o: ['de repente', 'al final', 'antes'], a: 0 },
    { t: 'tr', q: 'Тем временем дети спали.', a: ['Mientras tanto, los niños dormían.', 'Mientras tanto los niños dormían.'] },
    { t: 'fill', q: 'Le ___ (yo, contar) una anécdota y se ___ (reír) mucho.', a: [['conté'], ['rio', 'rió']] },
    { t: 'dict', s: 'Resulta que habían perdido nuestra reserva y, total, que dormimos en el coche.', ru: 'Оказалось, что они потеряли нашу бронь, и, в общем, мы спали в машине.' }
  ]
};
D[11] = {
  title: 'Местоимения OD и OI',
  grammar: { title: 'Lo, la, le, se lo: порядок и место', html: `
<table><tr><th></th><th>Прямое (OD)</th><th>Косвенное (OI)</th></tr>
<tr><td>yo / tú</td><td>me / te</td><td>me / te</td></tr>
<tr><td>él, ella, usted</td><td><b>lo, la</b></td><td><b>le</b></td></tr>
<tr><td>nosotros / vosotros</td><td>nos / os</td><td>nos / os</td></tr>
<tr><td>ellos, ellas, ustedes</td><td><b>los, las</b></td><td><b>les</b></td></tr></table>
<p>Порядок: сначала косвенное, потом прямое: <em>Me lo</em> dio. <em>Te la</em> presto.</p>
<p><b>le/les + lo/la/los/las → se</b>: Le di el libro → <em>Se lo</em> di. Les mandé las fotos → <em>Se las</em> mandé.</p>
<p>Место: перед спрягаемым глаголом, или приклеиваются к инфинитиву/герундию/утвердительному императиву:</p>
<ul><li><em>Se lo</em> voy a decir = Voy a decír<em>selo</em>.</li><li><em>Lo</em> estoy leyendo = Estoy leyéndo<em>lo</em>.</li><li>Dá<em>melo</em>. Но: No <em>me lo</em> des.</li></ul>
<div class="tip">Косвенное дополнение обычно дублируется: <em>Le</em> di el regalo <em>a Marta</em>. <em>A mí me</em> gusta.</div>` },
  vocab: [
    ['el regalo', 'подарок', 'Se lo regalé por su cumpleaños.'],
    ['prestar', 'одалживать', '¿Me prestas tu coche?'],
    ['devolver', 'возвращать', 'Te lo devuelvo mañana.'],
    ['enviar', 'отправлять', 'Se lo envié por correo.'],
    ['el recibo', 'чек, квитанция', 'Guarda el recibo.'],
    ['la garantía', 'гарантия', 'Tiene dos años de garantía.'],
    ['cambiar', 'поменять, обменять', '¿Puedo cambiarlo por otra talla?'],
    ['la talla', 'размер (одежды)', 'No tienen mi talla.']
  ],
  exercises: [
    { t: 'mc', q: '¿Le has dado el recibo a Ana? — Sí, ___ he dado esta mañana.', o: ['se lo', 'le lo', 'lo le'], a: 0, e: 'le + lo → se lo.' },
    { t: 'fill', q: '¿Me prestas tu coche? — Vale, pero ___ ___ devuelves mañana.', a: [['me'], ['lo']], e: 'Me (OI) + lo (OD): me lo devuelves.' },
    { t: 'mc', q: 'Las fotos del viaje… ___ voy a enviar esta tarde.', o: ['os las', 'las os', 'os les'], a: 0 },
    { t: 'fill', q: 'Este jersey no es mi talla. ¿Puedo cambiar___ por otro?', a: ['lo'], e: 'К инфинитиву: cambiarlo.' },
    { t: 'order', s: 'Se lo voy a regalar a mi madre por su cumpleaños.' },
    { t: 'tr', q: 'Дай мне их (ключи), пожалуйста.', a: ['Dámelas, por favor.', 'Dámelas por favor', 'Dámelas, por favor'] , hint: 'las llaves' },
    { t: 'mc', q: '¿Te gustó la película? — No, ___ pareció muy larga.', o: ['me', 'la', 'le'], a: 0, e: 'Parecer как gustar: me pareció.' },
    { t: 'fill', q: 'A mis padres ___ encanta la playa, pero a mí no ___ gusta nada.', a: [['les'], ['me']] },
    { t: 'mc', q: 'La garantía… estoy ___ ahora mismo.', o: ['leyéndola', 'leyendola', 'la leyendo'], a: 0, e: 'С герундием нужен акцент: leyéndola.' },
    { t: 'tr', q: 'Я отправил его (документ) тебе вчера.', a: ['Te lo envié ayer.', 'Te lo mandé ayer.'], hint: 'el documento' },
    { t: 'dict', s: 'Guarda el recibo por si quieres cambiarlo.', ru: 'Сохрани чек на случай, если захочешь обменять его.' }
  ]
};
D[12] = {
  title: 'Проверка модуля 2', review: true,
  grammar: { title: 'Шпаргалка модуля 2', html: `
<ul><li><b>Perfecto</b> (he hecho): hoy, esta semana, ya, todavía no, alguna vez. <b>Indefinido</b>: ayer, en 2010, hace un año.</li>
<li><b>Pluscuamperfecto</b> (había hecho): раньше другого прошедшего действия.</li>
<li>Перифразы: acabar de, dejar de, volver a, ponerse a, empezar a; estaba/estuve + gerundio.</li>
<li>Маркеры: resulta que, total que, mientras tanto, de repente, al final, por suerte.</li>
<li>Местоимения: OI перед OD; le + lo → <b>se lo</b>; приклеиваются к инфинитиву, герундию, утвердительному императиву.</li></ul>` },
  vocab: [],
  exercises: [
    { t: 'fill', q: 'Hoy ___ (yo, levantarse) tarde porque ayer ___ (acostarse) a las tres.', a: [['me he levantado'], ['me acosté']] },
    { t: 'fill', q: 'Cuando volví, mi compañero ya ___ (irse).', a: ['se había ido'] },
    { t: 'mc', q: '¿Has estado alguna vez en México? — Sí, ___ el año pasado.', o: ['estuve', 'he estado', 'estaba'], a: 0 },
    { t: 'conj', verbs: ['hacer', 'ver', 'escribir', 'poner', 'volver', 'decir'], tenses: ['perf', 'plusc'], n: 4 },
    { t: 'mc', q: '___ de terminar el informe, ahora ___ lo envío.', o: ['Acabo / te', 'Dejo / te', 'Vuelvo / le'], a: 0 },
    { t: 'fill', q: 'Cuando ___ (sonar) el teléfono, ___ (yo, estar) duchándome.', a: [['sonó'], ['estaba']] },
    { t: 'mc', q: '¿Le devolviste el libro a Luis? — Sí, ___ devolví ayer.', o: ['se lo', 'le lo', 'lo'], a: 0 },
    { t: 'fill', q: 'No puedo prestar___ el coche: ___ necesito hoy.', a: [['te'], ['lo']] },
    { t: 'order', s: 'Resulta que nunca había probado el gazpacho hasta ese verano.' },
    { t: 'tr', q: 'Мы только что вернулись из поездки.', a: ['Acabamos de volver del viaje.', 'Acabamos de regresar del viaje.'] },
    { t: 'tr', q: 'Она перестала курить, когда родился её сын.', a: ['Dejó de fumar cuando nació su hijo.', 'Ella dejó de fumar cuando nació su hijo.'] },
    { t: 'mc', q: 'Estaba muy cansado porque ___ toda la noche.', o: ['había estado trabajando', 'ha trabajado', 'estaba trabajado'], a: 0 },
    { t: 'fill', q: '¿Ya ___ (vosotros, ver) la película? — Todavía no la ___ (ver).', a: [['habéis visto'], ['hemos visto']] },
    { t: 'match', pairs: [['prestar', 'одалживать'], ['devolver', 'возвращать'], ['mudarse', 'переезжать'], ['avisar', 'предупредить'], ['resulta que', 'оказывается'], ['por desgracia', 'к сожалению']] },
    { t: 'dict', s: 'Por suerte, me habían avisado y pude cambiar la reserva.', ru: 'К счастью, меня предупредили, и я смог поменять бронь.' }
  ]
};
})(window.ST_DATA.days);
