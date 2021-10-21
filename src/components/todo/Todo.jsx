import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './Todo.css';
function Todo() {
    const [todos, setTodos] = useState([
        {
            title: "learn node js",
            content: "Lorem ipsum dolor sit amet.",
        },
        {
            title: "go to the sea",
            content: "Lorem ipsum dolor sit amet.",
        },
        {
            title: "walk the dog",
            content: "Lorem ipsum dolor sit amet.",
        },
    ]);

    const addTodo = (task) => {
        setTodos([...todos, task]);
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index))
    }

    return (
        <div className="text-center py-2 todo-wrapper container">
            <h1>To-do List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default Todo;