import styled from 'styled-components';
import { useTheme } from 'styled-components';

export const Nav = styled.div.attrs(props => ({
    bgImage: props.theme.id === "dark" ? "linear-gradient(180deg, #000, rgba(0, 0, 0, 0.8) 59%, transparent)" : "linear-gradient(180deg, #FFF, rgba(255, 255, 255, 0.8) 59%, transparent)",
}))`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    width: 100%;
    height: 100px;
    max-height: 100px;
    z-index: 500;
    background-color: 'white';
    background-image: ${props => props.bgImage};
`

export const ExtraNavContainer = styled.div`
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const StyledNavOption = styled.a`
    font-size: 16px;
    font-weight: bold;
    margin: 0 3%;
    text-decoration: none;
    color: ${ ({theme}) => theme.colors.primary };
`

export const NavLogo = (props) => {
    const theme = useTheme()
    let Component = undefined;
    if (theme.logo.inverse){
        Component = styled.img`
            filter: invert(100%);
        `
    }
    else {
        Component = styled.img``;
    }
    
    return (<Component {...props} >{props.children}</Component>)
}