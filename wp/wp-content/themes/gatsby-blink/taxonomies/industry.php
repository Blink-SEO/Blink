<?php

/**
 * Registers the `industry` taxonomy,
 * for use with 'case-study'.
 */
function industry_init() {
	register_taxonomy( 'industry', array( 'case-study' ), array(
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
			'name'                       => __( 'Industries', 'gatsby-blink' ),
			'singular_name'              => _x( 'Industry', 'taxonomy general name', 'gatsby-blink' ),
			'search_items'               => __( 'Search Industries', 'gatsby-blink' ),
			'popular_items'              => __( 'Popular Industries', 'gatsby-blink' ),
			'all_items'                  => __( 'All Industries', 'gatsby-blink' ),
			'parent_item'                => __( 'Parent Industry', 'gatsby-blink' ),
			'parent_item_colon'          => __( 'Parent Industry:', 'gatsby-blink' ),
			'edit_item'                  => __( 'Edit Industry', 'gatsby-blink' ),
			'update_item'                => __( 'Update Industry', 'gatsby-blink' ),
			'view_item'                  => __( 'View Industry', 'gatsby-blink' ),
			'add_new_item'               => __( 'Add New Industry', 'gatsby-blink' ),
			'new_item_name'              => __( 'New Industry', 'gatsby-blink' ),
			'separate_items_with_commas' => __( 'Separate Industries with commas', 'gatsby-blink' ),
			'add_or_remove_items'        => __( 'Add or remove Industries', 'gatsby-blink' ),
			'choose_from_most_used'      => __( 'Choose from the most used Industries', 'gatsby-blink' ),
			'not_found'                  => __( 'No Industries found.', 'gatsby-blink' ),
			'no_terms'                   => __( 'No Industries', 'gatsby-blink' ),
			'menu_name'                  => __( 'Industries', 'gatsby-blink' ),
			'items_list_navigation'      => __( 'Industries list navigation', 'gatsby-blink' ),
			'items_list'                 => __( 'Industries list', 'gatsby-blink' ),
			'most_used'                  => _x( 'Most Used', 'industry', 'gatsby-blink' ),
			'back_to_items'              => __( '&larr; Back to Industries', 'gatsby-blink' ),
		),
		'show_in_rest'      => true,
		'rest_base'         => 'industry',
		'rest_controller_class' => 'WP_REST_Terms_Controller',
		'show_in_graphql' => true,
		'graphql_single_name' => 'industry',
		'graphql_plural_name' => 'industries'
	) );

}
add_action( 'init', 'industry_init' );

/**
 * Sets the post updated messages for the `industry` taxonomy.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `industry` taxonomy.
 */
function industry_updated_messages( $messages ) {

	$messages['industry'] = array(
		0 => '', // Unused. Messages start at index 1.
		1 => __( 'Industry added.', 'gatsby-blink' ),
		2 => __( 'Industry deleted.', 'gatsby-blink' ),
		3 => __( 'Industry updated.', 'gatsby-blink' ),
		4 => __( 'Industry not added.', 'gatsby-blink' ),
		5 => __( 'Industry not updated.', 'gatsby-blink' ),
		6 => __( 'Industries deleted.', 'gatsby-blink' ),
	);

	return $messages;
}
add_filter( 'term_updated_messages', 'industry_updated_messages' );
