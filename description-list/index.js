/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
const { name } = metadata;

registerBlockType(name, {
  ...metadata,
  edit: Edit,
  save: () => <InnerBlocks.Content />,
} );
