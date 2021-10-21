import { useState } from "react";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import './Todo.css';
function Todo() {
    const [todos, setTodos] = useState([]);

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