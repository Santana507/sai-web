<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link" href="#contenido">Saltar al contenido</a>
<header class="site-header">
  <div class="header-bar">
    <a class="brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="Inicio">
      <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/brand/bpvda-logo-white.png'); ?>" alt="Buen Pastor Voz de Alerta" class="brand-logo-img">
    </a>
    <nav class="essential-nav" aria-label="Navegación esencial">
      <?php bpvda_render_utility_menu(); ?>
    </nav>
    <button class="menu-button" type="button" data-menu-button aria-expanded="false" aria-controls="menu-principal" aria-label="Abrir menú">
      <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/icons/menu.png'); ?>" alt="" class="icon-menu-img">
      <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/icons/close.png'); ?>" alt="" class="icon-close-img">
    </button>
  </div>
  <div class="menu-panel" id="menu-principal" data-menu-panel aria-hidden="true">
    <div class="menu-panel__main">
      <div class="menu-panel__title">
        <span>BUEN PASTOR VOZ DE ALERTA</span>
        <h2>Encuentra tu camino.</h2>
        <p>Explora cada etapa de la comunidad BPVDA.</p>
      </div>
      <nav class="menu-nav" aria-label="Navegación principal">
        <div class="menu-panel__groups"><?php bpvda_render_primary_menu(); ?></div>
      </nav>
    </div>
    <div class="menu-panel__foot">
      <div class="menu-panel__contact">
        <span>Calle San José, 24 de Diciembre, Ciudad de Panamá</span>
        <a href="tel:+5073915811">391-5811</a>
        <a href="mailto:info@buenpastor-vda.net">info@buenpastor-vda.net</a>
      </div>
    </div>
  </div>
</header>

