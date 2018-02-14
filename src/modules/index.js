import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import stateManager from './stateManager'

export default combineReducers({
    router: routerReducer,
    stateManager
})
