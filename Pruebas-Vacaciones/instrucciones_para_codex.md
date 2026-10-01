# Instrucciones de Reestructuración Web (Para Codex / Agente IA)

**Contexto del Proyecto:**
Se trata de una página web estática escolar (HTML/CSS/JS) para el colegio "Buen Pastor Voz de Alerta" (BPVDA). El objetivo es realizar una reestructuración masiva de la arquitectura de la información y renovar el diseño de las páginas interiores para que luzcan más modernas, dinámicas y menos repetitivas, tomando inspiración de sitios web de colegios internacionales (como *The Walker School* o *Dunham School*).

---

## 🚫 REGLA DE ORO
**LA PÁGINA PRINCIPAL (`index.html`) NO SE TOCA A NIVEL DE DISEÑO NI IMÁGENES.**
El carrusel horizontal principal y toda la estructura visual del `index.html` deben permanecer exactamente igual. El rediseño estructural, el cambio de imágenes y los nuevos módulos CSS aplican **exclusivamente** para las páginas aledañas (interiores). Lo único que cambiará en `index.html` es la navegación (menú) para que apunte a las nuevas páginas.

---

## 1. Nueva Arquitectura de la Información (5 Pilares)
Debes crear un nuevo menú de navegación (tipo Mega Menú o Dropdown) que reemplace la navegación actual. Las páginas antiguas (`mision.html`, `vision.html`, `curriculo.html`, `nosotros.html`, `actividades.html`, `admision.html`) deben ser eliminadas y reemplazadas por las siguientes 11 nuevas páginas, organizadas en 5 pilares:

### 01 NUESTRA ESCUELA
* `quienes-somos.html`: Historia y propósito general.
* `filosofia.html`: Misión, visión y principios éticos/cristianos.
* `instalaciones.html`: Fotos de la capilla, aulas, estacionamientos.
* `plantel.html`: Módulo especial para los profesores.

### 02 ENFOQUE EDUCATIVO
* `sai.html`: Plataforma SAI y Edvoice.
* `vida-estudiantil.html`: Extracurriculares, proyectos (ej. AquitApp), logros.
* `ecosistema-digital.html`: Alianzas y plataformas (Progrentis, Matific, Kingscorner, Canva, Kahoot, Academia 24). Enfoque "Cero libros de texto en primaria".

### 03 FAMILIA Y COMUNIDAD
* `admisiones.html`: Requisitos, fechas, costos y formulario.
* `portal-padres.html`: Acceso directo para consultar notas (SAI/Moodle).
* `contacto.html`: Ubicación, teléfonos, WhatsApp. **Requisito:** Reemplazar las preguntas frecuentes por la info de contacto directa y agregar un widget interactivo (`iframe`) de Google Maps.

### 04 PRIMARIA
* `primaria.html`: Página única diferenciando Preescolar, Kinder y Primaria.

### 05 SECUNDARIA Y BACHILLERES
* `secundaria.html`: Página única diferenciando Secundaria y Bachilleres (énfasis en ciencias e informática). Debe incluir una cita de un estudiante y espacio para videos/fotos de graduación.

---

## 2. Instrucciones de Diseño y Maquetación (CSS)
Para evitar que las páginas interiores se sientan "repetitivas y vacías", debes programar nuevos módulos de diseño en `styles.css` e implementarlos en las nuevas páginas HTML:

1. **Módulo de Profesores (Para `plantel.html`):** Utiliza las imágenes de profesores en formato PNG (sin fondo) alojadas en la carpeta de recursos. Diseña un módulo donde estas fotos "floten" o se superpongan sobre cajas de color/tarjetas que contengan una cita inspiradora del profesor, su nombre y rol. (Usa drop-shadow en vez de box-shadow para el PNG).
2. **Carrusel de Alianzas (Marquee):** Diseña un *slider* horizontal infinito (tipo *marquee* con animación CSS) para mostrar los logos de las alianzas (Progrentis, Canva, Edvoice, etc.).
3. **Módulos Asimétricos (Split Feature):** Crea bloques que dividan la pantalla (ej. 50% imagen, 50% texto), que puedan alternar su dirección (imagen a la izquierda, luego a la derecha) para mostrar las metodologías, instalaciones y niveles educativos de forma muy visual y moderna.

---

## 3. Contenido y Textos
* **Títulos y Subtítulos:** Debes redactar títulos (`<h1>`, `<h2>`) y subtítulos que sean reales, llamativos y tengan sentido con la sección (ej. "Educadores que inspiran y guían" para el plantel). No uses Lorem Ipsum para los títulos.
* **Cuerpos de Texto:** Para los párrafos largos de información que no poseas, **SÍ** debes usar texto de relleno (*Lorem Ipsum*). El equipo de redacción se encargará de llenarlos posteriormente.
* **Imágenes:** Selecciona imágenes de las carpetas locales de recursos para poblar estos módulos y que no se repitan entre páginas. Asegúrate de copiarlas a la carpeta de `assets` del proyecto y enlazarlas correctamente.
