<?php
/**
 * Pagina: contacto (copia fiel de contacto.html)
 */
get_header(); ?>

<main id="contenido">
    <!-- Hero Interior con Imagen de Fondo, Wash de Contraste y Titular -->
    <section class="interior-hero">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/campus-exterior.webp" alt="">
      <div class="interior-hero__wash"></div>
      <div class="interior-hero__content">
        <span>03 FAMILIA Y COMUNIDAD</span>
        <h1>Estamos aquí para <mark>orientarte</mark>.</h1>
        <p>Canales directos para conversar, visitar y conocer la comunidad BPVDA.</p>
      </div>
    </section>

    
    <!-- ============================================================ -->
    <!-- SECCIÓN: PRESENTACIÓN EDITORIAL (SPLIT FEATURE)              -->
    <!-- ============================================================ -->
    <section class="split-feature">
      <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/institucional/client-atention.webp" alt="">
      <div>
        <span class="section-number">03 FAMILIA Y COMUNIDAD</span>
        <h2>Contacto y atención</h2>
        <p>Canales directos para conversar, visitar y conocer la comunidad BPVDA. En esta sección se añadirá la información institucional definitiva cuando sea aprobada.</p>
      </div>
    </section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: TARJETAS FORMATIVAS Y CARRUSEL EDITORIAL            -->
    <!-- ============================================================ -->
    
<section class="content-cards section-pad">
  <article><h3>Una propuesta con propósito</h3><p>Aquí se incorporará el contenido institucional final de Contacto y atención.</p></article>
  <article><h3>Experiencias que acompañan</h3><p>Este espacio está preparado para explicar los procesos, recursos y oportunidades de la comunidad BPVDA.</p></article>
  <article><h3>Una comunidad cercana</h3><p>Familias, estudiantes y educadores construyen juntos cada etapa del aprendizaje.</p></article>
</section>
<section class="carousel-v3">
  <div class="carousel-v3__head">
    <h2>Momentos que inspiran.</h2>
    <p>Desliza para explorar la riqueza visual de nuestra comunidad educativa.</p>
  </div>
  <div class="carousel-v3__track-container">
    <div class="carousel-v3__track">
      
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9378.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Un entorno diseñado para descubrir.</h3>
          </div>
        </article>
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9373.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Cada paso es un logro alcanzado.</h3>
          </div>
        </article>
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9381.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Una comunidad que te respalda.</h3>
          </div>
        </article>
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9375.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Innovación presente en cada aula.</h3>
          </div>
        </article>
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9388.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Formando a los líderes del mañana.</h3>
          </div>
        </article>
        
        <article class="carousel-v3__card">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/fotos/exterior/IMG_9390.webp" alt="Momento BPVDA" loading="lazy">
          <div class="carousel-v3__overlay">
            <span class="carousel-v3__tag">BPVDA</span>
            <h3>Creciendo juntos cada día.</h3>
          </div>
        </article>
        
    </div>
  </div>
</section>

    <!-- ============================================================ -->
    <!-- SECCIÓN: COMPONENTES ESPECIALES SEGÚN MÓDULO                 -->
    <!-- ============================================================ -->
    <section class="contact-direct section-pad">
  <div><span>SECRETARÍA</span><a href="tel:+5073915811">391-5811</a></div>
  <div><span>WHATSAPP</span><a href="https://wa.me/50767441351">6744-1351</a></div>
  <div><span>CORREO</span><a href="mailto:info@buenpastor-vda.net">info@buenpastor-vda.net</a></div>
</section>
<section class="map-section">
  <iframe title="Ubicación de Buen Pastor Voz de Alerta" src="https://www.google.com/maps?q=Calle%20San%20Jos%C3%A9%2C%2024%20de%20Diciembre%2C%20Ciudad%20de%20Panam%C3%A1&output=embed" loading="lazy"></iframe>
</section>
  </main>

<?php get_footer(); ?>
