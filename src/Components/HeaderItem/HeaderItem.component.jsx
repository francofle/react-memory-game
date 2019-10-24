import React from "react";
import "./HeaderItem.styles.css";

class HeaderItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      topScore: 0,
      isPlaying: false,
      guessResult: false
    };
  }

  render() {
    if (this.props.itemName === "score") {
      return (
        <div className="scoreBoard d-flex justify-content-center align-items-center">
          <h5 className="m-0 p-0">
            Score: {this.state.score} | Top Score: {this.state.topScore}
          </h5>
        </div>
      );
    }


    return !this.state.isPlaying ? (
      <h5 className="d-flex justify-content-center align-items-center m-0 p-0">
        Click on an image to start playing.
      </h5>
    ) : (
      <h5>You guessed {this.state.guessResult ? 'right!' : 'wrong!'}</h5>
    );
  }
}

export default HeaderItem;
