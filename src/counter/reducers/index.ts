import { Constants, CounterAction, CounterState } from '../constants/types';

const init: CounterState = {
  count: 0
}

export default function (state: CounterState = init, action: CounterAction): CounterState {
  switch (action.type) {
    case Constants.INCREMENT:
      return state.count + 1;
    case Constants.DECREMENT:
      return state.count - 1;
    default:
      return state.count;
  }
}