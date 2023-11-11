import { Col, Container, Nav, Row } from "react-bootstrap";
import Icon from "../components/icon.component";
import { Link } from "react-router-dom";

function Footer({ onNavigate }: any) {
    return(
        <Container className="Section">
            <Row>
                <Col>
                    <Container>
                        <h1>Let's make something<br/>amazing together</h1>
                        <h1>Start by<br/>Saying hi</h1>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <h2>Information</h2>
                        <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                            <Link to="/"><p style={{ fontSize: 22, color: "rgb(81, 80, 79)" }} onClick={() => onNavigate("Service")}>Service</p></Link>
                            <Link to="#work-experience"><p style={{ fontSize: 22, color: "rgb(81, 80, 79)" }} onClick={() => onNavigate("About me")}>About me</p></Link>
                            <Link to="/"><p style={{ fontSize: 22, color: "rgb(81, 80, 79)" }} onClick={() => onNavigate("Works")}>Works</p></Link>
                            <Link to="#work-experience"><p style={{ fontSize: 22, color: "rgb(81, 80, 79)" }} onClick={() => onNavigate("Experiences")}>Experiences</p></Link>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", width: "50%"}}>
                            <Link to="mailto: geraldasuncionarron@gmail.com"><Icon name="email" /></Link>
                            <Link to="https://www.linkedin.com/in/geraldasuncion/"><Icon name="linkedin" /></Link>
                            <Link to="https://www.instagram.com/gex_asuncion/"><Icon name="instagram" /></Link>
                            <Link to="https://github.com/geraldasuncionarron"><Icon name="github" /></Link>
                        </div>
                    </Container>
                </Col>
            </Row>
            <p style={{ marginTop: 60, textAlign: "center" }}>Copyright@2023</p>
        </Container>
    );
}

export default Footer;