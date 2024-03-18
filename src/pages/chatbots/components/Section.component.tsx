import styled from "styled-components";

const SectionComponent = styled.div`
    background-color: white;
    padding: 5vh 5vw;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
`

function Section ({ children, style } : any) {
    return <SectionComponent style={style}>{children}</SectionComponent>
}

export default Section;