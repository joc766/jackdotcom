import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './components/styles/Global';
import Colors from './components/styles/colors.json';
import Home from './components/Home';


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


  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Home/>
      </ThemeProvider>
    );
  }
}

export default App;
