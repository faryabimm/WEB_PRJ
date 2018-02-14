import React from 'react';
import {other_player, this_player} from "../../modules/stateManager";
import LeaderBoard from '../../containers/LeaderBoeard/LeaderBoeard'
import './HUD.css'


import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import LeaderBoeard from "../LeaderBoeard/LeaderBoeard";

class HUD extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let turn = this.props.turn;
        let p1pos = this.props.posP1;
        let p2pos = this.props.posP2;

        return (
            <div >
                <div >
                    <div className='buttons-container-2'>
                        <button className='HUD-button'>Turn: {turn}</button>
                        <button className='HUD-button'>Cells Left For P1: {100 - p1pos}</button>
                        <button className='HUD-button'>Cells Left For P2: {100 - p2pos}</button>
                    </div>
                </div>
                <LeaderBoeard/>
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