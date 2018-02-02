import React, { Component } from 'react';
import './Cell.css';
class Cell extends Component{
    constructor(props){
        super(props);
        this.state={
            tar:props.tar,
            num:props.num

        }


    }

    render(){
        return <button className='each-cell'>
            {this.state.num}|
            {this.state.tar}
            </button>
    }

    onClick(){

    }
}

export default Cell;