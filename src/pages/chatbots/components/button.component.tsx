import { Button, Container, Spinner } from "react-bootstrap"


function ButtonComponent ({style, text, color, isLoading = false,onClick}: any) {
    return (
        <div>
            <Container>
                <Button onClick={onClick} color={color} style={style} disabled={isLoading}>
                    {isLoading ?
                        <Spinner size="sm" />
                        :
                        text
                    }
                </Button>
            </Container>
        </div>
    )
}

export default ButtonComponent;