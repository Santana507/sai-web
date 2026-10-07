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
      <!-- Logotipo Institucional Principal -->
      <a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Inicio">
        <img decoding="async" src="<?php echo esc_url( bpvda_asset( 'brand/bpvda-logo-white.png' ) ); ?>" alt="Buen Pastor Voz de Alerta" class="brand-logo-img">
      </a>

      <!-- Navegación Esencial Visible en Cabecera -->
      <nav class="essential-nav" aria-label="Navegación esencial">
        <?php
        if ( has_nav_menu( 'primary' ) ) {
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'container'      => false,
                'items_wrap'     => '%3$s',
                'fallback_cb'    => false,
            ) );
        } else {
            ?>
            <a href="<?php echo esc_url( home_url( '/filosofia/' ) ); ?>">Filosofía</a>
            <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>">Admisiones</a>
            <a href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>">Contacto</a>
            <?php
        }
        ?>
        <a href="<?php echo esc_url( home_url( '/admisiones/' ) ); ?>" class="btn-matriculate">MATRICULATE AQUÍ</a>
      </nav>

      <!-- Botón Disparador del Menú Modal Desplegable -->
      <button class="menu-button" type="button" data-menu-button aria-expanded="false" aria-controls="menu-principal" aria-label="Abrir menú">
        <img decoding="async" src="<?php echo esc_url( bpvda_asset( 'icons/menu.png' ) ); ?>" alt="" class="icon-menu-img">
        <img decoding="async" src="<?php echo esc_url( bpvda_asset( 'icons/close.png' ) ); ?>" alt="" class="icon-close-img">
      </button>
    </div>

    <!-- Panel del Menú Modal Desplegable (5 Pilares de Navegación) -->
    <div class="menu-panel" id="menu-principal" data-menu-panel aria-hidden="true">
      <div class="menu-panel__main">
        <!-- Título de Bienvenida e Introducción Editorial del Menú -->
        <div class="menu-panel__title">
          <span>BUEN PASTOR VOZ DE ALERTA</span>
          <h2>Encuentra tu camino.</h2>
          <p>Explora cada etapa de la comunidad BPVDA.</p>
        </div>

        <!-- Cuadrícula Dinámica de los 5 Pilares Institucionales -->
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
              <span class="menu-group-title">04 PRIMARIA</span>
              <ul class="menu-list">
                <li><a href="<?php echo esc_url( home_url( '/prekinder/' ) ); ?>" class="menu-link"><span>Prekínder</span> <i class="menu-chevron">↗</i></a></li>
                <li><a href="<?php echo esc_url( home_url( '/kinder/' ) ); ?>" class="menu-link"><span>Kínder</span> <i class="menu-chevron">↗</i></a></li>
                <li><a href="<?php echo esc_url( home_url( '/primaria/' ) ); ?>" class="menu-link"><span>Primaria</span> <i class="menu-chevron">↗</i></a></li>
              </ul>
            </div>
            <div class="menu-group">
              <span class="menu-group-title">05 SECUNDARIA Y BACHILLERES</span>
              <ul class="menu-list">
                <li><a href="<?php echo esc_url( home_url( '/secundaria/' ) ); ?>" class="menu-link"><span>Secundaria</span> <i class="menu-chevron">↗</i></a></li>
                <li><a href="<?php echo esc_url( home_url( '/bachilleres/' ) ); ?>" class="menu-link"><span>Bachilleres</span> <i class="menu-chevron">↗</i></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <!-- Pie del Menú Modal -->
      <div class="menu-panel__foot">
        <div class="menu-panel__contact">
          <span>Calle San José, 24 de Diciembre, Ciudad de Panamá</span>
          <a href="tel:+5073915811">391-5811</a>
          <a href="mailto:info@buenpastor-vda.net">info@buenpastor-vda.net</a>
        </div>
      </div>
    </div>
  </header>
