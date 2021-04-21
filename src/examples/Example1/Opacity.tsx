import React, { RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useRaf from "../../hooks/useRaf";

const Wrapper = styled.div`
    width: 360px;
    height: 360px;
    background-color: blue;
    opacity: 1;
`;

const fadeout = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current !== null) {
        const nowOpacity = parseFloat(ref.current.style.opacity !== ""?ref.current.style.opacity: "1");
        const nextOpacity = nowOpacity - 0.01;
        ref.current.style.opacity = `${nextOpacity}`;
    }
}

const Opacity: React.FC = () => {
    const [ref] = useRaf<HTMLDivElement>(fadeout, 5000);

    return(
        <Wrapper ref={ref}/>
    );
}

export default Opacity;