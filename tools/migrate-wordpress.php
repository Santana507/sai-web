<?php

/**
 * Migra el sitio BPVDA a una instalación local de WordPress.
 *
 * Uso:
 *   C:\xampp\php\php.exe tools\migrate-wordpress.php C:\xampp\htdocs\prueba1_proyecto
 */

if (PHP_SAPI !== 'cli') {
    exit("Este script solo puede ejecutarse por CLI.\n");
}

$wpRoot = $argv[1] ?? 'C:/xampp/htdocs/prueba1_proyecto';
$wpLoad = rtrim(str_replace('\\', '/', $wpRoot), '/') . '/wp-load.php';
if (!is_file($wpLoad)) {
    exit("No se encontró wp-load.php en {$wpRoot}.\n");
}

require $wpLoad;
kses_remove_filters();

$projectRoot = realpath(__DIR__ . '/..');
$themeUrl = get_theme_root_uri() . '/bpvda';

function bpvda_json(array $attributes): string
{
    return $attributes ? ' ' . wp_json_encode($attributes, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) : '';
}

function bpvda_classes(string $base, string $extra = ''): string
{
    return trim($base . ($extra !== '' ? ' ' . $extra : ''));
}

function bpvda_heading(string $text, int $level = 2, string $class = ''): string
{
    $attrs = ['level' => $level];
    if ($class !== '') {
        $attrs['className'] = $class;
    }
    $classes = bpvda_classes('wp-block-heading', $class);
    return '<!-- wp:heading' . bpvda_json($attrs) . ' --><h' . $level . ' class="' . esc_attr($classes) . '">' . $text . '</h' . $level . '><!-- /wp:heading -->';
}

function bpvda_paragraph(string $text, string $class = ''): string
{
    $attrs = $class !== '' ? ['className' => $class] : [];
    $classAttr = $class !== '' ? ' class="' . esc_attr($class) . '"' : '';
    return '<!-- wp:paragraph' . bpvda_json($attrs) . ' --><p' . $classAttr . '>' . $text . '</p><!-- /wp:paragraph -->';
}

function bpvda_image(string $url, string $alt, string $class = ''): string
{
    $attrs = ['sizeSlug' => 'full', 'linkDestination' => 'none'];
    if ($class !== '') {
        $attrs['className'] = $class;
    }
    $classes = bpvda_classes('wp-block-image size-full', $class);
    return '<!-- wp:image' . bpvda_json($attrs) . ' --><figure class="' . esc_attr($classes) . '"><img src="' . esc_url($url) . '" alt="' . esc_attr($alt) . '"/></figure><!-- /wp:image -->';
}

function bpvda_video(string $url, string $class = '', bool $loop = false): string
{
    $attrs = ['autoplay' => true, 'muted' => true];
    if ($loop) {
        $attrs['loop'] = true;
    }
    if ($class !== '') {
        $attrs['className'] = $class;
    }
    $classes = bpvda_classes('wp-block-video', $class);
    $loopAttr = $loop ? ' loop' : '';
    return '<!-- wp:video' . bpvda_json($attrs) . ' --><figure class="' . esc_attr($classes) . '"><video autoplay muted playsinline' . $loopAttr . ' src="' . esc_url($url) . '"></video></figure><!-- /wp:video -->';
}

function bpvda_group(string $inner, string $class = '', string $tag = 'div', string $anchor = ''): string
{
    $attrs = ['tagName' => $tag, 'layout' => ['type' => 'default']];
    if ($class !== '') {
        $attrs['className'] = $class;
    }
    if ($anchor !== '') {
        $attrs['anchor'] = $anchor;
    }
    $classAttr = 'wp-block-group' . ($class !== '' ? ' ' . $class : '');
    $idAttr = $anchor !== '' ? ' id="' . esc_attr($anchor) . '"' : '';
    return '<!-- wp:group' . bpvda_json($attrs) . ' --><' . $tag . $idAttr . ' class="' . esc_attr($classAttr) . '">' . $inner . '</' . $tag . '><!-- /wp:group -->';
}

function bpvda_columns(array $columns, string $class = ''): string
{
    $attrs = $class !== '' ? ['className' => $class] : [];
    $columnMarkup = '';
    foreach ($columns as $column) {
        $columnMarkup .= '<!-- wp:column --><div class="wp-block-column">' . $column . '</div><!-- /wp:column -->';
    }
    $classes = bpvda_classes('wp-block-columns', $class);
    return '<!-- wp:columns' . bpvda_json($attrs) . ' --><div class="' . esc_attr($classes) . '">' . $columnMarkup . '</div><!-- /wp:columns -->';
}

function bpvda_button(string $label, string $url, string $class = ''): string
{
    $buttonAttrs = $class !== '' ? ['className' => $class] : [];
    $classes = bpvda_classes('wp-block-button', $class);
    return '<!-- wp:buttons --><div class="wp-block-buttons"><!-- wp:button' . bpvda_json($buttonAttrs) . ' --><div class="' . esc_attr($classes) . '"><a class="wp-block-button__link wp-element-button" href="' . esc_url($url) . '">' . esc_html($label) . '</a></div><!-- /wp:button --></div><!-- /wp:buttons -->';
}

