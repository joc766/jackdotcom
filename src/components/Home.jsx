import React from 'react';

import Navbar from './Navbar';
import AboutMe from './pages/AboutMe';
import Welcome from './pages/Welcome';

import { AppContainer, MainSection } from './styles/Container.styled';


export default class HomePage extends React.PureComponent {

    render() {
        return (
            <AppContainer>
                <Navbar viewMode={this.props.viewMode}/>
                <MainSection>
                    <Welcome viewMode={this.props.viewMode}/>
                    {/* <AboutMe viewMode={this.props.viewMode}/> */}
                </MainSection>
            </AppContainer>
        )
    }
}
