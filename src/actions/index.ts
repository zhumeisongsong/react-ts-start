import { action } from 'typesafe-actions';
import { Constants } from '../constants/Actiontypes';

export function addItemToList(item: string) {
  return action(Constants.ADD_ITEM, {
    item
  });
}

