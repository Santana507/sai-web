# Colegio Buen Pastor Voz de Alerta (BPVDA) — Sitio Web Oficial

Sitio web estático institucional de alto impacto visual y rendimiento optimizado para el **Colegio Buen Pastor Voz de Alerta (BPVDA)**, ubicado en 24 de Diciembre, Ciudad de Panamá.

Desarrollado bajo la metodología **Spec-Driven Development (SDD)** promovida por [MoureDev](https://github.com/mouredev/hello-sdd), donde [spec.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/spec.md) actúa como la fuente canónica de verdad (*Single Source of Truth*) y [AGENTS.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/AGENTS.md) rige el comportamiento y directrices técnicas.

---

## 🚀 Cómo Abrir y Probar el Proyecto

Esta entrega funciona con **HTML5, CSS3 y JavaScript Vanilla estándar**. No requiere compiladores, Node.js en producción, ni frameworks (React, Tailwind, etc.) para visualizarse.

1. **Apertura Directa**:
   Abre [index.html](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/index.html) haciendo doble clic o arrastrándolo a cualquier navegador moderno.
2. **Servidor HTTP Local (Opcional)**:
   ```bash
   npx serve .
   # o bien:
   python -m http.server 8080
   ```

---

## 🛠️ Comandos de Mantenimiento y Control de Calidad

| Comando | Función |
| :--- | :--- |
| `node tools/generate-pages.mjs` | Regenera y sincroniza las 16 páginas desde las plantillas modulares (`tools/templates/`). |
| `node tools/verify-integrity.mjs` | Escanea automáticamente el 100% de enlaces locales y recursos multimedia (garantiza 0 enlaces rotos). |

---

## 📚 Arquitectura del Sitio (16 Páginas en 5 Pilares)

```text
sai-web/
├── 01 NUESTRA ESCUELA
│   ├── quienes-somos.html       # Historia, comunidad e identidad escolar
│   ├── filosofia.html           # Misión, visión y valores (Propósito BPVDA)
│   ├── instalaciones.html       # Campus, aulas y espacios formativos
│   └── plantel.html             # Cuerpo docente y educadores
├── 02 ENFOQUE EDUCATIVO
│   ├── sai.html                 # Sistema de Aprendizaje Integral BPVDA
│   ├── vida-estudiantil.html    # Robótica, cultura, deportes y eventos
│   └── ecosistema-digital.html  # Alianzas tecnológicas (Edvoice, Progrentis, etc.)
├── 03 FAMILIA Y COMUNIDAD
│   ├── admisiones.html          # Proceso de admisión, matrícula y preguntas frecuentes
│   ├── portal-padres.html       # Accesos rápidos a plataformas de acudientes
│   └── contacto.html            # Canales de secretaría, atención y Google Maps
├── 04 PRIMARIA
│   ├── prekinder.html           # Desarrollo temprano y primeras experiencias
│   ├── kinder.html              # Autonomía, curiosidad y lenguaje
│   └── primaria.html            # Aprendizaje activo y proyectos
└── 05 SECUNDARIA Y BACHILLERES
    ├── secundaria.html          # Habilidades analíticas y formación integral
    └── bachilleres.html         # Bachilleratos y proyección vocacional
```

---

## 🎨 Identidad Gráfica y Multimedia

* **Paleta de Colores**:
  * Azul Navy (`#072b49`), Azul Profundo (`#031c31`), Turquesa (`#10b8b0`), Naranja (`#ff6b2c`) y Crema/Papel (`#fbf9f3` / `#f4f1ea`).
* **Formatos de Producción**:
  * Imágenes 100% en formato WebP con compresión de alta calidad.
  * Videos MP4 con compresión H.264 y atom `moov` al inicio (`+faststart`) para streaming instantáneo.
  * Fotos crudas de alta resolución resguardadas en `assets/raw-originals/`.
* **Regla Innegociable de IA**: No generar imágenes con IA; únicamente se utiliza fotografía y material real del colegio.

---

## 📄 Documentación del Repositorio

* [spec.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/spec.md): Especificación técnica integral con requisitos funcionales (EARS) y no funcionales.
* [AGENTS.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/AGENTS.md): Reglas de desarrollo, convenciones y protocolo para agentes de IA.
* [agente.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/agente.md): Guía rápida y reglas de inmutabilidad técnica.
* [DOCUMENTACION_CAMBIOS.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/DOCUMENTACION_CAMBIOS.md): Bitácora histórica detallada de todas las sesiones de trabajo.
* [VERIFICACION.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/VERIFICACION.md): Resultados y checklists de integridad del proyecto.
* [COMPARACION_CODEX.md](file:///c:/Users/JOSE%20SANTANA/OneDrive/Escritorio/sai-web/COMPARACION_CODEX.md): Matriz de calidad contra especificaciones de diseño.

