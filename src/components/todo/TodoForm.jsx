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
                                    placeholder="todo title..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                            <Form.Control className="mb-3" value={content} onChange={(e) => setContent(e.target.value)} as="textarea" placeholder="todo content.." rows={3} />
                            <button type="submit" class="btn btn-outline-success my-2">Add task <box-icon name='plus-circle' size="15px" type='solid' color='#198754' ></box-icon></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoForm;