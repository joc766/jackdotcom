import { Nav, StyledNavOption, StyledNavLogo, ExtraNavContainer } from "./styles/Navbar.styled";
import { StyledContentContainer } from './styles/Container.styled';
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
        </Nav>
    )

}

export default Navbar;