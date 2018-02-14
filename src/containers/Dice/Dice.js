import React, {Component} from 'react';
import ReactDice from 'react-dice-complete'
import './Dice.css'
import {this_player, other_player} from "../../modules/stateManager";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Parse from 'parse';

import {
    APP_ID,
    JS_KEY,
    SERVER_ADDRESS,
    MOVE_LATENCY_MS,
    PRIZE_LATENCY_MS,
    FINAL_CELL_INDEX,
} from '../../config'



Parse.serverURL = SERVER_ADDRESS;
Parse.initialize(APP_ID, JS_KEY);


let prizes = [ 0,   0,   0, 10,   0,  0,   0,   0, 22,  0,
               0,   0,   0,  0,   0,  0, -11,   0,  0, 18,
               0,   0, -20,  0,   0,  0,   0,  48,  0,  0,
               0,  19,   0,  0, -27,  0,  19,   0,  0,  2,
               0,   0,   0,  0,   0,  0,   0,   0,  0,  0,
               0,   0,   0, -6,   0,  0,   0,   0,  0,  0,
              21, -43,   0, -4,   0,  0, -15,   0,  0,  0,
              20,   0,   0,  0,   0,  0,   0,   0,  0,  0,
               0,   0,   0,  0,   0, 10, -62,   0,  0,  0,
               0,   0, -21,  0,   0,  0,   0, -21,  0,  0];

class Dice extends Component {

    constructor(props) {
        super(props);
        this.rollAll.bind(this);
        this.rollDoneCallback.bind(this);

        this.game_id = props.game_id;
        this.player_id = props.player_id;
        this.db_write_handle = Parse.Object.extend("GameSession");
        this.first_roll = true;

        let query = new Parse.Query('GameSession');
        let subscription = query.subscribe();


        subscription.on('create', (object) => {

            let player_id = object.get('playerId');
            let dice_number = object.get('diceNumber');
            let game_id = object.get('gameId');

            if (game_id === props.game_id && player_id !== props.player_id) {

                if (FINAL_CELL_INDEX - props.posP2 >= dice_number) {

                    let i = 1;          // perform action
                    let interval = setInterval(() => {
                        props.other_player(1);
                        if (i >= dice_number) {
                            clearInterval(interval);
                        } else {
                            i++;
                        }
                    }, MOVE_LATENCY_MS);

                    console.log(`other player moved by ${dice_number} cells`);


                    setTimeout(() => {
                        this.other_player_move()
                    }, (dice_number) * MOVE_LATENCY_MS)
                }
            }
        });

    }

    other_player_move () {
        // prizes
        let prize;
        prize = prizes[+this.props.posP2 - 1];
        console.log('props.posP1', +this.props.posP2);
        console.log(prize);
        if (prize !== 0) {
            if (prize > 0) {
                let i = 1;          // perform action
                let interval = setInterval(() => {
                    this.props.other_player(1);
                    if (i >= prize) {
                        clearInterval(interval);
                    } else {
                        i++;
                    }
                }, PRIZE_LATENCY_MS);
            } else {
                let i = 0;          // perform action
                let interval = setInterval(() => {
                    this.props.other_player(-1);
                    if (i <= prize + 1) {
                        clearInterval(interval);
                    } else {
                        i--;
                    }
                }, PRIZE_LATENCY_MS);
            }
            console.log(`other player awarded by ${prize} cells`);
        }
    }

    render() {
        return (
            <div>
                <ReactDice className='Dice1'
                           numDice='1'
                           rollDone={this.rollDoneCallback.bind(this)}
                           ref={dice => this.reactDice = dice}
                           outlineColor={'#777777'}
                           faceColor={'#FBFBFB'}
                           dotColor={'#FF0000'}
                           outline={true}
                           rollTime={1.5}
                />
            </div>
        );
    }

    rollAll() {
        this.reactDice.rollAll()
    }

    rollDoneCallback(num) {
        if (this.first_roll) {
            this.first_roll = false;
            return;
        }

        this.player_move(num, this.player_id);  // save in database

        if (FINAL_CELL_INDEX - this.props.posP1 < num) return;

        let i = 1;          // perform action
        let interval = setInterval(() => {
            this.props.this_player(1);
            if (i >= num) {
                clearInterval(interval);
            } else {
                i++;
            }
        }, MOVE_LATENCY_MS);
        console.log(`this player moved by ${num} cells`);

        setTimeout(() => {
            console.log('timeout finished');
            // prizes
            let prize;
            prize = prizes[+this.props.posP1 - 1];
            if (prize !== 0) {
                // this.player_move(prize, this.player_id);  // save in database
                if (prize > 0) {
                    let i = 1;          // perform action
                    let interval = setInterval(() => {
                        this.props.this_player(1);
                        if (i >= prize) {
                            clearInterval(interval);
                        } else {
                            i++;
                        }
                    }, PRIZE_LATENCY_MS);
                } else {
                    let i = 0;          // perform action
                    let interval = setInterval(() => {
                        this.props.this_player(-1);
                        if (i <= prize + 1) {
                            clearInterval(interval);
                        } else {
                            i--;
                        }
                    }, PRIZE_LATENCY_MS);
                }
                console.log(`this player awarded by ${prize} cells`);
            }
        } , MOVE_LATENCY_MS * (num + 2));

    }

    player_move(dice_number, player_id) {
        let record = new this.db_write_handle();
        record.set("gameId", this.game_id);
        record.set("playerId", player_id);
        record.set("diceNumber", dice_number.toString());

        record.save(null, {
            success: function (move) {
                console.log('New move added to database created with objectId: ' + move.id);
            },
            error: function (gameScore, error) {
                console.error('Failed to create new move, with error code: ' + error.message);
            }
        });
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
const mapDispatchToProps = dispatch => bindActionCreators({
    other_player: other_player,
    this_player: this_player,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dice)

