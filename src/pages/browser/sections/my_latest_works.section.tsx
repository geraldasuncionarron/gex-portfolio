import { forwardRef } from "react";
import { Container } from "react-bootstrap";

function MyLatestWork({}, ref: any) {
    return(
        <Container className="Section" ref={ref}>
                <h1 className="Title">My Sample works</h1>
                <p className="Subtitle">
                    I got a job that was in accordance with the salary and field of work. The process <br />of submitting an application was quite cosy.
                </p>
        </Container>
    );
}

export default forwardRef(MyLatestWork);