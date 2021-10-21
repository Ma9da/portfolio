// import { createStore } from "redux"
const INCREMENT_COUNTER = "INCREMENT_COUNTER"
const DECREMENT_COUNTER = "DECREMENT_COUNTER"
// action 
export const incrementCounter = (payload) => {
    return {
        type: INCREMENT_COUNTER,
        payload
    }
}
export const decrementCounter = (payload) => {
    return {
        type: DECREMENT_COUNTER,
        payload
    }
}
// state 
const initialState = {
    count: 0
}
//Reducer 
export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count + action.payload };
        case DECREMENT_COUNTER:
            return { ...state, count: (state.count > 0 ? state.count - action.payload : state.count) };
        default:
            return state;
    }
}
// store 
// export const store = createStore(counterReducer)