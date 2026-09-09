# Estructura del proyecto

```text
sai-web/
|-- AGENTS.md                         # Contexto operativo principal
|-- README.md                         # Entrada general del proyecto
|-- docs/
|   |-- constitution.md               # Principios y límites
|   |-- validation.md                 # Validación automatizada y manual
|   `-- referencias/                  # Briefs y material aprobado
|-- specs/001-site-quality/
|   |-- spec.md                       # Requisitos y alcance
|   |-- clarifications.md             # Decisiones y dudas
|   |-- plan.md                       # Arquitectura y estrategia
|   `-- tasks.md                      # Roadmap priorizado
|-- index.html ... contacto.html     # Sitio estático multipágina
|-- css/styles.css                    # Estilos compartidos
|-- js/main.js                        # Interacciones compartidas
|-- assets/                           # Recursos visuales
|-- tools/generate-pages.mjs          # Generación de páginas
|-- DOCUMENTACION_CAMBIOS.md          # Historial de cambios
`-- VERIFICACION.md                   # Verificación existente
```

## Regla de organización

AGENTS.md es el contexto operativo principal. La spec activa define el alcance de cada mejora; tasks.md concentra el trabajo pendiente. Los documentos históricos y las referencias no sustituyen esas reglas.