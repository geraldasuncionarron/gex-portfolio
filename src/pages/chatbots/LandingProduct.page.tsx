import { useRef } from 'react';
import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { Jumbotron } from './components/Jumbotron.component';
import { BLACK, GRAY, LIGHT_GRAY } from '../../config/colors.config';
import styled from 'styled-components';
import Icon from '../portfolio/browser/components/icon.browser.component';
import Touchable from './components/Touchable.component';
import Chat from './components/PersonalBot.component';

const Advantage = styled.div`
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 30px;
    font-size: 19px;
    margin: 0 20px;
    padding: 40px;
    border: 1px solid rgb(68, 66, 68);
    border-radius: 10px
`;

function LandingProduct () {
    const refService = useRef(null);
    const refAboutMe = useRef(null);
    const refWorks = useRef(null);
    const refExperiences = useRef(null);
  
    function onNavigate(section: string) {
      try {
        switch (section) {
          case "Service":
            (refService.current as any).scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            break;
          /*
          case "About me":
            (refAboutMe.current as any).scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            break;
          case "Works":
            (refWorks.current as any).scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            break;
          */
          case "Experiences":
            (refExperiences.current as any).scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(error)
      }

    }

    const expand = 'md'

    return(
            <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
              <Navbar.Brand href="#home">ChatLink</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                  <Nav.Link href="#product" style={{ fontSize: 19, marginRight: 20 }}>Product</Nav.Link>
                  <Nav.Link href="#features" style={{ fontSize: 19, marginRight: 20 }}>Pricing</Nav.Link>
                  <Nav.Link href="#contact" style={{ fontSize: 19, marginRight: 20 }}>Contact</Nav.Link>
                  <Nav.Link href="#contact" style={{ fontSize: 19, marginRight: 20 }}>Log in</Nav.Link>
                </Nav>
                <Nav.Link href="#contact"><Button style={{fontSize: 19 }} variant={"primary"}>Sign up</Button></Nav.Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Jumbotron 
            title="Create your Chatbot"
            text="Botlink is a fast, scalable, and reliable high-level Botchat to help businesses to create their own assistant so they can get more freetime back while they still scaling their business."
            titleButton="Get started"
            colorButton="primary"
            textAlign="center"
            backgroundImage="url('./assets/images/ai_search.jpg')"
          />
          <Container>
            <Container style={{ textAlign: "center"}}>
              <h1 style={{ color: BLACK, marginTop: 50, fontSize: 50 }}>          
                Production ready, <br/>browser as service
              </h1>
              <p style={{ color: GRAY, fontSize: 19 }}>
              There are hidden costs to run your own infrastructure — Give your team extra boost in performance, ease of use, browser automation made simple at cost pricing, full control via API.
              </p>
            </Container>

            <Row style={{ marginTop: 50 }}>
              <Col>
                <Advantage>
                  <b style={{ fontSize: 22 }}>POWERFUL & SCALABLE</b><br />
                  <p style={{ color: GRAY, marginTop: 10 }}>Cloud based solution with superior operational performance.</p>
                </Advantage>
              </Col>
              <Col>
                <Advantage>
                  <b style={{ fontSize: 22 }}>COSTLESS SOLUTION</b><br />
                  <p style={{ color: GRAY, marginTop: 10 }}>Starts free. No upfront costs. Scale the business as you go.</p>
                </Advantage>
              </Col>
              <Col>
                <Advantage>
                  <b style={{ fontSize: 22 }}>GLOBAL LINK</b><br />
                  <p style={{ color: GRAY, marginTop: 10 }}>You can create a custom link and share it to other platforms.</p>
                </Advantage>        
              </Col>
            </Row>
            <Row style={{ marginTop: 50 }}>
              <Col>
                <Advantage>
                  <b style={{ fontSize: 22 }}>FULLY CUSTOMIZIBLE</b><br />
                  <p style={{ color: GRAY, marginTop: 10 }}>Add any information you want the bot will learn.</p>
                </Advantage>
              </Col>
              <Col>
                <Advantage>
                  <b style={{ fontSize: 22 }}>BUSINESS FIRST</b><br />
                  <p style={{ color: GRAY, marginTop: 10 }}>For business, that want to save time while as they work.</p>
                </Advantage>
              </Col>
              <Col>
                <Advantage>
                  <b style={{ fontSize: 22 }}>DECLARATIVE USAGE</b><br />
                  <p style={{ color: GRAY, marginTop: 10 }}>Simple documentation and interactive chat.</p>
                </Advantage>        
              </Col>
            </Row>
          </Container>
          <Container>
            <Container style={{ textAlign: "center", marginTop: 150}}>
              <h1 style={{ color: BLACK, fontSize: 50 }}>          
                Pricing
              </h1>
              <p style={{ color: GRAY, fontSize: 19 }}>
              Every plan comes with API access & 24/7 tech support. Use the <br/>forever free plan to try the service, no credit-card required.
              </p>
            </Container>
            <Row style={{ marginTop: 50 }}>
              <Col>
                <Advantage>
                <h1 style={{ color: BLACK, fontSize: 22, textAlign: "center" }}><b>Starter</b></h1>
                  <p style={{ color: GRAY, textAlign: "center" }}>For Individuals</p>
                  <p style={{ color: GRAY, textAlign: "center" }}><b style={{ fontSize: 48 }}>$39.99</b>/mo</p>
                  <ul>
                    <li>1 active chatbot</li>
                    <li>1,000 valid chats/mo</li>
                    <li>Unlimited number of stories</li>
                    <li>7-day training history</li>
                    <li>All integrations</li>
                    <li>Basic reporting</li>
                    <li>Data security</li>
                  </ul>
                </Advantage>
              </Col>
              <Col>
                <Advantage>
                  <h1 style={{ color: BLACK, fontSize: 22, textAlign: "center" }}><b>Pro</b></h1>
                  <p style={{ color: GRAY, textAlign: "center" }}>For small Business</p>
                  <p style={{ color: GRAY, textAlign: "center"}}><b style={{ fontSize: 48 }}>$99.99</b>/mo</p>
                  <ul>
                    <li>unlimited active chatbot</li>
                    <li>5,000 valid chats/mo</li>
                    <li>Unlimited number of stories</li>
                    <li>Unlimited training history</li>
                    <li>All integrations</li>
                    <li>Advanced reporting</li>
                    <li>Data security</li>
                    <li>Sharable link</li>
                  </ul>
                </Advantage>
              </Col>
              {
                /**
                               <Col>
                <Advantage>
                  <b style={{ fontSize: 22 }}>Enterprice</b><br />
                  <p style={{ color: GRAY, marginTop: 10 }}>$ 399.99/mo</p>
                  <ul>
                    <li>unlimited active chatbot</li>
                    <li>25,000 valid chats/mo</li>
                    <li>Unlimited number of stories</li>
                    <li>Unlimited training history</li>
                    <li>All integrations</li>
                    <li>Advanced reporting</li>
                    <li>Data security</li>
                    <li>Shared link</li>
                  </ul>
                </Advantage>
              </Col>
                 */
              }

            </Row>
          </Container>
          <Container style={{ textAlign: "center", marginTop: 150, marginBottom: 150 }}>
            <h1 style={{ color: BLACK, fontSize: 40, textAlign: "center" }}><b>Opening a ChatBot <br/>account for a client?</b></h1>
            <p style={{ color: GRAY, fontSize: 24, textAlign: "center" }}>Become our Partner and set up your clients' accounts <br />directly in our Partner App.</p>
            <Button style={{ width: 200, height: 60, fontSize: 22, marginTop: 30 }} variant={"primary"}>Join now</Button>
          </Container>
          <Container>
            <hr />
            <p style={{ color: LIGHT_GRAY, fontSize: 14 }}>Copyright © 2024 Text, Inc. All rights reserved</p>
            <p style={{ color: LIGHT_GRAY, fontSize: 14 }}>
            We use cookies and similar technologies to enhance your interactions with our website and Services, including when you reach out to us on chat. 
            This comprises traffic analysis, delivering personalized content, and supporting our marketing efforts. 
            By accessing our website, interacting with our Services, you agree to let us and our partners employ cookies and related technologies on your computer or devices. 
            Click the Cookies Policy to check how you can control the use of cookies through your device. 
            To understand how we process your data, including through cookies, and interactions with us, please read our Privacy Policy.
            </p>
          </Container>
          <Chat />
        </>
  
    )
}

export default LandingProduct;