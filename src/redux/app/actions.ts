import { FiltersState, VideoInfos } from '../../types';

import { ALL } from '../../constants';

import { loadFilters } from '../filters/actions';
import { loadVideos } from '../videos/actions';
import { updateCurrentVideo } from '../currentVideo/actions';

import videos from '../../data';

function getVideoId(videos: Array<VideoInfos> = [], urlParams: Array<string>) {
  const video = videos.find(video => video.urlName === urlParams[0]);
  if (typeof video !== 'undefined') {
    return video.id;
  }
  const lastItem = [...videos].pop();
  return lastItem ? lastItem.id : null;
}

function getFilters(videos: Array<VideoInfos> = []): FiltersState {
  const categoriesOptions: Array<string> = [ALL];
  const yearsOptions: Array<string> = [ALL];

  videos.forEach(video => {
    if (video.category && categoriesOptions.indexOf(video.category) === -1) {
      categoriesOptions.push(video.category);
    }
    if (video.year && yearsOptions.indexOf(video.year) === -1) {
      yearsOptions.push(video.year);
    }
  });

  return {
    categories: { options: categoriesOptions.sort(), value: ALL },
    years: { options: yearsOptions.sort(), value: ALL }
  };
}

export function loadApp(urlParams: Array<string>) {
  return function(dispatch: any) {
    dispatch(loadVideos(videos));
    dispatch(updateCurrentVideo(getVideoId(videos, urlParams)));
    dispatch(loadFilters(getFilters(videos)));
  };
}
