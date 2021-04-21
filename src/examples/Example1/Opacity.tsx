import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 360px;
    height: 360px;
    background-color: blue;
    opacity: 1;
`;


const Example1: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    let startTime: number | null = null;

    const fadeout = (timestamp: number) => {
        if (startTime === null) {
            startTime = timestamp;
        }
        if (ref.current != null && startTime !== null) {
            const progress = timestamp - startTime;
            const nowOpacity = parseFloat(ref.current.style.opacity !== ""?ref.current.style.opacity: "1");
            const nextOpacity = nowOpacity - 0.005;
            ref.current.style.opacity = `${nextOpacity}`;
            if(progress < 5000 ){
                requestAnimationFrame(fadeout);
            }
        }
    }

    useEffect(() => {

        console.log("run effect", ref);
        requestAnimationFrame(fadeout);
    }, [ref]);
    

    return(
        <Wrapper ref={ref}/>
    );
}

export default Example1;