function bpvda_list(array $items, string $class = ''): string
{
    $attrs = $class !== '' ? ['className' => $class] : [];
    $classAttr = $class !== '' ? ' class="wp-block-list ' . esc_attr($class) . '"' : ' class="wp-block-list"';
    return '<!-- wp:list' . bpvda_json($attrs) . ' --><ul' . $classAttr . '><li>' . implode('</li><li>', $items) . '</li></ul><!-- /wp:list -->';
}

function bpvda_table(array $headers, array $rows, string $class = ''): string
{
    $attrs = ['hasFixedLayout' => false];
    if ($class !== '') {
        $attrs['className'] = $class;
    }
    $head = '<thead><tr><th>' . implode('</th><th>', $headers) . '</th></tr></thead>';
    $body = '<tbody>';
    foreach ($rows as $row) {
        $body .= '<tr><td>' . implode('</td><td>', $row) . '</td></tr>';
    }
    $body .= '</tbody>';
    $classes = bpvda_classes('wp-block-table', $class);
    return '<!-- wp:table' . bpvda_json($attrs) . ' --><figure class="' . esc_attr($classes) . '"><table class="has-fixed-layout">' . $head . $body . '</table></figure><!-- /wp:table -->';
}

function bpvda_details(string $summary, string $inner): string
{
    return '<!-- wp:details --><details class="wp-block-details"><summary>' . esc_html($summary) . '</summary>' . $inner . '</details><!-- /wp:details -->';
}

function bpvda_quote(string $quote, string $citation): string
{
    return '<!-- wp:quote --><blockquote class="wp-block-quote"><p>' . $quote . '</p><cite>' . esc_html($citation) . '</cite></blockquote><!-- /wp:quote -->';
}

function bpvda_upsert_page(string $title, string $slug): int
{
    $query = new WP_Query([
        'post_type' => 'page',
        'name' => $slug,
        'post_status' => 'any',
        'posts_per_page' => 1,
        'fields' => 'ids',
    ]);
    $id = $query->posts[0] ?? 0;
    $data = [
        'post_type' => 'page',
        'post_title' => $title,
        'post_name' => $slug,
        'post_status' => 'publish',
        'post_content' => '',
        'comment_status' => 'closed',
        'ping_status' => 'closed',
    ];
    if ($id) {
        $data['ID'] = $id;
        return (int) wp_update_post(wp_slash($data), true);
    }
    return (int) wp_insert_post(wp_slash($data), true);
}

function bpvda_update_page(int $id, string $content, bool $editable): void
{
    $result = wp_update_post(wp_slash(['ID' => $id, 'post_content' => $content]), true);
    if (is_wp_error($result)) {
        throw new RuntimeException($result->get_error_message());
    }
    update_post_meta($id, '_bpvda_editable', $editable ? '1' : '0');
}

function bpvda_main_fragment(string $path): string
{
    $html = file_get_contents($path);
    if (!preg_match('/<main[^>]*>([\s\S]*?)<\/main>/i', $html, $matches)) {
        throw new RuntimeException("No se pudo extraer <main> de {$path}");
    }
    return trim($matches[1]);
}

$pageDefinitions = [
    'inicio' => 'Inicio',
    'filosofia' => 'Filosofía',
    'admisiones' => 'Admisiones y matrícula',
    'quienes-somos' => '¿Quiénes somos?',
    'instalaciones' => 'Instalaciones',
    'plantel' => 'Plantel docente',
    'sai' => 'SAI BPVDA',
    'vida-estudiantil' => 'Vida estudiantil',
    'ecosistema-digital' => 'Ecosistema digital',
    'portal-padres' => 'Portal de padres',
    'contacto' => 'Contacto y atención',
    'prekinder' => 'Prekínder',
    'kinder' => 'Kínder',
    'primaria' => 'Primaria',
    'secundaria' => 'Secundaria',
    'bachilleres' => 'Bachilleres',
    'formularios-admision' => 'Formularios de admisión',
];

$pageIds = [];
foreach ($pageDefinitions as $slug => $title) {
    $pageIds[$slug] = bpvda_upsert_page($title, $slug);
    if (!$pageIds[$slug]) {
        throw new RuntimeException("No se pudo crear la página {$title}");
    }
}

$url = static fn(string $slug): string => get_permalink($pageIds[$slug]);
$asset = static fn(string $path): string => $themeUrl . '/assets/' . ltrim($path, '/');

