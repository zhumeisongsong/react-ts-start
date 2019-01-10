import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/';

// Can use type “DemoActions” when we need to use actions
export type DemoActions = ActionType<typeof actions>;

export interface IDemoState {
  list: string[]
}

export enum Constants {
  ADD_ITEM = 'ADD_ITEM'
}


