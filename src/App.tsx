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
              <div className="p-2">First item</div>
              <div className="p-2">Second item</div>
              <div className="p-2">Third item</div>
            </Stack>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>

  );
}

export default App;
