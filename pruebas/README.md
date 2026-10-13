# Laboratorio de Plantillas y Diseños Alternativos — BPVDA

Esta carpeta `/pruebas/` contiene **6 plantillas de diseño de sección** concebidas para romper con la repetición visual en las páginas del sitio web del **Colegio Buen Pastor Voz de Alerta (BPVDA)**.

---

## 🎯 ¿Por qué se crearon estas plantillas?

Al auditar las páginas del sitio, se detectó un patrón recurrente:
1. Cuadrículas simétricas uniformes de 3 columnas (`.card-academic` / `.pillar-card`).
2. Secciones repetitivas de 2 columnas (imagen estática a la izquierda, párrafo a la derecha).
3. Desplazamientos verticales prolongados con contenido fragmentado.

Estas **6 plantillas** introducen:
* **Asimetría visual controlada** (Bento Grid).
* **Interactividad compacta** (Pestañas sincronizadas y filtros dinámicos).
* **Guía cronológica y secuencial** (Línea de tiempo con conectores e hitos).
* **Prueba social y dimensión humana** (Testimonios con tipografía editorial).
* **Diferenciadores tangibles** (Contadores de impacto y matriz comparativa).
* **Inmersión y contexto fotográfico** (Galería panorámica con categorización rápida).

Todo el diseño utiliza **estrictamente los tokens oficiales** de `css/styles.css` (`--navy`, `--deep`, `--turquoise`, `--orange`, `--paper`, `--cream`, `--gray`) y las **fotografías reales** de `assets/fotos/`.

---

## 📂 Estructura de Archivos

| Archivo | Propósito |
| :--- | :--- |
| **`pruebas/index.html`** | **Catálogo visual central**. Permite previsualizar las 6 plantillas en un solo lugar, probar sus interacciones, y tiene un botón para ver/copiar el código HTML al portapapeles. |
| **`pruebas/plantilla-1-bento.html`** | Vista aislada de la Plantilla 1 (Bento Grid). |
| **`pruebas/plantilla-2-split-tabs.html`** | Vista aislada de la Plantilla 2 (Pestañas interactivas). |
| **`pruebas/plantilla-3-timeline-steps.html`** | Vista aislada de la Plantilla 3 (Línea de tiempo escalonada). |
| **`pruebas/plantilla-4-testimonios-comunidad.html`** | Vista aislada de la Plantilla 4 (Muro de testimonios). |
| **`pruebas/plantilla-5-metricas-comparativa.html`** | Vista aislada de la Plantilla 5 (Métricas y matriz comparativa). |
| **`pruebas/plantilla-6-explorador-inmersivo.html`** | Vista aislada de la Plantilla 6 (Galería con filtros). |
| **`pruebas/plantillas.css`** | Hoja de estilos con variables y layouts responsivos para móvil, tablet y escritorio. |
| **`pruebas/plantillas.js`** | Lógica en JavaScript nativo para pestañas, filtros de categoría y modal de copiado de código. |

---

## 🎨 Resumen de las 6 Plantillas

### 1. Mosaico Editorial Asimétrico (Bento Grid)
* **Estructura**: Grid de 12 columnas con una tarjeta principal con imagen y fondo degradado (7 cols), una tarjeta oscura con número gigante y checklist (5 cols), y 3 microtarjetas inferiores (4 cols cada una) con badges y enlaces rápidos.
* **Páginas recomendadas**: [`secundaria.html`](../secundaria.html), [`bachilleres.html`](../bachilleres.html), [`ecosistema-digital.html`](../ecosistema-digital.html).

### 2. Showcase Dividido con Pestañas (Split Tabs)
* **Estructura**: Pantalla dividida en dos columnas: a la izquierda, lista de pestañas clicables con numeración (`01`, `02`, `03`...); a la derecha, tarjeta visual reactiva que actualiza foto, título, descripción y etiquetas sin recargar la página.
* **Páginas recomendadas**: [`primaria.html`](../primaria.html), [`bachilleres.html`](../bachilleres.html), [`vida-estudiantil.html`](../vida-estudiantil.html).

### 3. Ruta Formativa / Proceso Escalonado (Timeline Steps)
* **Estructura**: Conector vertical central en zigzag con nodos circulares numerados, tarjetas con bordes turquesa/naranja y fotos de apoyo alternadas. En móviles colapsa automáticamente a una línea lateral limpia.
* **Páginas recomendadas**: [`admisiones.html`](../admisiones.html), [`form-preingreso.html`](../form-preingreso.html).

### 4. Muro de Testimonios y Comunidad (Voices Wall)
* **Estructura**: Fondo `--deep` con comillas tipográficas, avatares circulares con anillo turquesa, tarjeta central elevada y badges de rol (padres, egresados, docentes).
* **Páginas recomendadas**: [`filosofia.html`](../filosofia.html), [`quienes-somos.html`](../quienes-somos.html), [`portal-padres.html`](../portal-padres.html).

### 5. Métricas de Impacto y Matriz Comparativa (Stats Matrix)
* **Estructura**: Cinta de 4 contadores institucionales sobre fondo azul marino, seguida de dos bloques en paralelo: el modelo tradicional vs. el modelo pedagógico BPVDA.
* **Páginas recomendadas**: [`ecosistema-digital.html`](../ecosistema-digital.html), [`bachilleres.html`](../bachilleres.html), [`sai.html`](../sai.html).

### 6. Galería de Inmersión con Filtros Interactivos (Explorer Grid)
* **Estructura**: Barra superior de píldoras filtrables (Académico, Campus, Convivencia) que ocultan/muestran tarjetas de gran formato con zoom sutil al pasar el cursor y degradado en color institucional.
* **Páginas recomendadas**: [`instalaciones.html`](../instalaciones.html), [`plantel.html`](../plantel.html), [`vida-estudiantil.html`](../vida-estudiantil.html).

---

## 🛠️ Cómo Probarlas y Adaptarlas al Sitio Principal

1. **Abrir el catálogo**:
   Abre directamente `pruebas/index.html` en el navegador para ver las 6 plantillas funcionando con estilos e interacciones reales.
2. **Seleccionar tu favorita**:
   En cada plantilla puedes hacer clic en el botón **`</> Ver Código HTML`** para copiar el marcado directamente, o inspeccionar el archivo aislado correspondiente (`plantilla-X.html`).
3. **Integración al sitio principal**:
   - Copia los estilos de la plantilla desde `pruebas/plantillas.css` hacia `css/styles.css` (o enlaza `plantillas.css` en el `<head>` de la página que quieras).
   - Si la plantilla usa interactividad (Plantilla 2 o 6), añade la función correspondiente a `js/main.js` o vincula `pruebas/plantillas.js`.
   - Ajusta los textos y las fotos asegurándote de respetar la taxonomía de carpetas (`assets/fotos/secundaria/`, `assets/fotos/exterior/`, etc.).
