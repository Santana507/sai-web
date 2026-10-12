# Comparador de Plantillas — Herramienta Temporal de Desarrollador

> [!CAUTION]
> ### ⚠️ FUNCIÓN TEMPORAL — DEBE SER ELIMINADA ANTES DE PRODUCCIÓN
> Este menú desplegable y esta guía constituyen una **herramienta transitoria y exclusiva de desarrollo**. Su único propósito es permitir que el equipo de diseño y dirección previsualice, pruebe y compare en vivo ambas propuestas de diseño (*Opción 1* vs. *Opción 2*) antes de decidir cuál implementar en WordPress.
> 
> **Una vez tomada la decisión, este menú DEBE ser retirado de `index.html`, `styles.css` y `main.js` siguiendo las instrucciones de la Sección 3 de este documento.**

---

## 1. Accesos Directos a las Plantillas

### 🏛️ Opción 1: Sistema Modular Clásico
Enfocado en heroes con imagen de fondo completa y wash oscuro, citas bíblicas centradas, mosaicos fotográficos asimétricos y tarjetas con microinteracciones sutiles.

* 📖 [**Plantilla Académica / Niveles (Opción 1)**](plantillas/plantilla-academica.html)  
  *Ideal para:* `prekinder.html`, `kinder.html`, `primaria.html`, `secundaria.html`, `bachilleres.html`.  
  *Componentes:* Hero con tag y titular destacado con `<mark>`, cita bíblica Proverbios 22:6, pilares formativos, narrativa split con métrica y mosaico fotográfico dinámico.

* 🚀 [**Plantilla Innovación y Vida Estudiantil (Opción 1)**](plantillas/plantilla-innovacion.html)  
  *Ideal para:* `sai.html`, `vida-estudiantil.html`, `ecosistema-digital.html`, `instalaciones.html`.  
  *Componentes:* Hero dinámico, carrusel horizontal `.carousel-v3` de tarjetas con anchos alternados (340px, 620px, 440px), cuadrícula de proyectos y barra de métricas.

* 📜 [**Plantilla Editorial e Institucional (Opción 1)**](plantillas/plantilla-editorial.html)  
  *Ideal para:* `quienes-somos.html`, `plantel.html`, `portal-padres.html`.  
  *Componentes:* Hero solemne, lema sobre fondo azul marino (`--navy`), narrativa histórica a 2 columnas con sello MEDUCA, acordeón interactivo accesible `<details>` y compromisos con familias.

---

### 🎨 Opción 2: Split 50/50 Minimalista y Bloques Rectangulares Sólidos
Inspirado directamente en las secciones nativas de la web (`portal-padres.html`, `filosofia.html` y `carousel-v3`). Enfocado en heroes divididos al 50/50 (mitad fotografía nítida sin recortes y mitad bloque de color sólido), formas rectangulares puras, colores de alto contraste (crema, teal profundo `#0c716d`, navy) y máxima legibilidad.

* 🏛️ [**Plantilla Académica v2 (Opción 2)**](plantillas/Plantilla%20Opción%202/plantilla-academica-v2.html)  
  *Diferencial:* Hero split 50/50 (foto aula izquierda + texto crema derecha), cita bíblica horizontal sólida en fondo teal (#0c716d), pilares en tarjetas rectangulares y split inverso en teal profundo.

* 🚀 [**Plantilla Innovación v2 (Opción 2)**](plantillas/Plantilla%20Opción%202/plantilla-innovacion-v2.html)  
  *Diferencial:* Hero split 50/50 inverso en fondo teal (#0c716d), carrusel horizontal `.carousel-v3`, barra de 4 métricas con bordes verticales de contraste y split de plataforma digital SAI.

* 📜 [**Plantilla Editorial v2 (Opción 2)**](plantillas/Plantilla%20Opción%202/plantilla-editorial-v2.html)  
  *Diferencial:* Hero split 50/50 inspirado en Portal de Padres (foto atención + crema), lema en barra navy, bloque split de Valores (inspirado en Filosofía), acordeón de directrices y servicios a familias.

---

## 2. Cuadro Comparativo de Estilos

| Criterio | Opción 1 (Modular Clásica) | Opción 2 (Split Minimalista) |
| :--- | :--- | :--- |
| **Hero / Encabezado** | Imagen de ancho completo de fondo con lavado/overlay oscuro y texto superpuesto. | Split 50/50 full-bleed: 50% foto limpia sin oscurecer + 50% bloque de color sólido con tipografía grande. |
| **Paleta y Fondos** | Fondos neutros mayoritariamente blancos y crema suave con tarjetas elevadas. | *Color-Blocking* rectangular: bloques sólidos definidos en crema (`#f7f4ec`), teal profundo (`#0c716d`) y azul marino (`#072b49`). |
| **Cita Bíblica** | Tarjeta editorial centrada con ícono circular SVG y marco suave. | Franja horizontal sólida de borde a borde (teal o navy) de alto impacto o bloque split integrado. |
| **Formas de Tarjetas** | Bordes redondeados medianos (16px) con sombras sutiles y línea de gradiente superior al hover. | Rectángulos geométricos limpios (8px) con bordes sólidos y elevación directa. |
| **Mapeo Gutenberg (WordPress)** | Bloque `core/cover` + `core/columns` + `core/gallery`. | Bloque estándar `core/media-text` (con opción ancho completo) + `core/columns`. |

---

## 3. Instrucciones para Remover este Menú Temporal

Cuando el equipo defina cuál de las opciones (o combinación de ambas) se adoptará de manera permanente, el menú temporal de desarrollador puede eliminarse fácilmente siguiendo estos 3 pasos:

### Paso 1: Limpiar `index.html`
1. En la etiqueta `<nav class="essential-nav">`, elimina el bloque delimitado por:
   ```html
   <!-- [TEMPORAL: MENÚ DESARROLLADOR - COMPARADOR DE PLANTILLAS] -->
   ...
   <!-- [FIN TEMPORAL MENÚ DESARROLLADOR] -->
   ```
2. En el panel modal del menú móvil, elimina el bloque delimitado por:
   ```html
   <!-- [TEMPORAL: ACCESO DESARROLLADOR MÓVIL] -->
   ...
   <!-- [FIN TEMPORAL ACCESO DESARROLLADOR MÓVIL] -->
   ```

### Paso 2: Limpiar `css/styles.css`
Al final del archivo, elimina la sección:
```css
/* ==========================================================================
   06. TEMPORAL: MENÚ DE DESARROLLADOR (COMPARADOR DE PLANTILLAS)
   ...
   ========================================================================== */
```

### Paso 3: Limpiar `js/main.js`
Al final del archivo, elimina la sección:
```javascript
/* ----------------------------------------------------------------------------
 * 11. MENÚ TEMPORAL DE DESARROLLADOR (Comparador de Plantillas)
 * ...
 */
```
