import { Container } from "react-bootstrap";
import Parallax from "../components/parallax.mobile.component";
import { Link } from "react-router-dom";
import Icon from "../../browser/components/icon.browser.component";

function Welcome () {
    return (
        <Parallax>
        <Container style={{ paddingTop: 50 }}>
          <h1 style={{ color: "white" }}>Gerald Asuncion <b>Developer</b></h1>
        </Container>
        <Container className="mt-4" style={{ display: "inline-flex" }}>
          <Container className='link-container'>
            <Link to="mailto: geraldasuncionarron@gmail.com" className='vertical-center'><Icon name="email" color="white" size="2x" /></Link>
            <Link to="https://www.linkedin.com/in/geraldasuncion/" className='vertical-center'><Icon name="linkedin" color="white" size="2x"/></Link>
          </Container>
          <img
              alt="profilo"
              src="./assets/images/profile.png"
              style={{
                borderRadius: "50%"
              }}
              width={100}
              height={100}
          />
          <Container className='link-container'>
            <Link to="https://www.instagram.com/gex_asuncion/"  className='vertical-center'><Icon name="instagram" color="white" size="2x"/></Link>
            <Link to="https://github.com/geraldasuncionarron"  className='vertical-center'><Icon name="github" color="white" size="2x"/></Link>
          </Container>
        </Container>
        <Container className='mt-4'>
          <p style={{ color: "white" }}>
            Hi there! My name is Gerald Asuncion. I'm a fullstack developer from Italy. 
            My passions are create responsive website and application Android/IOS using React technology.
            I'm ready for new cool projects and I'll be glad to listen your ideas or just to have a conversation.
          </p>
          <div style={{ borderBottom: "1px solid white"}}/>
        </Container>
      </Parallax>
    )
}

export default Welcome;