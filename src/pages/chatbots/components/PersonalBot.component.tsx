
import Touchable from "./Touchable.component";
import Icon from "../../portfolio/browser/components/icon.browser.component";
import { useState } from "react";
import { Container, Fade } from "react-bootstrap";
import Chat from "./Chat";

function PersonalBot ({children, onClick }: any) {

    const [active, setActive] = useState<boolean>(false);


    return (
        <div style={{ position: "fixed", bottom: 50, right: 50, zIndex: 999 }}>
            <Chat active={active} onSend={() => {}}/>
            <Container style={{ display: "flex", flexDirection: "row-reverse", marginTop: 20 }}>
                <Touchable onClick={() => { setActive(!active) }}>
                <Icon
                    raised
                    name='comment'
                    type='font-awesome'
                    color='#0d6efd'
                />
                </Touchable>
            </Container>

        </div>
    )
}

export default PersonalBot;