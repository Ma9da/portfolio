import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './navbar.css'
const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand >E-commerce</Navbar.Brand>
                        <Nav.Link  as={Link} to="/About">
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
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar