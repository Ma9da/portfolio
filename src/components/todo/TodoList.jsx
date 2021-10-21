import { Card } from "react-bootstrap";

const TodoList = ({ todos, deleteTodo }) => {
    const todosList =
        todos && todos.length > 0 ? (
            todos.map((todo, i) => {
                return (
                    <>
                        <div className="container">
                            <div className="row justify-content-center my-2">
                                <div className="col-5">
                                <Card key={i} className="bg-light">
                            <Card.Header>{todo.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {todo.content}
                                </Card.Text>
                                <button className="btn btn-danger" onClick={() => deleteTodo(i)}>Remove</button>

                            </Card.Body>
                        </Card>
                                </div>
                            </div>
                        </div>
                    </>
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