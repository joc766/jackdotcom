import styled from 'styled-components';


export const Paragraph = styled.p`
    text-align: justify;
    z-index: 300;
    font-family: ${ ({theme}) => theme.fonts.sans_serif };
    font-size: 24px;
    line-height: 24px;
    color: ${ ({theme}) => theme.colors.secondary };
    text-align: start;
    margin: 0;
`

export const CustomText = styled(Paragraph).attrs(props => ({
    size: props.size,
    lineHeight: props.lineHeight ? props.lineHeight : props.size,
    fontWeight: props.weight,
    color: props.color ? props.color : props.theme.colors.primary,
    textAlign: props.textAlign ? props.textAlign : 'left',
}))`
    font-size: ${props => props.size}px; 
    line-height: ${props => props.lineHeight}px;
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color };
    text-align: ${props => props.textAlign};
`

export const AnimCustomText = styled(CustomText).attrs(props => ({
    delay: props.delay ? props.delay : 0,
    opacity: props.inView ? 1 : 0,
    translateY: props.inView ? '0' : '50px',
}))`
    transition: opacity 4s, transform 2s;
    transition-delay: ${props => props.delay }s;
    opacity: ${props => props.opacity};
    transform: translateY(${props => props.translateY});
`

export const Background = styled.p.attrs(props => ({
    top: props.top ? props.top * 100 : 0,
}))`
    position: absolute;
    top: ${props => props.top}%;
    z-index: 100;
    opacity: 0.5;
    text-align: justify;
    font-family: ${ ({theme}) => theme.fonts.sans_serif };
    font-size: 80px;
    line-height: 80px;
    color: ${ ({theme}) => theme.colors.faded};
    margin: 0;
    font-weight: 600;
`