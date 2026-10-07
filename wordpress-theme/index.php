<?php
/**
 * Main Template (Fallback) - BPVDA Official Theme
 *
 * @package BPVDA
 */

get_header();
?>

<main id="contenido" class="container section-pad">
  <?php
  if ( have_posts() ) :
      while ( have_posts() ) :
          the_post();
          ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="section-header align-center">
              <h1><?php the_title(); ?></h1>
            </header>
            <div class="entry-content">
              <?php the_content(); ?>
            </div>
          </article>
          <?php
      endwhile;
  else :
      ?>
      <div class="no-results">
        <h2>No se encontró contenido</h2>
        <p>No hay publicaciones disponibles en esta sección.</p>
      </div>
      <?php
  endif;
  ?>
</main>

<?php
get_footer();
