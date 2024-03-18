import { Alert, Col, Container, Row } from "react-bootstrap"
import { useSDK } from '@metamask/sdk-react';
import Button from "../../../chatbots/components/button.component";
import web3Config from "../../../../config/web3.config";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

interface Message {
    speaker: string
    message: string
    timestamp: number
}

function AIBot () {
    
    const [messages, setMessages] = useState<Message[]>([{
        speaker: "Gex",
        message: "Hello How can I help you?",
        timestamp: new Date().valueOf()
    }]);
    const [currentMessage, setCurrentMessage] = useState("");
    
    const sendMessage = async (message: string, isSpeaker: boolean = true) => {
        const response = await axios.post("http://localhost:3000/openai", {
            data: { message: message }
        });
        console.log(response)
        setMessages([...messages, { speaker: "Gex", message: response.data.message, timestamp: response.data.timestamp }])
    }

 
    return (
    <>
        <Container>
            <image href="../assets/images/bot.png" style={{ width: 50, height: 50 }}/>
        </Container>
        <Row>
            {
                messages.map((message, index) => {
                    return <p style={{ fontSize: 19, textAlign: "center" }}>{message.speaker}: {message.message}</p>
                })
            }
            <input type="text" style={{ width: "100%", marginTop: 20 }} onChange={(event) => setCurrentMessage(event.target.value)} />
            <Button style={{ marginTop: 30}} onClick={() => sendMessage(currentMessage, false)} isLoading={false} color="primary" text="Send Message" />
        </Row>
    </>
    )
}

export default AIBot