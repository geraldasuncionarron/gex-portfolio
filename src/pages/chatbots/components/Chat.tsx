import styled from "styled-components";
import Touchable from "./Touchable.component";
import Icon from "../../portfolio/browser/components/icon.browser.component";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container, Fade, Row } from "react-bootstrap";
import { BLACK, GRAY, GRAY_BG, GRAY_TEXT, LIGHT_GRAY, PRIMARY, PRIMARY_RGBA, STYLE_PRIMARY_RGB_PRODUCT } from "../../../config/colors.config";
import moment from "moment";
import axios from "axios";
import { HOST } from "../../../config/api.config";
import { useSocket } from "../../../providers/Socket.provider";
import BouncingDotsLoader from "./BouncingLoader.component";
import { ImageBot } from "../../../styled/ImageProfile.styled";


const ChatContainer = styled.div`
    width: 300px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
`

const ChatComponent = styled.div`
    padding: 10px;
    margin: 0;
    border-radius: 10px;
    background-color: white;
    max-width: 300px;
    position: relative;
    top: -20px;
`

const MessageContainer = styled.div`
    width: 100%; 
    display: flex;
    margin: 10px 0;
`
const MessageComponent = styled.div`
    margin: 5px;
    max-width: 200px;
    padding: 0 10px;
    border-radius: 10px;
    margin-top: 0
`

const InputComponent = styled.input`
    border: 1px solid black;
    margin: 5px;
    padding: 0 10px;
    border-radius: 10px;
    padding: 5px 10px;
    &:focus {
        outline: none;
        border: 0;
    }
`

const SendComponent = styled.div`
    margin: 5px;
    padding: 0 10px;
    padding: 5px 10px;
`

const CloseButton = styled.div`
    background-color: ${GRAY}; 
    width: 33px;
    text-align: center;
    border-radius: 20px; 
    font-size: 11px; 
    padding: 3px 6px; 
    margin-bottom: 5px; 
    float: right
`

type Message = {
    message: string
    timestamp_creation: number
    isAI: boolean
}

