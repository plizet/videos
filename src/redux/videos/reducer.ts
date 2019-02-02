import { VideoInfos } from '../../types';

import { LOAD_VIDEOS } from './actions';

export const defaultState = [];

export default function reducer(
  state: Array<VideoInfos> = defaultState,
  action: any
) {
  switch (action.type) {
    case LOAD_VIDEOS:
      const { videos } = action;
      return videos;
    default:
      return state;
  }
}
