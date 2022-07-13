import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useInView } from "react-intersection-observer";
import { AnimCustomText } from "./styles/Paragraph.styled";
import { InViewAnimatedGradientText } from "./GradientText";

export const AnimatedGradientText = (props) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return(
        <InViewAnimatedGradientText sz={props.sz} delay={props.delay} ref={ref} inView={inView}>
            {props.children}
        </InViewAnimatedGradientText>
    )
}