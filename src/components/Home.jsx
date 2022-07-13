import React from 'react';

import Navbar from './Navbar';
import { CustomText } from './styles/Paragraph.styled';
import { AppContainer, MainSection, SubSection, HorizontalContainer, LeftSubSection, LeftSubSectionWithAnim, RightSubSection, AnimatedImg, BigGradientText } from './styles/Container.styled';
import { InViewAnimContainer, InViewAnimImage} from './AnimatedContainers';
import JackSolo from '../images/JackSolo.png';
import Colors from './styles/colors.json';

import { AnimTextVariableSz } from './AnimTextVariableSz';
import { BgTextVariableSz } from './BackgroundVariableSz';
import GradientText from './GradientText';

export default class HomePage extends React.PureComponent {

    constructor(props){
        super(props)
        this.state = {
            width: window.innerWidth
        }
    }

    handleResize = () => {
        console.log(window.innerWidth)
        this.setState({width: window.innerWidth})
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    
    render() {
        console.log(this.props)
        return (
            <AppContainer>
                <Navbar/>
                <MainSection>
                    <HorizontalContainer>
                        <LeftSubSection isSolo={this.state.width <= 767}>
                            <AnimTextVariableSz textSz={32} fontWeight={600}>
                                Hi, My name's
                            </AnimTextVariableSz>
                            <AnimTextVariableSz textSz={80} fontWeight={600} delay={0.2} alt="Jack">
                                Jack...
                            </AnimTextVariableSz>
                            { this.state.width > 767
                            ?
                            <>
                            <BgTextVariableSz textSz={78} top={0.2}>
                                Developer +
                            </BgTextVariableSz>
                            <BgTextVariableSz textSz={80} top={0.31}>
                                Student
                            </BgTextVariableSz>
                            </>
                            :
                            <></>
                            }
                            <div style={{marginTop: '3%', maxWidth: '400px'}}>
                                <AnimTextVariableSz textSz={18} fontWeight={500} color={'#808080'} delay={0.5} lineHeight={28} textAlign='justify'>
                                    I'm a senior C.S. major at Yale, first-generation college student and American, Division-1 varsity athlete and software developer with a passion for learning and using that knowledge to create simple but elegant solutions to problems.
                                </AnimTextVariableSz>
                            </div>
                            {/* <InViewAnimContainer delay={3} onClick={() => window.scrollBy({top: 650, behavior: 'smooth'})}>
                                <GradientText sz={21} fontWeight={525} marginTop={30} underline={true} interactive={true}>
                                   Scroll for more
                                </GradientText>
                            </InViewAnimContainer> */}
                        </LeftSubSection>
                        <RightSubSection position={this.state.width > 767 ? 'relative' : 'absolute'}>
                            <InViewAnimImage src={JackSolo} height={this.state.width > 767 ? 525 : 400} opacity={0.67}/>
                        </RightSubSection>
                    </HorizontalContainer>
                    {/* <h1 style={{fontSize: "40px", color: "white", marginBlockStart: "100px"}}>About Me</h1>
                    <HorizontalContainer>
                        <SubSection height={"800px"}>

                        </SubSection>
                        <SubSection height={"800px"}>
                            <CustomText sz={28} fontWeight={500}>
                                Socials
                            </CustomText>
                        </SubSection>
                    </HorizontalContainer> */}
                </MainSection>
            </AppContainer>
        )
    }
}
