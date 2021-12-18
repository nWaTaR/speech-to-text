import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

// const DATA_POINT_WIDTH = 1;
// const DATA_POINT_HEIGHT = 50;
// const DATA_POINT_MARGIN = 2;
// const DATA_POINT_Y_OFFSET = 50;

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
    console.log('props 1: ', this.props);

  }

  componentDidUpdate(prevProps) {
    console.log('props 2: ', this.props);
    console.log('props 3: ', prevProps);
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
    console.log('bbbbbb speechAnalyzer:', this.props);
    const json = JSON.stringify(this.props.speechAnalyzer);
    return (
      <div className="speechToText">
        <p>{ json }text</p>
      </div>
    )
  }
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     text: null
  //   }; 
  // }

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
  speechAnalyzer: [],
};

export default SpeechToText;