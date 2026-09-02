# Fotografías en las introducciones

La columna libre bajo el pequeño identificador de las introducciones de Nosotros, Misión y valores, Currículo, Actividades, Admisión y Visión contiene una composición de dos fotografías que aprovecha mejor su altura en escritorio.

Los títulos y párrafos se mantienen visibles y conservan la composición editorial original. Las tarjetas inferiores son las originales, con sus textos completos y comportamiento previo. La portada y `js/main.js` coinciden con la versión base `67bfdf21399c687c99197ebbb323c1a65ad97f10`. Se corrigió únicamente un cierre de párrafo sobrante en Nosotros.

## Imágenes

Son fotografías reales de Drive, seleccionadas visualmente en la revisión del proyecto. Se conservan como WebP locales, a 1280 × 853 px, con dimensiones explícitas y carga diferida. Los encuadres 4:3 usan `object-fit: cover`; las composiciones más cortas mantienen la proporción completa. Actividades también reutiliza el retrato vertical local `culture.png` (1080 × 1350).

| Página | Archivo | Original de Drive / contenido observado |
|---|---|---|
| Nosotros | `convivencia.webp` | [IMG_9543.JPG](https://drive.google.com/file/d/1g3NMQjyZOC15KI7lDtHGpaLPwEic3jbd/view), estudiantes en las mesas del patio |
| Misión y valores | `primaria.webp` | [IMG_9463.JPG](https://drive.google.com/file/d/1p-o_VmpXl20gbkk6uo4a0AmLouCeYJSs/view), estudiante trabajando en su cuaderno |
| Currículo | `informatica.webp` | [IMG_9479.JPG](https://drive.google.com/file/d/1ibNcHFwUSe3XIl8Nk4nlTqsiPjVxhzmt/view), estudiantes en computadoras |
| Actividades | `ciencia.webp` | [IMG_9504.JPG](https://drive.google.com/file/d/14Vuo4Y3moegOOPWV6EfajNo0HrD6ltFk/view), elaboración de una maqueta del corazón |
| Admisión | `entrada.webp` | [IMG_9370.JPG](https://drive.google.com/file/d/1q1M3t1oFeVaXYcUbERGLO6P8-89nFrV-/view), acceso al colegio |
| Visión | `preescolar.webp` | [IMG_9410.JPG](https://drive.google.com/file/d/1w-YX6zfmIaUTRps18YOKoU2rJu0ie0Vz/view), niños y docente en el aula |

Fotografías complementarias:

| Archivo | Original / contenido observado | Uso |
|---|---|---|
| `secundaria.webp` | [IMG_9521.JPG](https://drive.google.com/file/d/18v-2nqpQfmfIgrtRNGx5vgn6RXhbiSZG/view), estudiantes trabajando en clase | Nosotros y Visión |
| `matematicas.webp` | [IMG_9582.JPG](https://drive.google.com/file/d/1dRoJmFOsSFUv_JBjGXeamTWz_eQGtSzu/view), operaciones en la pizarra | Currículo |
| `patio.webp` | [IMG_9388.JPG](https://drive.google.com/file/d/1RMUH5aUmKzM5qil0yj9-sNfcjo0WdFim/view), instalaciones y recreación | Admisión |
| `convivencia.webp` | Original documentado arriba | Segunda fotografía de Misión y valores |
| `culture.png` | Archivo local existente, estudiantes con vestimenta tradicional | Retrato principal de Actividades, acompañado por `ciencia.webp` |

Los nueve WebP están en `assets/media/cards/` y pesan aproximadamente 942 KB en conjunto. No se necesitan enlaces temporales de Drive ni dependencias adicionales.

## Presentación

`interior-intro__visual` agrupa el identificador y `interior-intro__gallery`, ocupando la primera columna de la cuadrícula existente. En escritorio las fotografías se apilan en formato 4:3; Currículo y Admisión usan una variante con escenas completas 3:2. Actividades muestra un retrato 4:5 y una foto menor de proyecto superpuesta a su borde inferior, sin cubrir rostros. Por debajo de 1000 px las dos fotografías se colocan lado a lado, sin superposición, bajo el identificador. El encuadre del retrato cultural se ajusta para conservar ambos rostros.

El ajuste no introduce animaciones, controles expandibles ni JavaScript. Las URLs de CSS de las seis páginas incluyen una versión nueva para actualizar la caché.

## Verificación

Se compararon las tarjetas inferiores y todos los párrafos con la versión original; se comprobaron las rutas de imágenes y enlaces locales. La portada y el JavaScript coinciden con esa versión. La revisión local abarcó las seis introducciones a 1440, 1280, 1024, 768, 430, aproximadamente 390 (391 efectivos) y 375 px, sin desbordamiento detectado ni fotografías rotas. Se revisaron visualmente las composiciones y la consola no registró errores ni advertencias. Las pruebas móviles se realizaron mediante el viewport del navegador.
