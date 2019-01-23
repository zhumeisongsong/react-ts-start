import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../store';

import { Dispatch } from 'redux';
import { CounterActions } from '../counter/constants/types';

import * as actions from '../counter/actions/'

const mapStateToProps = ({counter}: IRootState) => {
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

