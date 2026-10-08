<?php

if (!defined('ABSPATH')) {
    exit;
}

function bpvda_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');
    add_editor_style('css/styles.css');

    register_nav_menus([
        'primary' => __('Menú principal de cinco pilares', 'bpvda'),
        'utility' => __('Accesos esenciales de cabecera', 'bpvda'),
    ]);
}
add_action('after_setup_theme', 'bpvda_setup');

function bpvda_assets(): void
{
    $theme = wp_get_theme();
    wp_enqueue_style('bpvda-styles', get_template_directory_uri() . '/css/styles.css', [], $theme->get('Version'));
    wp_enqueue_script('bpvda-main', get_template_directory_uri() . '/js/main.js', [], $theme->get('Version'), true);
}
add_action('wp_enqueue_scripts', 'bpvda_assets');

function bpvda_menu_items(string $location): array
{
    $locations = get_nav_menu_locations();
    if (empty($locations[$location])) {
        return [];
    }

    $items = wp_get_nav_menu_items($locations[$location]);
    return is_array($items) ? $items : [];
}

function bpvda_render_utility_menu(): void
{
    $items = array_values(array_filter(bpvda_menu_items('utility'), static fn($item) => (int) $item->menu_item_parent === 0));
    foreach ($items as $index => $item) {
        $classes = $index === count($items) - 1 ? ' class="btn-matriculate"' : '';
        printf('<a href="%s"%s>%s</a>', esc_url($item->url), $classes, esc_html($item->title));
    }
}

function bpvda_render_primary_menu(): void
{
    $items = bpvda_menu_items('primary');
    $groups = array_values(array_filter($items, static fn($item) => (int) $item->menu_item_parent === 0));

    foreach ($groups as $group) {
        echo '<div class="menu-group">';
        printf('<span class="menu-group-title">%s</span>', esc_html($group->title));
        echo '<ul class="menu-list">';
        foreach ($items as $item) {
            if ((int) $item->menu_item_parent !== (int) $group->ID) {
                continue;
            }
            printf(
                '<li><a href="%s" class="menu-link"><span>%s</span> <i class="menu-chevron" aria-hidden="true">↗</i></a></li>',
                esc_url($item->url),
                esc_html($item->title)
            );
        }
        echo '</ul></div>';
    }
}

