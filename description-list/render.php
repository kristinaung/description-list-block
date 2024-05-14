<?php
/**
 * Description List
 * 
 */

// Define inline styles.
$inline_styles = '
  --term-width: ' . $attributes['termWidth'] . ';
';

$wrapper_attributes = get_block_wrapper_attributes( array(
  'style' => $inline_styles
) );
?>

<dl <?php echo $wrapper_attributes; ?>>
  <?php echo $content; ?>
</dl>
