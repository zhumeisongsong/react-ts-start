import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/couter';

export type CounterActions = ActionType<typeof actions>;

export interface CounterState {
  count: number
}

export enum Constants {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}