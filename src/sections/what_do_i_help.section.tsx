import { Col, Container, ListGroup, Row } from "react-bootstrap";
import IconList from "../pages/browser/components/icon_list.browser.component";
import { forwardRef } from "react";

function WhatDoIHelp ({}, ref: any) {
    return (
        <Container className="Section" ref={ref}>
            <Row>
                <Col sm={6}>
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
                <Col sm={6}>
                    <Container className="mt-4" style={{ paddingLeft: "20%"}}>
                        <h1 style={{ fontSize: 48 }}>What do I help?</h1>
                        <p className="mt-4" style={{ fontSize: 24, color: "rgba(0,0,0,0.8)" }}>
                        I will help you with finding a solution and resolve your problems. We use coding to create the best products. Besides that also help their business.
                        </p>
                        <p className="mt-4" style={{ fontSize: 24, color: "rgba(0,0,0,0.8)" }}>Let's collaborate so we can have a successfull business together</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default forwardRef(WhatDoIHelp);