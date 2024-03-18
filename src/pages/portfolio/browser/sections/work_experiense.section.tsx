import { Container, Fade } from "react-bootstrap";
import VerticalBullet from "../components/vertical_bullet.browser.component";
import { forwardRef, useEffect, useState } from "react";
import { BLACK } from "../../../../config/colors.config";

function WorkExperience({}, ref: any) {
    
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = (e: any) => {
            if(e && ref.current) {
                setScrollTop(e.target.documentElement.scrollTop);
                setScrolling(ref.current.offsetTop - 100 > e.target.documentElement.scrollTop);
            }
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return(
            <div className="Section" style={{ backgroundColor: BLACK }} id="work-experience" ref={ref}>
                <Fade in={!scrolling}>
                    <Container>
                        <h1 className="Title" style={{ color: "white" }}>My Work Experience</h1>
                        <VerticalBullet />
                    </Container>
                </Fade>
            </div>
    );
}

export default forwardRef(WorkExperience);