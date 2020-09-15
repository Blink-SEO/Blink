<?php

/**
 * Registers the `service` taxonomy,
 * for use with 'case-study'.
 */
function service_init() {
	register_taxonomy( 'service', array( 'case-study' ), array(
		'hierarchical'      => false,
		'public'            => true,
		'show_in_nav_menus' => true,
		'show_ui'           => true,
		'show_admin_column' => false,
		'query_var'         => true,
		'rewrite'           => true,
		'capabilities'      => array(
			'manage_terms'  => 'edit_posts',
			'edit_terms'    => 'edit_posts',
			'delete_terms'  => 'edit_posts',
			'assign_terms'  => 'edit_posts',
		),
		'labels'            => array(
			'name'                       => __( 'Services', 'gatsby-blink' ),
			'singular_name'              => _x( 'Service', 'taxonomy general name', 'gatsby-blink' ),
			'search_items'               => __( 'Search Services', 'gatsby-blink' ),
			'popular_items'              => __( 'Popular Services', 'gatsby-blink' ),
			'all_items'                  => __( 'All Services', 'gatsby-blink' ),
			'parent_item'                => __( 'Parent Service', 'gatsby-blink' ),
			'parent_item_colon'          => __( 'Parent Service:', 'gatsby-blink' ),
			'edit_item'                  => __( 'Edit Service', 'gatsby-blink' ),
			'update_item'                => __( 'Update Service', 'gatsby-blink' ),
			'view_item'                  => __( 'View Service', 'gatsby-blink' ),
			'add_new_item'               => __( 'Add New Service', 'gatsby-blink' ),
			'new_item_name'              => __( 'New Service', 'gatsby-blink' ),
			'separate_items_with_commas' => __( 'Separate Services with commas', 'gatsby-blink' ),
			'add_or_remove_items'        => __( 'Add or remove Services', 'gatsby-blink' ),
			'choose_from_most_used'      => __( 'Choose from the most used Services', 'gatsby-blink' ),
			'not_found'                  => __( 'No Services found.', 'gatsby-blink' ),
			'no_terms'                   => __( 'No Services', 'gatsby-blink' ),
			'menu_name'                  => __( 'Services', 'gatsby-blink' ),
			'items_list_navigation'      => __( 'Services list navigation', 'gatsby-blink' ),
			'items_list'                 => __( 'Services list', 'gatsby-blink' ),
			'most_used'                  => _x( 'Most Used', 'service', 'gatsby-blink' ),
			'back_to_items'              => __( '&larr; Back to Services', 'gatsby-blink' ),
		),
		'show_in_rest'      => true,
		'rest_base'         => 'service',
		'rest_controller_class' => 'WP_REST_Terms_Controller',
		'show_in_graphql' => true,
		'graphql_single_name' => 'service',
		'graphql_plural_name' => 'services'
	) );

}
add_action( 'init', 'service_init' );

/**
 * Sets the post updated messages for the `service` taxonomy.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `service` taxonomy.
 */
function service_updated_messages( $messages ) {

	$messages['service'] = array(
		0 => '', // Unused. Messages start at index 1.
		1 => __( 'Service added.', 'gatsby-blink' ),
		2 => __( 'Service deleted.', 'gatsby-blink' ),
		3 => __( 'Service updated.', 'gatsby-blink' ),
		4 => __( 'Service not added.', 'gatsby-blink' ),
		5 => __( 'Service not updated.', 'gatsby-blink' ),
		6 => __( 'Services deleted.', 'gatsby-blink' ),
	);

	return $messages;
}
add_filter( 'term_updated_messages', 'service_updated_messages' );
