import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmission = (e) => {
        e.preventDefault();
        addTodo({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <form onSubmit={handleSubmission}>
                            <InputGroup className="mb-3">
                                <FormControl
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="write todo task here..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2" type="submit" className="btn btn-primary">
                                    Add
                                </Button>
                            </InputGroup>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" value={content} onChange={(e) => setContent(e.target.value)}>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoForm;