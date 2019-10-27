import React from "react";
import "./HeaderItem.styles.css";

class HeaderItem extends React.Component {

  render() {
  const {itemName, score, topScore, isPlaying, isGuessRight, headerColor} = this.props;
  if (itemName === "score") {
    return (
      <div className="scoreBoard d-flex justify-content-center align-items-center">
        <div className="row">
          <h5 className="m-0 p-0">
            <div>Score: {score}</div>
            <div>Top Score: {topScore}</div>
          </h5>
        </div>
      </div>
    );
  }

  return !isPlaying ? (
    <h5 className="d-flex justify-content-center align-items-center m-0 p-0">
      Click on an image to start playing.
    </h5>
  ) : (
    <h5 className="d-flex justify-content-center align-items-center m-0 p-0" style={{animation: `flash-${headerColor >=1 ? 'green' : 'red'} 200ms`}}>You guessed {isGuessRight ? "right!" : "wrong!"}</h5>
  );
  }
}

export default HeaderItem;
