<?php
/**
 * Title: BPVDA - Hero Principal Oficial
 * Slug: bpvda/hero
 * Categories: bpvda
 * Description: Slider hero horizontal con video institucional y mosaico de experiencia BPVDA.
 */
?>
<!-- wp:html -->
<section class="hero" id="inicio" aria-label="Presentación destacada" data-slider>
  <div class="hero-track" data-slider-track>
    <article class="hero-slide" data-slide aria-hidden="false">
      <video autoplay muted loop playsinline tabindex="-1">
        <source src="<?php echo esc_url( bpvda_asset( 'media/hero-campus.mp4' ) ); ?>" type="video/mp4">
      </video>
      <div class="hero-wash"></div>
      <div class="hero-content">
        <p class="eyebrow">Educación con propósito Panamá</p>
        <h1>Forjando<br><em>Espíritus Nuevos.</em></h1>
        <p class="hero-copy">Una comunidad cristiana que acompaña a niños y jóvenes para transformar el conocimiento en acción y cada talento en una forma de servir.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#experiencia">Conoce la experiencia <span>↗</span></a>
        </div>
      </div>
    </article>
    <article class="hero-slide" data-slide aria-hidden="true">
      <img src="<?php echo esc_url( bpvda_asset( 'media/learn-mind.webp' ) ); ?>" alt="Estudiante en práctica de aprendizaje reflexivo">
      <div class="hero-wash"></div>
      <div class="hero-content">
        <p class="eyebrow">Nuestra misión</p>
        <h2 class="slide-heading">Educar la mente.<br><em>Formar carácter.</em></h2>
        <p class="hero-copy">Educamos con excelencia, fe y valores cristianos, acompañando a cada estudiante en su crecimiento académico, personal y espiritual.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#filosofia">Conoce nuestra misión <span>↗</span></a>
        </div>
      </div>
    </article>
  </div>
  <div class="hero-controls">
    <button type="button" data-prev aria-label="Historia anterior">←</button>
    <div class="hero-progress"><span data-current>01</span><i><b data-progress style="width:20%"></b></i><span data-total>05</span></div>
    <button type="button" data-next aria-label="Historia siguiente">→</button>
  </div>
</section>
<!-- /wp:html -->
