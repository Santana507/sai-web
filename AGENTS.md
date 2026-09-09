# Filosofía y Reglas de Desarrollo (Proyecto BPVDA)

Este archivo define la identidad, la estética y las reglas técnicas para el desarrollo del sitio web del **Colegio Buen Pastor Voz de Alerta (BPVDA)**. Debe usarse como guía constante para mantener la coherencia del proyecto.

## 1. Identidad y Filosofía de Diseño
*   **Objetivo**: Crear una web de nivel profesional, que proyecte una imagen digital superior capaz de competir con institutos privados de alto nivel.
*   **Inspiración Principal**:
    *   **The Walker School**: Dinamismo, uso del slider horizontal, composiciones fotográficas tipo tarjeta (cards), y menú de navegación.
    *   **The Dunham School**: Estructura organizada de la información, secciones bien delimitadas (presentación inicial vs. contenido de interés).
*   **Equilibrio Visual/Estructural**:
    *   **Estética Visual**: Mantener siempre un gran atractivo visual, usar videos de fondo dinámicos y fuentes atractivas. **NUNCA sacrificar lo visual** por aspectos técnicos.
    *   **Arquitectura Estructural**: Segmentar el contenido lógicamente en múltiples páginas (index, contacto, visión, etc.) para ofrecer una experiencia inmersiva y escalable.
*   **Paleta de Colores**: Turquesa, Azul Navy, Naranja y Gris. El Naranja y Turquesa son los acentos principales. No abusar de variaciones para mantener un estilo visual sobrio y consistente.

## 2. Reglas Técnicas y de UI
*   **Barra de Navegación (Nav)**:
    *   Debe ser persistente en todo el sitio, manteniendo el estilo actual.
    *   **Menú Desplegable**: Elementos clave (Logo, Admisión) a la vista. El resto se organizará en el menú desplegable (tipo hamburguesa) respetando la usabilidad.
*   **Contenido Multimedia**:
    *   **Videos**: El video "Hero" principal de inicio debe durar al menos 10 segundos como enganche visual.
    *   **Imágenes**: Priorizar siempre imágenes que muestren rostros de los estudiantes bien integradas.
    *   **Formatos**: Utilizar siempre formatos optimizados (`.webp`, `.mp4` optimizados para web sin atributos `loop` donde no se requiera).
    *   **IA**: No generar nuevas imágenes con inteligencia artificial. Utilizar exclusivamente el material real provisto; si falta, dejar el espacio estructurado con un contenedor adecuado.
*   **Textos y Copywriting**:
    *   Prohibido usar textos cliché o genéricos (como Lorem Ipsum).
    *   Si falta contenido final, usar textos de guía descriptivos (Ej: *"En esta sección deberán especificar cómo los estudiantes de primaria..."*).

## 3. Protocolo de Trabajo Agéntico
*   **Ejecución Incremental**: Trabajar por tareas específicas. No intentar refactorizar ni integrar toda la web en un solo paso.
*   **Decisiones de Diseño**: La máxima prioridad es preservar la estética atractiva y visual lograda hasta ahora. Cualquier adición técnica debe acoplarse armoniosamente a esta identidad.
*   **Preparación para WordPress**: Escribir HTML/CSS/JS puro y bien estructurado. Todo el código debe estar pensado para facilitar una futura conversión a una plantilla (Theme) dinámica en WordPress.
