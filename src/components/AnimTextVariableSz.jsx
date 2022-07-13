import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useInView } from "react-intersection-observer";
import { AnimCustomText } from "./styles/Paragraph.styled";

export const AnimTextVariableSz = (props) => {
    const [width, setWidth] = useState(window.innerWidth)
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return (() => {
            window.removeEventListener('cleanup', handleResize)
        })
    })

    const sz = width >= 1000 ? props.textSz : width > 767 ? props.textSz * 0.9 : props.textSz ;
    const lineHeight = width >= 1000 ? props.lineHeight : width > 767 ? props.lineHeight * 0.9 : props.lineHeight;
    return(
        <AnimCustomText sz={sz} fontWeight={props.fontWeight} color={props.color} delay={props.delay} ref={ref} inView={inView} lineHeight={lineHeight} textAlign={props.textAlign}>
            {width > 767 || !props.alt ? props.children : props.alt}
        </AnimCustomText>
    )
}