// Inicio: bloques nativos editables.
$slides = [
    ['video', 'media/hero-campus.mp4', 'Educación con propósito Panamá', 'Forjando<br><em>Espíritus Nuevos.</em>', 'Una comunidad cristiana que acompaña a niños y jóvenes para transformar el conocimiento en acción y cada talento en una forma de servir.', 'Conoce la experiencia', '#experiencia'],
    ['image', 'media/learn-mind.webp', 'Nuestra misión', 'Educar la mente.<br><em>Formar carácter.</em>', 'Educamos con excelencia, fe y valores cristianos, acompañando a cada estudiante en su crecimiento académico, personal y espiritual.', 'Conoce nuestra misión', $url('filosofia')],
    ['image', 'media/culture-main.webp', 'Nuestra visión', 'Raíces firmes.<br><em>Mirada amplia.</em>', 'Formamos líderes con carácter y propósito, preparados para aprender, convivir y responder a un mundo cambiante.', 'Explora nuestra visión', $url('secundaria')],
    ['image', 'media/recognition.webp', 'Valores que se viven', 'Fe. Respeto.<br><em>Excelencia.</em>', 'La esperanza, la dignidad y la mejora constante orientan la experiencia diaria de cada estudiante y cada familia.', 'Descubre nuestros valores', $url('filosofia')],
    ['image', 'media/campus-entry.webp', 'Tu familia es bienvenida', 'El próximo paso<br><em>comienza aquí.</em>', 'Conoce nuestro proceso de admisión, visita el colegio y conversa con el equipo que acompañará a tu familia.', 'Inicia tu admisión', $url('admisiones')],
];
$slideBlocks = '';
foreach ($slides as $index => $slide) {
    $media = $slide[0] === 'video'
        ? bpvda_video($asset($slide[1]), 'hero-slide__media', true)
        : bpvda_image($asset($slide[1]), $slide[2], 'hero-slide__media');
    $headingLevel = $index === 0 ? 1 : 2;
    $copy = bpvda_paragraph($slide[2], 'eyebrow')
        . bpvda_heading($slide[3], $headingLevel, $index === 0 ? '' : 'slide-heading')
        . bpvda_paragraph($slide[4], 'hero-copy')
        . bpvda_button($slide[5], $slide[6], 'primary-btn');
    $slideBlocks .= bpvda_group($media . bpvda_group('', 'hero-wash') . bpvda_group($copy, 'hero-content'), 'hero-slide', 'article');
}
$home = bpvda_group(bpvda_group($slideBlocks, 'hero-track') . bpvda_group('', 'hero-controls') . bpvda_paragraph('Formando con fe desde Panamá', 'hero-side-note'), 'hero hero-slider-editor', 'section', 'inicio');
$home .= bpvda_group(bpvda_quote('La <mark>disciplina</mark>, tarde o temprano, vencerá a la <mark>inteligencia</mark>.', 'Yokoi Kenji — Motivador'), 'hero-quote', 'section');
$home .= bpvda_group(
    bpvda_paragraph('01 — Nuestra experiencia', 'section-number')
    . bpvda_columns([
        bpvda_heading('Una escuela se reconoce por lo que <em>hace posible.</em>') . bpvda_paragraph('<strong>Nuestra promesa</strong><br>Unir fe, conocimiento y acción para que el aprendizaje tenga sentido dentro y fuera del aula.', 'guide-copy'),
        bpvda_paragraph('Aquí cada estudiante aprende haciendo, preguntando y colaborando, acompañado por docentes y una comunidad comprometida con su crecimiento.', 'lead'),
    ], 'statement-grid')
    . bpvda_columns([
        bpvda_image($asset('media/science-student.webp'), 'Estudiante en una experiencia de laboratorio') . bpvda_paragraph('<strong>Aprender haciendo</strong><br>La curiosidad encuentra método.'),
        bpvda_image($asset('media/roboticfair-team.webp'), 'Estudiantes en feria de robótica y tecnología') . bpvda_paragraph('<strong>Trabajo colaborativo</strong><br>Ideas compartidas, soluciones construidas.'),
        bpvda_paragraph('<strong>Fe + conocimiento + acción</strong><br>Tres dimensiones de nuestra experiencia formativa.'),
    ], 'mosaic'),
    'statement section-pad', 'section', 'experiencia'
);

