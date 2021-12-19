import React from 'react';
import PropTypes from 'prop-types';

export class SpeechToText extends React.Component {
  constructor(props) {
    super(props);

    this.speechToTextCanvasRef = React.createRef();
    this.speechToTextCanvasCtx = null;
    this.animationFrameId = null;
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    
  }

  render() {
    const transcript = this.props.speechAnalyzer.speechToText;
    var json = this.props.speechAnalyzer.search;
    if (json.length > 1) {
      return (
        <div className="speechToText">
          <p>{ transcript }</p>
          <br />
          <b>DetectionPosition</b>
          <ol>
            {json.map((d) => (
              <li key={d.position}>文字列の位置: {d.position}, 検索文字: {d.keyword}, 前後5文字含む文字列: {d.characterString}</li>
            ))}
          </ol>
        </div>
      )
    } else {
      return (
        <div className="speechToText">
          <p>{ transcript }</p>
          <br />
          <b>DetectionPosition</b>
        </div>
      )
    }
  }
}

SpeechToText.propTypes = {
  speechAnalyzer: PropTypes.arrayOf(PropTypes.object),
};

SpeechToText.defaultProps = {
  speechAnalyzer: '',
};

export default SpeechToText;