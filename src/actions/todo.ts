import { Dispatch } from 'redux';
import { action } from 'typesafe-actions';
import { Constants, TodoActions } from '../constants/todoTypes';

function sleep(timeout: number) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(), timeout))
}

export function addItemToList(item: string) {
  return action(Constants.ADD_ITEM, {
    item
  });
}

export function setLoading(loading: boolean) {
  return action(Constants.SET_LOADING, {
    loading
  });
}

export async function addItemAsync(dispatch: any, item: string) { //  Dispatch<TodoActions>
  dispatch(setLoading(true));

  await sleep(1000);

  dispatch(addItemToList(item));
  dispatch(setLoading(false));
}