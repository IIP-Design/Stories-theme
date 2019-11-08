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

    <header id="masthead" class="site-header nav__main-header">

      <div class="nav__utility-wrapper">
        <?php get_template_part( 'partials/state_header' ) ?>
      </div>
      
      <div class="nav__wrapper">
        <?php get_template_part( 'partials/state_nav' ) ?>
        <ul class="nav__header-buttons">
          <li>
            <a class="nav__nav-trigger" href="#nav__primary-nav">Menu<span></span></a>
          </li>
          <li>
            <a class="nav__logo" href="https://www.state.gov">
              <span class="screen-reader-text">State Department Home</span>
            </a>
          </li>
        </ul>
      </div>
    </header>

    <div class="main-content">