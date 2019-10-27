import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.component";
import Jumbotron from "./Components/Jumbotron/Jumbotron.component";
import CardCollection from "./Components/CardCollection/CardCollection.component";
import imageNamesArray from "./Assets/ImagesArray";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      topScore: 0,
      isPlaying: false,
      isGuessRight: false,
      imageNamesArray: imageNamesArray,
      clickedImages: [],
      headerColor: 0
    };
  }

  handleCardClick = event => {
    const clickedImageName = event.target.value;

    if (this.state.clickedImages.includes(event.target.value)) {
      // console.log("filter statement");
      this.setState({
        currentScore: 0,
        isGuessRight: false,
        imageNamesArray: imageNamesArray,
        clickedImages: [],
        headerColor: 0
      });
    } else {
      //  add imageClicked to array:
      const clickedImages = this.state.clickedImages;
      clickedImages.push(clickedImageName);
      // console.log(clickedImages);

      //  randomize imageNamesArray
      const randomizedImageNamesArray = this.state.imageNamesArray;
      randomizedImageNamesArray.sort(() => Math.random()-0.5);
      const newScore = this.state.currentScore + 1;
      const topScore =
        newScore > this.state.topScore
          ? newScore
          : this.state.topScore;
      const newHeaderColor = this.state.headerColor + 1;

      this.setState(
        {
          currentScore: newScore,
          topScore,
          isPlaying: true,
          isGuessRight: true,
          imageNamesArray: randomizedImageNamesArray,
          clickedImages: clickedImages,
          headerColor: newHeaderColor
        },
        () => {
          if (this.state.currentScore === 12) {
            alert('You Won!');
            window.location.reload();
          }
        }
      );
    }


  };

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.currentScore}
          topScore={this.state.topScore}
          isPlaying={this.state.isPlaying}
          isGuessRight={this.state.isGuessRight}
          headerColor={this.state.headerColor}
        />
        <Jumbotron title="Click each character only once" />
        <CardCollection
          handleCardClick={this.handleCardClick}
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
