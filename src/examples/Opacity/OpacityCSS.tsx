import React from "react";
import styled, { keyframes } from "styled-components";

const fadeout = keyframes`
    to {
        opacity: 0;
    }
`

const Wrapper = styled.div`
    width: 360px;
    height: 360px;
    background-color: blue;
    opacity: 1;
    animation: ${fadeout} 1500ms linear forwards;
`;

const OpacityCSS: React.FC = () => {
    return <Wrapper /> 
}

export default OpacityCSS;