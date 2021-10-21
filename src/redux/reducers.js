import {counterReducer} from './counterRedux'
import { todoReducer } from './todoRedux'

import { combineReducers } from 'redux'

export const rootReducers = combineReducers({
    counterReducer,
    todoReducer
})