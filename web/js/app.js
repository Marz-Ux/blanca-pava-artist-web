'use strict';
// Títulos y fichas del catálogo Funza 2026; sin sourcePage, la etiqueta es un motivo visual.
// Se conservan las fotos existentes de mayor resolución en las cuatro coincidencias.
const works = [
 {id:'DSC06417',width:1800,height:1200,smallWidth:800,label:'Paisaje circular',category:'Naturaleza',description:'Un paisaje de árboles, agua y reflejos se despliega sobre un soporte circular.'},
 {id:'DSC06434',width:1800,height:1200,smallWidth:800,label:'Felinos entre el follaje',category:'Naturaleza',description:'Dos felinos entre ramas y vegetación, sobre un fondo de tonos cálidos.'},
 {id:'DSC06439',width:1800,height:1200,smallWidth:800,label:"La vida del arrecife",category:'Naturaleza',description:'Peces, un delfín y vegetación marina conviven en una composición de azules vivos.',technique:"Óleo sobre canva",dimensions:"30 × 30 cm",year:"2020",sourcePage:4},
 {id:'DSC06444',width:1621,height:1800,smallWidth:720,label:"¿Orquídea o algodón?",category:'Naturaleza',description:'Flores blancas destacan sobre un entramado de hojas y verdes profundos.',technique:"Óleo sobre cartón compacto y papel mantequilla",dimensions:"40 × 40 cm",year:"2023",sourcePage:9},
 {id:'DSC06469',width:1800,height:1200,smallWidth:800,label:"Útero sagrado",category:'Universos',description:'Formas orgánicas, flores y líneas entrelazadas dialogan sobre un fondo azul.',technique:"Óleo sobre cartón compacto",dimensions:"30 × 30 cm",year:"2025",sourcePage:9},
 {id:'DSC06506',width:1200,height:1800,smallWidth:533,label:"Reproducción",category:'Figura',description:'Una figura femenina con vestido rojo y joyas destaca sobre un fondo oscuro.',technique:"Óleo sobre cartón compacto",dimensions:"40 × 40 cm",year:"2023",sourcePage:10},

 {"id": "nos-pertenecemos", "label": "Nos pertenecemos", "category": "Figura", "technique": "Óleo sobre lienzo", "dimensions": "100 × 90 cm", "year": "2016", "sourcePage": 2, "width": 929, "height": 643, "smallWidth": 800, "description": "Dos figuras se abrazan bajo la luna, entre símbolos y planos de azul y rojo."},
 {"id": "espiritu-libre", "label": "Espíritu libre", "category": "Naturaleza", "technique": "Óleo sobre lienzo", "dimensions": "90 × 80 cm", "year": "2016", "sourcePage": 2, "width": 439, "height": 331, "smallWidth": 439, "description": "Un caballo de crines multicolores emerge de un fondo oscuro."},
 {"id": "sagrados-corazones", "label": "Sagrados corazones", "category": "Figura", "technique": "Óleo sobre lienzo", "dimensions": "90 × 70 cm", "year": "2018", "sourcePage": 3, "width": 868, "height": 1088, "smallWidth": 638, "description": "Dos figuras sagradas muestran sus corazones bajo un resplandor blanco y violeta."},
 {"id": "el-buda-y-el-loto", "label": "El Buda y el loto", "category": "Figura", "technique": "Óleo sobre lienzo", "dimensions": "80 × 60 cm", "year": "2018", "sourcePage": 3, "width": 988, "height": 615, "smallWidth": 800, "description": "El rostro sereno de Buda comparte la composición con una flor de loto."},
 {"id": "callesita-funzana", "label": "Callesita funzana", "category": "Paisajes", "technique": "Óleo sobre lienzo", "dimensions": "30 × 30 cm", "year": "2017", "sourcePage": 4, "width": 379, "height": 307, "smallWidth": 379, "description": "Una calle de Funza iluminada por faroles se extiende bajo la luna."},
 {"id": "abuelo-fuego", "label": "Abuelo fuego", "category": "Universos", "technique": "Óleo sobre canva", "dimensions": "15 × 20 cm", "year": "2021", "sourcePage": 5, "width": 527, "height": 709, "smallWidth": 527, "description": "Una llama ilumina un recipiente de barro en una composición de tonos cálidos."},
 {"id": "autorretrato", "label": "Autorretrato", "category": "Figura", "technique": "Óleo sobre lienzo reciclado", "dimensions": "70 × 50 cm", "year": "2020", "sourcePage": 5, "width": 324, "height": 459, "smallWidth": 324, "description": "La artista se representa de frente, con el cabello oscuro y una blusa violeta."},
 {"id": "pavo-real", "label": "Pavo real", "category": "Naturaleza", "technique": "Óleo sobre lienzo reciclado", "dimensions": "40 × 40 cm", "year": "2022", "sourcePage": 6, "width": 781, "height": 787, "smallWidth": 781, "description": "Un abanico de plumas de pavo real reúne verdes, azules y reflejos dorados."},
 {"id": "conexion-fuerza-y-luz", "label": "Conexión, fuerza y luz", "category": "Universos", "technique": "Óleo sobre cartón y papel mantequilla reciclado", "dimensions": "100 × 60 cm", "year": "2024", "sourcePage": 6, "width": 194, "height": 272, "smallWidth": 194, "description": "Un tigre blanco y una figura de manos unidas se superponen sobre un fondo azul."},
 {"id": "unisono", "label": "Unísono", "category": "Universos", "technique": "Óleo sobre cartón compacto y aglomerado", "dimensions": "100 × 60 cm", "year": "2024", "sourcePage": 7, "width": 828, "height": 1280, "smallWidth": 517, "description": "Un rostro azul, raíces, flores y un árbol se entrelazan en una composición vertical."},
 {"id": "grandes-hermanos", "label": "Grandes hermanos", "category": "Naturaleza", "technique": "Óleo sobre cartón aglomerado reciclado", "dimensions": "80 × 60 cm", "year": "2020", "sourcePage": 7, "width": 779, "height": 706, "smallWidth": 779, "description": "Animales y formas vegetales se reúnen en una composición de texturas terrosas."},
 {"id": "poder-femenino", "label": "Poder femenino", "category": "Universos", "technique": "Óleo sobre cartón aglomerado", "dimensions": "50 × 50 cm", "year": "2021", "sourcePage": 8, "width": 481, "height": 550, "smallWidth": 481, "description": "Una figura femenina en una barca se vincula con la luna, el agua y las flores."},
 {"id": "la-gran-madre-gaia", "label": "La gran madre «Gaia»", "category": "Universos", "technique": "Óleo sobre cartón compacto", "dimensions": "40 × 40 cm", "year": "2025", "sourcePage": 8, "width": 373, "height": 266, "smallWidth": 373, "description": "Una figura de formas vegetales se despliega sobre un fondo azul."},
 {"id": "lutero", "label": "Lutero", "category": "Figura", "technique": "Óleo sobre cartón compacto", "dimensions": "40 × 30 cm", "year": "2024", "sourcePage": 10, "width": 680, "height": 808, "smallWidth": 673, "description": "Una figura alada emerge de formas rojas y anaranjadas sobre un fondo violeta."},
 {"id": "la-lancha", "label": "La lancha", "category": "Paisajes", "technique": "Óleo sobre cartón compacto", "dimensions": "50 × 30 cm", "year": "2022", "sourcePage": 11, "width": 1280, "height": 683, "smallWidth": 800, "description": "Una lancha descansa junto al agua bajo un cielo de azules, rosas y naranjas."},
 {"id": "percepciones", "label": "Percepciones", "category": "Universos", "technique": "Óleo sobre icopor compacto", "dimensions": "20 × 20 cm cada pieza", "year": "2024–2025", "sourcePage": 11, "width": 1024, "height": 533, "smallWidth": 800, "description": "Serie de pequeño formato: tres piezas circulares con motivos vegetales, urbanos y figurativos.", "series": true},
 {"id": "el-emperador-corazon", "label": "El emperador «Corazón»", "category": "Instalación", "technique": "Instalación mixta: óleo, acrílico y semillas sobre pantalla", "dimensions": "100 × 80 cm", "year": "2024", "sourcePage": 12, "width": 724, "height": 536, "smallWidth": 724, "description": "Una instalación sobre pantalla combina texturas y líneas de colores bajo iluminación violeta.", "detailImage": "el-emperador-corazon-detalle.jpg", "detailAlt": "Vista cercana de las texturas y líneas de colores de El emperador «Corazón»."},
 {"id": "mi-ciudad", "label": "Mi ciudad", "category": "Paisajes", "technique": null, "dimensions": "70 × 50 cm", "year": "2026", "sourcePage": 13, "width": 883, "height": 1280, "smallWidth": 552, "description": "Casas, árboles y escenas de encuentro se enlazan en una composición vertical sobre la ciudad.", "catalogueNote": "La técnica y el soporte están pendientes de confirmar: el catálogo presenta datos diferentes en el encabezado y en la ficha."},
 {"id": "sendero-solar", "label": "Sendero solar", "category": "Dibujo", "technique": "Lápices y acrílicos de color", "dimensions": "30 × 24 cm", "year": "2026", "sourcePage": 14, "width": 455, "height": 592, "smallWidth": 455, "description": "Una figura de espaldas recorre un sendero amarillo hacia un sol en espiral."},
 {"id": "dragones-magicos", "label": "Dragones mágicos", "category": "Dibujo", "technique": "Lápices y acrílicos de color", "dimensions": "30 × 24 cm", "year": "2026", "sourcePage": 14, "width": 673, "height": 848, "smallWidth": 635, "description": "Dragones de colores verdes, azules y amarillos se reúnen ante un fondo cálido."},
 {"id": "sananda", "label": "Sananda", "category": "Dibujo", "technique": "Tinta y estilógrafo", "dimensions": "30 × 24 cm", "year": "2026", "sourcePage": 15, "width": 864, "height": 789, "smallWidth": 800, "description": "Un rostro de cabello largo aparece sobre unas manos abiertas que sostienen una gota."},
 {"id": "colombia-biodiversa", "label": "Colombia biodiversa", "category": "Dibujo", "technique": "Lápiz de grafito", "dimensions": "30 × 24 cm", "year": "2026", "sourcePage": 15, "width": 649, "height": 896, "smallWidth": 579, "description": "Un felino ocupa el centro de una composición de plantas, animales y formas naturales."},
 {"id": "conejo-mistico", "label": "Conejo místico", "category": "Dibujo", "technique": "Acuarela y hojilla dorada", "dimensions": "30 × 24 cm", "year": "2026", "sourcePage": 16, "width": 844, "height": 774, "smallWidth": 800, "description": "Un conejo verde y motivos vegetales conviven con detalles dorados."},
 {"id": "humedal-guali", "label": "Humedal Gualí", "category": "Fotografía", "technique": "Fotografía", "dimensions": "A4 cada fotografía", "year": "2026", "sourcePage": 16, "width": 886, "height": 1124, "smallWidth": 630, "description": "Conjunto de cuatro fotografías de hongos, flores y vegetación del humedal Gualí.", "series": true}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const pad = n => String(n).padStart(2, '0');
const wait = ms => new Promise(r => setTimeout(r, reduced.matches ? 0 : ms));

const gallery = $('#gallery');
const dialog = $('#art-dialog');
const header = $('.header');
const hero = $('.hero');
let active = 0, returnFocus = null, shown = works;

/* ---------- Reveals al hacer scroll ---------- */
const revealer = 'IntersectionObserver' in window
 ? new IntersectionObserver(entries => entries.forEach(e => {
     if (e.isIntersecting) { e.target.classList.add('is-in'); revealer.unobserve(e.target); }
   }), {rootMargin: '0px 0px -8% 0px', threshold: .12})
 : null;
function reveal(el, delay = 0) {
 el.style.setProperty('--d', delay);
 if (revealer) revealer.observe(el); else el.classList.add('is-in');
}
// Cada grupo se escalona en orden.
[
 '.intro > *', '.works .section-top, .works .section-heading, .works .catalogue-intro, .works .filters',
 '.artist-portrait', '.artist-copy > *',
 '.journey > .eyebrow, .journey > .section-heading', '.event', '.journey > .text-link',
 '.contact > .eyebrow, .contact > h2, .contact-row', '.footer-line', '.gallery-note'
].forEach(group => $$(group).forEach((el, i) => {
 el.dataset.reveal = '';
 reveal(el, i);
}));

/* ---------- Galería ---------- */
// Los recuentos incluyen las series como una entrada y se calculan desde el catálogo.
$('#work-count').textContent = `${pad(works.length)} obras y series`;
$$('[data-filter]').forEach(button => {
 const count = button.dataset.filter === 'Todas' ? works.length : works.filter(w => w.category === button.dataset.filter).length;
 button.querySelector('span').textContent = pad(count);
});

function render(filter = 'Todas') {
 shown = works.filter(w => filter === 'Todas' || w.category === filter);
 if (revealer) gallery.querySelectorAll('.work').forEach(el => revealer.unobserve(el));
 gallery.replaceChildren();
 $('#gallery-status').textContent = `${shown.length} entradas · ${filter}`;
 // Mampostería: cada obra va a la columna más corta según su proporción real,
 // así ninguna pieza deja un hueco bajo sí junto a una obra más alta.
 const twoCols = !narrow.matches;
 const cols = twoCols ? [0, 1].map(() => Object.assign(document.createElement('div'), { className: 'gallery-col' })) : [gallery];
 if (twoCols) gallery.append(...cols);
 const colWidth = [1.15, 1];          // mismas fracciones que el CSS
 const extra = 0.16;                   // pie de foto + separación, en anchos de columna
 const heights = twoCols ? [0, 0.12] : [0]; // la segunda columna arranca desplazada
 shown.forEach((w, i) => {
  const c = twoCols ? (heights[0] <= heights[1] ? 0 : 1) : 0;
  if (twoCols) heights[c] += colWidth[c] * (w.height / w.width + extra);
  const button = document.createElement('button');
  button.className = 'work';
  button.setAttribute('aria-label', `Ampliar: ${w.label}`);
  button.innerHTML = `<div class="art-frame"><img src="assets/obras/${w.id}-small.jpg" srcset="${w.smallWidth < w.width ? `assets/obras/${w.id}-small.jpg ${w.smallWidth}w, ` : ''}assets/obras/${w.id}.jpg ${w.width}w" sizes="(max-width:760px) 88vw, 44vw" alt="${w.description}" loading="lazy" decoding="async" width="${w.width}" height="${w.height}"></div><div class="work-caption"><div><h3>${w.label}</h3><p>${w.category}${w.year ? ` · ${w.year}` : ''}${w.series ? ' · Serie' : ''}</p></div><span class="arrow" aria-hidden="true">↗</span></div>`;
  button.addEventListener('click', () => openWork(i, button));
  cols[c].append(button);
  reveal(button, c); // las dos columnas entran ligeramente desfasadas
 });
}
const narrow = matchMedia('(max-width:760px)');
narrow.addEventListener('change', () => render($('[data-filter][aria-pressed="true"]')?.dataset.filter || 'Todas'));

$$('[data-filter]').forEach(button => button.addEventListener('click', async () => {
 if (button.getAttribute('aria-pressed') === 'true') return;
 $$('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
 gallery.classList.add('leaving');
 await wait(350);
 render(button.dataset.filter);
 gallery.classList.remove('leaving');
}));

/* ---------- Visor ---------- */
function updateDialog() {
 const w = shown[active];
 const image = $('#modal-image');
 image.src = `assets/obras/${w.id}.jpg`;
 image.alt = w.description;
 $('#modal-title').textContent = w.label;
 $('#modal-number').textContent = `Obra ${pad(active + 1)} / ${pad(shown.length)} · ${w.category}`;
 $('#modal-description').textContent = w.description;
 const facts = $('#modal-facts');
 facts.replaceChildren();
 const metadata = [['Año', w.year], ['Técnica', w.technique], ['Medidas', w.dimensions]];
 metadata.forEach(([label, value]) => {
  if (!value) return;
  const term = document.createElement('dt'), detail = document.createElement('dd');
  term.textContent = label; detail.textContent = value;
  facts.append(term, detail);
 });
 facts.hidden = !facts.children.length;
 $('#modal-ref').textContent = w.sourcePage
  ? (w.catalogueNote || 'Título y ficha técnica recogidos en la propuesta de Funza 2026. Consulta la disponibilidad con la artista.')
  : `Referencia de archivo: ${w.id}. El nombre describe su motivo visual. Consulta con la artista el título, la técnica, las medidas y la disponibilidad.`;
 const source = $('#modal-source');
 source.hidden = !w.sourcePage;
 if (w.sourcePage) {
  source.href = `assets/documentos/blanca-pava-propuesta-funza-2026.pdf#page=${w.sourcePage}`;
  source.textContent = `Ver ficha en el catálogo · p. ${w.sourcePage} ↗`;
 } else source.removeAttribute('href');
 const detail = $('#modal-detail');
 detail.hidden = !w.detailImage;
 if (w.detailImage) detail.href = `assets/obras/${w.detailImage}`;
 else detail.removeAttribute('href');
 $('#modal-contact').href = `mailto:blancapava72@hotmail.com?subject=${encodeURIComponent('Consulta sobre ' + w.label)}&body=${encodeURIComponent('Hola Blanca, me gustaría saber más sobre «' + w.label + '» (referencia ' + w.id + ').')}`;
 const single = shown.length < 2;
 $('#previous').hidden = single;
 $('#next').hidden = single;
 return new Promise(r => image.complete ? r() : (image.onload = image.onerror = r));
}

function openWork(i, trigger) {
 active = i; returnFocus = trigger;
 updateDialog();
 dialog.classList.add('opening');
 dialog.showModal();
 document.body.classList.add('locked');
 setTimeout(() => dialog.classList.remove('opening'), 1300);
}

let closing = false;
async function closeDialog() {
 if (closing || !dialog.open) return;
 closing = true;
 dialog.classList.add('closing');
 await wait(450);
 dialog.classList.remove('closing', 'opening');
 dialog.close();
 afterClose();
 closing = false;
}

let swapping = false;
async function advance(direction) {
 if (swapping || shown.length < 2) return;
 swapping = true;
 const cls = direction > 0 ? 'swap-next' : 'swap-prev';
 dialog.classList.add(cls);
 await wait(320);
 active = (active + direction + shown.length) % shown.length;
 await updateDialog();
 dialog.classList.remove(cls);
 swapping = false;
}

$('.modal-close').addEventListener('click', closeDialog);
dialog.addEventListener('cancel', e => { e.preventDefault(); closeDialog(); }); // Escape con animación
dialog.addEventListener('click', e => {
 if (e.target !== dialog) return;
 const r = dialog.getBoundingClientRect();
 if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeDialog();
});
function afterClose() { document.body.classList.remove('locked'); returnFocus?.focus(); }
dialog.addEventListener('close', afterClose);
dialog.addEventListener('keydown', e => {
 if (e.key === 'ArrowRight') { e.preventDefault(); advance(1); }
 if (e.key === 'ArrowLeft') { e.preventDefault(); advance(-1); }
});
$('#previous').addEventListener('click', () => advance(-1));
$('#next').addEventListener('click', () => advance(1));

// Deslizar en pantallas táctiles
let touchX = null, touchY = null;
dialog.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; touchY = e.touches[0].clientY; }, {passive: true});
dialog.addEventListener('touchend', e => {
 if (touchX === null) return;
 const dx = e.changedTouches[0].clientX - touchX, dy = e.changedTouches[0].clientY - touchY;
 if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) advance(dx < 0 ? 1 : -1);
 touchX = null;
}, {passive: true});

