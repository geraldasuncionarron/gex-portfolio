import { Container } from "react-bootstrap";
import VerticalBullet from "../components/vertical_bullet.component";
import { forwardRef } from "react";

function WorkExperience({}, ref: any) {
    return(
        <div style={{ backgroundColor: "#F0EFED"}} id="work-experience" ref={ref}>
            <Container className="Section">
                <h1 className="Title">My Work Experience</h1>
                <VerticalBullet />
            </Container>
        </div>
    );
}

export default forwardRef(WorkExperience);