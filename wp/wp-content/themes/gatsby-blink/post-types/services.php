<?php

/**
 * Registers the `service` post type.
 */
function cpt_service_init() {
	register_post_type( 'cpt_service', array(
		'labels'                => array(
			'name'                  => __( 'Services', 'gatsby-blink' ),
			'singular_name'         => __( 'Service', 'gatsby-blink' ),
			'all_items'             => __( 'All Services', 'gatsby-blink' ),
			'archives'              => __( 'Service Archives', 'gatsby-blink' ),
			'attributes'            => __( 'Service Attributes', 'gatsby-blink' ),
			'insert_into_item'      => __( 'Insert into service', 'gatsby-blink' ),
			'uploaded_to_this_item' => __( 'Uploaded to this service', 'gatsby-blink' ),
			'featured_image'        => _x( 'Featured Image', 'service', 'gatsby-blink' ),
			'set_featured_image'    => _x( 'Set featured image', 'service', 'gatsby-blink' ),
			'remove_featured_image' => _x( 'Remove featured image', 'service', 'gatsby-blink' ),
			'use_featured_image'    => _x( 'Use as featured image', 'service', 'gatsby-blink' ),
			'filter_items_list'     => __( 'Filter services list', 'gatsby-blink' ),
			'items_list_navigation' => __( 'Services list navigation', 'gatsby-blink' ),
			'items_list'            => __( 'Services list', 'gatsby-blink' ),
			'new_item'              => __( 'New Service', 'gatsby-blink' ),
			'add_new'               => __( 'Add New', 'gatsby-blink' ),
			'add_new_item'          => __( 'Add New Service', 'gatsby-blink' ),
			'edit_item'             => __( 'Edit Service', 'gatsby-blink' ),
			'view_item'             => __( 'View Service', 'gatsby-blink' ),
			'view_items'            => __( 'View Services', 'gatsby-blink' ),
			'search_items'          => __( 'Search services', 'gatsby-blink' ),
			'not_found'             => __( 'No services found', 'gatsby-blink' ),
			'not_found_in_trash'    => __( 'No services found in trash', 'gatsby-blink' ),
			'parent_item_colon'     => __( 'Parent Service:', 'gatsby-blink' ),
			'menu_name'             => __( 'Services', 'gatsby-blink' ),
		),
		'public'                => true,
		'hierarchical'          => false,
		'show_ui'               => true,
		'show_in_nav_menus'     => true,
		'supports'              => array( 'title', 'editor',  'thumbnail', 'excerpt' ),
		'has_archive'           => true,
		'rewrite'               => array(
			'slug' => 'services'
		),
		'query_var'             => true,
		'menu_position'         => null,
		'menu_icon'             => 'dashicons-forms',
		'show_in_rest'          => true,
		'rest_base'             => 'cpt_service',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'show_in_graphql' => true,
		'graphql_single_name' => 'cpt_service',
		'graphql_plural_name' => 'cpt_services'
	) );

}
add_action( 'init', 'cpt_service_init' );

/**
 * Sets the post updated messages for the `service` post type.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `service` post type.
 */
function cpt_service_updated_messages( $messages ) {
	global $post;

	$permalink = get_permalink( $post );

	$messages['service'] = array(
		0  => '', // Unused. Messages start at index 1.
		/* translators: %s: post permalink */
		1  => sprintf( __( 'Service updated. <a target="_blank" href="%s">View service</a>', 'gatsby-blink' ), esc_url( $permalink ) ),
		2  => __( 'Custom field updated.', 'gatsby-blink' ),
		3  => __( 'Custom field deleted.', 'gatsby-blink' ),
		4  => __( 'Service updated.', 'gatsby-blink' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'Service restored to revision from %s', 'gatsby-blink' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		/* translators: %s: post permalink */
		6  => sprintf( __( 'Service published. <a href="%s">View service</a>', 'gatsby-blink' ), esc_url( $permalink ) ),
		7  => __( 'Service saved.', 'gatsby-blink' ),
		/* translators: %s: post permalink */
		8  => sprintf( __( 'Service submitted. <a target="_blank" href="%s">Preview service</a>', 'gatsby-blink' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
		/* translators: 1: Publish box date format, see https://secure.php.net/date 2: Post permalink */
		9  => sprintf( __( 'Service scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview service</a>', 'gatsby-blink' ),
		date_i18n( __( 'M j, Y @ G:i', 'gatsby-blink' ), strtotime( $post->post_date ) ), esc_url( $permalink ) ),
		/* translators: %s: post permalink */
		10 => sprintf( __( 'Service draft updated. <a target="_blank" href="%s">Preview service</a>', 'gatsby-blink' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
	);

	return $messages;
}
add_filter( 'post_updated_messages', 'cpt_service_updated_messages' );
