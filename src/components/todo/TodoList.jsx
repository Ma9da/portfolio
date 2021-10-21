const TodoList = ({ todos, deleteTodo }) => {
    const todosList =
        todos && todos.length > 0 ? (
            todos.map((todo, i) => {
                return (
                    <ul key={i}>
                        <li className="border d-flex">
                            <div className="text">
                                <p>Title : {todo.title}</p>
                                <p>Content : {todo.content}</p>
                                <button onClick={()=>deleteTodo(i)}>X</button>
                            </div>
                        </li>
                    </ul>
                );
            })
        ) : (
           <small className="text-danger">your todo is empty.</small>
        );

    return (
        <div className="text-left">
            <h5 className="mx-5 text-muted">Todos List</h5>
            {todosList}
        </div>
    );
};

export default TodoList;