import { Container, Fade } from "react-bootstrap";
import { forwardRef, useEffect, useState } from "react";
import { BLACK } from "../../../config/colors.config";
import VerticalBullet from "../../browser/components/vertical_bullet.browser.component";
import Cards from "../components/cards.mobile.component";

function WorkExperience({}, ref: any) {
    
    return(
            <div className="Section" style={{ backgroundColor: BLACK }} id="work-experience" ref={ref}>
                    <Container>
                        <h1 className="Title">My Work Experience</h1>
                        <Cards />
                    </Container>
            </div>
    );
}

export default forwardRef(WorkExperience);