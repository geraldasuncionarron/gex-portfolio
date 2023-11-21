import { Col, Container, Fade, ListGroup, Row } from "react-bootstrap";
import IconList from "../pages/browser/components/icon_list.browser.component";
import { forwardRef, useEffect, useRef, useState } from "react";
import { BLACK } from "../config/colors.config";

function WhatDoIHelp ({}, ref: any) {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = (e: any) => {
            console.log(ref);
            setScrollTop(e.target.documentElement.scrollTop);
            setScrolling(ref.current.offsetTop - (ref.current.clientHeight/2) > e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <div className="Section" style={{ backgroundColor: "white" }} ref={ref}>
             <Fade in={!scrolling}>
             <Container>
            <Row>
                <Col lg={6} className='d-none d-lg-block'>
                    <ListGroup as="ol">
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start mt-4"
                            style={{
                                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)"
                            }}
                        >
                            <IconList props={{ name: "mobile" }} style={{
                                color: "white",
                                backgroundColor: "#41e0fd"
                            } }/>
                            <div className="ms-2 me-auto mt-3">
                                <div className="fw-bold">Website</div>
                                Develop Website using React Technology
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start mt-4"
                            style={{
                                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)"
                            }}
                        >
                            <IconList name="mobile" style={{
                                color: "white",
                                backgroundColor: "#F0C049"
                            } }/>
                            <div className="ms-2 me-auto mt-3">
                                <div className="fw-bold">Mobile</div>
                                Develop App Android/IOS using React Technology
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start mt-4"
                            style={{
                                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)"
                            }}
                        >
                            <IconList name="server" style={{
                                color: "white",
                                backgroundColor: "#F26440"
                            } }/>
                            <div className="ms-2 me-auto mt-3">
                                <div className="fw-bold">Backend</div>
                                Develop Backend using NodeJS, ExpressJS, NestJS Technology
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start mt-4"
                            style={{
                                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)"
                            }}
                        >
                            <IconList name="database" style={{
                                color: "white",
                                backgroundColor: "#2F7370"
                            } }/>
                            <div className="ms-2 me-auto mt-3">
                                <div className="fw-bold">Database</div>
                                Structure Database using SQL Technology
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <Container className="mt-4" style={{ paddingLeft: "20%"}}>
                        <h1 style={{ fontSize: 48, color: BLACK }}>What do I help?</h1>
                        <p className="mt-4" style={{ fontSize: 24, color: BLACK }}>
                        I will help you with finding a solution and resolve your problems. We use coding to create the best products. Besides that also help their business.
                        </p>
                        <p className="mt-4" style={{ fontSize: 24, color: BLACK }}>Let's collaborate so we can have a successfull business together</p>
                    </Container>
                </Col>
                <Col sm={12} md={12} className='d-lg-none'>
                    <ListGroup as="ol">
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start mt-4"
                            style={{
                                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)"
                            }}
                        >
                            <IconList props={{ name: "mobile" }} style={{
                                color: "white",
                                backgroundColor: "#41e0fd"
                            } }/>
                            <div className="ms-2 me-auto mt-3">
                                <div className="fw-bold">Website</div>
                                Develop Website using React Technology
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start mt-4"
                            style={{
                                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)"
                            }}
                        >
                            <IconList name="mobile" style={{
                                color: "white",
                                backgroundColor: "#F0C049"
                            } }/>
                            <div className="ms-2 me-auto mt-3">
                                <div className="fw-bold">Mobile</div>
                                Develop App Android/IOS using React Technology
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start mt-4"
                            style={{
                                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)"
                            }}
                        >
                            <IconList name="server" style={{
                                color: "white",
                                backgroundColor: "#F26440"
                            } }/>
                            <div className="ms-2 me-auto mt-3">
                                <div className="fw-bold">Backend</div>
                                Develop Backend using NodeJS, ExpressJS, NestJS Technology
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start mt-4"
                            style={{
                                boxShadow: "0px 5px 10px rgba(0,0,0,0.1)"
                            }}
                        >
                            <IconList name="database" style={{
                                color: "white",
                                backgroundColor: "#2F7370"
                            } }/>
                            <div className="ms-2 me-auto mt-3">
                                <div className="fw-bold">Database</div>
                                Structure Database using SQL Technology
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            </Container>

             </Fade>

        </div>
    )
}

export default forwardRef(WhatDoIHelp);