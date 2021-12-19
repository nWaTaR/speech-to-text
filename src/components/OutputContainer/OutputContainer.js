import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Tile } from 'carbon-components-react';
import SpeechToText from '../SpeechToText';

export const OutputContainer = ({
  speechAnalyzer,
}) => (
  <Tile className="output-container">
    <h3 className="container-title">Output</h3>
    <FormGroup legendText="Transcript">
      <SpeechToText
        speechAnalyzer={speechAnalyzer}
       />
    </FormGroup>
  </Tile>
);

OutputContainer.propTypes = {
  audioAnalyzer: PropTypes.object.isRequired,
  audioDataArray: PropTypes.arrayOf(PropTypes.number),
  audioDuration: PropTypes.number,
  audioSource: PropTypes.string,
  audioWaveContainerRef: PropTypes.object.isRequired,
  isTranscribing: PropTypes.bool,
  keywordInfo: PropTypes.arrayOf(PropTypes.object),
  transcriptArray: PropTypes.arrayOf(PropTypes.object),
  speechAnalyzer: PropTypes.arrayOf(PropTypes.object),
};

OutputContainer.defaultProps = {
  audioDataArray: [],
  audioDuration: 0,
  audioSource: '',
  isTranscribing: false,
  keywordInfo: [],
  transcriptArray: [],
  speechAnalyzer: '',
};

export default OutputContainer;
