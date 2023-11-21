import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

function NavbarHeader({ onNavigate }: any) {
    return (
        <Navbar className="Navbar bg-body-tertiary align-center" style={{ marginBottom: 100 }}>
            <Container className='align-center'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="Nav">
                    <Navbar.Brand href="#home" onClick={() => onNavigate("Home")}>
                        <Container>
                            <svg style={{ paddingTop: 70 }}>
                                <image href="../assets/images/gex_logo_plain.svg" className='Logo'/>
                            </svg>
                        </Container>
                    </Navbar.Brand>
                </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
  }
  
  export default NavbarHeader;