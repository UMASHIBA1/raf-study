import React, { RefObject } from "react";
import styled from "styled-components";
import useRaf from "../../hooks/useRaf";

const Wrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 500px; 
    height: 500px;
    background-color: blue;
`;

const easeOutNext = (stop: number, now: number) => {
    return (stop - now) / 90;
}

const move = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current !== null) {
        const nowTop = parseFloat(ref.current.style.top !== ""? ref.current.style.top: "0");
        const nowLeft = parseFloat(ref.current.style.left !== ""? ref.current.style.left: "0");
        const nextTop = nowTop + easeOutNext(450, nowTop);
        const nextLeft = nowLeft + easeOutNext(450, nowLeft);
        ref.current.style.top = `${nextTop}px`;
        ref.current.style.left = `${nextLeft}px`;
    }
}

const Box = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: red;

`

const MoveByRaf: React.FC = () => {
    const [ref] = useRaf<HTMLDivElement>(move, 5000);
    return(
        <Wrapper>
            <Box ref={ref} />
        </Wrapper>
    );
}

export default MoveByRaf;