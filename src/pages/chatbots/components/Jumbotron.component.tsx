import { Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { BLACK, GRAY } from "../../../config/colors.config";

const JumbotronComponent = styled.div`
    padding-top: 150px;
    padding-bottom: 150px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    background-size: cover;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const SubTitle = styled.p`
    padding-left: 100px;
    padding-right: 100px;
    font-size: 30px;
    margin-top: 30px;
`;

export const Jumbotron = (props: {
    title: string,
    text: string,
    titleButton: string,
    colorButton: string,
    textAlign: any,
    backgroundImage: string
}) => {
    return (
        <JumbotronComponent style={{ backgroundImage: props.backgroundImage }}>
            <Container style={{ textAlign: props.textAlign }}>
                <Title style={{ color: BLACK }}>{props.title}</Title>
                <SubTitle style={{ color: GRAY }}>{props.text}</SubTitle>
                <p>
                <Button style={{ width: 200, height: 60, fontSize: 22, marginTop: 30 }} variant={props.colorButton}>{props.titleButton}</Button>
                </p>
            </Container>
        </JumbotronComponent>
    );
}