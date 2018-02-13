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
        if(this.state.tar === undefined){
            return (
                <div className='center-column'>
                    {/*{this.state.num}*/}
                </div>
            )
        }
        if(this.state.whichPlayer == 'Empty')
            return (
                <div className='each-cell'>
                    {/*{this.state.num}*/}
                </div>)
        else if(this.state.whichPlayer == 'Two')
            return (
                <div className='each-cell'>
                 <img className='img1' src={require('./Twos.png')}/>
            </div>)
        else if(this.state.whichPlayer == 'P1')
            return (
                <div className='each-cell'>
                    <img className='img1' src={require('./Blue.png')}/>
                </div>)
        else if(this.state.whichPlayer == 'P2')
            return (
                <div className='each-cell'>
                    <img className='img1' src={require('./Yellow.png')}/>
                </div>)

    }

    onClick(){

    }
}

export default Cell;