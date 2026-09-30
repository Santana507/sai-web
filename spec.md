# SPEC-001 — Especificación Técnica Integral del Sitio Web BPVDA

> **Metodología**: Spec-Driven Development (SDD) — Estándar MoureDev.  
> **Estado**: Aprobado / Fuente Canónica de Verdad (*Single Source of Truth*).  
> **Proyecto**: Colegio Buen Pastor Voz de Alerta (BPVDA).  
> **Versión**: 2.0 (Arquitectura de 16 páginas en 5 pilares).

---

## 1. Contexto y Objetivo del Proyecto

El **Colegio Buen Pastor Voz de Alerta (BPVDA)**, ubicado en el Corregimiento 24 de Diciembre (Ciudad de Panamá), requiere una plataforma web de nivel profesional que proyecte una identidad digital superior, compitiendo con los más altos estándares de instituciones educativas privadas (referencias de diseño: *The Walker School* y *The Dunham School*).

El objetivo es proveer una experiencia web inmersiva, accesible y de alto rendimiento que:
1. Refleje la excelencia académica, los valores cristianos y la calidez comunitaria del colegio.
2. Centralice el acceso para padres de familia (SAI, Edvoice, admisiones y secretaría).
3. Presente una arquitectura multipágina de 16 páginas agrupadas en 5 pilares institucionales.
4. Mantenga una base técnica 100% nativa (HTML5 semántico, CSS3 puro con variables, Vanilla JS accesible) concebida para una transición directa a plantilla dinámica (*Theme*) de WordPress.

---

## 2. Actores y Personas Clave

* **Familias Interesadas / Nuevos Padres**: Buscan información sobre admisiones, costos, metodologías, valores, infraestructura y contacto directo (WhatsApp/teléfono).
* **Familias Actuales / Acudientes**: Requieren acceso expedito a las plataformas escolares (SAI, Edvoice, portal de calificaciones y avisos).
* **Estudiantes**: Exploran actividades extracurriculares, robótica, arte, vida escolar y proyectos.
* **Docentes y Personal**: Consultan el ecosistema digital institucional y el portal SAI.
* **Visitantes Móviles**: Acceden desde redes sociales (Instagram/Facebook) necesitando carga ultrarrápida en smartphones.

---

## 3. Historias de Usuario

* **H-01 (Descubrimiento)**: Como padre de familia, quiero ver un video de impacto del colegio y su lema al entrar, para percibir el ambiente formativo y de confianza.
* **H-02 (Exploración Global)**: Como usuario en cualquier dispositivo, quiero abrir un menú accesible que organice las 16 secciones por pilares, para navegar rápidamente sin perder el contexto.
* **H-03 (Admisiones)**: Como acudiente interesado, quiero consultar los requisitos, fechas y FAQs de matrícula, para iniciar el trámite de admisión de mi hijo.
* **H-04 (Acceso a Plataformas)**: Como padre de familia actual, quiero enlaces directos y visibles al SAI y a Edvoice, para acceder al portal sin demoras.
* **H-05 (Conocimiento por Niveles)**: Como madre de un niño en edad preescolar, quiero ver fotos e información específica de Prekínder y Kínder, para conocer su cuidado y metodología.
* **H-06 (Ubicación y Atención)**: Como visitante, quiero ver la dirección exacta, teléfonos, horarios de oficina y botón directo a Google Maps, para planificar mi visita al plantel.
* **H-07 (Contacto Inmediato)**: Como usuario móvil, quiero pulsar un botón de WhatsApp o teléfono para abrir la conversación sin transcribir números.

---

## 4. Requisitos Funcionales (Notación EARS)

### 4.1. Encabezado y Navegación Esencial
* **RF-01**: **EL SISTEMA** presentará una cabecera persistente (`.site-header`) fija en la parte superior con altura inicial de `88px` y fondo azul translúcido con borde inferior tenue.
* **RF-02**: **MIENTRAS** el usuario se encuentre en los primeros `40px` de scroll (o hasta el 55% del hero en portada), **EL SISTEMA** mantendrá visibles los enlaces esenciales ("Filosofía", "Admisiones", "Contacto").
* **RF-03**: **CUANDO** el scroll supere la distancia de activación (`.is-scrolled-free`), **EL SISTEMA** desvanecerá el fondo del nav y los enlaces de texto mediante transiciones suaves de `0.6s` (modo libre), manteniendo visible e interactivo el logo a la izquierda y el botón de menú a la derecha.
* **RF-04**: **CUANDO** el usuario haga clic en el logo institucional, **EL SISTEMA** navegará a la portada (`index.html`).

