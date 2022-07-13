import styled from 'styled-components';


export const Paragraph = styled.p`
    text-align: justify;
    z-index: 300;
    font-family: ${ ({theme}) => theme.fonts.sans_serif };
    font-size: 24px;
    line-height: 24px;
    color: ${ ({theme}) => theme.colors.white };
    text-align: start;
    margin: 0;
`

export const CustomText = styled(Paragraph).attrs(props => ({
    sz: props.sz,
    lineHeight: props.lineHeight ? props.lineHeight : props.sz,
    fontWeight: props.fontWeight,
    color: props.color ? props.color : 'white',
}))`
    font-size: ${props => props.sz}px; 
    line-height: ${props => props.lineHeight}px;
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`

export const AnimCustomText = styled(CustomText)`
    transition: opacity 4s, transform 2s;
    transition-delay: ${props => props.delay ? props.delay : 0}s;
    opacity: ${props => props.inView ? 1 : 0};
    transform: translateY(${props => props.inView ? '0' : '50px'});
`

export const BigText = styled(Paragraph)`
    font-size: 80px;
    line-height: 80px;
    font-weight: 600;
`

export const BigishText = styled(Paragraph)`
    font-size: 32px;
    line-height: 32px;
    font-weight: 600;
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
    color: ${ ({theme}) => theme.colors.greyish};
    margin: 0;
    font-weight: 600;
`

export const CustomBgText = styled(Background).attrs(props => ({
    sz: props.sz,
}))`
    font-size: ${props => props.sz}px;
    line-height: ${props => props.sz}px;
`

export const SubText = styled(Paragraph)`
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px;
    color: #808080;
`