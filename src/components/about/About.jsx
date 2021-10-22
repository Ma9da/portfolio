import Button from "@restart/ui/esm/Button"
import { Card, Image } from "react-bootstrap"
import p1 from "./img/p1.jpg";
import cv from './img/Profile.pdf';
import './about.css'
const About = () => {
    return (
        <div className="container">
            <div className="row justify-content-center py-5">
                <div className="col-8 d-flex flex-row my-5 align-items-center">
                    <Card.Img variant="top" src={p1} />
                    <Card.Body>
                        <Card.Title className="p-2 m-2">About <img src="https://img.icons8.com/color/48/000000/reading-unicorn.png" alt="unicorn"/> </Card.Title>
                        <Card.Text>
                            Front-end web developer experienced in building UI with WordPress and creating fully functional WordPress websites, I like both the design aspect because it helps me unleash my creative side while the technical aspect helps me to build logic and solve problems so I find myself enjoying doing both.
                            Working in IT makes it impossible to get enough or stop learning, so I'll always consider myself a full-time student.
                        </Card.Text>
                        <Button className="btn btn-dark" download href={cv}>Download CV</Button>
                        <div className="d-flex py-5">
                            <Image className="icons mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" roundedCircle />
                            <Image className="icons mx-2" src="data:image/png;base64,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" roundedCircle />
                            <Image className="icons mx-2" src="https://i1.wp.com/www.duomimikry.de/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500" roundedCircle />
                            <Image className="icons mx-2" src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" roundedCircle />
                            <Image className="icons mx-2" src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png" roundedCircle />
                            <Image className="icons mx-2" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" roundedCircle />
                            <Image className="icons mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" roundedCircle />
                            <Image className="icons mx-2" src="data:image/png;base64,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" roundedCircle />

                        </div>
                    </Card.Body>
                </div>
            </div>
        </div>
    )
}
export default About