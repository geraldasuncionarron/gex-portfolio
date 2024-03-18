import styled from "styled-components";


const TouchableComponent = styled.button`
    border: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    cursor: pointer
`

function Touchable ({children, onClick }: any) {
    return (
        <TouchableComponent onClick={onClick}>
            {children}
        </TouchableComponent>
    )
}

export default Touchable;