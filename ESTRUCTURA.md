# Estructura del Proyecto BPVDA

```text
sai-web/
|-- index.html                     # Portada principal con Hero Slider y acceso a pilares
|-- css/
|   `-- styles.css                 # Estilos globales y responsive del sitio
|-- js/
|   `-- main.js                    # Comportamiento interactivo, menú accesible y slider
|-- assets/
|   |-- brand/                     # Identidad institucional (logos y recursos oficiales)
|   |-- icons/                     # Iconografía de interfaz (menú, cerrar, mapas, etc.)
|   |-- media/                     # Multimedia optimizada de producción (videos H.264 y WebP)
|   |-- raw-originals/             # Resguardo de imágenes originales en alta resolución
|   |-- new/                       # Activos clasificados por módulos y niveles
|   |   |-- achievements/          # Fotos de logros y eventos escolares
|   |   |-- alliances/             # Logos de alianzas y plataformas educativas
|   |   |-- levels/                # Prekínder, Kínder y Primaria
|   |   |-- purpose/               # Fotografías de misión, visión y valores
|   |   |-- sai/                   # Recursos del portal SAI
|   |   `-- teachers/              # Retratos y recursos del cuerpo docente
|   |-- favicon.svg
|   `-- og.png
|-- tools/
|   |-- generate-pages.mjs         # Generador de páginas estáticas e inyector de plantillas
|   |-- verify-integrity.mjs       # Script de verificación automática de enlaces y medios
|   `-- templates/                 # Fragmentos HTML modulares (header, menu, footer)
|-- docs/
|   `-- referencias/
|-- spec.md                        # Fuente canónica de verdad (Especificación SDD en EARS)
|-- AGENTS.md                      # Manual del agente y reglas innegociables (SDD)
|-- agente.md                      # Guía rápida del agente e inmutabilidad
|-- README.md                      # Documentación general y comandos
|-- DOCUMENTACION_CAMBIOS.md       # Bitácora cronológica de sesiones de trabajo
|-- VERIFICACION.md                # Reporte técnico de integridad
|-- COMPARACION_CODEX.md           # Matriz de control de calidad vs diseño inicial
|-- 01 NUESTRA ESCUELA/
|   |-- quienes-somos.html         # Identidad e historia institucional
|   |-- filosofia.html             # Misión, visión y valores (Propósito BPVDA)
|   |-- instalaciones.html         # Infraestructura del plantel
|   `-- plantel.html               # Equipo docente y directivo
|-- 02 ENFOQUE EDUCATIVO/
|   |-- sai.html                   # Sistema de Aprendizaje Integral BPVDA
|   |-- vida-estudiantil.html      # Proyectos, actividades y cultura escolar
|   `-- ecosistema-digital.html    # Plataformas educativas asociadas
|-- 03 FAMILIA Y COMUNIDAD/
|   |-- admisiones.html            # Admisión, matrícula y preguntas frecuentes
|   |-- portal-padres.html         # Acceso y orientación para familias
|   `-- contacto.html              # Ubicación, secretaría, atención y mapa
|-- 04 PRIMARIA/
|   |-- prekinder.html             # Primeras experiencias y desarrollo temprano
|   |-- kinder.html                # Exploración, autonomía y lenguaje
|   `-- primaria.html              # Aprendizaje activo y proyectos
`-- 05 SECUNDARIA Y BACHILLERES/
    |-- secundaria.html            # Preparación integral y retos formativos
    `-- bachilleres.html           # Bachillerato con propósito y proyección vocacional
```

