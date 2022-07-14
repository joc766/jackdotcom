import styled from 'styled-components';

export const Nav = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    width: 100%;
    height: 100px;
    max-height: 100px;
    z-index: 500;
    background-image: linear-gradient(180deg, #000, rgba(0, 0, 0, 0.8) 59%, transparent);
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
    color: ${ ({theme}) => theme.colors.tertiary };
`

export const StyledNavLogo = styled.img`
`