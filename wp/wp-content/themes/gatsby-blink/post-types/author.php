<?php

/**
 * Registers the `author` post type.
 */
function cpt_author_init() {
	register_post_type( 'cpt_author', array(
		'labels'                => array(
			'name'                  => __( 'Authors', 'gatsby-blink' ),
			'singular_name'         => __( 'Author', 'gatsby-blink' ),
			'all_items'             => __( 'All Authors', 'gatsby-blink' ),
			'archives'              => __( 'Author Archives', 'gatsby-blink' ),
			'attributes'            => __( 'Author Attributes', 'gatsby-blink' ),
			'insert_into_item'      => __( 'Insert into Author', 'gatsby-blink' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Author', 'gatsby-blink' ),
			'featured_image'        => _x( 'Featured Image', 'Author', 'gatsby-blink' ),
			'set_featured_image'    => _x( 'Set featured image', 'Author', 'gatsby-blink' ),
			'remove_featured_image' => _x( 'Remove featured image', 'Author', 'gatsby-blink' ),
			'use_featured_image'    => _x( 'Use as featured image', 'Author', 'gatsby-blink' ),
			'filter_items_list'     => __( 'Filter authors list', 'gatsby-blink' ),
			'items_list_navigation' => __( 'Authors list navigation', 'gatsby-blink' ),
			'items_list'            => __( 'Authors list', 'gatsby-blink' ),
			'new_item'              => __( 'New Author', 'gatsby-blink' ),
			'add_new'               => __( 'Add New', 'gatsby-blink' ),
			'add_new_item'          => __( 'Add New Author', 'gatsby-blink' ),
			'edit_item'             => __( 'Edit Author', 'gatsby-blink' ),
			'view_item'             => __( 'View Author', 'gatsby-blink' ),
			'view_items'            => __( 'View Authors', 'gatsby-blink' ),
			'search_items'          => __( 'Search authors', 'gatsby-blink' ),
			'not_found'             => __( 'No authors found', 'gatsby-blink' ),
			'not_found_in_trash'    => __( 'No authors found in trash', 'gatsby-blink' ),
			'parent_item_colon'     => __( 'Parent Author:', 'gatsby-blink' ),
			'menu_name'             => __( 'Authors', 'gatsby-blink' ),
		),
		'public'                => true,
		'hierarchical'          => false,
		'show_ui'               => true,
		'show_in_nav_menus'     => false,
		'supports'              => array( 'title', 'thumbnail' ),
		'has_archive'           => false,
		'query_var'             => true,
		'menu_position'         => null,
		'menu_icon'             => 'dashicons-admin-users',
		'show_in_rest'          => true,
		'rest_base'             => 'cpt_author',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'show_in_graphql' => true,
		'graphql_single_name' => 'cpt_author',
		'graphql_plural_name' => 'cpt_authors'
	) );

}
add_action( 'init', 'cpt_author_init' );

/**
 * Sets the post updated messages for the `author` post type.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `author` post type.
 */
function cpt_author_updated_messages( $messages ) {
	global $post;

	$permalink = get_permalink( $post );

	$messages['author'] = array(
		0  => '', // Unused. Messages start at index 1.
		/* translators: %s: post permalink */
		1  => sprintf( __( 'Author updated. <a target="_blank" href="%s">View author</a>', 'gatsby-blink' ), esc_url( $permalink ) ),
		2  => __( 'Custom field updated.', 'gatsby-blink' ),
		3  => __( 'Custom field deleted.', 'gatsby-blink' ),
		4  => __( 'Author updated.', 'gatsby-blink' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'Author restored to revision from %s', 'gatsby-blink' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		/* translators: %s: post permalink */
		6  => sprintf( __( 'Author published. <a href="%s">View author</a>', 'gatsby-blink' ), esc_url( $permalink ) ),
		7  => __( 'Author saved.', 'gatsby-blink' ),
		/* translators: %s: post permalink */
		8  => sprintf( __( 'Author submitted. <a target="_blank" href="%s">Preview author</a>', 'gatsby-blink' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
		/* translators: 1: Publish box date format, see https://secure.php.net/date 2: Post permalink */
		9  => sprintf( __( 'Author scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview author</a>', 'gatsby-blink' ),
		date_i18n( __( 'M j, Y @ G:i', 'gatsby-blink' ), strtotime( $post->post_date ) ), esc_url( $permalink ) ),
		/* translators: %s: post permalink */
		10 => sprintf( __( 'Author draft updated. <a target="_blank" href="%s">Preview author</a>', 'gatsby-blink' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
	);

	return $messages;
}
add_filter( 'post_updated_messages', 'cpt_author_updated_messages' );
