<?php
/**
 * Header Template - BPVDA Official Theme
 *
 * @package BPVDA
 */
?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="<?php echo esc_url( bpvda_asset( 'favicon.svg' ) ); ?>" type="image/svg+xml">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  <!-- ========================================== -->
  <!-- 1. ENCABEZADO Y NAVEGACIÓN PRINCIPAL -->
  <!-- ========================================== -->
  <header class="site-header">
  <!-- Barra de Navegación Superior Fija (Header Bar) -->
  <div class="header-bar">
    <!-- Logotipo Institucional Principal con enlace a Portada -->
    <a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Inicio">
      <img decoding="async" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/brand/bpvda-logo-white.png" alt="Buen Pastor Voz de Alerta" class="brand-logo-img">
    </a>

    <!-- Navegación Esencial Visible en Cabecera (Desktop / Top Scroll) -->
    <nav class="essential-nav" aria-label="Navegación esencial">
      <a href="<?php echo esc_url( home_url( '/filosofia/' ) ); ?>">Filosofía</a>
      <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>">Admisiones</a>
      <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>">Contacto</a>

      <!-- [TEMPORAL: MENÚ DESARROLLADOR - COMPARADOR DE PLANTILLAS] -->
      <div class="dev-menu-container" id="devMenuContainer">
        <button type="button" class="dev-menu-btn" id="devMenuBtn" aria-expanded="false" aria-haspopup="true" aria-label="Menú de Desarrollador: Comparar Plantillas">
          <span class="dev-badge-icon">🛠️</span>
          <span>Desarrollador</span>
          <span class="dev-chevron">▾</span>
        </button>
        <div class="dev-menu-dropdown" id="devMenuDropdown" aria-hidden="true">
          <div class="dev-menu-header">
            <span class="dev-menu-tag">MODO DESARROLLADOR (TEMPORAL)</span>
            <h4>Comparador de Plantillas</h4>
            <p>Selecciona cualquiera de las versiones para revisar y comparar:</p>
          </div>
          <div class="dev-menu-columns">
            <div class="dev-menu-col">
              <span class="dev-col-title">Opción 1: Modular Clásica</span>
              <a href="plantillas/plantilla-academica.html" class="dev-menu-link">
                <strong>1. Académica / Niveles</strong>
                <small>Hero con overlay, cita bíblica, mosaico fotográfico</small>
              </a>
              <a href="plantillas/plantilla-innovacion.html" class="dev-menu-link">
                <strong>2. Innovación &amp; Vida Estudiantil</strong>
                <small>Carrusel v3 horizontal, métricas, proyectos</small>
              </a>
              <a href="plantillas/plantilla-editorial.html" class="dev-menu-link">
                <strong>3. Editorial &amp; Institucional</strong>
                <small>Narrativa 2 cols, lema navy, acordeón nativo</small>
              </a>
            </div>
            <div class="dev-menu-col dev-menu-col--v2">
              <span class="dev-col-title">Opción 2: Split Minimalista</span>
              <a href="plantillas/Plantilla Opción 2/plantilla-academica-v2.html" class="dev-menu-link">
                <strong>1. Académica v2</strong>
                <small>Hero split 50/50, bloque sólido teal, pilares</small>
              </a>
              <a href="plantillas/Plantilla Opción 2/plantilla-innovacion-v2.html" class="dev-menu-link">
                <strong>2. Innovación v2</strong>
                <small>Split teal profundo, carrusel moments, métricas</small>
              </a>
              <a href="plantillas/Plantilla Opción 2/plantilla-editorial-v2.html" class="dev-menu-link">
                <strong>3. Editorial v2</strong>
                <small>Split portal de padres &amp; valores, acordeón</small>
              </a>
            </div>
          </div>
          <div class="dev-menu-footer">
            <a href="COMPARADOR_PLANTILLAS_DEV.md" target="_blank" class="dev-footer-link">
              <span>📄 Ver Guía Comparativa y Notas de Retiro</span> <i>↗</i>
            </a>
          </div>
        </div>
      </div>
      <!-- [FIN TEMPORAL MENÚ DESARROLLADOR] -->

      <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="btn-matriculate">MATRICÚLATE AQUÍ</a>
    </nav>

    <!-- Botón Disparador del Menú Modal Desplegable (Accesible con ARIA) -->
    <button class="menu-button" type="button" data-menu-button aria-expanded="false" aria-controls="menu-principal" aria-label="Abrir menú">
      <img decoding="async" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/icons/menu.png" alt="" class="icon-menu-img">
      <img decoding="async" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/icons/close.png" alt="" class="icon-close-img">
    </button>
  </div>

  <!-- Panel del Menú Modal Desplegable (Diseño Bento 2x2 Flotante) -->
  <div class="menu-panel" id="menu-principal" data-menu-panel aria-hidden="true">
    <div class="menu-panel__main">
      <!-- Título de Bienvenida e Introducción Editorial del Menú -->
      <div class="menu-panel__title">
        <div class="menu-eyebrow">
          <span class="menu-eyebrow__line" aria-hidden="true"></span>
          <span>BUEN PASTOR VOZ DE ALERTA</span>
          <span class="menu-eyebrow__line" aria-hidden="true"></span>
        </div>
        <h2>Encuentra tu <em class="menu-title-accent">camino</em>.</h2>
        <p>Educar la mente. <em class="menu-subtitle-accent">Formar carácter.</em> Explora cada etapa formativa de la comunidad educativa BPVDA.</p>
      </div>

      <!-- Cuadrícula Bento 2x2 de los 4 Pilares Institucionales -->
      <nav class="menu-nav" aria-label="Navegación principal">
        <div class="menu-panel__groups">
          <div class="menu-group">
            <span class="menu-group-title">01 NUESTRA ESCUELA</span>
            <ul class="menu-list">
              <li><a href="<?php echo esc_url( home_url( '/quienes-somos/' ) ); ?>" class="menu-link"><span>¿Quiénes somos?</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/filosofia/' ) ); ?>" class="menu-link"><span>Propósito BPVDA</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/instalaciones/' ) ); ?>" class="menu-link"><span>Instalaciones</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/plantel/' ) ); ?>" class="menu-link"><span>Plantel docente</span> <i class="menu-chevron">↗</i></a></li>
            </ul>
          </div>
          <div class="menu-group">
            <span class="menu-group-title">02 ENFOQUE EDUCATIVO</span>
            <ul class="menu-list">
              <li><a href="<?php echo esc_url( home_url( '/sai/' ) ); ?>" class="menu-link"><span>SAI BPVDA</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/vida-estudiantil/' ) ); ?>" class="menu-link"><span>Vida estudiantil</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/ecosistema-digital/' ) ); ?>" class="menu-link"><span>Ecosistema digital</span> <i class="menu-chevron">↗</i></a></li>
            </ul>
          </div>
          <div class="menu-group">
            <span class="menu-group-title">03 FAMILIA Y COMUNIDAD</span>
            <ul class="menu-list">
              <li><a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="menu-link"><span>Admisiones y matrícula</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/portal-padres/' ) ); ?>" class="menu-link"><span>Portal de padres</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>" class="menu-link"><span>Contacto y atención</span> <i class="menu-chevron">↗</i></a></li>
            </ul>
          </div>
          <div class="menu-group">
            <span class="menu-group-title">04 NIVELES ACADÉMICOS</span>
            <ul class="menu-list">
              <li><a href="<?php echo esc_url( home_url( '/prekinder/' ) ); ?>" class="menu-link"><span>Prekínder</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/kinder/' ) ); ?>" class="menu-link"><span>Kínder</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/primaria/' ) ); ?>" class="menu-link"><span>Primaria</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/secundaria/' ) ); ?>" class="menu-link"><span>Secundaria</span> <i class="menu-chevron">↗</i></a></li>
              <li><a href="<?php echo esc_url( home_url( '/bachilleres/' ) ); ?>" class="menu-link"><span>Bachilleres</span> <i class="menu-chevron">↗</i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <!-- Pie del Menú Modal con Contacto Directo y Redes Sociales -->
    <div class="menu-panel__foot">
      <div class="menu-panel__contact">
        <span class="menu-contact-item">
          <svg class="menu-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          Calle San José, 24 de Diciembre, Ciudad de Panamá
        </span>
        <span class="menu-contact-sep" aria-hidden="true">•</span>
        <a class="menu-contact-item" href="tel:+5073915811">
          <svg class="menu-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          391-5811
        </a>
        <span class="menu-contact-sep" aria-hidden="true">•</span>
        <a class="menu-contact-item" href="mailto:info@buenpastor-vda.net">
          <svg class="menu-contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          info@buenpastor-vda.net
        </a>
      </div>

      <div class="menu-panel__socials">
        <a href="mailto:info@buenpastor-vda.net" aria-label="Enviar Correo" class="menu-social-btn">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
        </a>
        <a href="https://www.facebook.com/people/Escuela-Buen-Pastor-Voz-De-Alerta/100045208036432/?locale=de_DE" target="_blank" rel="noopener noreferrer" aria-label="Facebook Oficial" class="menu-social-btn">
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.889C10.5 0 9 1.5 9 4.667V8z"></path></svg>
        </a>
        <a href="https://www.instagram.com/bpvda/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram Oficial" class="menu-social-btn">
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
        </a>
        <a href="https://wa.me/50767441351" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="menu-social-btn">
          <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
        </a>
      </div>
    </div>
  </div>
</header>
