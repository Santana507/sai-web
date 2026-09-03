# Documentación de Cambios — BPVDA Web

Historial cronológico de cambios aplicados en el repositorio y código fuente del sitio web del **Colegio Buen Pastor Voz de Alerta**.

---

## Sesión #1 — Ajustes de Navegación, Header y Menú
- **Logo Institucional**: Se amplió a 68px (48px en scroll), transparente y ubicado en el extremo izquierdo sin contenedor circular.
- **Navegación Esencial**: Enlaces "Misión", "Admisión" y "Contacto" alineados a la derecha, a la izquierda del botón "MENÚ".
- **Hero Slider**: Duración de video fijada en 10 segundos, botón de pausa `Ⅱ` removido.
- **Menú Desplegable Estático**: Adaptado a 100% de la pantalla sin scroll vertical (`overflow: hidden`), eliminando el banner publicitario inferior sobrante.

---

## Sesión #2, Cambio #1 — Integración de Contenidos de Sebastián
- **Extracción e Integración de Textos**: Se extrajeron todos los nuevos textos de la edición de Sebastián para las 8 páginas (`index.html`, `nosotros.html`, `mision.html`, `vision.html`, `curriculo.html`, `actividades.html`, `admision.html`, `contacto.html`).
- **Respeto de Estructura**: Se conservó al 100% la cabecera, estilos y código funcional de la Sesión #1.
- **6 Preguntas Frecuentes**: Incorporación completa de las 6 FAQs ampliadas de admisión.

---

## Sesión #2, Cambio #2 — Reequilibrio de Sección 01 y Eliminación de Espacio Vacío
- **Alineación Superior (`align-items: start`)**: Eliminación del desbalance donde el título `Una escuela se reconoce por lo que hace posible` descendía al fondo del párrafo.
- **Dos Columnas Armónicas**: Columna izquierda con título principal + bloque de *Nuestra promesa*, columna derecha con párrafo principal.
- **Ajuste de Padding**: Reducción de padding de entrada (`.statement.section-pad`) para que el contenido sea visible inmediatamente tras hacer scroll en el slider.

---

## Sesión #2, Cambio #3 — Rediseño de Footer, Cita Inspiradora y Espaciado de Comunidad
- **Pie de Página en 3 Columnas**:
  - Columna 1: Logo oficial blanco transparente + ubicación institucional.
  - Columna 2: Oficina (teléfono y horarios de atención/verano).
  - Columna 3: Atención al cliente (teléfonos y correo).
- **Redes Sociales Discretas**: Botones circulares idénticos (36px) para Gmail directo, Facebook e Instagram con hover interactivo en color naranja `#ff6b2c`.
- **Cita Motivacional**: Sección `.hero-quote` añadida justo debajo del Slider con la frase de Yokoi Kenji resaltando *disciplina* e *inteligencia*.
- **Espaciado en "Somos Comunidad"**: Aumento de padding y márgenes para otorgarle aire respirable respecto a las secciones adyacentes.
- **Jerarquía Tipográfica**: "Una escuela que se" más pequeño y "vive en compañía" más grande y destacado.

---

## Sesión #2, Cambio #4 — Nav Flotante Cuadrado, Logo Fijo y Panel de Menú
- **Nav Original Preservado en Tope**: El header conserva su fondo azul translúcido original mientras se esté en el extremo superior de la página.
- **Desvanecimiento al Scroll (Modo Libre)**:
  - Al bajar en la página (pasando el slider horizontal o >40px en interiores), el color de fondo de la barra, sus bordes y el texto ("Misión", "Admisión", etc.) se desvanecen suavemente volviéndose invisibles.
  - El logo en la izquierda **se mantiene estático** y disponible para ir a Inicio.
  - El botón de menú **permanece visible** a la derecha.
- **Botón de Menú Cuadrado y Sin Texto**:
  - El botón es estrictamente cuadrado (`44x44px`), eliminando las etiquetas de "MENÚ" y "CERRAR".
  - Se utilizan íconos PNG proporcionados para alternar entre el ícono hamburguesa (cerrado) y la cruz gruesa (abierto).
- **Panel de Menú Mejorado**:
  - Eliminación de placeholders o imágenes superpuestas, limitándose a una **sola fotografía unificada**.
  - Aumento del espaciado (margins y paddings) de los enlaces 01, 02 y 03 para equilibrar la composición vertical de manera armónica.
  - Inclusión de los datos de contacto y redes sociales unificados en la esquina inferior izquierda del panel.
- **Centrado Restituido (Sin Franjas Blancas)**:
  - Centrado de las cuadrículas (`.interior-grid`) aplicado al comportamiento interno del bloque CSS (`justify-content: center`) y el centrado de FAQs (`margin: 0 auto`) en lugar de recortar el contenedor padre. De esta forma, el color del fondo fluye natural al 100% de la pantalla sin romper el layout.
- **Botón "Volver Arriba" (Back-to-top)**: Añadido botón interactivo en la esquina inferior derecha visible en todas las pantallas.
---

## Sesión #2, Cambio #5.1 — Perfeccionamiento Visual: Sombra en Logo, Menú sin Brecha Superior, Imagen Cuadrada Única y Botón Centrado
- **Sombra en Logo Principal**: Adición de `drop-shadow(0 3px 8px rgba(0, 0, 0, 0.5))` para mejorar su contraste y jerarquía sobre el hero y los fondos claros.
- **Ocultación del Logo en Menú**: El logo institucional se oculta automáticamente con `opacity: 0` al abrir el menú para evitar superposiciones indeseadas.
- **Eliminación del Gap Superior del Menú**: Ajuste de `.menu-panel` para ocupar `top: 0` eliminando la rendija transparente superior, preservando los laterales y base redondeados flotantes (`inset: 0 14px 14px 14px; border-radius: 0 0 16px 16px;`).
- **Una Sola Imagen Cuadrada**: Erradicación del pseudo-elemento legado `.menu-panel__intro::after` que inyectaba una segunda foto (`community.webp`). La foto del menú pasa a ser estrictamente cuadrada (`240x240px`, `aspect-ratio: 1 / 1`) con bordes suavemente redondeados (`border-radius: 10px;`).
- **Centrado Simétrico del Menú**: Eliminación de padding asimétrico en `.menu-button` para centrar perfectamente los íconos PNG de hamburguesa y cruz (`✕`).
- **Animación Fluida de Nav**: Transiciones sincronizadas de 0.6s para el fondo, sombras y enlaces, activándose suavemente a la mitad del slider principal.