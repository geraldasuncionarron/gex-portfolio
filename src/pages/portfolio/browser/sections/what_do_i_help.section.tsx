import { Col, Container, Fade, ListGroup, Row } from "react-bootstrap";
import IconList from "../components/icon_list.browser.component";
import { forwardRef, useEffect, useRef, useState } from "react";
import { BLACK } from "../../../../config/colors.config";
import List from "../components/list_group.browser.component";

const ListGroupData = [{
    iconName: "react", 
    iconColor: "white", 
    iconBackgroundColor: "#41e0fd", 
    title: "Website", 
    description: "Develop Responsive Website CMS, Portofolio, E-commerce",
    subdescription: "Tech stack: HTML, CSS, ReactJS, AngularJS, Javascript, TS, JQuery"
},{
    iconName: "mobile", 
    iconColor: "white", 
    iconBackgroundColor: "#F0C049", 
    title: "Mobile", 
    description: "Develop App Android/IOS",
    subdescription: "Tech stack: React Native"
},{
    iconName: "server", 
    iconColor: "white", 
    iconBackgroundColor: "#F26440", 
    title: "Backend", 
    description: "Develop Backend secure and clean code",
    subdescription: "Tech stack: NodeJS, NestJS, Express.js, APIs, puppeteer"
},{
    iconName: "database", 
    iconColor: "white", 
    iconBackgroundColor: "#2F7370", 
    title: "Database", 
    description: "Structure Database using SQL Technology",
    subdescription: "Tech stack: MySQL"
}]

function WhatDoIHelp ({}, ref: any) {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = (e: any) => {
            if(e && ref.current) {
                setScrollTop(e.target.documentElement.scrollTop);
                setScrolling(ref.current.offsetTop - (ref.current.clientHeight/2) > e.target.documentElement.scrollTop);
            }
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
        <div className="Section" style={{ backgroundColor: "white" }} ref={ref}>
             <Fade in={!scrolling}>
             <Container>
            <Row>
                <Col lg={6} className='d-none d-lg-block'>
                    <List data={ListGroupData} />
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <Container className="mt-4" style={{ paddingLeft: "20%"}}>
                        <h1 style={{ fontSize: 48, color: BLACK }}>What do I help?</h1>
                        <p className="mt-4" style={{ fontSize: 24, color: BLACK }}>
                        I will help you with finding a solution and resolve your problems. We use coding to create the best products. Besides that also help their business.
                        </p>
                        <p className="mt-4" style={{ fontSize: 24, color: BLACK }}>Let's collaborate so we can have a successfull business together</p>
                    </Container>
                </Col>
                <Col sm={12} md={12} className='d-lg-none'>
                    <List data={ListGroupData} />
                </Col>
            </Row>
            </Container>

             </Fade>

        </div>
    )
}

export default forwardRef(WhatDoIHelp);