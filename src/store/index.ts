import { combineReducers, createStore } from 'redux';

import { todoReducer } from '../reducers/todo';
import { TodoState } from '../constants/todoTypes';

import counterReducer from '../reducers/couter';
import { CounterState } from '../constants/couterTypes';

export interface RootState {
  todo: TodoState,
  counter: CounterState,
}

const store = createStore<RootState, any, any, any>(
  combineReducers({
    todo: todoReducer,
    counter: counterReducer
  })
);

export default store;