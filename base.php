<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>

  <!--[if lt IE 8]>
    <div class="alert alert-warning">
      <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'roots'); ?>
    </div>
  <![endif]-->

  

  <div class="wrap container" role="document">
    <div class="content row">
    
     <div class="col-sm-12 col-md-8 col-md-offset-2">

      <?php 
         do_action('get_header');
         get_template_part('templates/header');
      ?>
           
        <main class="main" role="main">
         <?php include roots_template_path(); ?>
        </main><!-- /.main --></div>

    </div><!-- /.content -->
  </div><!-- /.wrap -->

  <?php get_template_part('templates/footer'); ?>

  <?php wp_footer(); ?>

</body>
</html>
