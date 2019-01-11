import { combineReducers, createStore } from 'redux';

import { demoReducer } from '../demo/reducers';
import { IDemoState } from '../demo/constants/types';

import counterReducer from '../counter/reducers';
import { CounterState } from '../counter/constants/types';

export interface IRootState {
  demo: IDemoState
  counter: CounterState
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    demo: demoReducer,
    counter: counterReducer
  })
);

export default store;