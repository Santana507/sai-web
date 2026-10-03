$cssPath = "c:\Users\JOSE SANTANA\OneDrive\Escritorio\sai-web\css\styles.css"
$cssContent = [System.IO.File]::ReadAllText($cssPath, [System.Text.Encoding]::UTF8)

# 1. Add CSS Containment and Optimization properties
$containCSS = @'

/* ==========================================================================
   PERFORMANCE OPTIMIZATION (Cero Lag)
   ========================================================================== */

/* Aislar el layout y renderizado de secciones principales para evitar repintados globales */
.site-header {
  contain: layout;
}

.hero {
  contain: content;
}

.hero-slide {
  contain: strict;
}

.section-pad {
  contain: layout style;
}

.card, .editorial-card, .docente-card, .feature-card {
  contain: layout style;
  /* Promover tarjetas interactivas a su propia capa de composicion */
  will-change: transform;
}

/* Reducir carga del GPU: will-change solo cuando es necesario o en hover */
.reveal, .reveal-left, .reveal-right, .reveal-scale {
  /* En lugar de will-change constante, preparamos la capa */
  transform: translateZ(0);
  backface-visibility: hidden;
}

img, video {
  /* Evitar artefactos de repintado en medios */
  transform: translateZ(0);
  backface-visibility: hidden;
}
'@

if (-not $cssContent.Contains("PERFORMANCE OPTIMIZATION")) {
    $cssContent = $cssContent + "`r`n" + $containCSS
    [System.IO.File]::WriteAllText($cssPath, $cssContent, [System.Text.Encoding]::UTF8)
    Write-Host "[OK] CSS performance optimizations applied"
} else {
    Write-Host "[SKIP] CSS optimizations already applied"
}

# 2. Optimize JS Scroll Handler
$jsPath = "c:\Users\JOSE SANTANA\OneDrive\Escritorio\sai-web\js\main.js"
$jsContent = [System.IO.File]::ReadAllText($jsPath, [System.Text.Encoding]::UTF8)

$jsOldScroll = @'
  const heroSlider = document.querySelector('[data-slider]');

  function onScroll() {
    const scrollY = window.scrollY;
    
    // Distancia umbral para activar el "Modo Libre"
    let triggerDistance = 40;
    if (heroSlider) {
      // En index se activa a la mitad del slider de portada (~55% de la altura o mín. 260px)
      triggerDistance = Math.max(Math.round(heroSlider.offsetHeight * 0.55), 260);
    }

    // Cabecera compacta y desvanecimiento a modo libre
    if (header) {
      header.classList.toggle('is-scrolled', scrollY > 20);
      header.classList.toggle('is-scrolled-free', scrollY > triggerDistance);
    }

    // Botón flotante 'Volver Arriba': visible a partir de 600px de scroll
    if (backToTopButton) {
      backToTopButton.classList.toggle('is-visible', scrollY > 600);
    }
  }
  
  // Escucha pasiva para optimizar el rendimiento del hilo principal (60 FPS)
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
'@

$jsNewScroll = @'
  const heroSlider = document.querySelector('[data-slider]');
  
  // Variables cacheadas para optimizacion
  let triggerDistance = 40;
  let isScrolling = false;
  let latestScrollY = 0;

  function calculateTriggerDistance() {
    if (heroSlider) {
      // En index se activa a la mitad del slider de portada (~55% de la altura o min. 260px)
      triggerDistance = Math.max(Math.round(heroSlider.offsetHeight * 0.55), 260);
    }
  }

  // Recalcular solo al inicio o al cambiar tamano de pantalla, no en cada scroll
  calculateTriggerDistance();
  window.addEventListener('resize', calculateTriggerDistance, { passive: true });

  function updateScroll() {
    // Cabecera compacta y desvanecimiento a modo libre
    if (header) {
      header.classList.toggle('is-scrolled', latestScrollY > 20);
      header.classList.toggle('is-scrolled-free', latestScrollY > triggerDistance);
    }

    // Boton flotante 'Volver Arriba': visible a partir de 600px de scroll
    if (backToTopButton) {
      backToTopButton.classList.toggle('is-visible', latestScrollY > 600);
    }
    
    isScrolling = false;
  }

  function onScroll() {
    latestScrollY = window.scrollY;
    // requestAnimationFrame evita Layout Thrashing y bloqueos del hilo principal
    if (!isScrolling) {
      window.requestAnimationFrame(updateScroll);
      isScrolling = true;
    }
  }
  
  // Escucha pasiva para optimizar el rendimiento del hilo principal (60 FPS)
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Disparo inicial
'@

$jsContentNormalized = $jsContent -replace "`r`n", "`n"

# A workaround regex matching replacing to avoid weird encoding chars in matching
$startOldJS = "const heroSlider = document.querySelector\('\[data-slider\]'\);"
$endOldJS = "window.addEventListener\('scroll', onScroll, \{ passive: true \}\);\n  onScroll\(\);"

$pattern = "(?s)" + $startOldJS + ".*?" + $endOldJS

if ($jsContentNormalized -match $pattern) {
    $jsContentNew = $jsContentNormalized -replace $pattern, $jsNewScroll.Replace("`r`n", "`n")
    [System.IO.File]::WriteAllText($jsPath, $jsContentNew, [System.Text.Encoding]::UTF8)
    Write-Host "[OK] JS onScroll optimized with requestAnimationFrame"
} else {
    Write-Host "[SKIP] JS onScroll target not found or already optimized"
}

# 3. Optimizing html template images (lazy loading / async decoding)
$templatesDir = "c:\Users\JOSE SANTANA\OneDrive\Escritorio\sai-web\tools\templates"
$htmlFiles = Get-ChildItem -Path $templatesDir -Filter "*.html" -Recurse

$imgChanges = 0
foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $original = $content
    
    $content = [regex]::Replace($content, '<img(?![^>]*decoding=)[^>]*>', {
        param($m)
        $m.Value.Replace('<img ', '<img decoding="async" ')
    })

    if ($original -ne $content) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        $imgChanges++
    }
}
Write-Host "[OK] HTML templates updated with async decoding on $imgChanges files"
