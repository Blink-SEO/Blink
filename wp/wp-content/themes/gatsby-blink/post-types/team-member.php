<?php

/**
 * Registers the `team member` post type.
 */
function cpt_team_init() {
	register_post_type( 'cpt_team', array(
		'labels'                => array(
			'name'                  => __( 'Team members', 'gatsby-blink' ),
			'singular_name'         => __( 'Team member', 'gatsby-blink' ),
			'all_items'             => __( 'All Team members', 'gatsby-blink' ),
			'archives'              => __( 'Team member Archives', 'gatsby-blink' ),
			'attributes'            => __( 'Team member Attributes', 'gatsby-blink' ),
			'insert_into_item'      => __( 'Insert into Team member', 'gatsby-blink' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Team member', 'gatsby-blink' ),
			'featured_image'        => _x( 'Featured Image', 'Team member', 'gatsby-blink' ),
			'set_featured_image'    => _x( 'Set featured image', 'Team member', 'gatsby-blink' ),
			'remove_featured_image' => _x( 'Remove featured image', 'Team member', 'gatsby-blink' ),
			'use_featured_image'    => _x( 'Use as featured image', 'Team member', 'gatsby-blink' ),
			'filter_items_list'     => __( 'Filter team members list', 'gatsby-blink' ),
			'items_list_navigation' => __( 'Team members list navigation', 'gatsby-blink' ),
			'items_list'            => __( 'Team members list', 'gatsby-blink' ),
			'new_item'              => __( 'New Team member', 'gatsby-blink' ),
			'add_new'               => __( 'Add New', 'gatsby-blink' ),
			'add_new_item'          => __( 'Add New Team member', 'gatsby-blink' ),
			'edit_item'             => __( 'Edit Team member', 'gatsby-blink' ),
			'view_item'             => __( 'View Team member', 'gatsby-blink' ),
			'view_items'            => __( 'View Team members', 'gatsby-blink' ),
			'search_items'          => __( 'Search team members', 'gatsby-blink' ),
			'not_found'             => __( 'No team members found', 'gatsby-blink' ),
			'not_found_in_trash'    => __( 'No team members found in trash', 'gatsby-blink' ),
			'parent_item_colon'     => __( 'Parent Team member:', 'gatsby-blink' ),
			'menu_name'             => __( 'Team members', 'gatsby-blink' ),
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
		'rest_base'             => 'cpt_team',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
		'show_in_graphql' => true,
		'graphql_single_name' => 'cpt_team',
		'graphql_plural_name' => 'cpt_teams'
	) );

}
add_action( 'init', 'cpt_team_init' );

/**
 * Sets the post updated messages for the `team member` post type.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `team member` post type.
 */
function cpt_team_updated_messages( $messages ) {
	global $post;

	$permalink = get_permalink( $post );

	$messages['team member'] = array(
		0  => '', // Unused. Messages start at index 1.
		/* translators: %s: post permalink */
		1  => sprintf( __( 'Team member updated. <a target="_blank" href="%s">View team member</a>', 'gatsby-blink' ), esc_url( $permalink ) ),
		2  => __( 'Custom field updated.', 'gatsby-blink' ),
		3  => __( 'Custom field deleted.', 'gatsby-blink' ),
		4  => __( 'Team member updated.', 'gatsby-blink' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'Team member restored to revision from %s', 'gatsby-blink' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		/* translators: %s: post permalink */
		6  => sprintf( __( 'Team member published. <a href="%s">View team member</a>', 'gatsby-blink' ), esc_url( $permalink ) ),
		7  => __( 'Team member saved.', 'gatsby-blink' ),
		/* translators: %s: post permalink */
		8  => sprintf( __( 'Team member submitted. <a target="_blank" href="%s">Preview team member</a>', 'gatsby-blink' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
		/* translators: 1: Publish box date format, see https://secure.php.net/date 2: Post permalink */
		9  => sprintf( __( 'Team member scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview team member</a>', 'gatsby-blink' ),
		date_i18n( __( 'M j, Y @ G:i', 'gatsby-blink' ), strtotime( $post->post_date ) ), esc_url( $permalink ) ),
		/* translators: %s: post permalink */
		10 => sprintf( __( 'Team member draft updated. <a target="_blank" href="%s">Preview team member</a>', 'gatsby-blink' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
	);

	return $messages;
}
add_filter( 'post_updated_messages', 'cpt_team_updated_messages' );
