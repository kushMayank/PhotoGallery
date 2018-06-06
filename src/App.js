import React, { Component } from 'react';

import './App.css';
import Gallery from './js/components/gallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Worlds Gallery</h1>
        </header>
        <Gallery/>
        
      </div>
    );
  }
}

export default App;
