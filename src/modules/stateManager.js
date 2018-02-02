export const P1_LOGIN = 'modules/P1_LOGIN'
export const P1_LEAVE = 'modules/P1_LEAVE'
export const P1_MOVE_STARTED = 'modules/P1_MOVE_STARTED'
export const P1_MOVE_DONE = 'modules/P1_MOVE_DONE'
export const P1_DICE_CAST_REQUESTED = 'modules/P1_DICE_CAST_REQUESTED'
export const P1_DICE_CAST_DONE = 'modules/P1_DICE_CAST_DONE'
export const P1_WON = 'modules/P1_WON'
export const P1_LADDER = 'modules/P1_LADDER'
export const P1_SNAKE = 'modules/P1_SNAKE'

export const P2_LOGIN = 'modules/P2_LOGIN'
export const P2_LEAVE = 'modules/P2_LEAVE'
export const P2_MOVE_STARTED = 'modules/P2_MOVE_STARTED'
export const P2_MOVE_DONE = 'modules/P2_MOVE_DONE'
export const P2_DICE_CAST_REQUESTED = 'modules/P2_DICE_CAST_REQUESTED'
export const P2_DICE_CAST_DONE = 'modules/P2_DICE_CAST_DONE'
export const P2_WON = 'modules/P2_WON'
export const P2_LADDER = 'modules/P2_LADDER'
export const P2_SNAKE = 'modules/P2_SNAKE'

const initialState = {
    turn:'P1',
    posP1:0,
    posP2:0,
    diceIsDisabled:false,
    P1LoggedIn:false,
    P2LoggedIn:false,
    P1_last_cast:0,
    P2_last_cast:0,
}

let snake_cells = [17, 23, 35, 54, 62, 64, 67, 87, 93, 98];
let ladder_cells = [4, 9, 20, 28, 32, 37, 40, 61, 71, 86];


export default(state=initialState,action) => {

    switch (acton.type){
        case P1_LOGIN:
            return {
                ...state,
                P1LoggedIn:true,
            }

        case P2_LOGIN:
            return {
                ...state,
                P2LoggedIn:true,
            }
        case P1_LEAVE:
            return {
                ...state,
                P1LoggedIn:false,
            }
        case P2_LEAVE:
            return {
                ...state,
                P2LoggedIn:false,
            }

        case P1_MOVE_STARTED:
            return {
                ...state,
                posP1: state.posP1 + action.dice_number,
                diceIsDisabled:true,
            }

        case P2_MOVE_STARTED:
            return {
                ...state,
                posP2: state.posP2 + action.dice_number,
                diceIsDisabled:true,
            }

        case P1_MOVE_DONE:
        case P2_MOVE_DONE:
            return {
                ...state,
                diceIsDisabled: false,
                turn:'P2',
            }

        case P1_DICE_CAST_REQUESTED:
        case P2_DICE_CAST_REQUESTED:
            return {
                ...state,
                diceIsDisabled:true,
            }

        case P1_DICE_CAST_DONE:
        case P2_DICE_CAST_DONE:
            return {
                ...state,
                diceIsDisabled:true,

            }

        case P1_WON:
            return {
                ...state,
            }
        case P2_WON:
            return {
                ...state,
            }
        case P1_LADDER:
            return {
                ...state,
            }
        case P2_LADDER:
            return {
                ...state,
            }
        case P1_SNAKE:
            return {
                ...state,
            }
        case P2_SNAKE:
            return {
                ...state,
            }
    }
}

export const p1_move = (dice_number) => {
    return dispatch => {
        dispatch({
            type: P1_MOVE_STARTED,
            dice_number: dice_number,
        });

        // some other work maybe? definitely!

        dispatch({
            type: P1_MOVE_DONE
        })
    }
};

export const p2_move = (dice_number) => {
    return dispatch => {
        dispatch({
            type: P2_MOVE_STARTED,
            dice_number: dice_number,
        });

        // some other work maybe? definitely!

        dispatch({
            type: P2_MOVE_DONE
        })
    }
};

