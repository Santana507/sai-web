# Fotografías en las introducciones

El cambio consiste únicamente en ocupar con una fotografía la columna libre bajo el pequeño identificador de las introducciones de Nosotros, Misión y valores, Currículo, Actividades, Admisión y Visión.

Los títulos y párrafos se mantienen visibles y conservan la composición editorial original. Las tarjetas inferiores son las originales, con sus textos completos y comportamiento previo. La portada y `js/main.js` coinciden con la versión base `67bfdf21399c687c99197ebbb323c1a65ad97f10`. Se corrigió únicamente un cierre de párrafo sobrante en Nosotros.

## Imágenes

Son fotografías reales de Drive, seleccionadas visualmente en la revisión del proyecto. Se conservan como WebP locales, a 1280 × 853 px, con dimensiones explícitas, carga diferida y sin recortes ni deformaciones.

| Página | Archivo | Original de Drive / contenido observado |
|---|---|---|
| Nosotros | `convivencia.webp` | [IMG_9543.JPG](https://drive.google.com/file/d/1g3NMQjyZOC15KI7lDtHGpaLPwEic3jbd/view), estudiantes en las mesas del patio |
| Misión y valores | `primaria.webp` | [IMG_9463.JPG](https://drive.google.com/file/d/1p-o_VmpXl20gbkk6uo4a0AmLouCeYJSs/view), estudiante trabajando en su cuaderno |
| Currículo | `informatica.webp` | [IMG_9479.JPG](https://drive.google.com/file/d/1ibNcHFwUSe3XIl8Nk4nlTqsiPjVxhzmt/view), estudiantes en computadoras |
| Actividades | `ciencia.webp` | [IMG_9504.JPG](https://drive.google.com/file/d/14Vuo4Y3moegOOPWV6EfajNo0HrD6ltFk/view), elaboración de una maqueta del corazón |
| Admisión | `entrada.webp` | [IMG_9370.JPG](https://drive.google.com/file/d/1q1M3t1oFeVaXYcUbERGLO6P8-89nFrV-/view), acceso al colegio |
| Visión | `preescolar.webp` | [IMG_9410.JPG](https://drive.google.com/file/d/1w-YX6zfmIaUTRps18YOKoU2rJu0ie0Vz/view), niños y docente en el aula |

Las seis imágenes están en `assets/media/cards/` y pesan aproximadamente 568 KB en conjunto. No se necesitan enlaces temporales de Drive ni dependencias adicionales.

## Presentación

`interior-intro__visual` agrupa el identificador y la imagen, ocupando la primera columna de la cuadrícula existente. `interior-intro__photo` mantiene ancho fluido y altura proporcional. Por debajo de 1000 px el identificador y la foto comparten una fila; por debajo de 600 px se apilan. Las reglas se limitan a estos dos elementos nuevos.

El ajuste no introduce animaciones, controles expandibles ni JavaScript. Las URLs de CSS de las seis páginas incluyen una versión nueva para actualizar la caché.

## Verificación

Se compararon las tarjetas inferiores y todos los párrafos con la versión original; se comprobaron las rutas de imágenes y enlaces locales. La portada y el JavaScript coinciden con esa versión. La revisión local abarcó las seis introducciones a 1440, 1280, 1024, 768, 430, aproximadamente 390 (391 efectivos) y 375 px, sin desbordamiento detectado ni fotografías rotas. Se revisaron visualmente las composiciones y la consola no registró errores ni advertencias. Las pruebas móviles se realizaron mediante el viewport del navegador.
