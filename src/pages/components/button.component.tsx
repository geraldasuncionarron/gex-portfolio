import { Button, Container } from "react-bootstrap"


function ButtonComponent ({style, text, color , onClick}: any) {
    return (
        <div>
            <Container>
                <Button onClick={onClick} color={color} style={style}>{text}</Button>
            </Container>
        </div>
    )
}

export default ButtonComponent;