<?php
/**
 * Additional code for the child theme goes in here.
 *
 * @package P4CT
 */

require_once( __DIR__ . '/classes/class-p4ct-site.php' );

$services = [
	'P4CT_Lang',
	'P4CT_Metabox_Register',
	'P4CT_Custom_Post_Type_Register',
	'P4CT_AJAX_Handler',
	'P4CT_ElasticSearch',
	'P4CT_Shortcode',
];

add_action('wp_enqueue_scripts', 'wp_enqueue_tw', 100);
function wp_enqueue_tw(){
	wp_dequeue_script('jquery-core');
	wp_enqueue_script('jquery-core', '/wp-includes/js/jquery/jquery.js',  array(), false, true);
	wp_deregister_script('cssvarsponyfill');
	wp_register_script( 'cssvarsponyfill', 'https://cdnjs.cloudflare.com/ajax/libs/css-vars-ponyfill/2.3.1/css-vars-ponyfill.min.js', [], '2', true );
}

new P4CT_Site( $services );



