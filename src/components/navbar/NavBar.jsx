import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './navbar.css'
const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/About">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Shop">
                                Shop
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Counter">
                                Counter
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Todo">
                                Todo list
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                login
                            </Nav.Link>
                            <Nav.Link as={Link} to="/registration">
                                register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar