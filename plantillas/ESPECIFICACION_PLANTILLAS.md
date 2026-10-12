# Especificación de Plantillas Modulares y Reutilizables — BPVDA Web

> [!NOTE]
> **Modo Desarrollador Temporal:** En la página principal (`index.html`) se ha implementado un menú temporal de "Desarrollador" exclusivamente para comparar y previsualizar estas plantillas y las de la Opción 2. Dicho menú es estrictamente temporal y **debe ser eliminado** de `index.html` una vez tomada la decisión final. Consulta las instrucciones de retiro en `Web - Smith Folder/COMPARADOR_PLANTILLAS_DEV.md`.

## 1. Visión y Objetivo
El objetivo de este desarrollo es crear un sistema de **3 plantillas HTML/CSS de referencia** altamente modulares, consistentes y visualmente dinámicas, diseñadas para estandarizar y enriquecer todas las páginas interiores del Colegio Buen Pastor Voz de Alerta (BPVDA).

### Alcance de Uso
- **Páginas Excluidas (Mantienen su diseño único):**
  - `index.html` (Portada / Home)
  - `admisiones.html` (Centro de Admisiones y Formularios)
  - `filosofia.html` (Propósito, Filosofía y Slider Fotográfico)
  - `contacto.html` (Atención y Ubicación)

- **Páginas Candidatas para Adoptar las Plantillas:**
  - Niveles Educativos: `prekinder.html`, `kinder.html`, `primaria.html`, `secundaria.html`, `bachilleres.html`
  - Institucionales: `quienes-somos.html`, `instalaciones.html`, `plantel.html`
  - Académicas y Comunidad: `sai.html`, `vida-estudiantil.html`, `ecosistema-digital.html`, `portal-padres.html`

---

## 2. Elementos Clave Obligatorios
Cada plantilla combina bloques estructurados para ofrecer identidad armónica y dinamismo:
1. **Hero Institucional:** Imagen o video de fondo, subtítulo/pilar, y título con término destacado (`<mark>` con subrayado turquesa institucional).
2. **Cita Bíblica / Frase de Impacto:** Bloque tipográfico con diseño editorial (presente en al menos una plantilla).
3. **Secciones de Contenido Versátiles:** Variantes de texto con columnas asimétricas, combinaciones de texto + imagen flotante/dividida.
4. **Galerías / Cuadrículas Fotográficas:** Mosaicos dinámicos para mostrar vida escolar e infraestructura.
5. **Carrusel Interactivo:** Incorporación del carrusel horizontal con tarjetas de anchos alternados (`.carousel-v3`) para exploración táctil y fluida.
6. **Elementos Visuales y Acentos:** Tarjetas editoriales, sellos flotantes con métricas, acordeones accesibles y microinteracciones.
7. **Compatibilidad WordPress:** Código limpio y modular preparado para ser extraído como plantillas de página (`page-template.php`) o bloques Gutenberg.

---

## 3. Propuesta de Arquetipos de Plantillas

### 🏛️ Plantilla 1: "Académica / Niveles" (`plantilla-academica.html`)
* **Perfil de uso:** Ideal para `prekinder.html`, `kinder.html`, `primaria.html`, `secundaria.html`, `bachilleres.html`.
* **Componentes integrados:**
  - `<!-- BLOQUE 1: HERO ACADÉMICO -->`: Imagen de salón/estudiantes, etiqueta de nivel, titular con `<mark>` y botones de acción rápida.
  - `<!-- BLOQUE 2: CITA BÍBLICA EDITORIAL -->`: Cita bíblica de Proverbios 22:6 con ícono de libro, tipografía serif en cursiva y cita estilizada.
  - `<!-- BLOQUE 3: RESUMEN PEDAGÓGICO Y PILARES -->`: Cuadrícula de tarjetas con íconos vectoriales SVG (pensamiento crítico, valores cristianos, competencias digitales).
  - `<!-- BLOQUE 4: NARRATIVA METODOLÓGICA (TEXTO + IMAGEN) -->`: Dos columnas con lista de verificación y tarjeta flotante con métrica (100% compromiso docente).
  - `<!-- BLOQUE 5: MOSAICO FOTOGRÁFICO ASIMÉTRICO -->`: Composición de 4 fotos reales (1 grande, 1 vertical, 2 horizontales) con gradientes y leyendas sobrepuestas.
  - `<!-- BLOQUE 6: LLAMADO A LA ACCIÓN (CTA) -->`: Banner hacia proceso de admisión y contacto.

