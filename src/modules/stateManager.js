export const P1_LOGIN = 'modules/P1_LOGIN';
export const P1_LEAVE = 'modules/P1_LEAVE';
export const P1_MOVE_STARTED = 'modules/P1_xMOVE_STARTED';
export const P1_MOVE_DONE = 'modules/P1_MOVE_DONE';
export const P1_DICE_CAST_REQUESTED = 'modules/P1_DICE_CAST_REQUESTED';
export const P1_DICE_CAST_DONE = 'modules/P1_DICE_CAST_DONE';
export const P1_WON = 'modules/P1_WON';
export const P1_LADDER = 'modules/P1_LADDER';
export const P1_SNAKE = 'modules/P1_SNAKE';
export const P2_LOGIN = 'modules/P2_LOGIN';
export const P2_LEAVE = 'modules/P2_LEAVE';
export const P2_MOVE_STARTED = 'modules/P2_MOVE_STARTED';
export const P2_MOVE_DONE = 'modules/P2_MOVE_DONE';
export const P2_DICE_CAST_REQUESTED = 'modules/P2_DICE_CAST_REQUESTED';
export const P2_DICE_CAST_DONE = 'modules/P2_DICE_CAST_DONE';
export const P2_WON = 'modules/P2_WON';
export const P2_LADDER = 'modules/P2_LADDER';
export const P2_SNAKE = 'modules/P2_SNAKE';


const initialState = {
    turn: 'P1',
    posP1: 1,
    posP2: 1,
    diceIsDisabled: false,
    P1LoggedIn: false,
    P2LoggedIn: false,
    P1_last_cast: 0,
    P2_last_cast: 0,
};



export default (state = initialState, action) => {
    switch (action.type) {
        case P1_LOGIN:
            return {
                ...state,
                P1LoggedIn: true,
            };
        case P2_LOGIN:
            return {
                ...state,
                P2LoggedIn: true,
            };
        case P1_LEAVE:
            return {
                ...state,
                P1LoggedIn: false,
            };
        case P2_LEAVE:
            return {
                ...state,
                P2LoggedIn: false,
            };
        case P1_MOVE_STARTED:
            return {
                ...state,
                posP1: state.posP1 + action.dice_number,
                diceIsDisabled: true,
            };
        case P2_MOVE_STARTED:
            return {
                ...state,
                posP2: state.posP2 + action.dice_number,
                diceIsDisabled: true,
            };
        case P1_MOVE_DONE:
            return {
                ...state,
                diceIsDisabled: false,
                turn: 'P2',
            };
        case P2_MOVE_DONE:
            return {
                ...state,
                diceIsDisabled: false,
                turn: 'P1',
            };
        case P1_DICE_CAST_REQUESTED:
        case P2_DICE_CAST_REQUESTED:
            return {
                ...state,
                diceIsDisabled: true,
            };
        case P1_DICE_CAST_DONE:
        case P2_DICE_CAST_DONE:
            return {
                ...state,
                diceIsDisabled: true,
            };
        case P1_WON:
            return {
                ...state,
            };
        case P2_WON:
            return {
                ...state,
            };
        case P1_LADDER:
            return {
                ...state,
            };
        case P2_LADDER:
            return {
                ...state,
            };
        case P1_SNAKE:
            return {
                ...state,
            };
        case P2_SNAKE:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            }
    }
}

// function sleep(milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//         if ((new Date().getTime() - start) > milliseconds){
//             break;
//         }
//     }
// }
export const this_player = (dice_number) => {
    // console.log(`this player req with number ${dice_number}`);
    return dispatch => {
        dispatch({
            type: P1_MOVE_STARTED,
            dice_number: dice_number,
        });

        // some other work maybe? definitely!

        dispatch({
            type: P1_MOVE_DONE
        });
    }
};
export const other_player = (dice_number) => {
    // console.log(`other player req with number ${dice_number}`);
    return dispatch => {
        dispatch({
            type: P2_MOVE_STARTED,
            dice_number: dice_number,
        });

        // some other work maybe? definitely!

        dispatch({
            type: P2_MOVE_DONE
        });
    }
};

