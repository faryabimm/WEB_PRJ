import React from 'react';
import {other_player, this_player} from "../../modules/stateManager";


import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class HUD extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let turn = this.props.turn;
        let p1pos = this.props.posP1;
        let p2pos = this.props.posP2;

        return (
            <div>
                <div>
                    <button>{turn}</button>
                    <button>{100 - p1pos}</button>
                    <button>{100 - p2pos}</button>
                </div>
            </div>
        );
    }



}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
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
export default connect(mapStateToProps, mapDispatchToProps)(HUD)