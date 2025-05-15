<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_action( 'init', 'cpt_register_custom_post_type' );

function cpt_register_custom_post_type() {
     $labels = array(
        'name'          => 'Custom Post Types',
        'singular_name' => 'Custom Post',
        'menu_name'     => 'Custom Posts',
        'add_new'       => 'Add New Custom Post',
        'add_new_item'  => 'Add New Custom Post',
        'new_item'      => 'New Custom Post',
        'edit_item'     => 'Edit Custom Post',
        'view_item'     => 'View Custom Post',
        'all_items'     => 'All Custom Posts',
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt' ),
        'rewrite' => array( 'slug' => 'custom-posts' ),
    );

    register_post_type( 'cpt', $args );
}
