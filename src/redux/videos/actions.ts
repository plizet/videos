import { VideoInfos } from '../../types';

export const LOAD_VIDEOS = 'LOAD_VIDEOS';
export function loadVideos(videos: Array<VideoInfos>) {
  return { type: LOAD_VIDEOS, videos };
}
