import styled from 'styled-components';

import { Nav, StyledNavbar, StyledNavHeading, StyledNavOption, StyledNavLogo, LeftSection, RightSection, ExtraNavContainer } from "./styles/Navbar.styled";
import { StyledContainer, StyledContentContainer } from './styles/Container.styled';
import AnimatedGradientText from "./GradientText";
import Signature from '../images/CorrectJOCSig.png';
import JOCLogo from '../images/JOCLogo.png';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Navbar = (props) => {
    return(
        <Nav>
            <StyledContentContainer>
                <StyledNavLogo src={JOCLogo} width="50" height="50"/>
                <ExtraNavContainer>
                    <StyledNavOption href="https://github.com/joc766" target="_blank" rel="noreferrer noopener">
                        <AiFillGithub style={{fontSize: '24px'}}/>
                    </StyledNavOption>
                    <StyledNavOption href="https://www.linkedin.com/in/jack-o-connor-b26568196/" target="_blank" rel="noreferrer noopener">
                        <AiFillLinkedin style={{fontSize: '24px'}}/>
                    </StyledNavOption>
                    <StyledNavOption href="https://www.instagram.com/jack.o.connor/" target="_blank" rel="noreferrer noopener">
                        <AiFillInstagram style={{fontSize: '24px'}}/>
                    </StyledNavOption>
                </ExtraNavContainer>
            </StyledContentContainer>
            {/* <RightSection>
                <StyledNavOption href="https://www.linkedin.com/in/jack-o-connor-b26568196/" target="_blank" rel="noreferrer noopener">
                    LinkedIn
                </StyledNavOption>
                <StyledNavOption href="https://github.com/joc766" target="_blank" rel="noreferrer noopener">
                    GitHub
                </StyledNavOption>
            </RightSection> */}
        </Nav>
    )

}

export default Navbar;