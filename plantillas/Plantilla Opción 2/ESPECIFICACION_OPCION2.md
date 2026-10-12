# Especificación de Plantillas — Opción 2 (Estilo Split Minimalista y Bloques Rectangulares Sólidos)

> [!NOTE]
> **Modo Desarrollador Temporal:** Para facilitar la prueba y el contraste directo entre esta *Opción 2* y la *Opción 1*, se añadió temporalmente un menú desplegable de "Desarrollador" en la cabecera de `index.html`. Este acceso es exclusivamente para pruebas internas y **debe ser retirado** una vez se defina el diseño final. Instrucciones completas en `Web - Smith Folder/COMPARADOR_PLANTILLAS_DEV.md`.

## 1. Visión y Concepto de Diseño
La **Opción 2 de Plantillas** para el Colegio Buen Pastor Voz de Alerta (BPVDA) nace de la inspiración de elementos preexistentes de alto impacto visual del sitio web (como el bloque *split-feature* de `portal-padres.html`, los pilares formativos de `filosofia.html` y el carrusel horizontal de tarjetas de `sai.html`).

### Características Diferenciales frente a la Opción 1:
- **Estructura 50/50 Full-Bleed (Split):** En lugar de un hero con imagen completa y textos sobrepuestos con capas de oscuridad, el encabezado divide la pantalla limpiamente en dos mitades: una fotografía grande y nítida al 50% y un bloque de color sólido con textos grandes y tipografía contundente al otro 50%.
- **Bloques Rectangulares y Llenos (Color-Blocking):** Alternancia de fondos sólidos institucionales:
  - Crema editorial suave (`#f7f4ec`) para lectura descansada.
  - Teal profundo institucional (`#0c716d` / `#0d776f`) para fuerza formativa.
  - Azul marino institucional (`--navy`, `#072b49`) para solemnidad y cierre de secciones.
- **Formas Geométricas Puras:** Tarjetas rectangulares con bordes limpios, botones rectangulares con esquinas sutiles (6px) y barras de métricas con bordes verticales de contraste.
- **Escalabilidad y Flexibilidad:** La Cita Bíblica se presenta como un bloque horizontal de borde a borde o integrada dentro de una sección split, funcionando como un complemento que jerarquiza la información sin recargar la página.

---

## 2. Inventario de Archivos en "Plantilla Opción 2"

