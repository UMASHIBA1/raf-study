import React from "react";
import styled, {keyframes} from "styled-components";

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
        transform: translate(0,0);
    }

    to {
        transform: translate(450px, 450px);
    }
`

const Box = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red;
    animation: ${move} ease-out 1500ms both 500ms;
`

const MoveByTransform: React.FC = () => {
    return(
        <Wrapper>
            <Box />
        </Wrapper>
    );
}

export default MoveByTransform;