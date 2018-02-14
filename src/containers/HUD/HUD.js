import React from 'react';

function fetchTurn() {
    return null;
}

function fetchP1Position() {
    return null;
}

function fetchP2Position() {
    return null;
}



class HUD extends React.Component{
    constructor(props){
        super(props);

        this.state={
            Turn:'P1',
            P1CellsLeft:100,
            P2CellsLeft:100,
        }
    }

    render(){
        this.setState({Turn: fetchTurn(), P1CellsLeft: 100 - fetchP1Position(), P2CellsLeft: 100 - fetchP2Position(),});

        <div>
            <div>
                <button>{this.state.Turn}</button>
                <button>{this.state.P1CellsLeft}</button>
                <button>{this.state.P2CellsLeft}</button>
            </div>
        </div>
    }
}