### 🚀 Plantilla 2: "Innovación y Vida Estudiantil" (`plantilla-innovacion.html`)
* **Perfil de uso:** Ideal para `sai.html`, `vida-estudiantil.html`, `ecosistema-digital.html`, `instalaciones.html`.
* **Componentes integrados:**
  - `<!-- BLOQUE 1: HERO DINÁMICO DE INNOVACIÓN -->`: Titular activo enfocado en tecnología y acción, con fondo de campus y botones contrastantes.
  - `<!-- BLOQUE 2: CARRUSEL INTERACTIVO HORIZONTAL (CAROUSEL-V3) -->`: Carrusel nativo táctil y fluido con anchos variables (340px, 620px, 440px), tarjetas de actividades y tags de categoría.
  - `<!-- BLOQUE 3: GRILLA INTERACTIVA DE PROYECTOS Y DISCIPLINAS -->`: 3 tarjetas con íconos para plataformas digitales, clubes de debate y proyectos comunitarios.
  - `<!-- BLOQUE 4: MÉTRICAS Y CIFRAS INSTITUCIONALES -->`: Barra de cifras en fondo azul marino (`--navy`) con valores numéricos en turquesa (+30 años, 100% docentes, 5 niveles, 24/7 SAI).
  - `<!-- BLOQUE 5: CONTENIDO SPLIT INVERSO (IMAGEN + TEXTO) -->`: Dos columnas invertidas con imagen de actividades culturales a la izquierda y narrativa formativa a la derecha.
  - `<!-- BLOQUE 6: LLAMADO A LA ACCIÓN (CTA) -->`: Banner hacia matrícula y agendamiento de visitas.

### 📖 Plantilla 3: "Editorial e Institucional" (`plantilla-editorial.html`)
* **Perfil de uso:** Ideal para `quienes-somos.html`, `plantel.html`, `portal-padres.html`, `mision.html`/`vision.html`.
* **Componentes integrados:**
  - `<!-- BLOQUE 1: HERO EDITORIAL SOLEMNE -->`: Composición serena con fachada institucional y lavado oscuro uniforme.
  - `<!-- BLOQUE 2: LEMA INSTITUCIONAL EN FONDO NAVY -->`: Ideario educativo ("Formación para aprender, convivir y servir") sobre fondo `--navy` profundo.
  - `<!-- BLOQUE 3: NARRATIVA HISTÓRICA A DOS COLUMNAS -->`: Historia de la institución con insignia flotante del MEDUCA y lista de fortalezas.
  - `<!-- BLOQUE 4: PUNTOS CLAVE Y ACORDEÓN INSTITUCIONAL -->`: Acordeón interactivo nativo con `<details>` y `<summary>` (accesible vía teclado y lectores de pantalla) para 4 directrices institucionales.
  - `<!-- BLOQUE 5: TARJETAS EDITORIALES DE COMPROMISO COMUNITARIO -->`: Cuadrícula de 3 garantías activas para padres de familia (seguridad, SAI, atención personalizada).
  - `<!-- BLOQUE 6: LLAMADO A LA ACCIÓN (CTA) -->`: Cierre orientado al contacto con administración y secretaría.

---

