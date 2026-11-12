# Blanca Pava — web de artista

Abre `web/index.html` en Chrome. La web funciona directamente como archivo local, sin instalaciones. Única dependencia externa: las fuentes Inter Tight e Instrument Serif desde Google Fonts (sin conexión cae a Arial y Georgia).

## Estructura

- `web/`: sitio completo y portable, preparado para alojamiento estático.
- `web/assets/hero/`: versión optimizada de la imagen de Magnific.
- `web/assets/obras/`: 30 entradas de obras y series: seis fotografías de archivo y 24 entradas extraídas del catálogo, con versiones JPEG para galería y visor.
- `web/assets/documentos/`: currículo y propuesta de exposición Funza 2026 enlazados desde la web.
- `obras-seleccionadas/originales/`: originales PNG de las seis fotografías utilizadas.
- `obras-seleccionadas/SELECCION.md`: selección fotográfica original.
- `obras-seleccionadas/CATALOGO-FUNZA-2026.md`: correspondencias, procedencia de las 24 entradas nuevas y dudas editoriales del catálogo.
- `ejemplos web/`: referencias originales, sin modificar.

## Diseño y contenido

Azul turquesa `#149BA0`, muestreado del hero en el píxel (200, 400); blanco perla `#F4F2EB`; variante oscura `#0D737D` para texto blanco accesible y tinta `#143F46`.

Inspirado en la portada inmersiva y escala tipográfica de Elena Voss y en la estructura de portfolio y fichas de Atelier. CSS adaptable a móvil, filtros por motivo visual y visor con navegación, teclado, cierre con Escape y restauración de foco. Se respeta la preferencia de movimiento reducido.

Movimiento: entrada del hero (máscara por líneas y escala de imagen), parallax suave del hero y de la firma del footer, revelados al hacer scroll con IntersectionObserver (obras con cortina `clip-path`), header fijo que cambia de color tras el hero y se oculta al bajar, visor con apertura/cierre animados, fundido entre obras y swipe táctil. El visor recorre solo las obras del filtro activo.

Biografía y trayectoria proceden del currículo y la propuesta de Funza 2026. El catálogo aporta títulos, años, técnicas y medidas para 28 de las 30 entradas. Dos obras mantienen nombres descriptivos; la técnica de Mi ciudad está pendiente por una contradicción en la fuente. La disponibilidad se consulta con la artista. Vida de una artista se presenta como propuesta expositiva. Percepciones y Humedal Gualí se muestran como conjuntos, sin duplicar sus piezas. Se ha utilizado el correo del currículo; no hay formulario ni backend que finja enviar mensajes.

## Editar

- Textos: `web/index.html`.
- Obras, categorías y contacto por pieza: `web/js/app.js`.
- Colores, composición y responsive: `web/css/styles.css`.

## Verificación

Archivos, enlaces y dimensiones de las 60 imágenes de galería comprobados localmente. Sintaxis JavaScript y contenido de las 30 fichas comprobados con JavaScriptCore, incluidos reinicio de metadatos y navegación de una sola obra. La revisión visual e interactiva en navegador está pendiente: Computer Use no tiene permisos. No se ha publicado en internet.

Para servirlo en tu equipo, opcionalmente: `python3 -m http.server 4173 --directory web` y abrir `http://localhost:4173`.
