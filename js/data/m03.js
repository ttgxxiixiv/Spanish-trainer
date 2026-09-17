/* Модуль 3 · Дни 13–18 · Будущее, условное наклонение, гипотезы */
(function (D) {
D[13] = {
  title: 'Futuro simple',
  grammar: { title: 'Futuro: формы и три способа говорить о будущем', html: `
<p>Futuro simple = инфинитив + <b>é, ás, á, emos, éis, án</b>: hablaré, comerás, vivirá.</p>
<p>Неправильные основы (окончания те же):</p>
<table><tr><td>tener → tendr-</td><td>poner → pondr-</td><td>salir → saldr-</td><td>venir → vendr-</td></tr>
<tr><td>poder → podr-</td><td>saber → sabr-</td><td>haber → habr-</td><td>querer → querr-</td></tr>
<tr><td>hacer → har-</td><td>decir → dir-</td><td>caber → cabr-</td><td>valer → valdr-</td></tr></table>
<table><tr><th>Способ</th><th>Оттенок</th></tr>
<tr><td><b>ir a + inf</b>: Voy a llamarle.</td><td>план, намерение, ближайшее</td></tr>
<tr><td><b>presente</b>: Mañana trabajo.</td><td>расписание, договорённость</td></tr>
<tr><td><b>futuro</b>: Te llamaré.</td><td>обещание, прогноз, предположение</td></tr></table>
<div class="tip">После si в реальном условии — presente, не futuro: Si <em>llueve</em>, no <em>saldremos</em>.</div>` },
  vocab: [
    ['el plan', 'план', '¿Qué planes tienes para el verano?'],
    ['la meta', 'цель', 'Mi meta es hablar bien español.'],
    ['a largo plazo', 'в долгосрочной перспективе', 'A largo plazo quiero vivir fuera.'],
    ['dentro de', 'через (о времени)', 'Dentro de dos meses tendré el B2.'],
    ['el próximo año', 'в следующем году', 'El próximo año viajaré más.'],
    ['conseguir', 'добиться, достать', 'Conseguirás lo que te propongas.'],
    ['proponerse', 'задаться целью', 'Me he propuesto leer más.'],
    ['la jubilación', 'пенсия (уход на пенсию)', 'Tras la jubilación viajarán.']
  ],
  exercises: [
    { t: 'conj', verbs: ['tener', 'hacer', 'poder', 'salir', 'decir', 'saber', 'venir', 'poner'], tenses: ['fut'], n: 5 },
    { t: 'fill', q: 'Dentro de dos meses ___ (yo, tener) el nivel B2.', a: ['tendré'] },
    { t: 'mc', q: 'Si estudias cada día, ___ tu meta.', o: ['conseguirás', 'conseguirás que', 'consigues que'], a: 0 },
    { t: 'mc', q: 'Mañana ___ el tren de las ocho, ya tengo el billete.', o: ['cojo', 'cogeré que', 'voy coger'], a: 0, e: 'Расписание/договорённость — presente.' },
    { t: 'fill', q: '¿Qué ___ (vosotros, hacer) el próximo año? — ___ (nosotros, viajar) por Sudamérica.', a: [['haréis'], ['Viajaremos', 'viajaremos']] },
    { t: 'order', s: 'Te prometo que te llamaré en cuanto llegue.' },
    { t: 'tr', q: 'После выхода на пенсию они будут жить у моря.', a: ['Tras la jubilación vivirán junto al mar.', 'Después de la jubilación vivirán junto al mar.', 'Tras la jubilación vivirán al lado del mar.', 'Después de la jubilación vivirán cerca del mar.'] },
    { t: 'fill', q: 'Si no ___ (llover), ___ (nosotros, salir) a correr.', a: [['llueve'], ['saldremos']] },
    { t: 'mc', q: 'Este verano ___ a visitar a mis abuelos, ya está decidido.', o: ['voy', 'iré', 'vaya'], a: 0, e: 'Решённый план — ir a + inf.' },
    { t: 'dict', s: 'A largo plazo me he propuesto conseguir un trabajo en el extranjero.', ru: 'В долгосрочной перспективе я поставил цель получить работу за границей.' }
  ]
};
D[14] = {
  title: 'Futuro de probabilidad',
  grammar: { title: 'Будущее для предположений о настоящем', html: `
<p>Futuro simple выражает <b>догадку о настоящем</b>: «наверное, должно быть».</p>
<table><tr><th>Факт</th><th>Предположение</th></tr>
<tr><td>Son las tres.</td><td><em>Serán</em> las tres. (Наверное, три.)</td></tr>
<tr><td>Está en casa.</td><td><em>Estará</em> en casa. (Должно быть, дома.)</td></tr>
<tr><td>Tiene treinta años.</td><td><em>Tendrá</em> unos treinta años.</td></tr></table>
<p>В вопросах — недоумение: ¿Dónde <em>estará</em> Juan? ¿Quién <em>será</em> a estas horas?</p>
<p><b>Futuro compuesto</b> (habré + participio) — догадка о недавнем прошлом: No contesta, <em>se habrá dormido</em>. <em>Habrán salido</em> ya.</p>
<div class="tip">Аналоги без futuro: seguramente, probablemente, supongo que, a lo mejor + indicativo.</div>` },
  vocab: [
    ['suponer', 'предполагать', 'Supongo que vendrá.'],
    ['seguramente', 'наверняка, скорее всего', 'Seguramente está en el gimnasio.'],
    ['a lo mejor', 'может быть', 'A lo mejor llega tarde.'],
    ['el timbre', 'дверной звонок', 'Suena el timbre: ¿quién será?'],
    ['quedarse dormido/a', 'проспать, заснуть', 'Se habrá quedado dormido.'],
    ['el atasco', 'пробка (на дороге)', 'Habrá un atasco en la autopista.'],
    ['la pista', 'подсказка, зацепка', 'No tengo ninguna pista.'],
    ['extrañar', 'удивлять; скучать (Лат. Ам.)', 'Me extraña que no llame.']
  ],
  exercises: [
    { t: 'mc', q: 'No sé qué hora es… ___ las nueve más o menos.', o: ['Serán', 'Son', 'Fueron'], a: 0 },
    { t: 'fill', q: '¿Dónde ___ (estar) mis llaves? No las encuentro.', a: ['estarán'] },
    { t: 'mc', q: 'Marta no contesta. ___ dormida.', o: ['Se habrá quedado', 'Se ha quedado', 'Se quedará que'], a: 0, e: 'Догадка о недавнем прошлом — futuro compuesto.' },
    { t: 'fill', q: '¿Cuántos años tiene el profesor? — No sé, ___ (tener) unos cuarenta.', a: ['tendrá'] },
    { t: 'mc', q: 'Suena el timbre. ¿Quién ___ a estas horas?', o: ['será', 'es que', 'sea'], a: 0 },
    { t: 'fill', q: 'Llegan tarde; ___ (haber) un atasco en la autopista.', a: ['habrá'] },
    { t: 'order', s: 'Supongo que habrán salido ya de la oficina.' },
    { t: 'tr', q: 'Наверное, он в спортзале.', a: ['Estará en el gimnasio.', 'Seguramente está en el gimnasio.', 'Él estará en el gimnasio.'] },
    { t: 'tr', q: 'Может быть, они уже поужинали.', a: ['A lo mejor ya han cenado.', 'Habrán cenado ya.', 'Ya habrán cenado.', 'A lo mejor han cenado ya.'] },
    { t: 'conj', verbs: ['ser', 'estar', 'tener', 'haber'], tenses: ['fut'], n: 3 },
    { t: 'dict', s: 'Me extraña que no llame; se habrá quedado sin batería.', ru: 'Странно, что он не звонит; наверное, у него села батарея.' }
  ]
};
D[15] = {
  title: 'Condicional simple',
  grammar: { title: 'Condicional: вежливость, советы, желания', html: `
<p>Condicional = инфинитив (или та же основа, что в futuro) + <b>ía, ías, ía, íamos, íais, ían</b>: hablaría, tendría, haría, podría, diría.</p>
<table><tr><th>Значение</th><th>Пример</th></tr>
<tr><td>Вежливая просьба</td><td>¿<em>Podrías</em> ayudarme? <em>Me gustaría</em> reservar una mesa.</td></tr>
<tr><td>Совет</td><td>Yo en tu lugar <em>iría</em> al médico. <em>Deberías</em> descansar.</td></tr>
<tr><td>Желание</td><td><em>Me encantaría</em> vivir en Barcelona.</td></tr>
<tr><td>Предположение о прошлом</td><td><em>Serían</em> las diez cuando llegó.</td></tr>
<tr><td>Будущее в прошлом</td><td>Dijo que <em>vendría</em>.</td></tr></table>
<div class="tip">Совет: Deberías / Tendrías que / Podrías + инфинитив; Yo que tú… / Yo en tu lugar… + condicional.</div>` },
  vocab: [
    ['el consejo', 'совет', 'Te voy a dar un consejo.'],
    ['aconsejar', 'советовать', 'Te aconsejo descansar.'],
    ['la receta', 'рецепт (мед. и кулинарный)', 'Necesitas receta para ese medicamento.'],
    ['el dolor', 'боль', 'Tengo dolor de cabeza.'],
    ['la fiebre', 'температура, жар', 'Tiene fiebre desde ayer.'],
    ['el resfriado', 'простуда', 'Es solo un resfriado.'],
    ['la pastilla', 'таблетка', 'Toma una pastilla cada ocho horas.'],
    ['descansar', 'отдыхать', 'Deberías descansar más.']
  ],
  exercises: [
    { t: 'conj', verbs: ['tener', 'hacer', 'poder', 'decir', 'salir', 'querer', 'gustar', 'deber'], tenses: ['cond'], n: 5 },
    { t: 'mc', q: 'Tienes fiebre. Yo en tu lugar ___ al médico.', o: ['iría', 'voy', 'iré'], a: 0 },
    { t: 'fill', q: '¿___ (tú, poder) abrir la ventana, por favor?', a: ['Podrías', 'podrías'] },
    { t: 'fill', q: 'Me ___ (gustar) reservar una mesa para dos.', a: ['gustaría'] },
    { t: 'mc', q: 'Te duele la cabeza… ___ tomar una pastilla y descansar.', o: ['Deberías', 'Debes que', 'Deberías que'], a: 0 },
    { t: 'order', s: 'Yo que tú no tomaría tantas pastillas sin receta.' },
    { t: 'tr', q: 'Мне бы очень хотелось жить у моря.', a: ['Me encantaría vivir junto al mar.', 'Me encantaría vivir cerca del mar.', 'Me gustaría mucho vivir junto al mar.', 'Me encantaría vivir al lado del mar.'] },
    { t: 'fill', q: 'Me dijo que ___ (venir) a las cinco, pero no ha llegado.', a: ['vendría'], e: 'Будущее в прошлом — condicional.' },
    { t: 'mc', q: '¿A qué hora llegó? — No sé, ___ las once.', o: ['serían', 'serán', 'eran que'], a: 0, e: 'Догадка о прошлом — condicional.' },
    { t: 'dict', s: 'Te aconsejo que descanses; deberías tomarte unos días libres.', ru: 'Советую тебе отдохнуть; тебе стоило бы взять несколько выходных.' }
  ]
};
D[16] = {
  title: 'Futuro compuesto и condicional compuesto',
  grammar: { title: 'Habré terminado, habría hecho', html: `
<p><b>Futuro compuesto</b> = habré, habrás, habrá, habremos, habréis, habrán + participio.</p>
<ul><li>Действие завершится к моменту в будущем: Para las seis <em>habré terminado</em> el informe.</li><li>Догадка о прошлом: <em>Habrá perdido</em> el tren.</li></ul>
<p><b>Condicional compuesto</b> = habría, habrías, habría, habríamos, habríais, habrían + participio.</p>
<ul><li>Что бы произошло в прошлом (но не произошло): Yo <em>habría aceptado</em> la oferta.</li><li>Догадка о прошлом до прошлого: Pensé que ya <em>habrían llegado</em>.</li><li>Упрёк/сожаление: <em>Deberías haber</em> llamado.</li></ul>
<div class="ex"><span data-say="Cuando vuelvas, ya habré preparado la cena.">Cuando vuelvas, ya <em>habré preparado</em> la cena.</span></div>` },
  vocab: [
    ['el informe', 'отчёт', 'Entregaré el informe el lunes.'],
    ['entregar', 'сдать, вручить', 'Ya lo he entregado.'],
    ['la oferta', 'предложение (о работе), скидка', 'Rechazó la oferta.'],
    ['rechazar', 'отклонить', 'No deberías haberla rechazado.'],
    ['el ascenso', 'повышение', 'Le dieron un ascenso.'],
    ['el sueldo', 'зарплата', 'El sueldo es bastante bueno.'],
    ['la entrevista', 'собеседование, интервью', 'Tengo una entrevista mañana.'],
    ['el puesto', 'должность', 'Es un puesto de responsabilidad.']
  ],
  exercises: [
    { t: 'fill', q: 'Para el viernes ya ___ (yo, entregar) el informe.', a: ['habré entregado'] },
    { t: 'mc', q: 'No está en la oficina. ___ a la entrevista.', o: ['Se habrá ido', 'Se iría', 'Se habría ido'], a: 0 },
    { t: 'fill', q: 'Yo no ___ (rechazar) esa oferta: el sueldo era muy bueno.', a: ['habría rechazado'] },
    { t: 'mc', q: '___ haber llamado antes de venir.', o: ['Deberías', 'Debes', 'Deberás'], a: 0, e: 'Упрёк о прошлом: deberías haber + participio.' },
    { t: 'conj', verbs: ['terminar', 'hacer', 'llegar', 'decir'], tenses: ['futPerf', 'condPerf'], n: 4 },
    { t: 'order', s: 'Cuando llegues, ya habremos terminado la reunión.' },
    { t: 'tr', q: 'Я бы принял это предложение.', a: ['Yo habría aceptado esa oferta.', 'Habría aceptado esa oferta.', 'Yo habría aceptado la oferta.', 'Habría aceptado la oferta.'] },
    { t: 'fill', q: 'Pensaba que ya le ___ (ellos, dar) el ascenso, pero no.', a: ['habrían dado'] },
    { t: 'mc', q: 'En 2030 ya ___ de pagar la hipoteca.', o: ['habremos terminado', 'terminamos', 'habríamos terminado'], a: 0 },
    { t: 'dict', s: 'Para entonces ya habré cambiado de puesto.', ru: 'К тому времени я уже сменю должность.' }
  ]
};
D[17] = {
  title: 'Реальные условия',
  grammar: { title: 'Si + presente: условие, которое реально', html: `
<p>Тип I — условие возможно и реально. После <b>si</b> — presente de indicativo (никогда futuro и никогда presente de subjuntivo).</p>
<table><tr><th>Si + presente</th><th>Главная часть</th></tr>
<tr><td>Si <em>tienes</em> tiempo,</td><td>… <em>llámame</em>. (imperativo)</td></tr>
<tr><td>Si <em>llueve</em>,</td><td>… no <em>salimos</em>. (presente)</td></tr>
<tr><td>Si <em>ahorras</em>,</td><td>… <em>podrás</em> comprar el piso. (futuro)</td></tr></table>
<p>Общее правило/закономерность: Si mezclas azul y amarillo, <em>sale</em> verde.</p>
<p>Прошлое реальное: Si <em>dijo</em> eso, <em>fue</em> por algo. (indicativo и там, и там)</p>
<p>Синонимы: <b>en caso de que</b> + subj (позже), <b>como</b> + subj (угроза). Пока используем si.</p>
<div class="tip">Условие с «если только»: <em>a no ser que</em> / <em>a menos que</em> + subjuntivo (изучим в модуле 5).</div>` },
  vocab: [
    ['ahorrar', 'копить, экономить', 'Si ahorras, podrás viajar.'],
    ['la hipoteca', 'ипотека', 'Pedimos una hipoteca.'],
    ['el préstamo', 'кредит, заём', 'El banco le concedió un préstamo.'],
    ['gastar', 'тратить', 'Gasto demasiado en ropa.'],
    ['el gasto', 'расход', 'Los gastos suben cada año.'],
    ['el presupuesto', 'бюджет', 'No entra en el presupuesto.'],
    ['la factura', 'счёт (за услуги)', 'Ha llegado la factura de la luz.'],
    ['la cuenta', 'счёт (банковский, в ресторане)', 'Abrí una cuenta en el banco.']
  ],
  exercises: [
    { t: 'fill', q: 'Si ___ (tú, ahorrar) un poco cada mes, ___ (poder) pedir una hipoteca.', a: [['ahorras'], ['podrás']] },
    { t: 'mc', q: 'Si ___ tiempo esta tarde, pásate por casa.', o: ['tienes', 'tendrás', 'tengas'], a: 0, e: 'После si — presente de indicativo.' },
    { t: 'fill', q: 'Si la factura ___ (llegar) hoy, la ___ (nosotros, pagar) mañana.', a: [['llega'], ['pagamos', 'pagaremos']] },
    { t: 'mc', q: 'Si ___ tanto, no ___ nunca.', o: ['gastas / ahorrarás', 'gastarás / ahorras', 'gastes / ahorras'], a: 0 },
    { t: 'order', s: 'Si no entra en el presupuesto, no lo compramos.' },
    { t: 'tr', q: 'Если у тебя есть вопросы, позвони мне.', a: ['Si tienes preguntas, llámame.', 'Si tienes dudas, llámame.', 'Si tienes alguna pregunta, llámame.', 'Si tienes preguntas llámame'] },
    { t: 'fill', q: 'Si el banco no me ___ (conceder) el préstamo, ___ (yo, tener) que esperar.', a: [['concede'], ['tendré']] },
    { t: 'mc', q: 'Si Marta ___ eso, ___ por algo.', o: ['dijo / fue', 'diga / fue', 'dijo / sea'], a: 0, e: 'Реальное прошлое: indicativo с обеих сторон.' },
    { t: 'tr', q: 'Если пойдёт дождь, мы останемся дома.', a: ['Si llueve, nos quedamos en casa.', 'Si llueve, nos quedaremos en casa.', 'Si llueve nos quedamos en casa', 'Si llueve nos quedaremos en casa'] },
    { t: 'dict', s: 'Si abres una cuenta este mes, no pagas comisiones.', ru: 'Если ты откроешь счёт в этом месяце, ты не платишь комиссии.' }
  ]
};
D[18] = {
  title: 'Проверка модуля 3', review: true,
  grammar: { title: 'Шпаргалка модуля 3', html: `
<ul><li>Futuro: inf + é, ás, á, emos, éis, án; основы tendr-, pondr-, saldr-, vendr-, podr-, sabr-, habr-, querr-, har-, dir-.</li>
<li>Futuro = обещание/прогноз/догадка о настоящем; futuro compuesto = завершится к моменту / догадка о прошлом.</li>
<li>Condicional: inf + ía…; вежливость, совет, желание, будущее в прошлом, догадка о прошлом.</li>
<li>Condicional compuesto (habría hecho): нереализованное прошлое; deberías haber + participio — упрёк.</li>
<li>Si + presente → presente / futuro / imperativo. После si не бывает futuro.</li></ul>` },
  vocab: [],
  exercises: [
    { t: 'conj', verbs: ['tener', 'hacer', 'poder', 'decir', 'saber', 'venir'], tenses: ['fut', 'cond'], n: 5 },
    { t: 'fill', q: 'Si ___ (tú, estudiar) todos los días, ___ (aprobar) el examen.', a: [['estudias'], ['aprobarás', 'apruebas']] },
    { t: 'mc', q: 'No contesta al teléfono… ___ en una reunión.', o: ['Estará', 'Está que', 'Estaría'], a: 0 },
    { t: 'mc', q: '¿___ decirme dónde está la estación?', o: ['Podría', 'Pudo', 'Podrá'], a: 0 },
    { t: 'fill', q: 'Para las ocho ya ___ (nosotros, terminar) de cenar.', a: ['habremos terminado'] },
    { t: 'fill', q: 'Yo en tu lugar ___ (aceptar) el puesto: el sueldo es bueno.', a: ['aceptaría'] },
    { t: 'mc', q: 'Me prometió que me ___ el dinero el lunes.', o: ['devolvería', 'devolverá', 'devuelva'], a: 0 },
    { t: 'fill', q: 'Ayer no vino a clase. ___ (estar) enfermo.', a: ['Estaría', 'estaría'], e: 'Догадка о прошлом — condicional.' },
    { t: 'order', s: 'Deberías haber ahorrado antes de pedir el préstamo.' },
    { t: 'tr', q: 'Через два месяца у меня будет уровень B2.', a: ['Dentro de dos meses tendré el nivel B2.', 'En dos meses tendré el nivel B2.', 'Dentro de dos meses tendré el B2.'] },
    { t: 'tr', q: 'Кто это может быть в такой час?', a: ['¿Quién será a estas horas?', 'Quién será a estas horas', '¿Quién será a esta hora?'] },
    { t: 'mc', q: 'Si ___ el informe hoy, mañana ___ descansar.', o: ['entregas / podrás', 'entregarás / puedes', 'entregues / podrás'], a: 0 },
    { t: 'fill', q: 'Pensé que ya ___ (ellos, llegar), pero la casa estaba vacía.', a: ['habrían llegado'] },
    { t: 'match', pairs: [['ahorrar', 'копить'], ['rechazar', 'отклонить'], ['el sueldo', 'зарплата'], ['la meta', 'цель'], ['a lo mejor', 'может быть'], ['dentro de', 'через (время)']] },
    { t: 'dict', s: 'Si consigo el ascenso, habré cumplido mi meta a largo plazo.', ru: 'Если я получу повышение, я выполню свою долгосрочную цель.' }
  ]
};
})(window.ST_DATA.days);
