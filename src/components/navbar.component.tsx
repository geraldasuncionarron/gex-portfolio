import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavbarHeader() {
    return (
        <Navbar className="Navbar bg-body-tertiary align-center" style={{ marginBottom: 100 }}>
            <Container className='align-center'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="Nav">
                    <Nav.Link className="Nav-title" href="#home">Home</Nav.Link>
                    <Nav.Link className="Nav-title" href="#link">Services</Nav.Link>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="./assets/images/gex.png"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Nav.Link className="Nav-title" href="#link">Works</Nav.Link>
                    <Nav.Link className="Nav-title" href="#link">Experiences</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
  }
  
  export default NavbarHeader;