| Archivo | Arquetipo | Propósito y Secciones Principales |
| :--- | :--- | :--- |
| [**`plantilla-academica-v2.html`**](file:///C:/Users/galex/OneDrive/Desktop/Carpeta%20de%20pruebas/Proyecto%20-%20Web%20BPVDA%202026/Plantillas/Plantilla%20Opci%C3%B3n%202/plantilla-academica-v2.html) | **Académica / Niveles (v2)** | • Hero Split 50/50 (Foto aula izquierda + texto crema derecha).<br>• Cita Bíblica horizontal sólida en fondo teal (#0c716d).<br>• Cuadrícula de 3 pilares formativos en tarjetas rectangulares.<br>• Sección Split inversa en teal profundo (docentes y metodología).<br>• Carrusel horizontal `.carousel-v3` de momentos.<br>• CTA rectangular navy a proceso de admisión. |
| [**`plantilla-innovacion-v2.html`**](file:///C:/Users/galex/OneDrive/Desktop/Carpeta%20de%20pruebas/Proyecto%20-%20Web%20BPVDA%202026/Plantillas/Plantilla%20Opci%C3%B3n%202/plantilla-innovacion-v2.html) | **Innovación / Estudiantil (v2)** | • Hero Split 50/50 inverso (Contenido teal izquierda + campus derecha).<br>• Carrusel horizontal `.carousel-v3` de tarjetas con anchos dinámicos.<br>• Barra de métricas institucionales (+30 años, 100% docentes, etc.).<br>• Bloque Split 50/50 de Ecosistema Digital SAI (plataforma + texto crema).<br>• Tarjetas de proyectos (ciencia, oratoria, servicio).<br>• CTA rectangular navy de inscripción. |
| [**`plantilla-editorial-v2.html`**](file:///C:/Users/galex/OneDrive/Desktop/Carpeta%20de%20pruebas/Proyecto%20-%20Web%20BPVDA%202026/Plantillas/Plantilla%20Opci%C3%B3n%202/plantilla-editorial-v2.html) | **Editorial / Comunidad (v2)** | • Hero Split 50/50 inspirado en Portal de Padres (foto atención + crema).<br>• Lema solemne en franja navy ("Formación para aprender, convivir y servir").<br>• Bloque Split 50/50 de Valores institucionales (inspirado en Filosofía).<br>• Acordeón interactivo nativo (`<details>`) para directrices y preguntas.<br>• Tarjetas rectangulares de servicios y garantías para acudientes.<br>• CTA de atención y secretaría. |
| [**`plantillas-opcion2.css`**](file:///C:/Users/galex/OneDrive/Desktop/Carpeta%20de%20pruebas/Proyecto%20-%20Web%20BPVDA%202026/Plantillas/Plantilla%20Opci%C3%B3n%202/plantillas-opcion2.css) | **Estilos Modulares Opción 2** | Hoja de estilos con arquitectura de bloques split, variantes cromáticas, cuadrículas rectangulares y diseño 100% responsivo para móviles. |
| [**`ESPECIFICACION_OPCION2.md`**](file:///C:/Users/galex/OneDrive/Desktop/Carpeta%20de%20pruebas/Proyecto%20-%20Web%20BPVDA%202026/Plantillas/Plantilla%20Opci%C3%B3n%202/ESPECIFICACION_OPCION2.md) | **Documentación Técnica** | Manual completo de uso, catálogo de componentes y migración a WordPress. |

---

## 3. Catálogo de Clases y Módulos (`plantillas-opcion2.css`)

### 1. Hero Split 50/50 (`.split-hero`)
- `.split-hero`: Contenedor principal en CSS Grid de 2 columnas de igual ancho (`1fr 1fr`).
- `.split-hero--reverse`: Invierte la orientación (imagen a la derecha, texto a la izquierda).
- `.split-hero__media`: Contenedor de la fotografía con `object-fit: cover` y zoom sutil en hover.
- `.split-hero__content`: Columna de información con padding fluido (`clamp(50px, 8vw, 130px)`).
- `.split-hero__content--cream`: Fondo crema `#f7f4ec` con texto azul marino institucional.
- `.split-hero__content--teal`: Fondo teal `#0c716d` con texto blanco y acentos turquesas.
- `.split-hero__content--navy`: Fondo azul marino `#072b49` con texto blanco.
- `.split-hero__tag`: Etiqueta de sección precedida de guion largo institucional (`―`).
- `.split-hero__title`: Tipografía contundente escalable con `clamp(38px, 5.2vw, 76px)`.

### 2. Bloques Split Intermedios (`.split-block`)
- `.split-block`: Sección 50/50 para alternar imagen con narrativa en el cuerpo de la página.
- `.split-block--reverse`: Variante invertida para generar ritmo visual dinámico.
- `.split-block--cream`, `.split-block--teal`, `.split-block--navy`, `.split-block--white`: Modificadores de color de fondo.
- `.split-block__number`: Número grande de sección (`01`, `02`, `03`) en turquesa.
- `.split-block__list` y `.split-block__list-item`: Lista de viñetas con íconos de verificación.

### 3. Franja Sólida de Cita Bíblica / Lema (`.solid-quote-block`)
- `.solid-quote-block`: Bloque horizontal de ancho completo (100vw) en fondo navy o teal.
- `.solid-quote-block__quote`: Tipografía serif en cursiva con términos clave en `<mark>`.
- `.solid-quote-block__cite`: Referencia bíblica o lema institucional en letras mayúsculas con espaciado amplio.

### 4. Tarjetas Rectangulares (`.rect-card`)
- `.rect-cards-section`: Contenedor de sección con fondo crema o blanco.
- `.rect-card`: Tarjeta minimalista de 1 columna con esquinas sutilmente redondeadas (8-10px), ícono SVG y descripción.
- Efecto hover con elevación sutil y borde turquesa.

### 5. Barra de Métricas Rectangular (`.rect-metrics`)
- `.rect-metrics`: Franja sólida (teal o navy) con cuadrícula de 4 columnas.
- `.rect-metric-item`: Indicador con línea vertical de acento turquesa (`#2ee6dc`), número de 40-60px y descripción clara.

### 6. Acordeón Rectangular (`.rect-accordion`)
- `<details class="rect-accordion__item">`: Acordeón nativo sin JavaScript.
- `<summary class="rect-accordion__summary">`: Encabezado desplegable con indicador dinámico `+`/`−`.

### 7. Llamado a la Acción Rectangular (`.rect-cta`)
- `.rect-cta`: Bloque de cierre en fondo navy o teal con botones rectangulares (`.btn-rect-primary` y `.btn-rect-secondary`).

---

## 4. Adaptabilidad Responsiva para Móviles
En pantallas iguales o menores a 900px:
- Las secciones `.split-hero` y `.split-block` se transforman automáticamente a 1 columna vertical.
- La imagen se posiciona en la parte superior con una altura fija optimizada (340px) y enfoque centrado.
- El contenido textual ajusta sus rellenos a 24px laterales manteniendo máxima legibilidad.

---

## 5. Estrategia de Migración hacia WordPress
1. **Patrones de Bloques Gutenberg (Block Patterns):**
   - El bloque split 50/50 se mapea directamente al bloque estándar `core/media-text` de WordPress con la opción *Fondo completo* activada.
   - Las cuadrículas rectangulares se mapean al bloque `core/columns` o patrones reutilizables.
   - El acordeón nativo `<details>` es soportado nativamente en el editor de bloques moderno.
2. **Plantillas de Página PHP:**
   - Cada archivo (`plantilla-academica-v2.html`, etc.) puede renombrarse como `page-split-academica.php`, `page-split-innovacion.php` y `page-split-editorial.php` en el tema de WordPress, enlazando `plantillas-opcion2.css` mediante `wp_enqueue_style()`.
