/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
const { name } = metadata;

registerBlockType(name, {
  ...metadata,
  edit: Edit,
  save,
} );
