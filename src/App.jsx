import React from 'react';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './components/styles/Global';
import Colors from './components/styles/colors.json';
import Home from './components/Home';
import { getViewMode } from './utils';

const themes = {
  dark: {
    id: "dark",
    colors: {
      background: Colors.black,
      primary: Colors.white,
      secondary: Colors.light_grey,
      faded: Colors.dark_grey,
      accent: Colors.baby_blue,
    },
    fonts: {
      primary: "Arial",
      from_ojieame: "Gtwalsheimprotrial",
      sans_serif: "sans-serif",
    },
    logo: {
      inverse: false,
    }
  },
  light: {
    id: "light",
    colors: {
      background: Colors.offwhite,
      primary: Colors.black,
      secondary: Colors.dark_grey,
      faded: Colors.lighter_grey,
      accent: Colors.baby_blue,
    },
    fonts: {
      primary: "Arial",
      from_ojieame: "Gtwalsheimprotrial",
      sans_serif: "sans-serif",
    },
    logo: {
      inverse: true,
    }

  }
}

export const ToggleThemeContext = React.createContext();


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewMode: getViewMode(window.innerWidth),
      theme: themes.dark,
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

  toggleTheme = () => {
    this.state.theme.id === "dark" ? this.setState({theme: themes.light}) : this.setState({theme: themes.dark})
  }


  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
      <ToggleThemeContext.Provider value={{toggleTheme: this.toggleTheme}}>
        <GlobalStyles/>
        <Home viewMode={this.state.viewMode}/>
        </ToggleThemeContext.Provider>
      </ThemeProvider>
    );
  }
}

export default App;
