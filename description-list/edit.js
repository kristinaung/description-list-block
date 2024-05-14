/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './block-styles.js';
import Settings from './settings.js';

const Edit = ( props ) => {
  const { attributes, setAttributes } = props;
  const { termWidth } = attributes;

  // Set the allowed_blocks and default template.
  const ALLOWED_BLOCKS =  [
    ['native/description-list-item'],
  ];
  const TEMPLATE = [
    ['native/description-list-item'],
    ['native/description-list-item'],
    ['native/description-list-item'],
  ];

  // Assign CSS variables to attribute settings.
  const inlineStyles = {
    '--term-width': termWidth
  };
  
  // Assign class and styles to the block props.
  const blockProps = useBlockProps({
    style: inlineStyles
  });

  const { children } = useInnerBlocksProps(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  });

  return (
    <>
      <Settings
        attributes={attributes}
        setAttributes={setAttributes}
      />
      <dl { ...blockProps }>
        { children }
      </dl>
    </>
  );
}
export default Edit;
