import { FiltersState } from '../../types';

import { LOAD_FILTERS, UPDATE_FILTER } from './actions';
import { ALL } from '../../constants';

export const defaultState: FiltersState = {
  categories: {
    options: [ALL],
    value: ALL
  },
  years: {
    options: [ALL],
    value: ALL
  }
};

export default function reducer(
  state: FiltersState = defaultState,
  action: any
) {
  switch (action.type) {
    case LOAD_FILTERS:
      return action.filters;
    case UPDATE_FILTER:
      const { name, value } = action;
      return { ...state, [name]: { ...state[name], value } };
    default:
      return state;
  }
}
