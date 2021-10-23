import { Nav } from "react-bootstrap"
import './footer.css'
const Footer = () => {
    return (
        <>
            <>
                <Nav className="justify-content-end bg-dark" id="footer" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/About">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Todo">To-do</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Counter">Counter</Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
        </>
    )
}
export default Footer