/* ---------- Menú móvil ---------- */
const menu = $('.menu-toggle'), nav = $('#nav');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menú +'; }
menu.addEventListener('click', () => {
 const open = nav.classList.toggle('open');
 menu.setAttribute('aria-expanded', String(open));
 menu.textContent = open ? 'Cerrar −' : 'Menú +';
 header.classList.remove('hide');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });

/* ---------- Scroll: header, parallax del hero y firma ---------- */
const signature = $('.signature span');
const contact = $('#contacto');
let lastY = scrollY, ticking = false;
function onScroll() {
 const y = scrollY;
 const past = y > hero.offsetHeight - 90;
 header.classList.toggle('scrolled', past);
 // Se esconde al bajar y reaparece al subir, solo pasado el hero.
 if (past && y > lastY + 4 && !nav.classList.contains('open') && !header.contains(document.activeElement)) header.classList.add('hide');
 else if (y < lastY - 4 || !past) header.classList.remove('hide');
 lastY = y;
 if (!reduced.matches) {
  if (y < hero.offsetHeight) hero.style.setProperty('--py', `${(y * .25).toFixed(1)}px`);
  const r = contact.getBoundingClientRect();
  if (r.top < innerHeight) {
   // 0 cuando el footer asoma, 1 al llegar al final de la página.
   const p = Math.min(1, Math.max(0, (innerHeight - r.top) / Math.min(r.height, innerHeight)));
   signature.style.setProperty('--sx', `${((1 - p) * 10).toFixed(2)}%`);
  }
 }
 ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, {passive: true});
header.addEventListener('focusin', () => header.classList.remove('hide'));

$('#year').textContent = new Date().getFullYear();
render();
onScroll();
