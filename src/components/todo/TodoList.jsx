import { Card } from "react-bootstrap";

const TodoList = ({ todos, deleteTodo }) => {
    const todosList =
        todos && todos.length > 0 ? (

            todos.map((todo, index) => {
                return (
                        <Card key={index} className="w-50 m-auto my-5">
                            <span className="bg-light">
                                <Card.Header>{todo.title}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {todo.content}
                                    </Card.Text>
                                    <button className="btn btn-danger" onClick={() => deleteTodo(index)}>Remove</button>
                                </Card.Body>
                            </span>
                        </Card>
                );
            })
        )
            :
            (
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