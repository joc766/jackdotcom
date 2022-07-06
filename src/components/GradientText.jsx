import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components"

const gradient = keyframes`
    {
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%
        }
    }
`;

const AnimatedGradientText = styled.h1`
    animation: ${gradient} 5s ease-in-out infinite;
    background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`

export default AnimatedGradientText