$programs = '';
$programData = [
    ['01', 'Preescolar', 'Exploración, juego y primeras bases del aprendizaje.', 'media/campus-prescholar.webp', 'prekinder'],
    ['02', 'Primaria', 'Autonomía, curiosidad, hábitos y pensamiento.', 'media/early-learning.webp', 'primaria'],
    ['03', 'Secundaria', 'Retos que impulsan el pensamiento crítico y el liderazgo.', 'media/robotics-2.webp', 'secundaria'],
    ['04', 'Bachillerato', 'Preparación para la universidad y la vida adulta.', 'media/community.webp', 'bachilleres'],
];
foreach ($programData as $program) {
    $programs .= bpvda_group(
        bpvda_image($asset($program[3]), $program[1])
        . bpvda_paragraph($program[0], 'section-number')
        . bpvda_heading($program[1], 3)
        . bpvda_paragraph($program[2])
        . bpvda_button('Conoce esta etapa', $url($program[4]), 'text-link'),
        'program-card', 'article'
    );
}
$home .= bpvda_group(
    bpvda_paragraph('02 — Oferta académica', 'section-number')
    . bpvda_heading('Un camino para cada <em>etapa.</em>')
    . bpvda_paragraph('Una ruta continua que reconoce las necesidades de cada edad y prepara el siguiente paso.')
    . bpvda_group($programs, 'program-grid'),
    'programs section-pad', 'section', 'niveles'
);
$home .= bpvda_group(bpvda_columns([
    bpvda_image($asset('media/science-action.webp'), 'Estudiantes desarrollando una experiencia científica'),
    bpvda_paragraph('03 — Aprendizaje activo', 'section-number') . bpvda_heading('Más que clases: <em>experiencias</em> de aprendizaje.') . bpvda_paragraph('Los proyectos científicos, tecnológicos y creativos conectan la planificación con preguntas reales, prototipos, investigación y comunicación.') . bpvda_list(['Plantear preguntas', 'Crear prototipos', 'Comunicar resultados']) . bpvda_button('Conoce el currículo', $url('ecosistema-digital'), 'text-link'),
], 'feature'), 'feature section-pad', 'section');
$home .= bpvda_group(
    bpvda_paragraph('04 — Talento que trasciende', 'section-number')
    . bpvda_heading('Cuando una idea sale del <em>aula.</em>')
    . bpvda_paragraph('Celebramos el esfuerzo, la disciplina y la capacidad de convertir una idea en una experiencia compartida.')
    . bpvda_columns([
        bpvda_image($asset('media/achievement.webp'), 'Estudiantes en una actividad escolar') . bpvda_heading('Ingenio, disciplina y trabajo en equipo.', 3) . bpvda_paragraph('Los retos tecnológicos llevan a investigar, probar soluciones y comunicar lo aprendido.'),
        bpvda_image($asset('media/recognition.webp'), 'Estudiantes mostrando un reconocimiento') . bpvda_heading('Ideas con propósito', 3) . bpvda_paragraph('Crear también significa escuchar, resolver un problema y aprender del proceso.'),
    ]),
    'achievements section-pad', 'section', 'logros'
);
$home .= bpvda_group(
    bpvda_video($asset('media/school-life-1.mp4'), 'community-video')
    . bpvda_group('', 'community-wash')
    . bpvda_group(bpvda_paragraph('05 — Somos comunidad', 'section-number') . bpvda_heading('Una escuela que se <em>vive en compañía.</em>') . bpvda_paragraph('Estudiantes, familias, docentes e iglesia participan en una misma comunidad que aprende, celebra y sirve.') . bpvda_columns([
        bpvda_button('Comunidad escolar', $url('quienes-somos')),
        bpvda_button('Comunidad de familias', $url('contacto')),
        bpvda_button('Actividades y talentos', $url('vida-estudiantil')),
    ], 'community-links'), 'community-content'),
    'community', 'section', 'comunidad'
);
$home .= bpvda_group(
    bpvda_paragraph('Explora BPVDA', 'section-number') . bpvda_heading('La información que buscas, en el lugar correcto.')
    . bpvda_columns([
        bpvda_heading('Nuestra escuela', 3) . bpvda_paragraph('Conoce el propósito, los valores y la comunidad.') . bpvda_button('Explorar', $url('quienes-somos')),
        bpvda_heading('Currículo', 3) . bpvda_paragraph('Explora áreas, conocimientos y herramientas.') . bpvda_button('Explorar', $url('ecosistema-digital')),
        bpvda_heading('Actividades', 3) . bpvda_paragraph('Descubre experiencias para desarrollar talentos.') . bpvda_button('Explorar', $url('vida-estudiantil')),
        bpvda_heading('Admisión', 3) . bpvda_paragraph('Comienza el proceso con tu familia.') . bpvda_button('Explorar', $url('admisiones')),
    ], 'guide-list'),
    'guide section-pad', 'section'
);
$home .= bpvda_group(bpvda_columns([
    bpvda_image($asset('media/campus-entry.webp'), 'Entrada del Colegio Buen Pastor Voz de Alerta'),
    bpvda_paragraph('El siguiente paso', 'section-number') . bpvda_heading('Ven a conocer nuestra comunidad.') . bpvda_paragraph('Conversa con nuestro equipo, coordina una visita y conoce el proceso de admisión.') . bpvda_button('Solicitar información', $url('contacto')) . bpvda_button('Ver admisiones', $url('admisiones')),
], 'contact'), 'contact section-pad', 'section', 'contacto');
bpvda_update_page($pageIds['inicio'], $home, true);

