import { Col, Container, ListGroup, Row } from "react-bootstrap";
import styled from "styled-components";
import ButtonComponent from "../components/button.component";
import { useEffect, useState } from "react";
import Chat from "../components/Chat";
import { GRAY_BG, PRIMARY, STYLE_PRIMARY_RGBA_PRODUCT } from "../../../config/colors.config";
import { useNavigate } from "react-router";
import Section from "../components/Section.component";
import { useAuth } from "../../../providers/Auth.provider";
import axios from "axios";
import { ImageBot } from "../../../styled/ImageProfile.styled";
import Touchable from "../components/Touchable.component";

const AgentComponent = styled.div`
    padding: 10px;
    margin: 5px 10px;
    display: flex;
    flex-direction: row;
    background-color: white;
`

function Agents() {

    const [agents, setAgents] = useState<any>([])
    const [agent, setAgent] = useState<any>();

    const navigate = useNavigate()
    const auth = useAuth();

    useEffect(() => {
        fetch()
    }, [])

    const fetch = async () => {
        try {
        
            const {data} = await axios.get(process.env.REACT_APP_HOST + "/bot/all/65e78356cd80f7ed0684ea0c", {
              headers: {
                Authorization: "Bearer " +  auth.user.access_token
              }
            });

            setAgents(data.data);
          } catch (error) {
            alert(error)
          }
    }

      

    const onClick = (agent: any) => {
        const newAgents = agents.map((bot: any) => { 
            console.log(bot._id, agent._id)
            if(bot._id === agent._id) { 
                return {...bot, active: true }
             } else { 
                return {...bot, active: false }
            } 
        });
        setAgents(newAgents);
        setAgent(agent);
    }

    const onCreateBot = () => {
        navigate("/admin/create")
    }

    return(
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between" }}>
                <h1 style={{ textAlign: "left" }}>Agents</h1>
                <ButtonComponent text={"Create Bot"} style={{...STYLE_PRIMARY_RGBA_PRODUCT}} onClick={onCreateBot} />
            </div>

            <Section style={{ marginTop: 20, padding: 0,  display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", flexDirection: "column", backgroundColor: GRAY_BG, width: 400 }}>
                
                {
                        agents.map((bot: any, i: number) => {
                            return (
                                <Touchable onClick={(e: any) => onClick(bot)}>
                                    <AgentComponent style={{ borderRight: bot.active ? `3px solid ${PRIMARY}` : 0 }}>
                                        <ImageBot src={bot.image_url === "NO_IMAGE" ?  "../assets/images/bot.png" : bot.image_url} alt={"bot_" + i} />
                                        <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: 5 }}>
                                            <span style={{ fontWeight: 500 }}>{bot.name}</span>
                                            <span style={{ fontSize: 14 }}>{bot.description}</span>
                                        </div>
                                    </AgentComponent>
                                </Touchable>
                            );
                        })
                    }
                </div>

            {
                agent && agent._id ?
                <Container style={{ marginTop: 20 }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <ImageBot src={agent.image_url === "NO_IMAGE" ?  "../assets/images/bot.png" : agent.image_url} alt={"agent_" + agent.name} />
                        <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: 5 }}>
                            <span style={{ fontWeight: 500 }}>{agent.name}</span>
                            <span style={{ fontSize: 14 }}>{agent.isOnline ? "Online" : "Offline"}</span>
                        </div>
                    </div>
                    <hr />
                    <Chat agent={agent} active={true} />
                </Container>
                : null
            }
            </Section>

        </>
    );
}

export default Agents;