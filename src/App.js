import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.component";
import Jumbotron from "./Components/Jumbotron/Jumbotron.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: {
        currentScore: 0,
        topScore: 0
      },
      isPlaying: false,
      isGuessRight: false
    };
  }
  render() {
    return (
      <div className='App'>
      <Header
        score={this.state.score}
        isPlaying={this.state.isPlaying}
        isGuessRight={this.state.isGuessRight}
      />
      <Jumbotron title="Click each character only once" />
      </div>
    );
  }
}

export default App;
