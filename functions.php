<?php

add_action( 'wp_enqueue_scripts', 'state_nav_enqueue');
add_action( 'wp_enqueue_scripts', 'fiveg_enqueue');
add_action( 'wp_enqueue_scripts', 'iran_enqueue');

function state_nav_enqueue() {
  wp_enqueue_script( 'state_nav', get_stylesheet_directory_uri() . '/assets/js/policy-bundle.js', array(), null, true );
}

function fiveg_enqueue() {
  if ( is_page( '5g' ) ) {
    wp_enqueue_script( '5g', get_stylesheet_directory_uri() . '/includes/stories/5g/fiveg.js', array(), null, true );
    
    wp_enqueue_style( '5g', get_stylesheet_directory_uri() . '/includes/stories/5g/fiveg.css', array(), null, false );
  }
};

function iran_enqueue() {
  if ( is_page( 'iran' ) ) {
    wp_enqueue_script( 'iran', get_stylesheet_directory_uri() . '/includes/stories/iran/iran.js', array(), null, true );
    
    wp_enqueue_style( 'iran', get_stylesheet_directory_uri() . '/includes/stories/iran/iran.css', array(), null, false );
  }
};

add_action( 'template_redirect', 'four_oh_four_redirect' );
function four_oh_four_redirect() {
  if( is_404())
    {
      $page = get_page_by_path( '5g' );
      wp_redirect (get_permalink( $page->ID ) );
      exit();
    }
}

add_action( 'wp_head', 'add_og_headers');
function add_og_headers() {
  global $post;
  if ( is_singular() ) {
    echo '<meta property="og:title" content="U.S. Department of State | ' . get_the_title( $post ) . ' Policy" />';
    echo '<meta property="og:type" content="website" />';
    echo '<meta property="og:url" content="' . get_permalink( $post ) . '" />';
    echo '<meta property="og:image" content="' . get_the_post_thumbnail_url( $post ) . '" />';
  }
}