// Filosofía: bloques nativos editables.
$philosophy = bpvda_group(
    bpvda_group(
        bpvda_image($asset('new/purpose/IMG_1963.JPG'), 'Estudiante BPVDA con uniforme')
        . bpvda_image($asset('new/purpose/IMG_1966.JPG'), 'Estudiante BPVDA con uniforme')
        . bpvda_image($asset('new/purpose/IMG_1991.JPG'), 'Estudiante BPVDA con uniforme'),
        'purpose-fade__images'
    )
    . bpvda_group(bpvda_paragraph('01 NUESTRA ESCUELA') . bpvda_heading('Una educación con <mark>propósito</mark>.', 1) . bpvda_paragraph('Formamos personas con valores, conocimiento y una mirada generosa hacia los demás.'), 'purpose-fade__content'),
    'purpose-fade', 'section'
);
$philosophy .= bpvda_group(bpvda_paragraph('PROPÓSITO BPVDA') . bpvda_paragraph('Creemos en una educación integral que impulsa el desarrollo académico, personal y espiritual de niños y jóvenes, fundamentada en la fe, la excelencia y el servicio.'), 'purpose-intro', 'section');
$pillars = [
    ['01', 'Valores', 'La fe, el respeto, la responsabilidad y el amor al prójimo orientan la manera en que convivimos y aprendemos.', 'new/purpose/IMG_1963.JPG', 'purpose-pillar--values'],
    ['02', 'Misión', 'Brindar una formación de excelencia que fortalezca las capacidades de cada estudiante y lo prepare para servir con propósito.', 'new/purpose/IMG_1966.JPG', 'purpose-pillar--mission'],
    ['03', 'Visión', 'Ser una comunidad educativa que inspira a sus estudiantes a aprender, liderar y construir un futuro mejor.', 'new/purpose/IMG_1991.JPG', 'purpose-pillar--vision'],
];
$pillarBlocks = '';
foreach ($pillars as $pillar) {
    $pillarBlocks .= bpvda_group(
        bpvda_image($asset($pillar[3]), 'Estudiante BPVDA')
        . bpvda_group(bpvda_paragraph($pillar[0]) . bpvda_heading($pillar[1]) . bpvda_paragraph($pillar[2])),
        'purpose-pillar ' . $pillar[4], 'article'
    );
}
$philosophy .= bpvda_group($pillarBlocks, 'purpose-pillars', 'section');
bpvda_update_page($pageIds['filosofia'], $philosophy, true);

// Admisiones: bloques nativos editables, incluidos costos, rutas y formularios.
$admissions = bpvda_group(
    bpvda_group(bpvda_paragraph('03 FAMILIA Y COMUNIDAD', 'section-tag') . bpvda_heading('El primer paso hacia una educación con <mark>propósito</mark> — Matrículas 2027', 1) . bpvda_paragraph('Bienvenidos al proceso de admisión del Colegio Buen Pastor Voz de Alerta. Nos alegra su interés en formar parte de nuestra comunidad.', 'subtítulo'), 'container'),
    'interior-hero', 'header'
);
$admissions .= bpvda_group(bpvda_columns([
    bpvda_group(bpvda_heading('Nuevo Ingreso', 3) . bpvda_paragraph('Quiero ingresar por primera vez al colegio.') . bpvda_button('Ver proceso', '#nuevo-ingreso'), 'card cta-card nuevo-ingreso'),
    bpvda_group(bpvda_heading('Preingreso', 3) . bpvda_paragraph('Ya pertenezco al colegio y renuevo mi cupo 2027.') . bpvda_button('Ver reincorporación', '#preingreso'), 'card cta-card preingreso'),
], 'dual-cta-grid'), 'dual-cta-wrapper', 'section');
$offers = [
    ['Formación en Valores', 'Educación fundamentada en principios cristianos para la vida cotidiana y ciudadana.'],
    ['Escuela para Padres', 'Acompañamiento presencial mensual para fortalecer el crecimiento integral familiar.'],
    ['Continuidad Pedagógica', 'Desde Prekínder hasta Bachilleratos en Ciencias e Informática.'],
    ['Innovación Digital', 'Uso pedagógico de la Plataforma SAI y libros interactivos para el aprendizaje continuo.'],
];
$offerBlocks = '';
foreach ($offers as $offer) {
    $offerBlocks .= bpvda_group(bpvda_heading($offer[0], 3) . bpvda_paragraph($offer[1]), 'card info-card');
}
$admissions .= bpvda_group(bpvda_paragraph('NUESTRA ESENCIA', 'section-tag') . bpvda_heading('¿Qué ofrecemos?') . bpvda_paragraph('Nuestra propuesta educativa integral une la excelencia académica con bases cristianas sólidas.') . bpvda_group($offerBlocks, 'propuesta-grid'), 'section-propuesta section-pad', 'section');

