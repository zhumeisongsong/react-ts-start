import { Constants, CounterActions, CounterState } from '../constants/couterTypes';

const init: CounterState = {
  count: 0
}

export default function (state: CounterState = init, action: CounterActions): CounterState {
  switch (action.type) {
    case Constants.INCREMENT:
      return {
        count: state.count + 1
      };

    case Constants.DECREMENT:
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
}