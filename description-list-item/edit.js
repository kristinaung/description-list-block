/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { 
  RichText, 
  useBlockProps 
} from '@wordpress/block-editor';

const Edit = ( props ) => {
  const { attributes, setAttributes } = props;
  const { 
    dt, 
    dd
  } = attributes;
  
  const blockProps = useBlockProps();

  const updateDt = ( newDt ) => {
    setAttributes( { dt: newDt } );
  };

  const updateDd = ( newDd ) => {
    setAttributes( { dd: newDd } );
  };

  return (
    <div {...blockProps}>
      <RichText
        tagName="dt"
        onChange={ updateDt }
        value={ dt }
        placeholder={ __( 'Write term...' ) }
        allowedFormats={ [ 'core/bold', 'core/italic' ] }
      />
      <RichText
        tagName="dd"
        onChange={ updateDd }
        value={ dd }
        placeholder={ __( 'Write description...' ) }
        allowedFormats={ [ 'core/bold', 'core/italic' ] }
      />
    </div>
  );
}

export default Edit;