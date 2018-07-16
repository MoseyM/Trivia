import React, { Component } from 'react';
import Card from './Card';
import Results from './Results';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards:props.cards,
            cnt:1
        }

        this.setUserAnswer = this.setUserAnswer.bind(this);
        this.renderCard = this.renderCard.bind(this);
    }

    renderCard(i) {        
        return (
           <Card info={this.state.cards[i]} setAnswer={this.setUserAnswer}/>
        )
    }

    setUserAnswer(value) {
        let new_count = this.state.cnt + 1
        const new_cards = this.state.cards;
        new_cards[this.state.cnt].verdict = (new_cards[this.state.cnt].correct_answer === value) 
                ? "correct"
                : "incorrect";
        this.setState({
            cnt:new_count,
            cards:new_cards
        })
    }

    render() {
        let text;
        if (this.state.cnt === this.state.cards.length) {
            text = <Results questions={this.state.cards}/>;
        } else {
            const iteration = `${this.state.cnt} of ${this.state.cards.length}`;

            text = <div className="card-box">
                {this.renderCard(this.state.cnt)}
                <p className="App">{iteration}</p>
            </div>;
        }
        return (text);
    }
}
export default Game;