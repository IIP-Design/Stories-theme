<?php

add_action( 'template_redirect', 'four_oh_four_redirect' );
add_action( 'wp_enqueue_scripts', 'state_nav_enqueue' );
add_action( 'wp_head', 'add_og_headers' );
add_action( 'wp_head', 'stories_add_styles' );
add_action( 'wp_footer', 'stories_add_scripts' );
add_action( 'admin_menu', 'add_stories_submenu' );
add_action( 'admin_init', 'populate_stories_submenu' );
add_action( 'admin_init', 'define_submenu_fields' );

// Redirect 404 errors to 5G page
function four_oh_four_redirect() {
  if( is_404())
    {
      $page = get_page_by_path( '5g' );
      wp_redirect (get_permalink( $page->ID ) );
      exit();
    }
}

// Enqueue script that controls the replicated state.gov nav
function state_nav_enqueue() {
  wp_enqueue_script( 'state_nav', get_stylesheet_directory_uri() . '/assets/js/policy-bundle.js', array(), null, true );
}

// Add OpenGraph meta properties to the post header
function add_og_headers() {
  global $post;
  if ( is_singular() ) {
    echo '<meta property="og:title" content="U.S. Department of State | ' . get_the_title( $post ) . ' Policy" />';
    echo '<meta property="og:type" content="website" />';
    echo '<meta property="og:url" content="' . get_permalink( $post ) . '" />';
    echo '<meta property="og:image" content="' . get_the_post_thumbnail_url( $post ) . '" />';
  }
}

// Load appropriate stylesheet on policy pages
function stories_add_styles() {
  $source_bucket = get_option( 'stories-bucket' );

  if ( is_page( 'iran' ) ) {
    echo '<link href="https://' . $source_bucket . '.s3.amazonaws.com/microsites/iran/iran.css" rel="stylesheet" />';
  }

  if ( is_page( '5g' ) ) {
    echo '<link href="https://' . $source_bucket . '.s3.amazonaws.com/microsites/fiveg/fiveg.css" rel="stylesheet" />';
  }
}

// Load appropriate script on policy pages
function stories_add_scripts() {
  $source_bucket = get_option( 'stories-bucket' );

  if ( is_page( 'iran' ) ) {
    echo '<script type="text/javascript" src="https://' . $source_bucket . '.s3.amazonaws.com/microsites/iran/iran.js"></script>';
  }

  if ( is_page( '5g' ) ) {
    echo '<script type="text/javascript" src="https://' . $source_bucket . '.s3.amazonaws.com/microsites/fiveg/fiveg.js"></script>';
  }
}

// Register stories submenu
function add_stories_submenu() {
  add_submenu_page(
    'options-general.php',
    __( 'Stories Settings', 'stories' ),
    __( 'Stories Settings', 'stories' ),
    'install_plugins',
    'stories',
    'stories_admin_html'
  );
}

// Create the HTML form which is rendered out in the stories submenu
function stories_admin_html() {
  if ( !current_user_can( 'install_plugins' ) ) {
    return;
  }

  ?>
  <div class="wrap">
    <h1><?= esc_html( get_admin_page_title() ); ?></h1>
    <form action="options.php" method="post">
      <?php
        do_settings_sections( 'stories' );
        settings_fields( 'stories' );
        submit_button( 'Set Bucket' );
      ?>
    </form>
  </div>
  <?php
}

// Create a section in the stories submenu
function populate_stories_submenu() {
  add_settings_section(
    'stories-section',
    __( 'Configure Stories Site', 'stories' ),
    'stories_section_description',
    'stories'
  );
}

// Description for the stories submenu section
function stories_section_description() {
  _e( 'Use the field below specify a source for the scripts and stories for the stories pages.', 'stories' );
}

// Register the fields for stories submenu
function define_submenu_fields() {
  add_settings_field(
    'stories-bucket',
    __( 'Set S3 Bucket:', 'stories' ),
    'stories_input_markup',
    'stories',
    'stories-section',
    array( 'label_for' => 'stories-bucket' )
  );

  register_setting(
    'stories',
    'stories-bucket',
    'sanitize_text_field'
  );
}

// Markup for input field for stories scripts and styles source bucket
function stories_input_markup() {
  $stories_buckets = get_option( 'stories-bucket' );

  $html = '<fieldset>';
    $html .= '<input ';
      $html .= 'class="regular-text" ';
      $html .= 'id="stories-bucket" ';
      $html .= 'name="stories-bucket" ';
      $html .= 'placeholder="iip-design-dev-modules" ';
      $html .= 'type="text" ';
      $html .= 'value="' . $stories_buckets;
    $html .= '">';
  $html .= '</fieldset>';

  echo $html;
}