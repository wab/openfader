<?php
/*
Template Name: Soirée
*/
?>

<?php while (have_posts()) : the_post(); ?>

	<?php $lieu = get_field('lieu'); ?>
  
  <div class="jumbotron">
  	<h1 class="text-uppercase"><?php // the_title();?>l<span class="text-primary">o</span>ve <small><span class="glyphicon glyphicon-heart"></span> </small></h1>
  	<h2><?php the_field('date'); ?><br><span class="text-muted"><?php echo $lieu->name; ?></span></h2>
  	<hr>
  	<?php

	// check if the repeater field has rows of data
	if( have_rows('programmation') ): ?>

	<ul class="list-unstyled programmation">
		<?php while ( have_rows('programmation') ) : the_row(); ?>
			<li><span class="glyphicon glyphicon-chevron-right"></span> <?php the_sub_field('artiste');?> <?php if( get_field('live') ) { ?> <em> - live</em> <?php } ?> <span class="text-muted"><?php the_sub_field('label');?></span> <small><?php the_sub_field('pays');?></small></li>
	    <?php endwhile; ?>
	</ul>

	<?php 

	else :

	    // no rows found

	endif;

	?>
	<p><a href="#billeterie" class="btn btn-primary"><span class="glyphicon glyphicon-shopping-cart"></span> Acheter sa place</a></p>
  </div>

  <?php get_template_part('templates/content', 'page'); ?>
<?php endwhile; ?>
