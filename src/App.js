import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
      </div>
    );
  }
}

export default App;
