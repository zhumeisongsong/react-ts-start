import { Constants, DemoActions, IDemoState } from '../constants/Actiontypes';

const init: IDemoState = {
  list: [],
  loading: false
}

export function demoReducer(state: IDemoState = init, action: DemoActions): IDemoState {
  switch (action.type) {

    case Constants.ADD_ITEM:
      return {list: [...state.list, action.payload.item]};

    case Contants.SET_LOADING:
      return {...state, ...action.payload};

    default:
      return state;
  }
}