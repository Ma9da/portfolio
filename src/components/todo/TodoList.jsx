const TodoList = ({ todos, deleteTodo }) => {
    const todosList =
        todos && todos.length > 0 ? (
            todos.map((todo, index) => {
                return (
                    <div key={index}>
                        {todo.title && todo.content
                            ?
                            (
                                <div className="card w-50 m-auto my-5" >
                                    <div className="card-header">
                                        {todo.title}
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{todo.content}</p>
                                        <button className="btn btn-danger" onClick={() => deleteTodo(index)}><box-icon name='trash' color='#ffffff' size="15px" ></box-icon> Remove</button>
                                    </div>
                                </div>
                            )
                            : null}
                    </div>

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