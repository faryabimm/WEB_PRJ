export const P1_LOGIN = 'stateManager/P1_LOGIN'
export const P1_LEAVE = 'stateManager/P1_LEAVE'
export const P1_MOVE_STARTED = 'stateManager/P1_MOVE_STARTED'
export const P1_MOVE_DONE = 'stateManager/P1_MOVE_DONE'
export const P1_DICE_CAST_REQUESTED = 'stateManager/P1_DICE_CAST_REQUESTED'
export const P1_DICE_CAST_DONE = 'stateManager/P1_DICE_CAST_DONE'
export const P1_WON = 'stateManager/P1_WON'
export const P1_LADDER = 'stateManager/P1_LADDER'
export const P1_SNAKE = 'stateManager/P1_SNAKE'

export const P2_LOGIN = 'stateManager/P2_LOGIN'
export const P2_LEAVE = 'stateManager/P2_LEAVE'
export const P2_MOVE_STARTED = 'stateManager/P2_MOVE_STARTED'
export const P2_MOVE_DONE = 'stateManager/P2_MOVE_DONE'
export const P2_DICE_CAST_REQUESTED = 'stateManager/P2_DICE_CAST_REQUESTED'
export const P2_DICE_CAST_DONE = 'stateManager/P2_DICE_CAST_DONE'
export const P2_WON = 'stateManager/P2_WON'
export const P2_LADDER = 'stateManager/P2_LADDER'
export const P2_SNAKE = 'stateManager/P2_SNAKE'

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
        case P2_MOVE_STARTED:
            return {
                ...state,
                diceIsDisabled:true,
            }

        case P1_MOVE_DONE:
            return {
                ...state,
                posP1: state.posP1 + state.P1_last_cast,
                diceIsDisabled: false,
                turn:'P2',
            }
        case P2_MOVE_DONE:
            return {
                ...state,
                posP2: state.posP2 + state.P2_last_cast,
                diceIsDisabled: false,
                turn:'P1',
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

