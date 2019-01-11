import React, { Component } from 'react';

class Counter extends Component<ReduxType> {
  public incrementIfOdd = () => {


  }

  public incrementAsync = () => {

  }

  public render() {
    const {value, onIncrement, onDecrement} = this.props;
    return (
      <div>
        Clicked: {value} times
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementAsync}>Increment async</button>
      </div>
    );
  }
}

export default Counter;