$baseRows = [
    ['<strong>Preescolar</strong>', 'B/. 170.80', 'B/. 90.00', 'B/. 900.00', 'B/. 1,070.80'],
    ['<strong>1° a 3° Grado</strong>', 'B/. 258.00', 'B/. 110.00', 'B/. 1,100.00', 'B/. 1,358.00'],
    ['<strong>4° a 6° Grado</strong>', 'B/. 263.00', 'B/. 112.00', 'B/. 1,120.00', 'B/. 1,383.00'],
    ['<strong>7° a 9° Grado</strong>', 'B/. 276.00', 'B/. 125.00', 'B/. 1,250.00', 'B/. 1,526.00'],
    ['<strong>Bachilleratos</strong>', 'Consultar', 'Consultar', 'Consultar', 'Consultar'],
];
$reserveRows = [
    ['Preescolar', 'B/. 85.40', 'B/. 35.00', 'B/. 120.40'],
    ['1° a 3° Grado', 'B/. 129.00', 'B/. 35.00', 'B/. 164.00'],
    ['4° a 6° Grado', 'B/. 131.50', 'B/. 35.00', 'B/. 166.50'],
    ['7° a 9° Grado', 'B/. 138.00', 'B/. 35.00', 'B/. 173.00'],
];
$admissions .= bpvda_group(
    bpvda_paragraph('TRANSPARENCIA INSTITUCIONAL', 'section-tag') . bpvda_heading('Inversión Educativa 2027') . bpvda_paragraph('Conozca detalladamente la inversión requerida para el próximo año lectivo sin costos ocultos.')
    . bpvda_heading('Tabla 1: Inversión Base y Colegiatura', 3)
    . bpvda_table(['Nivel / Grado', 'Matrícula', 'Mensualidad', 'Total colegiatura', 'Base anual'], $baseRows, 'table-wrapper')
    . bpvda_heading('Tabla 2: Separación de Cupo', 3)
    . bpvda_table(['Nivel / Grado', 'Abono mínimo', 'Prueba psicológica', 'Total para reservar'], $reserveRows, 'table-wrapper')
    . bpvda_group(bpvda_heading('Notas importantes sobre la reserva', 4) . bpvda_list([
        '<strong>Nuevo Ingreso:</strong> el monto indicado se requiere una vez superadas las pruebas diagnósticas.',
        '<strong>Preingreso:</strong> el abono mínimo de separación es de B/. 100.00.',
        'La fecha límite para cancelar el saldo de matrícula es el <strong>29 de enero de 2027</strong>.',
    ]), 'table-info card')
    . bpvda_columns([
        bpvda_heading('Calendario de pagos', 3) . bpvda_table(['Concepto', 'Fecha límite'], [
            ['Mensualidades (marzo a noviembre)', 'Primeros 10 días de cada mes'],
            ['Cuota de diciembre', '5 de diciembre'],
            ['Matrícula completa 2027', '29 de enero de 2027'],
        ]),
        bpvda_heading('Rubros adicionales', 3) . bpvda_table(['Concepto', 'Condición'], [
            ['Prueba psicológica', 'B/. 35.00 (Nuevo Ingreso)'],
            ['Plataforma SAI y libros digitales', 'Antes del primer día de clases'],
            ['Curso de verano / inducción', 'Enero 2027'],
        ]),
    ], 'tables-side-by-side'),
    'section-costs section-pad', 'section'
);

