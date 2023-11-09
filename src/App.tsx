import React from 'react';
import './App.css';
import Main from './components/main.component';
import Welcome from './components/welcome.component';
import NavbarHeader from './components/navbar.component';
import { Col, Container, Row, Stack } from 'react-bootstrap';


function App() {
  return (
    <>
      <Main>
        <NavbarHeader />
        <Welcome />
      </Main>
      <div className='Profile'>
      <img
                    alt="profilo"
                    src="./assets/images/profile.png"
                    className='Profile-img'
                />
      </div>

      <Container>

        <Row>
          <Col md="auto">
            <Stack gap={3}>
              <div className="p-2">
                
              </div>
              <div className="p-2">Second item</div>
              <div className="p-2">Third item</div>
            </Stack>
          </Col>
          <Col></Col>
          <Col md="auto">
            <title>What do I help?</title>
            <p>
              I will help you with finding a solution and resolve your problems. We use coding to create the best products. Besides that also help their business.
              <br></br>
              Let's collaborate so we can have a successfull business together
            </p>
          </Col>
        </Row>
      </Container>
    </>

  );
}

export default App;
