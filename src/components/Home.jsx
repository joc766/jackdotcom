import React from 'react';
import styled from "styled-components";

import './Home.css';

import AnimatedGradientText from './GradientText';

const SubHeading = styled.h2`
    color: #7f8394
`
const HighlightSubHeading = styled.span`
    color: white
`

export default class HomePage extends React.Component {
    
    render() {
        return (
            <>
            <header className="App-header">
                <AnimatedGradientText>Hi, I'm Jack</AnimatedGradientText>
                <SubHeading>I'm a full-stack engineer who goes to <HighlightSubHeading>Yale</HighlightSubHeading> and lives in <HighlightSubHeading>NYC</HighlightSubHeading>!</SubHeading>
            </header>
            <header className="App-header">
                <AnimatedGradientText>Hi, I'm Jack</AnimatedGradientText>
                <SubHeading>I'm a full-stack engineer who goes to <HighlightSubHeading>Yale</HighlightSubHeading> and lives in <HighlightSubHeading>NYC</HighlightSubHeading>!</SubHeading>
            </header>
            <header className="App-header">
                        <AnimatedGradientText>Hi, I'm Jack</AnimatedGradientText>
                        <SubHeading>I'm a full-stack engineer who goes to <HighlightSubHeading>Yale</HighlightSubHeading> and lives in <HighlightSubHeading>NYC</HighlightSubHeading>!</SubHeading>
            </header>
            </>
        )
    }
}
