/**
 * WordPress dependencies.
 */
import { __ } from "@wordpress/i18n";

import {
  InspectorControls,
} from "@wordpress/block-editor";

import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";

const Settings = (props) => {
  const {  attributes, setAttributes } = props;
  const { 
    termWidth
  } = attributes;

  return (
    <>
      <InspectorControls>      
        <PanelBody title={__('Settings', 'description-list')} initialOpen={true}>
          <UnitControl
            label={__('Term Width', 'description-list')}
            __unstableInputWidth="80px"
            value={termWidth}
            min={15}
            max={50}
            onChange={(value) => setAttributes({ termWidth: value })}
            units={[
              { value: '%', label: '%', default: 30 }
            ]}
          />
        </PanelBody>
      </InspectorControls>
    </>
  );
};
export default Settings;
