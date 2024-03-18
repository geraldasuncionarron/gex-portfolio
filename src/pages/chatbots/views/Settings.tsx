import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ButtonComponent from "../components/button.component";
import { useState } from "react";
import Chat from "../components/Chat";
import { STYLE_PRIMARY_RGBA_PRODUCT } from "../../../config/colors.config";
import { useNavigate } from "react-router";
import Section from "../components/Section.component";

const bots = [{
    agent: "millenial",
    image_url: "../assets/images/bot.png"
},{
    agent: "professional",
    image_url: "../assets/images/bot.png"
}]

const AgentComponent = styled.div`
    padding: 10px;
    margin: 0 10px;
`

const ImageBot = styled.img`
    width: 40px; 
    height: 40px; 
    border-radius: 50%;
    border: 1px solid black;
    padding: 5px;
`
function Settings() {
    const [settings, setSettings] = useState();

    const navigate = useNavigate()

    const onSave = () => {
        navigate("/admin/create")
    }

    return(
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between" }}>
                <h1 style={{ textAlign: "left" }}>Settings</h1>
                <ButtonComponent text={"Save"} style={{...STYLE_PRIMARY_RGBA_PRODUCT}} onClick={onSave} />
            </div>

            <Section style={{ marginTop: 20 }}>
                <h1 style={{ textAlign: "left", fontSize: 19, paddingTop: 10 }}>Try it out some agents</h1>
                <p style={{ textAlign: "left"}} >Find The perfect agent suits to you a </p>
                <div style={{ display: "flex", flexDirection: "row", padding: "10px 0" }}>
                </div>
            </Section>
        </>
    );
}

export default Settings;