import { combineReducers, createStore } from 'redux';
import { demoReducer } from '../reducers/';
import { IDemoState } from '../constants/Actiontypes';

export interface IRootState {
  demo: IDemoState
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    demo: demoReducer
  })
);

export default store;