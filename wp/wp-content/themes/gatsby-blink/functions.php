<?php
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function gatsby_blink_theme_support() {

  /*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// Set post thumbnail size.
	set_post_thumbnail_size( 1200, 9999 );
}
add_action( 'after_setup_theme', 'gatsby_blink_theme_support' );

/**
 * Register the menu to sit in the site header
 */
function gatsby_blink_header_menu() {
	wp_nav_menu(
		array(
			'theme_location' => 'primary',
			'menu_id'        => 'primary-menu',
			'menu_class'     => 'primary__menu',
			'container'      => 'ul',
		)
	);
}

/**
 * Register all navs
 */
register_nav_menus(
	array(
		'primary' => esc_html__( 'Primary', 'gatsby_blink' ),
	)
);

/**
 * Register options page
 */
if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 			=> 'Blog Page',
		'menu_title' 			=> 'Blog Page',
		'menu_slug' 			=> 'blog-page-settings',
		'capability'			=> 'edit_posts',
		'icon_url'				=> 'dashicons-index-card',
		'position' 				=> '20.5',
		'redirect' 				=> true,
		'show_in_graphql' => true,
	));

	acf_add_options_page(array(
		'page_title' 			=> 'Footer',
		'menu_title' 			=> 'Footer',
		'menu_slug' 			=> 'footer-settings',
		'capability'			=> 'edit_posts',
		'icon_url'				=> 'dashicons-location-alt',
		'position' 				=> '20.5',
		'redirect' 				=> true,
		'show_in_graphql' => true,
	));

}

// Register Custom Post types.
require get_template_directory() . '/post-types/case-study.php';
require get_template_directory() . '/post-types/services.php';

// Register custom taxonomies.
require get_template_directory() . '/taxonomies/industry.php';
require get_template_directory() . '/taxonomies/service.php';
