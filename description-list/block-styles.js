import { registerBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

function registerStyles() {
  registerBlockStyle('native/description-list', {
    name: 'side-by-side',
    label: 'Side by side',
  });
}

domReady(registerStyles);
