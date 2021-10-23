// import { createStore } from "redux"

//action
const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"
export const addTodoAcion = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const RemoveTodoAcion = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}
//state
const intialState = {
    todos: [
        {title: "learn redux",
        content: "redux crash course"}
    ]
}
//reducer
export const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(action.payload)
            return { ...state, todos: [...state.todos, action.payload] };
        case REMOVE_TODO:
            return {
                ...state, todos: [...state.todos.filter((todo, i) => i !== action.payload)]
            }
        default:
            return state
    }
}
//store