## 4. Decisiones de Diseño Acordadas (/grill-me)
* **Formato de entrega:** 3 archivos HTML completos y navegables (`plantilla-academica.html`, `plantilla-editorial.html`, `plantilla-innovacion.html`) con estructura semántica, comentarios guía por bloque (`<!-- BLOQUE HERO -->`, `<!-- BLOQUE CITA -->`, etc.) y textos/imágenes de muestra, para que se puedan previsualizar directamente en el navegador y luego trasladar limpiamente a WordPress.
* **Header y Footer Globales:** Todas las plantillas incluyen la cabecera idéntica de producción con el botón "MATRICULATE AQUÍ", el menú modal desplegable estructurado en 4 columnas (01 NUESTRA ESCUELA, 02 ENFOQUE EDUCATIVO, 03 FAMILIA Y COMUNIDAD, 04 NIVELES ACADÉMICOS), el pie de página completo con redes y el botón flotante "Volver arriba".
* **Arquitectura de estilos (CSS Modular):** Se creó el archivo complementario `plantillas.css` (enlazado junto a `styles.css`) con nombres de clases semánticos y modulares basados en bloques (ej. `.block-hero`, `.block-bible-quote`, `.block-mosaic`, `.block-split`, `.block-accordion`, `.block-metrics`, `.block-cta`).
* **Estrategia de Recursos y Rutas Limpias:** Se establecieron uniones de directorio (`mklink /J`) para `assets`, `css` y `js` dentro de `Plantillas\`. Esto permite utilizar rutas relativas canónicas (`assets/...`, `css/styles.css`, `js/main.js`) idénticas a la raíz de la web sin duplicar archivos.

---

## 5. Inventario de Archivos Entregados

| Archivo | Rol | Descripción |
| :--- | :--- | :--- |
| `plantilla-academica.html` | Plantilla A | Niveles educativos, cita bíblica, resumen pedagógico, split con métrica y mosaico asimétrico. |
| `plantilla-innovacion.html` | Plantilla B | Innovación y vida escolar, carrusel táctil `.carousel-v3`, grilla de proyectos, barra de métricas y split inverso. |
| `plantilla-editorial.html` | Plantilla C | Institucional y comunidad, lema solemne en fondo navy, narrativa histórica, acordeón nativo `<details>` y tarjetas de compromiso. |
| `plantillas.css` | Estilos Modulares | Clases reutilizables `.block-*` usando variables institucionales (`--navy`, `--turquoise`, `--orange`, etc.). |
| `ESPECIFICACION_PLANTILLAS.md` | Documentación | Guía maestra de especificación, arquitectura, replicación y migración a WordPress. |

---

## 6. Catálogo de Clases Modulares (`plantillas.css`)

### Hero (`.block-hero`)
- `.block-hero`: Contenedor principal con imagen de fondo absoluta, overlay de contraste y contenido z-index.
- `.block-hero--tall`: Altura mínima de 640px para impacto principal.
- `.block-hero--compact`: Altura mínima de 440px para subpáginas o secciones breves.
- `.block-hero__bg`: Imagen de fondo con efecto sutil de escala al hover.
- `.block-hero__wash`: Capa de gradiente oscuro que garantiza legibilidad de textos sobre cualquier foto.
- `.block-hero__wash--editorial`: Variante con gradiente vertical uniforme para páginas solemnes.
- `.block-hero__tag`: Pastilla redondeada institucional con punto turquesa.
- `.block-hero__title`: Tipografía titular escalable con `clamp()`.
- `.block-hero__lead`: Párrafo introductorio legible de 17-22px.
- `.block-hero__btn-primary`: Botón naranja con elevación al hover.
- `.block-hero__btn-secondary`: Botón blanco con efecto translúcido `backdrop-filter`.

### Citas y Lemas (`.block-bible-quote`)
- `.block-bible-quote`: Contenedor centrado sobre fondo crema (`--cream`).
- `.block-bible-quote--navy`: Variante sobre fondo azul marino institucional (`--navy`).
- `.block-bible-quote__icon`: Círculo con ícono vectorial SVG representativo.
- `.block-bible-quote__text`: Tipografía serif en cursiva con términos destacados en naranja.
- `.block-bible-quote__cite`: Cita formal con línea divisoria turquesa superior.

### Contenido Dividido / Narrativa (`.block-split`)
- `.block-split`: Disposición flexible a 2 columnas (texto a un lado, fotografía al otro).
- `.block-split--reverse`: Disposición invertida (fotografía a la izquierda, texto a la derecha).
- `.block-split__list`: Lista de viñetas con íconos de cotejo turquesas.
- `.block-split__floating-badge`: Tarjeta flotante superpuesta sobre la esquina de la foto para destacar datos clave.

### Mosaico Fotográfico (`.block-mosaic`)
- `.block-mosaic`: Cuadrícula CSS Grid de 12 columnas adaptable a móviles.
- `.block-mosaic__item--large`: Ocupa 7 columnas y 2 filas (foto principal).
- `.block-mosaic__item--tall`: Ocupa 5 columnas y 2 filas (foto vertical).
- `.block-mosaic__item--half`: Ocupa 6 columnas y 1 fila.
- `.block-mosaic__item--third`: Ocupa 4 columnas y 1 fila.

### Carrusel Interactivo (`.carousel-v3`)
- `.carousel-v3`: Sección completa con scroll horizontal nativo y suave.
- `.carousel-v3__card`: Tarjetas con anchos rítmicos alternados (340px, 620px, 440px) y degradado inferior con texto.

### Métricas (`.block-metrics`)
- `.block-metrics`: Franja azul institucional con cuadrícula de 4 indicadores.
- `.block-metric-item__value`: Números de 38-56px en color turquesa.

### Acordeón Accesible (`.block-accordion`)
- `<details class="block-accordion__item">`: Estructura HTML estándar sin dependencias de JavaScript.
- `<summary class="block-accordion__summary">`: Título interactivo con símbolo dinámico `+`/`−`.
- `.block-accordion__content`: Cuerpo explicativo desplegable.

---

## 7. Guía Paso a Paso para Crear una Nueva Página usando las Plantillas

1. **Elegir la plantilla base adecuada:**
   - Si la página es un nivel escolar (`prekinder.html`, `primaria.html`, etc.) → Duplica `plantilla-academica.html`.
   - Si la página es de actividades, deportes o tecnología (`vida-estudiantil.html`, etc.) → Duplica `plantilla-innovacion.html`.
   - Si la página es institucional o informativa (`quienes-somos.html`, `plantel.html`, etc.) → Duplica `plantilla-editorial.html`.

2. **Personalizar las imágenes y textos:**
   - Cambia la ruta en `<img class="block-hero__bg" src="...">` por la foto representativa de la sección.
   - Ajusta el texto del tag (`<span class="block-hero__tag">`) y del título (`<h1 class="block-hero__title">`).
   - Envuelve la palabra clave en `<mark>...</mark>` para obtener el subrayado turquesa institucional automático.
   - En los bloques de características o acordeón, reemplaza los títulos y descripciones según la necesidad.

3. **Reordenar o combinar bloques libremente:**
   - Gracias a que cada bloque es autocontenido, puedes copiar un bloque de una plantilla y pegarlo en otra (por ejemplo, agregar el bloque `.block-bible-quote` dentro de `plantilla-innovacion.html`, o incluir `.block-accordion` dentro de `plantilla-academica.html`).

---

## 8. Estrategia de Migración a WordPress

1. **Plantillas de Página (`page-template`):**
   - Cada uno de los 3 archivos HTML puede convertirse en un template PHP de WordPress:
     - `page-academica.php`
     - `page-innovacion.php`
     - `page-editorial.php`
   - Se reemplaza el header y footer con `get_header();` y `get_footer();`.
   - El contenido se dinamiza mediante campos personalizados (Advanced Custom Fields / Metaboxes) o bloques.

2. **Bloques Gutenberg Reutilizables:**
   - Cada clase `.block-*` está concebida como un Bloque Gutenberg (Block Pattern o Custom Block):
     - Bloque Hero con imagen de fondo seleccionable.
     - Bloque Cita Bíblica con campo de texto y cita.
     - Bloque Mosaico Fotográfico vinculado a la galería de medios.
     - Bloque Acordeón para preguntas y respuestas.
   - Los estilos en `plantillas.css` y `styles.css` se encolan directamente en `functions.php` mediante `wp_enqueue_style()`.
