import { Nav } from "react-bootstrap"
import './footer.css'
const Footer = () => {
    return (
        <>
            <>
                <Nav className="justify-content-center bg-light" id="footer" fixed="bottom" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className="text-dark btn footer-item" href="/About">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-dark btn footer-item" href="/Todo">To-do</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="text-dark btn footer-item" href="/Counter">Counter</Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
        </>
    )
}
export default Footer