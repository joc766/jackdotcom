import React from 'react'
import { useInView } from 'react-intersection-observer';

import { FadeInContentContainer } from './styles/Container.styled'; 

export const ContentSection = (props) => {

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return(
        <FadeInContentContainer ref={ref} inView={inView}>
            {props.children}
        </FadeInContentContainer>
    )
}