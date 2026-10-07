<?php
/**
 * Portada: el contenido se edita en Paginas > Inicio (editor de bloques).
 */
get_header(); ?>

<main id="contenido">
<?php while ( have_posts() ) : the_post(); the_content(); endwhile; ?>
</main>

<?php get_footer(); ?>
