import { Container, Nav, Navbar } from 'react-bootstrap';

function NavbarHeader({ onNavigate }: any) {
    return (
        <Navbar className="Navbar bg-body-tertiary align-center" style={{ marginBottom: 100 }}>
            <Container className='align-center'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="Nav">
                    <Nav.Link className="Nav-title" href="#service" onClick={() => onNavigate("Service")}>Service</Nav.Link>
                    <Nav.Link className="Nav-title" href="#about-me" onClick={() => onNavigate("About me")}>About me</Nav.Link>
                    <Navbar.Brand href="#home" onClick={() => onNavigate("Home")}>
                        <Container>
                            <svg style={{ paddingTop: 70 }}>
                                <image href="../assets/images/gex_logo_plain.svg" className='Logo'/>
                            </svg>
                        </Container>
                    </Navbar.Brand>
                    <Nav.Link className="Nav-title" href="#works" onClick={() => onNavigate("Works")}>Works</Nav.Link>
                    <Nav.Link className="Nav-title" href="#experiences" onClick={() => onNavigate("Experiences")}>Experiences</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
  }
  
  export default NavbarHeader;