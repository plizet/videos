import { UPDATE_CURRENT_VIDEO } from './actions';

/** TODO load dynamically */
export const defaultState = 1;

export default function reducer(state: number = defaultState, action: any) {
  switch (action.type) {
    case UPDATE_CURRENT_VIDEO:
      if (typeof action.id === undefined) return state;
      return action.id;
    default:
      return state;
  }
}
