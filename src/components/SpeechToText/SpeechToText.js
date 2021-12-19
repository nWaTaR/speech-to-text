import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

export class SpeechToText extends React.Component {
  constructor(props) {
    super(props);

    this.speechToTextCanvasRef = React.createRef();
    this.speechToTextCanvasCtx = null;
    this.animationFrameId = null;

    // this.draw = this.draw.bind(this);

    // this.state = {
    //   startingTimestamp: 0,
    //   microphoneData: new Uint8Array(1024),
    // };
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    // const [firstPrevValue] = prevProps.data;
    // const [firstCurrentValue] = this.props.data;

    // if (firstPrevValue !== firstCurrentValue) {
    //   this.drawInitialSpeechToText();
    // }

    // if (
    //   prevProps.isTranscribing === false &&
    //   this.props.isTranscribing === true
    // ) {
    //   this.setStartingTimestamp();
    //   this.draw();
    // } else if (
    //   prevProps.isTranscribing === true &&
    //   this.props.isTranscribing === false
    // ) {
    //   this.stopDrawing();
    // }
  }

  render() {
    // console.log('bbbbbb speechAnalyzer:', this.props);
    const transcript = this.props.speechAnalyzer.speechToText;
    // const searchDummy = [{keyword:"する",position:190,characterString:"前は便器恋するんですよハ"},{keyword:"する",position:239,characterString:"いやそれをするプロヴァン"}]
    var json = this.props.speechAnalyzer.search;
    if (json.length > 1) {
      return (
        <div className="speechToText">
          <p>{ transcript }</p>
          <p> </p>
          <p>DetectionPosition</p>
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
          <p>DetectionPosition</p>
        </div>
      )
    }
  }
  // constructor(props) {
  //   super(props);

  // componentDidMount() {
  //   axios.get(`http://localhost:3000/helloworld`)
  //     .then(res => {
  //       const text = res.data;
  //       this.setState({ text });
  //     })
  // }

  // render() {
  //   return (
  //     <div className="speechToText">
  //       { this.state.text }
  //     </div>
  //   )
  // }
}

SpeechToText.propTypes = {
  speechAnalyzer: PropTypes.arrayOf(PropTypes.object),
};

SpeechToText.defaultProps = {
  speechAnalyzer: '',
};

export default SpeechToText;