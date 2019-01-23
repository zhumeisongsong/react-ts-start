import { action } from 'typesafe-actions';
import { Constants } from '../constants/types';

export function onIncrement() {
  return action(Constants.INCREMENT)
}

export function onDecrement() {
  return action(Constants.DECREMENT)
}