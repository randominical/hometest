<div class="wrap">
    <h1>My First Plugin</h1>
    <form method="post" action="options.php">
        <?php
        settings_fields( 'mfp_follow_us_options' );
        do_settings_sections( 'mfp_follow_us_options' );

        $twitter = esc_url( get_option( 'mfp_follow_us_twitter', 'https://twitter.com/wpbeginner' ) );
        $facebook = esc_url( get_option( 'mfp_follow_us_facebook', 'https://facebook.com/wpbeginner' ) );
        ?>
        <table class="form-table">
            <tr>
                <th scope="row"><label for="mfp_follow_us_twitter">Twitter URL</label></th>
                <td>
                    <input type="text" name="mfp_follow_us_twitter" id="mfp_follow_us_twitter" value="<?php echo $twitter; ?>" size="60">
                </td>
            </tr>
            <tr>
                <th scope="row"><label for="mfp_follow_us_facebook">Facebook URL</label></th>
                <td>
                    <input type="text" name="mfp_follow_us_facebook" id="mfp_follow_us_facebook" value="<?php echo $facebook; ?>" size="60">
                </td>
            </tr>
        </table>
        <?php submit_button(); ?>
    </form>


</div>