### 4.2. Panel de Menú Flotante de 5 Pilares
* **RF-05**: **CUANDO** el usuario pulse el botón de menú (`.menu-button`), **EL SISTEMA** desplegará el panel modal (`.menu-panel`) con animación translateY/scale y alternará el icono de hamburguesa a la cruz de cierre (`✕`).
* **RF-06**: **CUANDO** el menú se abra, **EL SISTEMA** ocultará el logo principal (`opacity: 0`), aplicará un atrapamiento de foco (*Focus Trap* para la tecla `Tab`), actualizará `aria-expanded="true"` y `aria-hidden="false"`, y asignará el foco al primer enlace disponible.
* **RF-07**: **CUANDO** el usuario presione la tecla `Escape` o haga clic en cualquier enlace interno del menú, **EL SISTEMA** cerrará inmediatamente el menú y devolverá el foco al botón disparador.
* **RF-08**: **EL SISTEMA** organizará las 16 páginas en 5 secciones verticales claramente delimitadas:
  * **01 NUESTRA ESCUELA**: ¿Quiénes somos?, Propósito BPVDA, Instalaciones, Plantel docente.
  * **02 ENFOQUE EDUCATIVO**: SAI BPVDA, Vida estudiantil, Ecosistema digital.
  * **03 FAMILIA Y COMUNIDAD**: Admisiones y matrícula, Portal de padres, Contacto y atención.
  * **04 PRIMARIA**: Prekínder, Kínder, Primaria.
  * **05 SECUNDARIA Y BACHILLERES**: Secundaria, Bachilleres.
* **RF-09**: **EL SISTEMA** incluirá en el pie del menú (`.menu-panel__foot`) los datos de contacto directo (dirección, PBX y correo) y los iconos oficiales de redes sociales (Gmail, Facebook, Instagram, WhatsApp).

### 4.3. Hero Slider de Portada (`index.html`)
* **RF-10**: **EL SISTEMA** reproducirá en el primer slide un video ambiental institucional (`hero-campus.mp4`) en bucle continuo, con duración optimizada (~12 segundos), sin pista de audio innecesaria y con streaming instantáneo (`+faststart`).
* **RF-11**: **CUANDO** pasen 10 segundos en el primer slide, **EL SISTEMA** avanzará automáticamente al slide 2; para los slides siguientes la duración será de 7 segundos.
* **RF-12**: **CUANDO** el usuario use las flechas de avance/retroceso o ejecute un gesto táctil de deslizamiento (*swipe*) mayor a 50px en móviles, **EL SISTEMA** transicionará horizontalmente al slide correspondiente actualizando el contador (`01/05`) y la barra de progreso.
* **RF-13**: **CUANDO** el usuario presione el botón de pausa (`Ⅱ`/`▶`), **EL SISTEMA** pausará o reanudará el avance automático del carrusel.
* **RF-14**: **EL SISTEMA** jerarquizará un único encabezado `<h1>` semántico en el primer slide ("Forjando Espíritus Nuevos") y etiquetas `<h2>` estilizadas en los slides posteriores para cumplir con los estándares de SEO técnico.

### 4.4. Animaciones de Entrada (Scroll Reveal)
* **RF-15**: **CUANDO** los elementos con clases `.reveal`, `.reveal-left`, `.reveal-right` o contenedores `.reveal-stagger` ingresen en el viewport (umbral 15%), **EL SISTEMA** agregará la clase `.is-visible` mediante `IntersectionObserver` activando transiciones fluidas de subida y opacidad.

### 4.5. Control Inteligente de Videos Secundarios
* **RF-16**: **CUANDO** un video secundario sin atributo `loop` (`activities.mp4`, `curriculum.mp4`, `school-life-1.mp4`) entre en pantalla, **EL SISTEMA** iniciará su reproducción automática.
* **RF-17**: **CUANDO** el video llegue a su fotograma final (`ended`), **EL SISTEMA** detendrá la reproducción en dicho fotograma sin reiniciar el bucle.
* **RF-18**: **CUANDO** el video salga del viewport antes de finalizar, **EL SISTEMA** pausará su reproducción para ahorrar procesamiento.

### 4.6. Páginas de Niveles y Plantillas Específicas
* **RF-19**: **EL SISTEMA** presentará composiciones dedicadas para cada nivel académico:
  * **Prekínder**: Presentación afectiva, stack de fotos vertical escalonado y momentos de juego.
  * **Kínder**: Hero temático con imagen redondeada, cápsulas de hechos (01 Explorar, 02 Crear, 03 Compartir) y galería.
  * **Primaria**: Declaración de pensamiento activo y mosaico de 4 fotografías de proyectos.
  * **Filosofía**: Hero interactivo con fundido secuencial de 3 retratos de estudiantes con uniforme cada 6 segundos y bloques para Misión, Visión y Valores.
  * **Plantel**: Cuadrícula de docentes con tarjetas en degradado y retratos de educadores.
  * **Ecosistema Digital**: Cinta deslizante continua (*marquee*) con los logos oficiales de las alianzas educativas.

