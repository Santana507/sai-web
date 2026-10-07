<?php
/**
 * Single Page Template - BPVDA Official Theme
 *
 * @package BPVDA
 */

get_header();
?>

<main id="contenido">
  <?php
  while ( have_posts() ) :
      the_post();
      ?>
      <header class="interior-hero">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
          <span class="section-tag">BPVDA</span>
          <h1><?php the_title(); ?></h1>
        </div>
      </header>

      <div class="container section-pad">
        <div class="entry-content">
          <?php the_content(); ?>
        </div>
      </div>
      <?php
  endwhile;
  ?>
</main>

<?php
get_footer();
