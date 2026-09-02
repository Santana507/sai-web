# Tarjetas interactivas de BPVDA

Rediseño del 2 de septiembre de 2026, sobre `67bfdf21399c687c99197ebbb323c1a65ad97f10` de `Santana507/sai-web`.

## Alcance y páginas

Se revisaron las ocho páginas, la hoja global, las interacciones compartidas, las imágenes, la documentación y `tools/generate-pages.mjs`. Este último es actualmente un aviso informativo, no un generador que reescriba páginas. El sitio sigue siendo HTML/CSS/JavaScript estático, sin dependencias nuevas ni compilación obligatoria.

Se conservaron Montserrat (la tipografía real de esta revisión, incluso en la variable `--font-serif`), azul institucional, crema, naranja y turquesa. No se modificaron cabecera, navegación, pie, formulario, enlaces de contacto ni el slider existente y sus tiempos.

| Página modificada | Secciones / variante | Tarjetas |
|---|---|---:|
| `index.html` | Niveles, Nuestro aprendizaje, logros | 7 |
| `nosotros.html` | Familia y escuela, aprendizaje efectivo, servicio; filas narrativas | 3 |
| `mision.html` | Fe, respeto, excelencia; tratamiento institucional ligero | 3 |
| `curriculo.html` | Tecnología, cultura, ciencia y matemáticas, inglés; tarjetas numeradas | 4 |
| `actividades.html` | Talentos, deportivas, académicas; tratamiento fotográfico | 3 |
| `admision.html` | Contacto inicial, visita, solicitud; pasos informativos | 3 |
| `vision.html` | Preescolar, primaria, secundaria, bachillerato | 4 |

Contacto, preguntas frecuentes, enlaces de exploración, presentación de la comunidad y mosaico de experiencias conservan su función. No se convierten todos los enlaces o bloques del sitio en controles expandibles.

## Contenido y componentes

Los párrafos originales permanecen íntegros en el HTML. Las introducciones extensas de páginas interiores están dentro de un desplegable bajo el título de sección; su encabezado original sirve como control. Las tarjetas muestran una frase breve y revelan el contenido completo al abrirlas. Se corrigió el cierre de párrafo sobrante que existía en la introducción de Nosotros.

La solución compartida consta de:

- `details.discovery-card` y `summary.discovery-card__trigger`: componente HTML nativo accesible, utilizable incluso sin JavaScript.
- `[data-discovery]`: grupo que coordina una tarjeta abierta a la vez, sin interferir con otros grupos ni con las preguntas frecuentes.
- Variantes `discovery-group--curriculum`, `--activities`, `--narrative`, `--values`, `--admission`, `--levels` y `--learning` en `css/styles.css`.
- Controlador compartido al inicio de `js/main.js`. Los controles exponen `aria-expanded`, `aria-controls`, regiones identificadas y foco visible. Los paneles cerrados usan `inert` durante la transición para excluir enlaces ocultos del teclado.
- `tools/verify-cards.mjs`: verificación repetible de contenido institucional, rutas, IDs y controles.

Los otros archivos añadidos son esta documentación y diez fotografías optimizadas en `assets/media/cards/`. Las siete páginas modificadas actualizan la versión de la URL de CSS/JS para evitar reutilizar recursos anteriores en caché.

## Interacción y movimiento

En escritorio, el cursor abre una vista previa tras 180 ms para evitar aperturas accidentales al cruzar tarjetas. La vista previa se cierra al salir del grupo, con 240 ms de tolerancia para alcanzar el texto. El clic abre/cierra; una tarjeta abierta mediante clic permanece abierta al retirar el cursor. El foco de teclado protege la lectura frente a cambios por hover.

En teléfono y tablet se usa la activación nativa por toque/clic. Volver a seleccionar el encabezado con `Cerrar`/× cierra el detalle; seleccionar otra tarjeta cierra la anterior en el mismo grupo. No hay modales ni carruseles nuevos.

Enter y Espacio activan el control; Escape cierra y conserva el foco en su encabezado. Tab recorre controles y enlaces visibles, omitiendo los contenidos cerrados.

La expansión de ancho dura 560 ms; la revelación vertical mediante filas de grid y el ajuste del encabezado, 550 ms; la opacidad, 400 ms; el indicador +/×, 500 ms. Se respeta `prefers-reduced-motion`: CSS elimina transiciones y el cierre JavaScript no espera la duración de la animación.

## Fotografías y selección visual

Se inventariaron las tres carpetas proporcionadas de Drive: EXTERIOR (40 archivos), PRIMARIA_PREESCOLAR (87) y SECUNDARIA (79). Se inspeccionó visualmente una muestra de 24 fotografías, además de las 13 imágenes locales. No se atribuyeron materias o actividades a una foto basándose solamente en su nombre.

Diez fotografías seleccionadas se guardaron como WebP local, sin depender de URLs temporales de Drive en la web. Se conservaron sus proporciones, se limitaron a 1280 px y se eliminaron metadatos al exportar. Su peso combinado es aproximadamente 1 MB. Todas usan dimensiones explícitas, carga diferida y decodificación asíncrona. Las vistas parciales usan `object-fit: cover`; las imágenes completas usan `contain` cuando conviene conservar toda la escena.

