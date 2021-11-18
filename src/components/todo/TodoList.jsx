import { Card } from "react-bootstrap";

const TodoList = ({ todos, deleteTodo }) => {
    const todosList =
        todos && todos.length > 0 ? (

            todos.map((todo, index) => {
                return (
                    <>
                        {todo.title && todo.content
                            ?
                            (
                                <div key={index} className="card w-50 m-auto my-5">
                                    <div class="card-header">
                                        {todo.title}
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">{todo.content}</p>
                                        <button className="btn btn-danger" onClick={() => deleteTodo(index)}><box-icon name='trash' color='#ffffff' size="15px" ></box-icon> Remove</button>
                                    </div>
                                </div>
                            )
                            : ''}
                    </>
                );
            })
        )
            :
            (
                <small className="text-danger">your todo is empty.</small>
            );

    return (
        <div className="text-left">
            {todosList}
        </div>
    );
};

export default TodoList;