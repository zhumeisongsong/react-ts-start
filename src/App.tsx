import React, { Component } from 'react';
import './App.scss';
import Hello from './components/Hello'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hello name="typescript"/>
      </div>
    );
  }
}

export default App;