function Chat ({ agent, active, onClose }: any) {
    const refBottomChat = useRef(null);
    const [chat, setChat] = useState<Message[]>([{
        message: "How can I help you?",
        timestamp_creation: moment().valueOf(),
        isAI: true
    }]);

    const [message, setMessage] = useState<string>("")
    const [loadingResponse, setLoadingResponse] = useState<boolean>(false);
    const socketProvider = useSocket()

    useEffect(() => {

        if(loadingResponse) {
            console.log("Effect active");
            (socketProvider.socket as any).on('events', ({ text }: {
                id: number;
                id_profile: number;
                text: string;
                timestamp: number;
            }) => {
                console.log("Events Chat", text);
                setChat((prev) => [...prev, {
                    message: text,
                    timestamp_creation: moment().valueOf(),
                    isAI: true
                }])
                setLoadingResponse(false);
                
            });
            (socketProvider.socket as any).on('error', (data: any) => {
                console.error("Events Chat", data);
            });
            return () => {
                (socketProvider.socket as any).off("events");
            };
        }
    }, [loadingResponse])

    useEffect(() => {
        console.log("scroll new message...");
        if(refBottomChat.current) {
            (refBottomChat.current as any).scrollIntoView({ behavior: 'smooth' });
        }
    }, [chat])

    const onChange = async (e: any) => {
        setMessage(e.target.value);
    }

    const onKeyDown = async (e: any) => {
        if (e.key === 'Enter') {
            onSend()
        }
    }

    const onSend = () => {
        //post message
        try {
            setChat([...chat, {
                message: message,
                timestamp_creation: moment().valueOf(),
                isAI: false
            }])
            setMessage("");
            setTimeout(() => {
                socketProvider.send({ agent: "custom", name: agent.name, message: message });
            }, 2000);
            setLoadingResponse(true);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            {
                (agent && active) ?
                <>
                    <Fade in={active} timeout={3000}>
                        <ChatContainer>
                            <Container style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5, backgroundColor: PRIMARY, display: "flex", flexDirection: "column", padding: "4vh 1vw", paddingTop: "1ch" }}>
                                <img src="../../assets/images/gex_logo_plain.png" alt="logo" style={{ width: 40 }} />
                                <span style={{ color: "white", fontSize: 16, fontWeight: "bold"}}>TALT TO YOUR CUSTOM AGENT</span>
                                <span style={{  color: "white", fontSize: 14 }}>It will replay instantly...</span>
                            </Container>
                            <Container style={{ backgroundColor: "#f0f0f0" }}>
                            <ChatComponent>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <ImageBot 
                                        src={agent.image_url === "NO_IMAGE" ?  "../assets/images/bot.png" : agent.image_url} 
                                        alt={"agent_" + agent.name}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: 5 }}>
                                        <span style={{ fontWeight: 500 }}>{agent.name}</span>
                                        <span style={{ fontSize: 14 }}>{agent.isOnline ? "Online" : "Offline"}</span>
                                    </div>
                                </div>
                                <hr style={{ borderColor: "#afafaf" }}/>
                                <div style={{
                                        overflow: "hidden",
                                        overflowY: "scroll",
                                        height: 300,
                                        padding: "0 10px"
                                }}>
                                    {
                                        chat.map((msg) => 
                                        <MessageContainer style={{ flexDirection: msg.isAI ? "row" : "row-reverse" }}>
                                            {
                                                msg.isAI ?
                                                <ImageBot 
                                                    src={agent.image_url === "NO_IMAGE" ?  "../assets/images/bot.png" : agent.image_url} 
                                                    alt={"agent_" + agent.name}
                                                /> : null
                                            }
                                            <MessageComponent style={{ 
                                                backgroundColor: msg.isAI ? GRAY_BG : PRIMARY,
                                                float: msg.isAI ? "right" : "left",
                                                borderTopLeftRadius: msg.isAI ? 0 : 5,
                                                borderTopRightRadius: msg.isAI ? 5 : 0,
                                                borderColor: GRAY_BG
                                            }}>
                                                    <p style={{ color: msg.isAI ? GRAY_TEXT : "white", fontWeight: 400, fontSize: 16, marginBottom: 0, textAlign: "left" }}>{msg.message}</p>
                                                    <span style={{ color: msg.isAI ? GRAY_TEXT : "white", fontSize: 12, fontWeight: 300 }}>{moment(msg.timestamp_creation).format("LT")}</span>
                                            </MessageComponent>
                                        </MessageContainer>
                                        )
                                    }
                                    {
                                        loadingResponse ? 
                                        <MessageContainer style={{ flexDirection: "row" }}>
                                            <ImageBot 
                                                src={agent.image_url === "NO_IMAGE" ?  "../assets/images/bot.png" : agent.image_url} 
                                                alt={"agent_" + agent.name} 
                                                style={{ backgroundColor: GRAY_BG, width: 30, height: 30 }}
                                            />
                                            <MessageComponent style={{ 
                                                backgroundColor: GRAY_BG,
                                                float: "left",
                                                borderTopLeftRadius: 0,
                                                borderColor: GRAY_BG,
                                                display: "ruby",
                                                height: 30,
                                                paddingTop: 5
                                            }}>
                                                <BouncingDotsLoader />
                                            </MessageComponent>
                                        </MessageContainer>
                                        : null
                                    }
                                    <div ref={refBottomChat} />
                                </div>
                            </ChatComponent>
                            </Container>
                            <div style={{ display: "flex", flexDirection: "row" }} >
                                    <InputComponent 
                                        placeholder="Type something..." 
                                        value={message} 
                                        onChange={onChange} 
                                        onKeyDown={onKeyDown}
                                        style={{ width: "100%", border: 0 }}
                                    />
                                    <SendComponent>
                                        <Touchable onClick={onSend}>
                                        <Icon
                                            raised
                                            name='send'
                                            type='font-awesome'
                                            color='#0d6efd'
                                            size="1.5x"
                                        />
                                        </Touchable>
                                    </SendComponent>
                            </div>
                        </ChatContainer>
                    </Fade>
                </>
                :
                null
            }
        </Container>
    )
}

export default Chat;