import React, {Component} from 'react';
import './Cell.css';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Cell extends Component {
    render() {
        if (+this.props.id === +this.props.posP1) {
            if (+this.props.id === +this.props.posP2) {
                return (
                    <div className='each-cell'>
                        <img className='img1' src={require('./mohrehDotaii.png')}/>
                    </div>
                );
            } else {
                return (
                    <div className='each-cell'>
                        <img className='img1' src={require('./mohrehSoorati.png')}/>
                    </div>
                );
            }
        } else if (+this.props.id === +this.props.posP2) {
            return (
                <div className='each-cell'>
                    <img className='img1' src={require('./mohrehSabz.png')}/>
                </div>
            );
        } else {
            return (
                <div className='each-cell'>
                    {/*{this.state.num}*/}
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    turn: state.stateManager.turn,
    posP1: state.stateManager.posP1,
    posP2: state.stateManager.posP2,
    diceIsDisabled: state.stateManager.diceIsDisabled,
    P1LoggedIn: state.stateManager.P1LoggedIn,
    P2LoggedIn: state.stateManager.P2LoggedIn,
    P1_last_cast: state.stateManager.P1_last_cast,
    P2_last_cast: state.stateManager.P2_last_cast,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
