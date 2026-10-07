<?php
/**
 * BPVDA Official WordPress Theme Functions
 *
 * @package BPVDA
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Helper to get asset URI safely.
 */
function bpvda_asset( $path = '' ) {
    return get_template_directory_uri() . '/assets/' . ltrim( $path, '/' );
}

/**
 * Theme Setup
 */
function bpvda_setup() {
    load_theme_textdomain( 'bpvda', get_template_directory() . '/languages' );

    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'wp-block-styles' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'automatic-feed-links' );

    register_nav_menus( array(
        'primary' => __( 'Menú Principal BPVDA', 'bpvda' ),
    ) );
}
add_action( 'after_setup_theme', 'bpvda_setup' );

/**
 * Enqueue scripts and styles.
 */
function bpvda_scripts() {
    // Official Stylesheet
    wp_enqueue_style(
        'bpvda-styles',
        get_stylesheet_uri(),
        array(),
        '2.0.0'
    );

    // Official Main JS (Slider, Modal Menu with ESC, Touch controls)
    wp_enqueue_script(
        'bpvda-main',
        get_template_directory_uri() . '/js/main.js',
        array(),
        '2.0.0',
        true
    );
}
add_action( 'wp_enqueue_scripts', 'bpvda_scripts' );

/**
 * Register Widget Areas.
 */
function bpvda_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Hero / Encabezado Principal', 'bpvda' ),
        'id'            => 'sidebar-hero',
        'description'   => __( 'Widgets para la sección superior de la portada.', 'bpvda' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Filosofía y Propósito BPVDA', 'bpvda' ),
        'id'            => 'sidebar-filosofia',
        'description'   => __( 'Widgets para la sección de propósito, valores y misión.', 'bpvda' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Admisiones y Matrícula', 'bpvda' ),
        'id'            => 'sidebar-admision',
        'description'   => __( 'Widgets para la sección de admisiones.', 'bpvda' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Pie de Página (Footer)', 'bpvda' ),
        'id'            => 'sidebar-footer',
        'description'   => __( 'Widgets en el pie de página.', 'bpvda' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4>',
        'after_title'   => '</h4>',
    ) );
}
add_action( 'widgets_init', 'bpvda_widgets_init' );

/**
 * Register Block Pattern Category.
 */
function bpvda_register_patterns() {
    if ( function_exists( 'register_block_pattern_category' ) ) {
        register_block_pattern_category(
            'bpvda',
            array( 'label' => __( 'BPVDA - Secciones y Widgets', 'bpvda' ) )
        );
    }
}
add_action( 'init', 'bpvda_register_patterns' );

/**
 * Crea automaticamente las paginas del sitio (una por cada HTML original)
 * y define la portada. Se ejecuta una sola vez por version.
 */
function bpvda_create_pages() {
    if ( get_option( 'bpvda_pages_version' ) === '3' ) {
        return;
    }
    $pages = array(
        'quienes-somos'       => '¿Quiénes somos?',
        'filosofia'           => 'Filosofía',
        'instalaciones'       => 'Instalaciones',
        'plantel'             => 'Plantel docente',
        'sai'                 => 'SAI BPVDA',
        'vida-estudiantil'    => 'Vida estudiantil',
        'ecosistema-digital'  => 'Ecosistema digital',
        'admisiones'          => 'Admisiones',
        'portal-padres'       => 'Portal de padres',
        'contacto'            => 'Contacto',
        'prekinder'           => 'Prekínder',
        'kinder'              => 'Kínder',
        'primaria'            => 'Primaria',
        'secundaria'          => 'Secundaria',
        'bachilleres'         => 'Bachilleres',
        'form-nuevo-ingreso'  => 'Formulario nuevo ingreso',
        'form-preingreso'     => 'Formulario preingreso',
    );
    foreach ( $pages as $slug => $title ) {
        if ( ! get_page_by_path( $slug ) ) {
            wp_insert_post( array(
                'post_title'  => $title,
                'post_name'   => $slug,
                'post_status' => 'publish',
                'post_type'   => 'page',
            ) );
        }
    }
    $home = get_page_by_path( 'inicio' );
    if ( ! $home ) {
        $id = wp_insert_post( array(
            'post_title'  => 'Inicio',
            'post_name'   => 'inicio',
            'post_status' => 'publish',
            'post_type'   => 'page',
        ) );
    } else {
        $id = $home->ID;
    }
    update_option( 'show_on_front', 'page' );
    update_option( 'page_on_front', $id );
    update_option( 'permalink_structure', '/%postname%/' );
    flush_rewrite_rules();
    update_option( 'bpvda_pages_version', '3' );
}
add_action( 'init', 'bpvda_create_pages', 20 );
/**
 * Carga el contenido de la portada en Paginas > Inicio como bloques editables.
 * Solo se hace si la pagina esta vacia (no pisa tus ediciones).
 * Para volver a cargar el original: vaciar la pagina Inicio y borrar la opcion bpvda_home_seeded.
 */
function bpvda_seed_home() {
    if ( get_option( 'bpvda_home_seeded' ) === '1' ) {
        return;
    }
    $page = get_page_by_path( 'inicio' );
    $file = get_template_directory() . '/inc/home-blocks.html';
    if ( ! $page || ! file_exists( $file ) ) {
        return;
    }
    if ( trim( $page->post_content ) !== '' ) {
        update_option( 'bpvda_home_seeded', '1' );
        return;
    }
    $content = str_replace(
        array( '{{THEME}}', '{{HOME}}' ),
        array( untrailingslashit( get_template_directory_uri() ), untrailingslashit( home_url() ) ),
        file_get_contents( $file )
    );
    kses_remove_filters();
    wp_update_post( wp_slash( array( 'ID' => $page->ID, 'post_content' => $content ) ) );
    kses_init_filters();
    update_option( 'bpvda_home_seeded', '1' );
}
add_action( 'init', 'bpvda_seed_home', 30 );

/**
 * Los bloques de imagen añaden un <figure>; se neutraliza para no alterar el diseno original.
 */
function bpvda_block_fixes() {
    wp_add_inline_style( 'bpvda-styles', '.wp-block-image{margin:0}' );
}
add_action( 'wp_enqueue_scripts', 'bpvda_block_fixes', 20 );
/**
 * Sin contenedor interno en los grupos: mantiene la estructura HTML original (selectores CSS hijo directo).
 */
function bpvda_no_group_inner_container() {
    remove_filter( 'render_block_core/group', 'wp_restore_group_inner_container', 10 );
}
add_action( 'init', 'bpvda_no_group_inner_container', 5 );