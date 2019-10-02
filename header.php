<!DOCTYPE html>
<html <?php language_attributes(); ?>>

  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme" content="Stories">
    <title><?php bloginfo( 'name' ); ?></title>

    <?php wp_head(); ?>
  </head>

  <body <?php body_class(); ?>>

    <header>
      <div class="content-wrap header-wrap">
        <a class="header-callback" href="https://state.gov">
          <span class="all-caps">U.S. Department</span>
          <span class="italic white-space-pre">of </span>
          <span class="all-caps">State</span>
        </a>

        <div class="top-nav-container">
          
            <?php if ( has_nav_menu('primary') ) { 
              wp_nav_menu( array(
                  'theme_location' => 'primary'
                ) );
            } ?>

        </div> <!-- End top-nav-container -->

      </div> <!-- End header-wrap -->
    </header>

    <div class="main-content">