import { Nav } from "react-bootstrap"
import './footer.css'
const Footer = () => {
    return (
        <>
            <>
                <Nav className="justify-content-end bg-dark" id="footer" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </>
        </>
    )
}
export default Footer