<?php

add_action( 'wp_enqueue_scripts', 'fiveg_enqueue');
add_action( 'wp_enqueue_scripts', 'iran_enqueue');

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
