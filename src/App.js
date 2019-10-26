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
      clickedImages: []
    };
  }

  handleCardClick = event => {
    console.log(event.target.value);
    const clickedImageName = event.target.value;
    if (
      this.state.clickedImages.filter(
        imageName => imageName === clickedImageName
      ).length
    ) {
      console.log("filter statement");
      this.setState({
        currentScore: 0,
        isPlaying: false,
        isGuessRight: false,
        imageNamesArray: imageNamesArray,
        clickedImages: []
      });
    } else {
      //  add imageClicked to array:
      const clickedImages = this.state.clickedImages;
      clickedImages.push(clickedImageName);
      console.log(clickedImages);

      //  randomize imageNamesArray
      const randomizedImageNamesArray = this.state.imageNamesArray;
      randomizedImageNamesArray.sort(() => Math.random()-0.5);
      const newScore = this.state.score + 1;
      const topScore =
        newScore > this.state.topScore
          ? this.state.topScore + 1
          : this.state.topScore;

      this.setState(
        {
          currentScore: newScore,
          topScore,
          isPlaying: true,
          isGuessRight: true,
          imageNamesArray: randomizedImageNamesArray,
          clickedImages: clickedImages
        },
        () => console.log(this.state)
      );
    }
  };

  randomizeArray = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;

  //  While there remains elements to shuffle...
    while (0 !== currentIndex) {
      // Select a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // and swap it with current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.currentScore}
          topScore={this.state.topScore}
          isPlaying={this.state.isPlaying}
          isGuessRight={this.state.isGuessRight}
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
