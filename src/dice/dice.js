import React, { Component } from 'react';
import ReactDice from 'react-dice-complete'
import './dice.css'

class dice extends Component {
    render() {
        return (
            <div>
                <ReactDice className='Dice1'
                           numDice='1'
                           rollDone={this.rollDoneCallback}
                           ref={dice => this.reactDice = dice}
                />
            </div>
        );
    }

    rollAll() {
        this.reactDice.rollAll()
    }

    rollDoneCallback(num) {
        console.log(`You rolled a ${num}`)
    }
}

export default dice;