$steps = [
    ['1', 'Cita Open Day', 'Coordinar cita al WhatsApp 6744-1351.'],
    ['2', 'Requisitos físicos', 'Entregar los documentos solicitados en secretaría.'],
    ['3', 'Evaluaciones', 'Prueba psicológica y prueba diagnóstica de admisión.'],
    ['4', 'Reserva y abono', 'Separar cupo con el abono del 50% de la matrícula.'],
    ['5', 'Formulario digital', 'Completar la ficha médica, familiar y adjuntar el comprobante.'],
    ['6', 'Inducción escolar', 'Participar en el curso de verano y semana de inducción.'],
];
$stepBlocks = '';
foreach ($steps as $step) {
    $stepBlocks .= bpvda_group(bpvda_paragraph($step[0], 'step-number') . bpvda_heading($step[1], 3) . bpvda_paragraph($step[2]), 'card step-card');
}
$requirements = bpvda_details('Preescolar', bpvda_list([
    '<strong>Edades:</strong> Prekínder (4 años) y Kínder (5 años) cumplidos en abril de 2027.',
    '<strong>Salud:</strong> certificado médico y copia de tarjeta de vacunas.',
    '<strong>Ingresos:</strong> ficha de la CSS, carta de trabajo o declaración.',
    '<strong>Identificación:</strong> cédulas y dos fotos carnet.',
])) . bpvda_details('Primaria y Premedia', bpvda_list([
    '<strong>Historial académico:</strong> boletines y créditos acumulativos.',
    '<strong>Cartas oficiales:</strong> buena conducta y paz y salvo.',
    '<strong>Salud e ingresos:</strong> certificados y sustento de ingresos.',
    '<strong>Exterior:</strong> resolución de convalidación de MEDUCA.',
]));
$admissions .= bpvda_group(
    bpvda_paragraph('PASO A PASO', 'section-tag') . bpvda_heading('Ruta de Nuevo Ingreso') . bpvda_paragraph('Guía secuencial para unirse a la familia BPVDA en 2027.') . bpvda_group($stepBlocks, 'steps-container') . bpvda_heading('Checklist de requisitos por nivel', 3) . $requirements,
    'section-nuevo-ingreso section-pad', 'section', 'nuevo-ingreso'
);
$admissions .= bpvda_group(
    bpvda_paragraph('ESTUDIANTES ACTUALES', 'section-tag') . bpvda_heading('Ruta de Preingreso 2027') . bpvda_paragraph('Proceso ágil de renovación de cupo para estudiantes regulares.')
    . bpvda_group(bpvda_heading('Pasos para la renovación', 3) . bpvda_list([
        '<strong>Contrato 2027:</strong> firmado en la primera y última página.',
        '<strong>Abono mínimo:</strong> B/. 100.00 para apartar el cupo.',
        '<strong>Comprobantes:</strong> enviarlos a info@buenpastor-vda.net.',
        '<strong>Formulario:</strong> adjuntar contrato y soporte de pago.',
    ]), 'card'),
    'section-preingreso section-pad', 'section', 'preingreso'
);
$admissions .= bpvda_group(
    bpvda_paragraph('ASPECTOS IMPORTANTES', 'section-tag') . bpvda_heading('Compromisos y alertas legales')
    . bpvda_columns([
        bpvda_image($asset('media/admision.webp'), 'Trámites de matrícula') . bpvda_heading('Formato de cédula obligatorio', 4) . bpvda_paragraph('Las cédulas deben escribirse con guiones para evitar rechazos del programa PASE-U.'),
        bpvda_image($asset('media/community.webp'), 'Comunidad educativa') . bpvda_heading('Un solo acudiente legal', 4) . bpvda_paragraph('Debe registrarse un único representante legal formal como canal directo.'),
        bpvda_image($asset('media/campus-entry.webp'), 'Instalaciones BPVDA') . bpvda_heading('Asistencia obligatoria', 4) . bpvda_paragraph('La participación mensual en Escuela para Padres es obligatoria.'),
    ]),
    'section-alertas section-pad', 'section'
);
$formsUrl = $url('formularios-admision');
$admissions .= bpvda_group(
    bpvda_heading('Acceso a Formularios Oficiales 2027') . bpvda_paragraph('Seleccione el formulario correspondiente cuando tenga listo su comprobante de pago.')
    . bpvda_columns([
        bpvda_button('Formulario de Nuevo Ingreso 2027', $formsUrl . '#nuevo-ingreso-form', 'btn-accent'),
        bpvda_button('Formulario de Preingreso 2027', $formsUrl . '#preingreso-form', 'btn-accent'),
    ], 'forms-grid'),
    'section-formularios section-pad', 'section'
);
bpvda_update_page($pageIds['admisiones'], $admissions, true);

// Páginas estáticas: un bloque HTML por página, sin convertir su estructura interna.
$staticFiles = [
    'quienes-somos' => 'quienes-somos.html',
    'instalaciones' => 'instalaciones.html',
    'plantel' => 'plantel.html',
    'sai' => 'sai.html',
    'vida-estudiantil' => 'vida-estudiantil.html',
    'ecosistema-digital' => 'ecosistema-digital.html',
    'portal-padres' => 'portal-padres.html',
    'contacto' => 'contacto.html',
    'prekinder' => 'prekinder.html',
    'kinder' => 'kinder.html',
    'primaria' => 'primaria.html',
    'secundaria' => 'secundaria.html',
    'bachilleres' => 'bachilleres.html',
];

$linkMap = [
    'index.html' => $url('inicio'),
    'filosofia.html' => $url('filosofia'),
    'admisiones.html' => $url('admisiones'),
    'quienes-somos.html' => $url('quienes-somos'),
    'instalaciones.html' => $url('instalaciones'),
    'plantel.html' => $url('plantel'),
    'sai.html' => $url('sai'),
    'vida-estudiantil.html' => $url('vida-estudiantil'),
    'ecosistema-digital.html' => $url('ecosistema-digital'),
    'portal-padres.html' => $url('portal-padres'),
    'contacto.html' => $url('contacto'),
    'prekinder.html' => $url('prekinder'),
    'kinder.html' => $url('kinder'),
    'primaria.html' => $url('primaria'),
    'secundaria.html' => $url('secundaria'),
    'bachilleres.html' => $url('bachilleres'),
    'form-nuevo-ingreso.html' => $formsUrl . '#nuevo-ingreso-form',
    'form-preingreso.html' => $formsUrl . '#preingreso-form',
];

$normalizeHtml = static function (string $html) use ($themeUrl, $linkMap): string {
    $html = str_replace(array_keys($linkMap), array_values($linkMap), $html);
    $html = preg_replace('~(?<=["\'=(])assets/~', $themeUrl . '/assets/', $html);
    return $html;
};

foreach ($staticFiles as $slug => $file) {
    $fragment = bpvda_main_fragment($projectRoot . DIRECTORY_SEPARATOR . $file);
    bpvda_update_page($pageIds[$slug], '<!-- wp:html -->' . $normalizeHtml($fragment) . '<!-- /wp:html -->', false);
}

