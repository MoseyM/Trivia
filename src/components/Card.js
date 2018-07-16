import React from 'react';
import { Button } from 'react-bootstrap';
import Parser from 'html-react-parser';

export default function Card(props) {
    let card_details = props.info;
    let question = Parser(card_details.question);
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">{card_details.category}</h1>
                </header>
                <p className="card-question">{question}</p>
                <div className="card-buttons">
                    <Button onClick={() => props.setAnswer('True')}>True</Button>
                    <Button onClick={() => props.setAnswer('False')}>False</Button>
                </div>
            </div>
        )
}