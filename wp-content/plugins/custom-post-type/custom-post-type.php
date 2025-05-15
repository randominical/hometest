<?php
/**
 * Plugin Name: Custom Post Type
 * Description: A plugin to manage Custom Posts
 * Version: 1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Load CPT registration
require_once plugin_dir_path( __FILE__ ) . 'includes/post-types.php';