$newStudentForm = $normalizeHtml(bpvda_main_fragment($projectRoot . '/form-nuevo-ingreso.html'));
$preEnrollmentForm = $normalizeHtml(bpvda_main_fragment($projectRoot . '/form-preingreso.html'));
$formsContent = '<!-- wp:html --><section id="nuevo-ingreso-form" class="bpvda-form-page">' . $newStudentForm . '</section><!-- /wp:html -->'
    . '<!-- wp:html --><section id="preingreso-form" class="bpvda-form-page">' . $preEnrollmentForm . '</section><!-- /wp:html -->';
bpvda_update_page($pageIds['formularios-admision'], $formsContent, false);

// Menú principal agrupado en cinco pilares.
$primaryName = 'Navegación principal BPVDA';
$primaryMenu = wp_get_nav_menu_object($primaryName);
$primaryId = $primaryMenu ? (int) $primaryMenu->term_id : (int) wp_create_nav_menu($primaryName);
foreach ((array) wp_get_nav_menu_items($primaryId) as $item) {
    wp_delete_post($item->ID, true);
}
$groups = [
    '01 NUESTRA ESCUELA' => [
        '¿Quiénes somos?' => 'quienes-somos', 'Propósito BPVDA' => 'filosofia', 'Instalaciones' => 'instalaciones', 'Plantel docente' => 'plantel',
    ],
    '02 ENFOQUE EDUCATIVO' => [
        'SAI BPVDA' => 'sai', 'Vida estudiantil' => 'vida-estudiantil', 'Ecosistema digital' => 'ecosistema-digital',
    ],
    '03 FAMILIA Y COMUNIDAD' => [
        'Admisiones y matrícula' => 'admisiones', 'Portal de padres' => 'portal-padres', 'Contacto y atención' => 'contacto',
    ],
    '04 PRIMARIA' => [
        'Prekínder' => 'prekinder', 'Kínder' => 'kinder', 'Primaria' => 'primaria',
    ],
    '05 SECUNDARIA Y BACHILLERES' => [
        'Secundaria' => 'secundaria', 'Bachilleres' => 'bachilleres',
    ],
];
$position = 1;
foreach ($groups as $groupTitle => $children) {
    $parentId = wp_update_nav_menu_item($primaryId, 0, [
        'menu-item-title' => $groupTitle,
        'menu-item-url' => '#',
        'menu-item-status' => 'publish',
        'menu-item-position' => $position++,
    ]);
    foreach ($children as $label => $slug) {
        wp_update_nav_menu_item($primaryId, 0, [
            'menu-item-title' => $label,
            'menu-item-object' => 'page',
            'menu-item-object-id' => $pageIds[$slug],
            'menu-item-type' => 'post_type',
            'menu-item-parent-id' => $parentId,
            'menu-item-status' => 'publish',
            'menu-item-position' => $position++,
        ]);
    }
}

$utilityName = 'Accesos esenciales BPVDA';
$utilityMenu = wp_get_nav_menu_object($utilityName);
$utilityId = $utilityMenu ? (int) $utilityMenu->term_id : (int) wp_create_nav_menu($utilityName);
foreach ((array) wp_get_nav_menu_items($utilityId) as $item) {
    wp_delete_post($item->ID, true);
}
$utilityItems = [
    'Filosofía' => 'filosofia',
    'Admisiones' => 'admisiones',
    'Contacto' => 'contacto',
    'MATRICÚLATE AQUÍ' => 'admisiones',
];
$position = 1;
foreach ($utilityItems as $label => $slug) {
    wp_update_nav_menu_item($utilityId, 0, [
        'menu-item-title' => $label,
        'menu-item-object' => 'page',
        'menu-item-object-id' => $pageIds[$slug],
        'menu-item-type' => 'post_type',
        'menu-item-status' => 'publish',
        'menu-item-position' => $position++,
    ]);
}

$locations = get_theme_mod('nav_menu_locations', []);
$locations['primary'] = $primaryId;
$locations['utility'] = $utilityId;
set_theme_mod('nav_menu_locations', $locations);

update_option('show_on_front', 'page');
update_option('page_on_front', $pageIds['inicio']);

$sample = get_page_by_path('pagina-ejemplo', OBJECT, 'page');
if ($sample && $sample->post_status !== 'trash') {
    wp_trash_post($sample->ID);
}

flush_rewrite_rules();

$published = get_pages(['post_status' => 'publish']);
echo wp_json_encode([
    'status' => 'ok',
    'publishedPageCount' => count($published),
    'frontPageId' => $pageIds['inicio'],
    'editablePages' => ['Inicio', 'Filosofía', 'Admisiones y matrícula'],
    'staticPages' => count($published) - 3,
    'primaryMenuId' => $primaryId,
    'utilityMenuId' => $utilityId,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL;

