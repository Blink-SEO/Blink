<?php

/**
 * Registers the `case_study` post type.
 */
function case_study_init() {
	register_post_type( 'case-study', array(
		'labels'                => array(
			'name'                  => __( 'Case Studies', 'gatsby-blink' ),
			'singular_name'         => __( 'Case Study', 'gatsby-blink' ),
			'all_items'             => __( 'All Case Studies', 'gatsby-blink' ),
			'archives'              => __( 'Case Study Archives', 'gatsby-blink' ),
			'attributes'            => __( 'Case Study Attributes', 'gatsby-blink' ),
			'insert_into_item'      => __( 'Insert into Case Study', 'gatsby-blink' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Case Study', 'gatsby-blink' ),
			'featured_image'        => _x( 'Featured Image', 'case-study', 'gatsby-blink' ),
			'set_featured_image'    => _x( 'Set featured image', 'case-study', 'gatsby-blink' ),
			'remove_featured_image' => _x( 'Remove featured image', 'case-study', 'gatsby-blink' ),
			'use_featured_image'    => _x( 'Use as featured image', 'case-study', 'gatsby-blink' ),
			'filter_items_list'     => __( 'Filter Case Studies list', 'gatsby-blink' ),
			'items_list_navigation' => __( 'Case Studies list navigation', 'gatsby-blink' ),
			'items_list'            => __( 'Case Studies list', 'gatsby-blink' ),
			'new_item'              => __( 'New Case Study', 'gatsby-blink' ),
			'add_new'               => __( 'Add New', 'gatsby-blink' ),
			'add_new_item'          => __( 'Add New Case Study', 'gatsby-blink' ),
			'edit_item'             => __( 'Edit Case Study', 'gatsby-blink' ),
			'view_item'             => __( 'View Case Study', 'gatsby-blink' ),
			'view_items'            => __( 'View Case Studies', 'gatsby-blink' ),
			'search_items'          => __( 'Search Case Studies', 'gatsby-blink' ),
			'not_found'             => __( 'No Case Studies found', 'gatsby-blink' ),
			'not_found_in_trash'    => __( 'No Case Studies found in trash', 'gatsby-blink' ),
			'parent_item_colon'     => __( 'Parent Case Study:', 'gatsby-blink' ),
			'menu_name'             => __( 'Case Studies', 'gatsby-blink' ),
		),
		'public'                => true,
		'hierarchical'          => false,
		'show_ui'               => true,
		'show_in_nav_menus'     => true,
		'supports'              => array( 'title', 'editor' ),
		'has_archive'           => true,
		'rewrite'               => true,
		'query_var'             => true,
		'menu_position'         => null,
		'menu_icon'             => 'dashicons-format-aside',
		'show_in_rest'          => true,
		'rest_base'             => 'case-study',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	) );

}
add_action( 'init', 'case_study_init' );

/**
 * Sets the post updated messages for the `case_study` post type.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `case_study` post type.
 */
function case_study_updated_messages( $messages ) {
	global $post;

	$permalink = get_permalink( $post );

	$messages['case-study'] = array(
		0  => '', // Unused. Messages start at index 1.
		/* translators: %s: post permalink */
		1  => sprintf( __( 'Case Study updated. <a target="_blank" href="%s">View Case Study</a>', 'gatsby-blink' ), esc_url( $permalink ) ),
		2  => __( 'Custom field updated.', 'gatsby-blink' ),
		3  => __( 'Custom field deleted.', 'gatsby-blink' ),
		4  => __( 'Case Study updated.', 'gatsby-blink' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'Case Study restored to revision from %s', 'gatsby-blink' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		/* translators: %s: post permalink */
		6  => sprintf( __( 'Case Study published. <a href="%s">View Case Study</a>', 'gatsby-blink' ), esc_url( $permalink ) ),
		7  => __( 'Case Study saved.', 'gatsby-blink' ),
		/* translators: %s: post permalink */
		8  => sprintf( __( 'Case Study submitted. <a target="_blank" href="%s">Preview Case Study</a>', 'gatsby-blink' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
		/* translators: 1: Publish box date format, see https://secure.php.net/date 2: Post permalink */
		9  => sprintf( __( 'Case Study scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview Case Study</a>', 'gatsby-blink' ),
		date_i18n( __( 'M j, Y @ G:i', 'gatsby-blink' ), strtotime( $post->post_date ) ), esc_url( $permalink ) ),
		/* translators: %s: post permalink */
		10 => sprintf( __( 'Case Study draft updated. <a target="_blank" href="%s">Preview Case Study</a>', 'gatsby-blink' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
	);

	return $messages;
}
add_filter( 'post_updated_messages', 'case_study_updated_messages' );
