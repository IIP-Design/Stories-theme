<?php

add_action( 'wp_enqueue_scripts', 'iran_enqueue');

function iran_enqueue() {
  if ( is_page( 'iran' ) ) {
    wp_enqueue_script( 'iran', get_stylesheet_directory_uri() . '/includes/stories/iran/iran.js', array(), null, false );
    
    wp_enqueue_style( 'iran', get_stylesheet_directory_uri() . '/includes/stories/iran/iran.css', array(), null, false );
  }
};
