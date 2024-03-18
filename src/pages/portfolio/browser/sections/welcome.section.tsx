import React, { forwardRef } from 'react';
import { Col, Container, Row, Stack, Image } from 'react-bootstrap';
import Parallax from '../components/parallax.browser.component';
import NavbarHeader from '../components/navbar.browser.component';
import Icon from '../components/icon.browser.component';
import { Link } from 'react-router-dom';


function Welcome({}: any, ref: any) {
    return (
        <>
            <Parallax>
                <NavbarHeader />
                <Row id="home" ref={ref} className='d-none d-lg-flex'>
                    <Col lg={4} style={{ verticalAlign: "center" }}>
                        <Stack gap={3} style={{ paddingLeft: "40%" }}>
                            <div className="p-2">
                                <div style={{ minWidth: 280, display: "inline-flex", float: "right" }}>
                                    <span className='secondary-color fade-in-text' style={{ fontSize: "3vw", float: "right", color: "white" }} >Hey There,<br />I'm Gerald</span>
                                </div>
                            </div>
                            <div className="p-2">
                                <div style={{ minWidth: 280, display: "inline-flex", float: "right" }}>
                                    <span className='secondary-color fade-in-text' style={{ fontSize: "4vw", float: "right", marginRight: 20, color: "white" }}>8</span>
                                    <span className='secondary-color fade-in-text' style={{ fontSize: "2vw", color: "white" }}>YEARS<br/> EXPERIENCE</span>
                                </div>
                            </div>
                        </Stack>     
                    </Col>
                    <Col lg={4}>
                        <div className='Profile d-none d-lg-block'>
                            <Image
                                fluid
                                alt="profilo"
                                src="./assets/images/profile.svg"
                                />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Stack gap={5}>
                            <Container>
                                <div style={{ display: "inline-flex", justifyContent: "space-between", minWidth: 250, width: "50%"}}>
                                    <Link to="mailto: gexdevcode@gmail.com"><Icon name="email" /></Link>
                                    <Link to="https://www.linkedin.com/in/geraldasuncion/"><Icon name="linkedin" /></Link>
                                    <Link to="https://www.instagram.com/gex_asuncion/"><Icon name="instagram" /></Link>
                                    <Link to="https://github.com/GexDevCode"><Icon name="github" /></Link>
                                </div>
                                {/*<span className='secondary-color' style={{ fontSize: 30 }}>Phone Number: +39 3282636956</span>*/}        
                            </Container>
                            <Container style={{ paddingTop: "10%"}}>
                                <p style={{ fontSize: "2vw", color: "white" }}>Full-stack Developer</p>
                                <span className='primary-color fade-in-text' style={{ fontSize: "2vw", marginLeft: "auto", marginRight: "auto" }}>I create website and Apps.<br />And I love what I do</span>
                            </Container>
                        </Stack>
                    </Col>
                </Row>
                <div className='d-lg-none'>
                    <Container className='d-flex' style={{ paddingBottom: 50 }}>
                        <div>
                            <img
                                alt="profilo"
                                src="./assets/images/profile.png"
                                className='Profile-avatar'
                            />
                        </div>
                        <Container>
                            <h1>Gerald Asuncion</h1>
                            <p style={{ fontSize: "2vw", color: "white" }}>Full-Stack Developer</p>
                            <p style={{ fontSize: "2vw", color: "white" }}>8 years of experience</p>
                            <p style={{ fontSize: "2vw", color: "white" }}>I create website and Apps. And I love what I do</p>
                            <div style={{ display: "inline-flex", justifyContent: "space-between", minWidth: 250, width: "50%"}}>
                                <Link to="mailto: gexdevcode@gmail.com"><Icon name="email" color={"white"} /></Link>
                                <Link to="https://www.linkedin.com/in/geraldasuncion/"><Icon name="linkedin" color={"white"} /></Link>
                                <Link to="https://www.instagram.com/gex_asuncion/"><Icon name="instagram" color={"white"} /></Link>
                                <Link to="https://github.com/geraldasuncionarron"><Icon name="github" color={"white"} /></Link>
                            </div>
                        </Container>
                    </Container>
                </div>
            </Parallax>
        </>

    );
  }
  
  export default forwardRef(Welcome);