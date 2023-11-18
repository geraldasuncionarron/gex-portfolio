import { Col, Container, Row } from "react-bootstrap";
import { forwardRef } from "react";
import { BLACK } from "../../../config/colors.config";

function WhatDoIHelp ({}, ref: any) {
    return (
        <Container className="Section" style={{ backgroundColor: BLACK }}>
        <h1 style={{ paddingTop: 40, textAlign: "center", color: "white" }}>What I do</h1>
          <Row xs="12" style={{ marginTop: 50, marginBottom: 50 }}>
                <Col xs="7" md="auto">
                  <Container>
                    <h2 style={{ fontSize: 19, color: "white" }}>CREATE FANTASTIC</h2>
                    <h1 style={{ fontSize: 42, color: "white" }}>WEBSITE</h1>
                    <hr style={{ color: "white" }}/>
                    <p style={{ textAlign: "left", color: "white" }}>
                        I create responsive website using React technology and 
                        some CSS framework like bootstrap
                    </p>
                  </Container>
                  </Col>
                <Col xs="5" style={{ display: "inline-flex", flexDirection: "row-reverse", paddingRight: 0 }}>
                  
                  <div style={{ 
                    backgroundColor: "#06060E",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10 
                  }}>
                    <img
                        alt="website"
                        src="./assets/images/website.svg"
                        width={150}
                    />
                  </div>
                </Col>
            </Row>
            <Row xs="12" style={{ marginTop: 50, marginBottom: 50 }}>
                  <Col xs="5" style={{ paddingLeft: 0 }}>
                      <img
                          alt="website"
                          src="./assets/images/mobile.jpg"
                          style={{
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10 
                          }}
                          width={150}
                      />
                  </Col>
                  <Col xs="7" md="auto">
                    <Container>
                      <h2 style={{ fontSize: 19, color: "white" }}>CREATE ANDROID/IOS</h2>
                      <h1 style={{ fontSize: 42, color: "white" }}>APPS</h1>
                      <hr style={{ color: "white" }}/>
                      <p style={{ textAlign: "left", color: "white" }}>
                          I create responsive website using React technology and 
                          some CSS framework like bootstrap
                      </p>
                    </Container>
                    </Col>
              </Row>
              <Row xs="12" style={{ marginTop: 50, marginBottom: 50 }}>
                <Col xs="7" md="auto">
                  <Container>
                    <h2 style={{ fontSize: 19, color: "white" }}>CREATE SERVER-SIDE</h2>
                    <h1 style={{ fontSize: 42, color: "white" }}>BACKEND</h1>
                    <hr style={{ color: "white" }}/>
                    <p style={{ textAlign: "left", color: "white" }}>
                        I sicure and clean backend code with APIs integrations
                    </p>
                  </Container>
                  </Col>
                <Col xs="5"style={{ display: "inline-flex", flexDirection: "row-reverse", paddingRight: 0 }}>
                  
                  <div style={{ 
                    backgroundColor: BLACK,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10 
                  }}>
                    <img
                        alt="website"
                        src="./assets/images/backend.jpg"
                        width={150}
                    />
                  </div>
                </Col>
            </Row>
            <Row xs="12" style={{ marginTop: 50, marginBottom: 50 }}>
                  <Col xs="5" style={{ paddingLeft: 0 }}>
                      <img
                          alt="website"
                          src="./assets/images/database.jpg"
                          style={{
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10 
                          }}
                          width={150}
                      />
                  </Col>
                  <Col xs="7" md="auto">
                    <Container>
                      <h2 style={{ fontSize: 19, color: "white" }}>STRUCTURE DATA</h2>
                      <h1 style={{ fontSize: 42, color: "white" }}>DATABASE</h1>
                      <hr style={{ color: "white" }}/>
                      <p style={{ textAlign: "left", color: "white" }}>
                          I can use Databases SQL and integrate with AWS, GOOGLE or Azure
                      </p>
                    </Container>
                    </Col>
            </Row>
        </Container>
    )
}

export default forwardRef(WhatDoIHelp);