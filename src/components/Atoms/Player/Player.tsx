import React from 'react';

import './Player.css';

interface Props {
  height?: number;
  mp4Url?: string;
  ogvUrl?: string;
  preload?: string;
  webmUrl?: string;
  width?: number;
}

export default class Player extends React.Component<Props> {
  render() {
    const { mp4Url, ogvUrl, webmUrl, ...props } = this.props;

    return (
      <video className='player' controls id='player' {...props}>
        {mp4Url && <source src={mp4Url} type='video/mp4' />}
        {ogvUrl && <source src={ogvUrl} type='video/ogg' />}
        {webmUrl && <source src={webmUrl} type='video/webm' />}
        Sorry, your browser doesn't support embedded videos -{' '}
        <a href={mp4Url}>Download MP4</a>
      </video>
    );
  }
}

/*
audioTracks 	Returns an AudioTrackList object representing available audio tracks
autoplay 	Sets or returns whether the audio/video should start playing as soon as it is loaded
buffered 	Returns a TimeRanges object representing the buffered parts of the audio/video
controller 	Returns the MediaController object representing the current media controller of the audio/video
controls 	Sets or returns whether the audio/video should display controls (like play/pause etc.)
crossOrigin 	Sets or returns the CORS settings of the audio/video
currentSrc 	Returns the URL of the current audio/video
currentTime 	Sets or returns the current playback position in the audio/video (in seconds)
defaultMuted 	Sets or returns whether the audio/video should be muted by default
defaultPlaybackRate 	Sets or returns the default speed of the audio/video playback
duration 	Returns the length of the current audio/video (in seconds)
ended 	Returns whether the playback of the audio/video has ended or not
error 	Returns a MediaError object representing the error state of the audio/video
loop 	Sets or returns whether the audio/video should start over again when finished
mediaGroup 	Sets or returns the group the audio/video belongs to (used to link multiple audio/video elements)
muted 	Sets or returns whether the audio/video is muted or not
networkState 	Returns the current network state of the audio/video
paused 	Returns whether the audio/video is paused or not
playbackRate 	Sets or returns the speed of the audio/video playback
played 	Returns a TimeRanges object representing the played parts of the audio/video
preload 	Sets or returns whether the audio/video should be loaded when the page loads
readyState 	Returns the current ready state of the audio/video
seekable 	Returns a TimeRanges object representing the seekable parts of the audio/video
seeking 	Returns whether the user is currently seeking in the audio/video
src 	Sets or returns the current source of the audio/video element
startDate 	Returns a Date object representing the current time offset
textTracks 	Returns a TextTrackList object representing the available text tracks
videoTracks 	Returns a VideoTrackList object representing the available video tracks
volume 	Sets or returns the volume of the audio/video
*/