| Archivo incorporado | Original de Drive | Contenido observado / uso |
|---|---|---|
| `ciencia.webp` | [IMG_9504.JPG](https://drive.google.com/file/d/14Vuo4Y3moegOOPWV6EfajNo0HrD6ltFk/view) | Estudiante construyendo una maqueta del corazón; Nuestro aprendizaje |
| `informatica.webp` | [IMG_9479.JPG](https://drive.google.com/file/d/1ibNcHFwUSe3XIl8Nk4nlTqsiPjVxhzmt/view) | Estudiantes en computadoras; Tecnología |
| `programacion.webp` | [IMG_9548.JPG](https://drive.google.com/file/d/1P7mw_lvzu6ZQnedg6po_HEoHkwf6Pki8/view) | Programación por bloques; aprendizaje efectivo y etapa avanzada |
| `matematicas.webp` | [IMG_9582.JPG](https://drive.google.com/file/d/1dRoJmFOsSFUv_JBjGXeamTWz_eQGtSzu/view) | Operaciones matemáticas en pizarra; Ciencia y matemáticas |
| `preescolar.webp` | [IMG_9410.JPG](https://drive.google.com/file/d/1w-YX6zfmIaUTRps18YOKoU2rJu0ie0Vz/view) | Aula con niños y docente; Preescolar |
| `primaria.webp` | [IMG_9463.JPG](https://drive.google.com/file/d/1p-o_VmpXl20gbkk6uo4a0AmLouCeYJSs/view) | Estudiante escribiendo; Primaria y Excelencia |
| `convivencia.webp` | [IMG_9543.JPG](https://drive.google.com/file/d/1g3NMQjyZOC15KI7lDtHGpaLPwEic3jbd/view) | Encuentro de estudiantes en el patio; Respeto y comunidad |
| `entrada.webp` | [IMG_9370.JPG](https://drive.google.com/file/d/1q1M3t1oFeVaXYcUbERGLO6P8-89nFrV-/view) | Fachada y acceso; primer acercamiento en Admisión |
| `patio.webp` | [IMG_9388.JPG](https://drive.google.com/file/d/1RMUH5aUmKzM5qil0yj9-sNfcjo0WdFim/view) | Instalaciones y patio; visita al colegio |
| `secundaria.webp` | [IMG_9521.JPG](https://drive.google.com/file/d/18v-2nqpQfmfIgrtRNGx5vgn6RXhbiSZG/view) | Estudiantes trabajando en clase; Secundaria |

Imágenes locales reutilizadas: `culture.png` (vestimenta tradicional, Cultura y Talentos), `community.webp` (comunidad escolar), `science-team.jpg` (proyecto científico, actividades académicas), `robotics-1.webp` (construcción de prototipo, logros) y `recognition.jpg` (reconocimiento, historia de emprendimiento preexistente).

No se encontró en la muestra una fotografía que permitiera confirmar una clase de inglés, una práctica deportiva o una actividad de fe específica. Inglés, Deportivas y Fe usan una presentación tipográfica. El tercer paso de admisión también evita ilustrar requisitos con una fotografía ajena al proceso.

## Responsive y revisión

- Revisión en navegador local a 1440, 1280, 1024, 768, 430, aproximadamente 390 y 375 px. La escala del navegador dio 391 px efectivos para la prueba solicitada de aproximadamente 390; las demás medidas se comprobaron con el ancho real del documento.
- 49 combinaciones de página/ancho, comprobando estados cerrado, abierto, cambio de tarjeta y Escape. Tras corregir Nosotros se repitieron sus siete tamaños con las transiciones terminadas.
- Las 27 tarjetas se abrieron individualmente a 375 px: sin desbordamiento de página/tarjeta, controles rotos ni imágenes rotas detectadas.
- Revisión visual de todas las páginas modificadas, incluidas las variantes fotográfica, narrativa, institucional, curricular y de proceso. Se revisó la composición de aprendizaje y logros de portada.
- Hover real con ratón: apertura de Tecnología y cierre al abandonar el grupo. Enter, Espacio, Escape y Tab comprobados; Tab desde Aprendizaje cerrado pasa al siguiente control visible, no al enlace oculto.
- Prueba sin cargar `main.js`: las tarjetas nativas se abren con Enter y muestran su contenido.
- `node --check js/main.js`, `node tools/verify-cards.mjs` y `git diff --check` correctos. Se conservaron los 184 párrafos originales de las ocho páginas.
- Consola del navegador de prueba sin errores ni advertencias capturados durante la revisión.

Correcciones surgidas durante la revisión: desbordamiento de las etiquetas del control de Nosotros en móvil; títulos de tarjetas vecinas demasiado estrechos durante expansión; recorte de rostros en la foto cultural; fotografía duplicada y espacio innecesario en Aprendizaje; referencias de caché antiguas y HTML mal cerrado en la introducción de Nosotros.

Límites de la verificación: las pruebas móviles se realizaron con viewports y clics de navegador, no en teléfonos/tablets físicos. La rama de movimiento reducido se verificó en CSS y lógica de cierre; no se cambió la preferencia del sistema operativo. La comprobación no equivale a una auditoría formal con lectores de pantalla ni a una prueba de todos los navegadores.

## Mantenimiento

Editar los textos directamente en el HTML correspondiente. Para añadir una tarjeta, mantener identificadores únicos para el `summary` y el panel, sus referencias ARIA, el atributo `data-discovery-card` y el grupo `data-discovery`. El controlador detecta las nuevas tarjetas sin añadir manejadores específicos por página. Actualizar el conteo esperado en `tools/verify-cards.mjs` si cambia deliberadamente el número de tarjetas.

Ejecutar `node tools/verify-cards.mjs` desde una copia Git con el commit base disponible. El sitio no necesita Node para ser publicado o visualizado; el comando es únicamente una herramienta de mantenimiento.
