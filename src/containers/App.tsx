import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import Todo from '../components/Todo';

class App extends Component {
  public render() {
    return (
      <div className="app">
        <Counter />
        <Todo />
      </div>
    );
  }
}

export default App