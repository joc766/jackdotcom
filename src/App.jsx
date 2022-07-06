import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  handleScroll = (e) => {
    console.log(window.scrollY)
  }


  render() {
    window.addEventListener('scroll', this.handleScroll)
    return (
      <div className="App">
        <div className="Navbar" style={{translate: [{translateY: window.scrollY}]}}>
            <div className="Nav-title">
                <h2>Jack.</h2>
            </div>
            <div className="Nav-links">
                <p className="Nav-link-option">Home</p>
                <p className="Nav-link-option">About</p>
                <p className="Nav-link-option">Other</p>
            </div>
        </div>
        <Home/>
      </div>
    );
  }
}

export default App;
