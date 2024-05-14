import { RichText } from '@wordpress/block-editor';

const save = ( props ) => {
  const {
    attributes: { dt, dd },
  } = props;

  return (
    <div>
      <RichText.Content tagName="dt" value={ dt } />
      <RichText.Content tagName="dd" value={ dd } />
    </div>
  );
}
export default save;
