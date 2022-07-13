import styled from "styled-components";
import { keyframes } from "styled-components";

const fontSizeAnim = keyframes`
    from {
        font-size: 22;
    }
    to {
        font-size: 36
    };

`

const gradient = keyframes`
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%
    }
`;

const GradientText = styled.h1`
    font-size: ${props => props.sz ? props.sz : 40}px;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 500};
    animation: ${gradient} 5s ease-in-out infinite;
    background: linear-gradient(to right, #52c07e, #4bdabb, #2193b0, #6dd5ed);
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-align: start;
    border-bottom: ${props => props.underline ? "1px solid #6dd5ed" : ""};
    margin-top: ${props => props.marginTop}px;
    &:hover {
        opacity: ${props => props.interactive ? 0.7 : 1}
    }
`

export const GradientLink = styled.a`
    font-size: ${props => props.sz ? props.sz : 40}px;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 500};
    animation: ${gradient} 5s ease-in-out infinite;
    background: linear-gradient(to right, #52c07e, #4bdabb, #2193b0, #6dd5ed);
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-align: start;
    border-bottom: 1px solid #6dd5ed;
    margin-top: ${props => props.marginTop}px;
`

export const InViewAnimatedGradientText = styled(GradientText)`
    transition: opacity 4s, transform 2s;
    transition-delay: ${props => props.delay ? props.delay : 0}s;
    opacity: ${props => props.inView ? 1 : 0};
    transform: translateY(${props => props.inView ? '0' : '50px'});
`

export default GradientText


