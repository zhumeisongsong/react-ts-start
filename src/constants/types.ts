import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/index';

// Can use type “DemoActions” when we need to use actions
export type DemoActions = ActionType<typeof actions>;

export interface IDemoState {
  list: string[]
  loading: boolean
}

export enum Constants {
  ADD_ITEM = 'ADD_ITEM',
  SET_LOADING = 'SET_LOADING',
}



