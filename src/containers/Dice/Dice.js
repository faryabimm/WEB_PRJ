import React, { Component } from 'react';
import ReactDice from 'react-dice-complete'
import './Dice.css'

class Dice extends Component {

    constructor(props) {
        super(props);
        console.log(props.data_manager);
        this.rollAll.bind(this);
        this.rollDoneCallback.bind(this);

    }

    render() {
        return (
            <div>
                <ReactDice className='Dice1'
                           numDice='1'
                           rollDone={this.rollDoneCallback.bind(this)}
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
        console.log(this.props.data_manager);
        this.props.data_manager.p1_move(num);
    }
}

export default Dice;

