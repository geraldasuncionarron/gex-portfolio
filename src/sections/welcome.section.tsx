import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';

function Welcome() {
    return (
        <Row>
        <Col style={{ verticalAlign: "center" }}>
            <Stack gap={3}>
                <div className="p-2">
                    <Row>
                        <Col></Col>
                        <Col>
                            <span className='secondary-color' style={{ fontSize: 60, marginLeft: "auto", marginRight: "auto" }} >Hey There,<br />I'm Gerald</span>
                        </Col>
                    </Row>
                </div>
                <div className="p-2">
                    <Row>
                        <Col></Col>
                        <Col>
                            {/*<span className='primary-color' style={{ fontSize: 19 }}>geraldasuncionarron1997@gmail.com</span>*/}
                        </Col>
                    </Row>
                </div>
                <div className="p-2">
                    <Row>
                        <Col>
                            <span className='secondary-color' style={{ fontSize: 80, float: "right" }}>8</span>
                        </Col>
                        <Col>
                            <span className='secondary-color' style={{ fontSize: 35 }}>YEARS<br/> EXPERIENCE</span>
                        </Col>
                    </Row>
                    
                </div>
            </Stack>     
        </Col>
        <Col></Col>
        <Col>
            <Stack gap={5}>
                <div className="p-4">
                    {/*<span className='secondary-color' style={{ fontSize: 30 }}>Phone Number: +39 3282636956</span>*/}        
                </div>
                <div className="p-4">
                    <span className='primary-color' style={{ fontSize: 40, marginLeft: "auto", marginRight: "auto" }}>I create simple website and <br />Apps. And I love what I do</span>
                </div>
            </Stack>
        </Col>
      </Row>
    );
  }
  
  export default Welcome;