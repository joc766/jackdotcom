import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './components/styles/Global';
import Colors from './components/styles/colors.json';
import Home from './components/Home';
import { getViewMode } from './utils';


const theme = {
  colors: {
    background: 'black',
    primary: Colors.smoky_black,
    secondary: Colors.baby_blue,
    tertiary: 'white',
    white: "white",
    greyish: Colors.greyish,
    baby_blue: Colors.baby_blue,
  },
  fonts: {
    primary: "Arial",
    from_ojieame: "Gtwalsheimprotrial",
    sans_serif: "sans-serif",
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewMode: getViewMode(window.innerWidth),
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    const viewMode = getViewMode(window.innerWidth)
    if (viewMode !== this.state.viewMode) {
      this.setState({
        viewMode: viewMode
      })
    }
  }


  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Home viewMode={this.state.viewMode}/>
      </ThemeProvider>
    );
  }
}

export default App;
