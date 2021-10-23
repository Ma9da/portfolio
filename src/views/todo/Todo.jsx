// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import {addTodoAcion, RemoveTodoAcion } from '../../redux/todoRedux'
import './Todo.css';
function Todo() {
const todoState = useSelector(state => state.todoReducer.todos)
const dispatch = useDispatch([])
    const addTodo = (task) => {
        dispatch(addTodoAcion(task))
    };

    const deleteTodo = (index) => {
        dispatch(RemoveTodoAcion(index))// setTodos(todos.filter((todo, i) => i !== index))
    }

    return (
        <div className="text-center py-2 todo-wrapper container">
            <h1>To-do List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList  todos={todoState} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default Todo;