### 4.7. Pie de Página Enriquecido (Footer)
* **RF-20**: **EL SISTEMA** mantendrá un footer unificado en 3 columnas:
  * **Columna 1**: Logo oficial blanco, ubicación en Urb. Monterrico (24 de Diciembre) y enlace interactivo a Google Maps (`place-icon.png`).
  * **Columna 2**: Teléfono de oficina y desglose de horarios (Horario regular: 7:30 a.m. - 2:00 p.m.; Horario de verano: 8:00 a.m. - 2:00 p.m.).
  * **Columna 3**: Teléfonos de atención al cliente (PBX 391-5811 / WhatsApp 6744-1351) y correo `info@buenpastor-vda.net`.
  * **Barra inferior**: Copyright © 2026 e iconos sociales interactivos.
* **RF-21**: **EL SISTEMA** mostrará el botón flotante "Volver Arriba" (`.back-to-top`) cuando el scroll vertical supere los 600px, realizando un desplazamiento suave hacia el tope al ser presionado.

---

## 5. Requisitos No Funcionales (RNF)

* **RNF-01 (Pureza y Cero Dependencias)**: El código debe ejecutarse de forma estática en cualquier servidor web estándar o abriendo los archivos directamente en el navegador sin intermediación de compiladores, Node.js en producción, ni librerías externas de JS/CSS.
* **RNF-02 (Rendimiento Multimedia)**:
  * Todas las imágenes de producción deben servirse en formato WebP con compresión optimizada (-q 85).
  * Los videos deben estar codificados en H.264 / AAC con el atom `moov` al inicio (`+faststart`) para garantizar reproducción inmediata sin esperar a la descarga total.
* **RNF-03 (Paleta Institucional Restricta)**: Uso estricto de variables CSS:
  * Azul Navy Primario: `--navy: #072b49`
  * Azul Profundo Hero/Fondo: `--deep: #031c31`
  * Turquesa Acento: `--turquoise: #10b8b0`
  * Naranja Acento Secundario: `--orange: #ff6b2c`
  * Fondo Papel/Crema: `--paper: #f4f1ea`, `--cream: #fbf9f3`
* **RNF-04 (Accesibilidad Web - WCAG 2.1 AA)**:
  * Enlace accesible de salto al contenido (`<a class="skip-link" href="#contenido">`).
  * Gestión obligatoria de foco en modales (*Focus Trap* y retorno de foco).
  * Textos alternativos (`alt`) descriptivos en imágenes formativas y `alt=""` en decorativas.
* **RNF-05 (Diseño Totalmente Responsive)**:
  * Adaptabilidad completa probada en resoluciones móviles (360px - 480px), tablets (768px - 1024px) y pantallas de escritorio (1280px - 1920px+).
  * Tipografías fluidas calculadas con `clamp()` y contenedores en CSS Grid y Flexbox.
* **RNF-06 (Preparación para WordPress)**:
  * El código HTML debe mantener una clara separación de bloques (`header`, `menu-panel`, `hero`, `content`, `footer`) documentados y listos para migrar a `header.php`, `footer.php`, `front-page.php` y plantillas de página personalizadas.

---

## 6. Casos Límite y Tratamiento de Errores (Edge Cases)

* **EDGE-01 (Navegador con JavaScript Desactivado)**:
  * La clase `no-js` presente por defecto en `<html>` mantiene la legibilidad del contenido; los enlaces esenciales permanecen accesibles en el tope y el contenido no depende de JS para ser leído.
* **EDGE-02 (Dispositivos con Modo Ahorro de Datos)**:
  * Los videos que no puedan autorreproducirse por políticas del navegador no deben bloquear el diseño; se visualiza el fondo oscuro `--deep` con el titular institucional legible.
* **EDGE-03 (Pantallas con Ancho Reducido < 360px)**:
  * El menú de navegación oculta el pie secundario y convierte las columnas en una lista vertical única con scroll fluido sin desbordamientos horizontales (`overflow-x: hidden`).
* **EDGE-04 (Imágenes Grandes no Encontradas)**:
  * Todos los contenedores de imágenes tienen fondos neutros con dimensiones mínimas (`min-height`) para evitar saltos de maquetación (*Cumulative Layout Shift - CLS*).

---

## 7. Fuera de Alcance (Out of Scope en esta Fase)

* Pasarelas de pago para cobro de matrículas online (se gestiona vía secretaría y canales bancarios convencionales).
* Sistema de autenticación de usuarios propio dentro del sitio (el acceso se delega externamente a las plataformas oficiales de SAI y Edvoice).
* Generación de contenido o imágenes sintéticas mediante Inteligencia Artificial (queda estrictamente prohibido por la regla institucional de utilizar únicamente fotografía y material escolar real).

---

## 8. Criterios de Finalización (Definition of Done - DoD)

1. **Integridad 100%**: `node tools/verify-integrity.mjs` reporta 0 enlaces rotos y 0 recursos multimedia faltantes.
2. **Generación Sincronizada**: `node tools/generate-pages.mjs` genera las 16 páginas sin errores de sintaxis a partir de las plantillas en `tools/templates/`.
3. **Cero Dependencias**: Ninguna dependencia en `package.json` requerida para abrir y navegar la web.
4. **Fidelidad Estética**: Preservación rigurosa del video hero de 10s+, la paleta de color y el comportamiento del menú flotante sin alterar el diseño aprobado.
