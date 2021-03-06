import React from "react";

import { HorizontalContainer, BackgroundContainer, LeftSubSection, RightSubSection } from '../styles/Container.styled'
import { InViewAnimContainer, InViewAnimImage, InViewAnimText } from '../AnimatedContainers';
import { CustomText } from "../styles/Paragraph.styled";
import GradientText from '../GradientText';
import JackSolo from '../../images/JackSolo.png';
import JackSolo2 from '../../images/JackSolo2.png';
import Colors from '../styles/colors.json';
import { withTheme } from "styled-components";


class Welcome extends React.PureComponent {

    render() {
        const theme = this.props.theme

        const mobile = this.props.viewMode === "mobile" ? true : false;
        const desktop = this.props.viewMode === "desktop" ? true : false;

        const imgInfo = {
            src: theme.id === "light" ? JackSolo2 : JackSolo,
            opacity: theme.id === "light" ? 0.90 : 0.67
        }
        
        return ( 
            <HorizontalContainer>
                <LeftSubSection isSolo={mobile}>
                    <InViewAnimText size={mobile ? 24 : 32} weight={600}>
                        Hi, My name's
                    </InViewAnimText>
                    <InViewAnimText size={mobile ? 60 : 80} weight={600} delay={0.2}>
                        Jack...
                    </InViewAnimText>
                    { desktop
                    ?
                    <BackgroundContainer>
                        <CustomText size={80} color={theme.colors.faded}>
                            Developer +
                        </CustomText>
                        <CustomText size={80} color={theme.colors.faded}>
                            Student
                        </CustomText>
                    </BackgroundContainer>
                    :
                    <></>
                    }
                    {/* This needs to be cleaned up eventually */}
                    <div style={{zIndex: 200, marginTop: '10%', maxWidth: '400px'}}>
                        <InViewAnimText size={mobile ? 14 : 18} weight={500} color={theme.colors.secondary} delay={0.5} lineHeight={mobile ? 20 : 28} textAlign='justify'>
                            I'm a senior C.S. major at Yale, first-generation college student and American, Division-1 varsity athlete and software developer with a passion for learning and using that knowledge to create clean, elegant solutions to problems.
                        </InViewAnimText>
                    </div>
                    <InViewAnimContainer delay={3} onClick={() => window.scrollBy({top: 650, behavior: 'smooth'})}>
                        <GradientText sz={21} fontWeight={525} marginTop={30} underline={true} interactive={true}>
                            Scroll for more
                        </GradientText>
                    </InViewAnimContainer>
                </LeftSubSection>
                <RightSubSection position={mobile ? 'absolute' : 'relative'}>
                    <InViewAnimImage src={imgInfo.src} height={mobile ? 400 : 525} opacity={imgInfo.opacity}/>
                </RightSubSection>
            </HorizontalContainer>
        )
    }

}

export default withTheme(Welcome);
