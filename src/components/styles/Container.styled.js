import styled from 'styled-components';

import AnimatedGradientText from '../GradientText';


export const StyledContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 940px;
`

export const BackgroundContainer = styled.div`
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
`

export const StyledInViewAnimContainer = styled.div`
    transition: opacity 4s, transform 2s;
    transition-delay: ${props => props.delay ? props.delay : 0}s;
    opacity: ${props => props.inView ? 1 : 0};
    transform: translateY(${props => props.inView ? '0' : '50px'});
    cursor: pointer;
`

export const StyledContentContainer = styled.div`
    flex-direction: row;
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 940px;
    overflow: visible;
`

export const HorizontalContainer = styled(StyledContainer)`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 75px;
    width: 100%;
`

export const SubSection = styled.div`
    flex-shrink: 0;
    flex-grow: 1;
    flex: 1;
    width: 100%;
    height: ${props => props.height ? props.height : "100%"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 200;
`

export const RightSubSection = styled.div.attrs(props => ({
    paddingTop: props.position === 'absolute' ? '0px' : '50px',
    zIndex: props.position === 'absolute' ? 200 : 100,
}))`
    position: ${props => props.position};
    padding-top: ${props => props.paddingTop };
    z-index: ${props => props.zIndex};
`;

export const AnimatedImg = styled.img`
    transition: all 2s ease;
    transform: scale(${props => props.inView ? 1 : 0.7});
    opacity: ${props => props.inView ? props.opacity : 0};
`

export const LeftSubSection = styled(SubSection).attrs(props => ({
    isOnly: props.isOnly,
}))`
    justify-content: flex-start;
    max-width: 525px; 
    padding-top: ${props => props.isSolo ? 273 : 170}px;
    align-items: ${props => props.isSolo ? 'center' : 'flex-start'};
    z-index: 300;
`


export const AppContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
