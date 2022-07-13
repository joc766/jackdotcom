import React from 'react';
import { useInView } from 'react-intersection-observer';

import { AnimatedImg, StyledInViewAnimContainer } from './styles/Container.styled';

export const InViewAnimContainer = (props) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return(
        <StyledInViewAnimContainer ref={ref} inView={inView} delay={props.delay} onClick={props.onClick}>
            {props.children}
        </StyledInViewAnimContainer>
    )

}

export const InViewAnimImage = (props) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return(
        <AnimatedImg src={props.src} height={props.height} ref={ref} inView={inView} opacity={props.opacity}/>
    )


}