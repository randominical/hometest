<?php
/* mfp- is the unique prefix we use for this particular plugin */

// Hook to add admin menu
add_action( 'admin_menu', 'mfp_Add_My_Admin_Link' );

// Register settings
add_action( 'admin_init', 'mfp_register_follow_us_links' );

function mfp_register_follow_us_links() {
    register_setting( 'mfp_follow_us_options', 'mfp_follow_us_twitter' );
    register_setting( 'mfp_follow_us_options', 'mfp_follow_us_facebook' );
}

// Add top-level menu in admin
function mfp_Add_My_Admin_Link() {
    add_menu_page(
        'My First Page',             // Page title
        'My First Plugin',           // Menu title
        'manage_options',            // Capability
        'my-plugin-admin-page',      // Menu slug
        'mfp_render_admin_page',     // Function to display content
        'dashicons-admin-generic',   // Icon
        90                           // Position
    );
}

// Render plugin settings page
function mfp_render_admin_page() {
    include plugin_dir_path(__FILE__) . '/mfp-first-acp-page.php';
}

// Append follow message on single posts
add_filter( 'the_content', 'wpb_follow_us' );

function wpb_follow_us( $content ) {
    if ( is_single() ) {
        $twitter = esc_url( get_option( 'mfp_follow_us_twitter', 'https://twitter.com/wpbeginner' ) );
        $facebook = esc_url( get_option( 'mfp_follow_us_facebook', 'https://facebook.com/wpbeginner' ) );

        $message = 'If you liked this article, then please follow us on 
            <a href="' . $twitter . '" target="_blank" rel="nofollow">Twitter</a> 
            and 
            <a href="' . $facebook . '" target="_blank" rel="nofollow">Facebook</a>.';

        $content .= '<p class="follow-us">' . $message . '</p>';
    }

    return $content;
}