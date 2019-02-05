import { ActionType } from 'typesafe-actions';
import * as actions from '../actions/todo';

// Can use type “TodoActions” when we need to use actions
export type TodoActions = ActionType<typeof actions>;

export interface TodoState {
  list: string[]
  loading: boolean
}

export enum Constants {
  ADD_ITEM = 'ADD_ITEM',
  SET_LOADING = 'SET_LOADING',
}



