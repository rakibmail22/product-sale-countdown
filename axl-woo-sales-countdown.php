<?php
/*
Plugin Name: Axl Woo Sales Countdown
Plugin URI:  https://axlmulat.com
Description: Sales Countdown Timer  is the part of quick act psychology to the customer to buy immediately.
Version:     1.0
Author:      Axl Mulat
Author URI:  https://axlmulat.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: axl-woo-sales-countdown
Domain Path: /languages
*/


add_action('wp_enqueue_scripts', 'shapeSpace_include_custom_jquery');
function shapeSpace_include_custom_jquery() {

				wp_deregister_script('jquery');
				wp_enqueue_script('jquery', path_join(WP_PLUGIN_URL, basename(dirname(__FILE__)). "/js/jquery.1.11.0.min.js"), array(), null, true);

}



add_action( 'wp_enqueue_scripts', 'sales_timer_scripts' );
function sales_timer_scripts() {
				wp_enqueue_script('xcountdown_plugin_min', path_join(WP_PLUGIN_URL, basename(dirname(__FILE__)). "/js/jquery.plugin.min.js"), array("jquery"), '', true); 
				wp_enqueue_script('xcountdown_js_min', path_join(WP_PLUGIN_URL, basename(dirname(__FILE__)). "/js/jquery.countdown.min.js"), array("jquery"), '', true); 
				wp_enqueue_script('xcustom_product_countdown', path_join(WP_PLUGIN_URL, basename(dirname(__FILE__)). "/js/product-countdown.js"), array("jquery"), '', true);
}



add_action( 'woocommerce_after_shop_loop_item_title', 'sales_timer_echo_product', 25 );

function sales_timer_echo_product() {
		
		global $product;
		//global $post;
		$regular_price 	= get_post_meta( $product->get_id(), '_sale_price_dates_to', true );
		//$regular_price 	= get_post_meta( $post->ID, '_sale_price_dates_to', true );
		if(!empty($regular_price)) {
	?>
		<p id="sales_timer_display" style="color:green" data-date="<?php echo date('Y-m-d',$regular_price);?>"></p> 
	<?php
		}
		
} // end function
//add_action( 'woocommerce_single_product_summary', 'sales_timer_echo_product', 12 ); // hook number




