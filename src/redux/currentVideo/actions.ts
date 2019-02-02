export const UPDATE_CURRENT_VIDEO = 'UPDATE_CURRENT_VIDEO';
export function updateCurrentVideo(id: number | null) {
  return {
    id,
    type: UPDATE_CURRENT_VIDEO
  };
}
