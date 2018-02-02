import React, { Component } from 'react';
import './Cell.css';
class Cell extends Component{
    constructor(props){
        super(props);
        this.state={
            tar:props.tar,
            num:props.num,
            whichPlayer:'Empty',

        }


    }

    handleEvent(event){

    }

    render(){
        if(this.state.whichPlayer == 'Empty')
            return (
                <div className='each-cell'>
                    {/*{this.state.num}*/}
                </div>)
        else if(this.state.whichPlayer == 'Two')
            return (
                <div className='each-cell'>
                 <img className='img1' src={require('./mohrehDotaii.png')}/>
            </div>)
        else if(this.state.whichPlayer == 'P1')
            return (
                <div className='each-cell'>
                    <img className='img1' src={require('./mohrehSoorati.png')}/>
                </div>)
        else if(this.state.whichPlayer == 'P2')
            return (
                <div className='each-cell'>
                    <img className='img1' src={require('./mohrehSabz.png')}/>
                </div>)

    }

    onClick(){

    }
}

export default Cell;