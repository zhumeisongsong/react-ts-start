import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../store';
import { CounterActions } from '../constants/couterTypes';
import * as actions from '../actions/couter';

const mapStateToProps = ({counter}: RootState) => {
  const {count} = counter;
  return {count};
}

const mapDispatcherToProps = (dispatch: Dispatch<CounterActions>) => {
  return {
    onIncrement: () => {
     return dispatch(actions.onIncrement())
    },
    onDecrement: () => {
      return dispatch(actions.onDecrement())
    }
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class Counter extends Component<ReduxType> {

  public incrementIfOdd = () => {
    if (this.props.count % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  public incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }

  public render() {
    const {count, onIncrement, onDecrement} = this.props;
    return (
      <div>
        Clicked: {count} times
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementAsync}>Increment async</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Counter);

