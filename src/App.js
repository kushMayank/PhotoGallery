import React, { Component } from 'react';

import './App.css';
import Gallery from './js/components/gallery'
import Thumblist from './js/components/thumblist'
import thumbnail from './js/components/thumbnail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Worlds Gallery</h1>
        </header>
        <div>
        <Gallery/>
        </div>
        <div>
          <Thumblist/>
        </div>
      </div>
    );
  }
}

export default App;
