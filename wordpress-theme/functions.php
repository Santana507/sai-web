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
