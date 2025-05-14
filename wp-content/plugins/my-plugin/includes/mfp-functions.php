<?php
/*mfp- is the unique prefix we use for this particular plugin*/
/*
 * Add my new menu to the Admin Control Panel
 */
// Hook the 'admin_menu' action hook, run the function named 'mfp_Add_My_Admin_Link()'
add_action( 'admin_menu', 'mfp_Add_My_Admin_Link' );

// Add a new top level menu link to the ACP
function mfp_Add_My_Admin_Link()
{
    add_menu_page(
        'My First Page', // Title of the page
        'My First Plugin', // Text to show on the menu link
        'manage_options', // Capability requirement
        'my-plugin-admin-page', // Menu slug (unique identifier)
        'mfp_render_admin_page', // Function to display page content
        'dashicons-admin-generic', // Optional: Icon
        90 // Optional: Position in menu
    );
}

// This function will be called when the menu page is displayed
function mfp_render_admin_page() {
    include plugin_dir_path(__FILE__) . '/mfp-first-acp-page.php';
}
