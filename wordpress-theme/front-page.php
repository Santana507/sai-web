<?php
/**
 * Front Page Template - BPVDA Official Theme
 *
 * @package BPVDA
 */

get_header();
?>

<main id="contenido">

  <?php
  // 1. HERO SLIDER OFICIAL
  if ( is_active_sidebar( 'sidebar-hero' ) ) {
      echo '<div class="sidebar-hero-wrapper">';
      dynamic_sidebar( 'sidebar-hero' );
      echo '</div>';
  } else {
      get_template_part( 'template-parts/content', 'hero' );
  }

  // 2. FILOSOFÍA Y PROPÓSITO BPVDA
  if ( is_active_sidebar( 'sidebar-filosofia' ) ) {
      echo '<div class="sidebar-filosofia-wrapper">';
      dynamic_sidebar( 'sidebar-filosofia' );
      echo '</div>';
  } else {
      get_template_part( 'template-parts/content', 'filosofia' );
  }

  // 3. ADMISIONES Y PROPUESTA BPVDA
  if ( is_active_sidebar( 'sidebar-admision' ) ) {
      echo '<div class="sidebar-admision-wrapper">';
      dynamic_sidebar( 'sidebar-admision' );
      echo '</div>';
  } else {
      get_template_part( 'template-parts/content', 'admision' );
  }

  // 4. Bloques personalizados si el usuario edita la página desde Gutenberg
  if ( is_page() && have_posts() ) {
      while ( have_posts() ) {
          the_post();
          $page_content = get_the_content();
          if ( ! empty( trim( $page_content ) ) ) {
              echo '<div class="container section-pad entry-content">';
              the_content();
              echo '</div>';
          }
      }
  }
  ?>

</main>

<?php
get_footer();
