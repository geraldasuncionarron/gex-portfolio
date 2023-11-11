import { Container } from "react-bootstrap";
import VerticalBullet from "../components/vertical_bullet.component";

function WorkExperience() {
    return(
        <div style={{ backgroundColor: "#F0EFED"}} id="work-experience">
            <Container className="Section">
                <h1 className="Title">My Work Experience</h1>
                <VerticalBullet />
            </Container>
        </div>
    );
}

export default WorkExperience;