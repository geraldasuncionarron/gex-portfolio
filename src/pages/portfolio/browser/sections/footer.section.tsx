import { Col, Container, Nav, Row } from "react-bootstrap";
import Icon from "../components/icon.browser.component";
import { Link } from "react-router-dom";
import { BLACK } from "../../../../config/colors.config";
import { isBrowser } from "react-device-detect";
import { forwardRef, useEffect, useRef, useState } from "react";

function Footer({ dark, onNavigate }: any) {
    const color = dark ? "white" : BLACK;
    
    return(
        <Container className="Section" style={{ backgroundColor: dark ? BLACK : "#fff"}}>
            <Row>
                <Col>
                    <Container>
                        <h1 style={{ color }}>Let's make something<br/>amazing together</h1>
                        <h1 style={{ color }}>Start by<br/>Saying hi</h1>
                        <div style={{ borderBottom: "1px solid white"}}/>
                    </Container>
                </Col>
                <Col>
                    <Container style={{ paddingTop: "10%" }}>
                        <h2 style={{ color }}>Information</h2>
                        <div style={{ display: "inline-flex", justifyContent: "space-between", minWidth: 250, width: "50%", marginTop: 50 }}>
                            <Link to="mailto: gexdevcode@gmail.com"><Icon name="email" /></Link>
                            <Link to="https://www.linkedin.com/in/geraldasuncion/"><Icon name="linkedin" /></Link>
                            <Link to="https://www.instagram.com/gex_asuncion/"><Icon name="instagram" /></Link>
                            <Link to="https://github.com/GexDevCode"><Icon name="github" /></Link>
                        </div>
                    </Container>
                </Col>
            </Row>
            <p style={{ marginTop: 60, textAlign: "center" }}>Copyright@2023</p>
        </Container>
    );
}

export default forwardRef(Footer);