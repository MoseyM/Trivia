import React from 'react';
import App from '../App.js';
import { Button } from 'react-bootstrap';
import Parser from 'html-react-parser';

export default function Results(props)
{
    // Create the list of questions and results
    const report = props.questions.map(function(obj, key) {
        return (
            <div>
                <p>
                   <span className="verdict-symbol">
                        {obj.verdict == 'correct' ? '+' : '-'}
                    </span>
                    {Parser(obj.question)}
                </p>
            </div>
        )
    });
    // Restart the game - button
    let restart_button = <Button bsStyle="success" onClick={() => window.location.reload()}>PLAY AGAIN?</Button>
    // Create the score text
    let score = props.questions.filter(function(obj) {
        return obj.verdict == 'correct';
    });
    const string_to_use = `You correctly answered ${score.length} of the ${props.questions.length} questions.`

    return (
        <div className="results-box">
            <header className="App-header">
                <h1 className="App-title">Your Results!</h1>
            </header>
            <p className="score-text">{string_to_use}</p>
            {report}
            {restart_button}
        </div>
    )
}