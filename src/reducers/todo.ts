import { Constants, TodoActions, TodoState } from '../constants/todoTypes';

const init: TodoState = {
  list: [],
  loading: false
}

export function todoReducer(state: TodoState = init, action: TodoActions): TodoState {
  switch (action.type) {
    case Constants.ADD_ITEM:
      return {...state, list: [...state.list, action.payload.item]};

    case Constants.SET_LOADING:
      return {...state, ...action.payload};
    default:
      return state;
  }
}