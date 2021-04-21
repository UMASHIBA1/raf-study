import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 500px; 
    height: 500px;
    background-color: blue;
`;

const move = keyframes`
    from {
        top: 0;
        left: 0;
    }

    to {
        top: 450px;
        left: 450px;
    }
`

const Box = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red;
    animation: ${move} ease-out 1500ms both 500ms;
`

const MoveByPosition: React.FC = () => {
    return (
        <Wrapper>
            <Box />
        </Wrapper>
    );
}

export default MoveByPosition;
