<?php 
/**
* Plugin Name: RyanairLabs Custom Block
 * Description: RyanairLabs Custom Block for selecting image in a specific size.
* Author: Emmanuel Ogundare
* Version: 1.0.0
*/

function ryanairlabs_custom_block_script_register(){
  wp_enqueue_script(
  'ryanairlabs_custom_block',
  plugin_dir_url(__FILE__) . 'ryanairlabs-block.js',
  array('wp-blocks', 'wp-i18n', 'wp-editor'),
  true
  );
  }
  
  add_action('enqueue_block_editor_assets', 'ryanairlabs_custom_block_script_register');
?>