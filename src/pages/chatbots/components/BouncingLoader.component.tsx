import styled, { keyframes } from "styled-components";

const BouncingLoader = styled.div`
    display: flex;
    justify-content: center;
    & div:nth-child(2) {
        animation-delay: 0.2s;
    }
    & div:nth-child(3) {
        animation-delay: 0.4s;
    }
`

const bouncingLoader = keyframes`
    to {
        opacity: 0.1;
        transform: translateY(-7px);
    }
`
const BouncingDot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    padding: 0;
    margin: 0 3px;
    background-color: #a3a1a1;
    opacity: 1;
    animation: ${bouncingLoader} 0.6s infinite alternate;
`




const BouncingDotsLoader = (props: any) => {
    return (
        <BouncingLoader>
          <BouncingDot></BouncingDot>
          <BouncingDot></BouncingDot>
          <BouncingDot></BouncingDot>
        </BouncingLoader>
    );
  };
  
  export default BouncingDotsLoader;