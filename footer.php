  </div> <!-- End main-content -->
  
  <footer>
    <div class="content-wrap footer-wrap">

      <div class="footer-image">
        <a href="https://state.gov">
          <img src="<?php bloginfo( 'stylesheet_directory' ); ?>/assets/images/dos_seal.png">
        </a>
      </div> <!-- End footer-image -->

      <div class="footer-content">
        <div class="footer-content-top">
        <?php get_template_part( 'partials/callback' ) ?>

        <?php if ( has_nav_menu( 'primary' ) ) { 
          wp_nav_menu( array(
            'container' => "",
            'menu_class' => 'menu-bottom-nav menu-primary',
            'theme_location' => 'primary'
          ) );
        } ?>
        </div>

        <?php if ( has_nav_menu( 'secondary' ) ) { ?>
          <div class="footer-content-bottom">
            <?php wp_nav_menu( array(
              'container' => "",
              'menu_class' => 'menu-bottom-nav menu-secondary',
              'theme_location' => 'secondary'
            ) ); ?>
          </div>
        <?php } ?>
      </div> <!-- End footer-content -->

    </div> <!-- End footer-wrap -->
  </footer>

  <?php wp_footer(); ?>

  </body>
</html>