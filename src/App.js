import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Game from './components/Game';
import GameError from './components/GameError';

const API = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showGame: false
    }
    this.startTheGame = this.startTheGame.bind(this);
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({cards: data.results}));
  }

  startTheGame() {
    this.setState({showGame:true});
  }
  render() {
    const static_text = (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to the Trivia Challenge!</h1>
          </header>
          <p className="App-intro">
            You will be presented with 10 True or False questions.
          </p>
          <p>Can you score 100%?</p>
          <Button bsStyle="success" onClick={this.startTheGame}>Begin</Button>
        </div>
      );
    
  const game = (this.state.cards) 
        ? <Game cards={this.state.cards}/>
        : <GameError/>;
   
    return this.state.showGame ? game : static_text;
  }
}

export default App;
