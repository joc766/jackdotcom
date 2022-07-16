import { useContext } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { HiSwitchHorizontal } from 'react-icons/hi';

import { Nav, StyledNavOption, ExtraNavContainer, NavLogo } from "./styles/Navbar.styled";
import { StyledContentContainer } from './styles/Container.styled';
import JOCLogo from '../images/JOCLogo.png';
import {ToggleThemeContext} from '../App';

const Navbar = (props) => {
    const context = useContext(ToggleThemeContext);
    console.log(context)
    return(
        <Nav>
            <StyledContentContainer>
                <NavLogo src={JOCLogo} width="50" height="50"/>
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
                    {/* <StyledNavOption onClick={() => {console.log("HERE"); context.toggleTheme()}}>
                        <HiSwitchHorizontal style={{fontSize: '24px'}}/>
                    </StyledNavOption> */}
                </ExtraNavContainer>
            </StyledContentContainer>
        </Nav>
    )

}

export default Navbar;