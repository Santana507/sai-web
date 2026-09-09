# BPVDA — contexto operativo

## Propósito

BPVDA es el sitio institucional del colegio Buen Pastor Voz de Alerta. El entregable actual es un prototipo estático multipágina con HTML, CSS y JavaScript. Este repositorio conserva la referencia visual, el contenido aprobado y la documentación para mejorar el sitio de forma ordenada.

## Regla principal

Este archivo es el contexto operativo principal del proyecto. Mantén sus reglas neutrales y no añadas instrucciones específicas para herramientas o agentes externos.

Antes de cambiar código:

1. Lee docs/constitution.md.
2. Lee la spec activa en specs/.
3. Revisa clarifications.md y plan.md cuando el cambio afecte decisiones o arquitectura.
4. Revisa tasks.md y selecciona una tarea concreta.
5. Inspecciona el estado de Git y conserva cambios existentes fuera de tu alcance.

## Arquitectura autorizada

- Conserva las ocho áreas: inicio, nosotros, misión, visión, currículo, actividades, admisión y contacto.
- Mantén una estructura multipágina en HTML, estilos compartidos en css/styles.css e interacción compartida en js/main.js.
- Conserva assets/ y las referencias aprobadas; no inventes datos, fotografías, testimonios ni cifras.
- Si modificas tools/generate-pages.mjs, regenera las páginas y revisa el resultado completo.
- No introduzcas frameworks, compilación o dependencias nuevas sin documentarlo primero en la spec.
- Las futuras decisiones sobre un CMS o edición remota deben tratarse en una spec separada y no deben convertir el prototipo en una plantilla rígida sin aprobación.

## Reglas de calidad

- Código y nombres técnicos en inglés; contenido editorial en español.
- HTML semántico, jerarquía correcta de encabezados, foco visible, navegación por teclado y diseño responsive.
- Textos alternativos descriptivos para imágenes informativas y alt vacío para imágenes decorativas.
- Respeta contraste, reduced motion, carga razonable de medios y controles utilizables en móvil.
- Marca como provisionales los datos institucionales no confirmados.
- No elimines contenido, recursos ni cambios existentes sin alcance explícito.

## Flujo SDD

Constitución → especificación → clarificación → plan → tareas → implementación → validación. Si cambia el alcance, actualiza primero la documentación y después el código.

## Verificación

Desde la raíz del repositorio:

```bash
git diff --check
node tools/generate-pages.mjs
```

Después revisa docs/validation.md. Si una comprobación automática no existe o no puede ejecutarse, documéntalo en el cierre de la tarea.