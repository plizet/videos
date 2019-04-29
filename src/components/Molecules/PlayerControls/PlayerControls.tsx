import React, { useEffect, useState, RefObject } from 'react';

import PlayerControlButton from '../../Atoms/PlayerControlButton/PlayerControlButton';

import './PlayerControls.css';

const FULLSCREEN = 'Fullscreen';
const MUTE = 'Mute video';
const NEXT = 'Next Video';
const PLAY_PAUSE = 'Play/Pause';
const PREV = 'Previous Video';
const STOP = 'Stop';
const VOLUME = 'Volume';

interface Props {
  player: HTMLVideoElement | null;
}

export default ({ player }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState({ max: 0, value: 0 });

  const progressElement: RefObject<HTMLProgressElement> = React.createRef();
  const volumeElement: RefObject<HTMLInputElement> = React.createRef();

  useEffect(
    () => {
      if (player) {
        player.controls = false;
        player.addEventListener('timeupdate', () => {
          if (!progress.max) {
            setProgress({
              value: player.currentTime,
              max: player.duration
            });
          } else {
            setProgress({ ...progress, value: player.currentTime });
          }
        });
        player.addEventListener('loadedmetadata', () => {
          setProgress({ ...progress, max: player.duration });
        });
      }
    },
    [player]
  );
  const handleProgressClick = (event: any) => {
    if (player && progressElement.current) {
      const pos =
        (event.pageX - progressElement.current.offsetLeft) /
        progressElement.current.offsetWidth;
      player.currentTime = pos * player.duration;
    }
  };

  const handleVolume = () => {
    if (player && volumeElement.current) {
      console.log(typeof volumeElement.current.value);
      player.volume = Number(volumeElement.current.value) / 100;
    }
  };

  const formatTime = (time: number) => {
    var hours = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;
    var formattedTime = '';

    if (hours > 0) {
      formattedTime += `${hours}:${mins < 10 ? '0' : ''}`;
    }
    formattedTime += `${mins}:${secs < 10 ? '0' : ''}`;
    formattedTime += `${secs}`;
    return formattedTime;
  };

  const handleFullScreen = () => {
    //@ts-ignore
    const moz = document.mozFullScreenEnabled;
    //@ts-ignore
    const ms = document.msFullscreenEnabled;
    //@ts-ignore
    const webkitEnabled = document.webkitFullscreenEnabled;
    //@ts-ignore
    /*const webkitRequest = document.createElement('video')
      .webkitRequestFullScreen;*/
    var fullScreenEnabled = !!(
      document.fullscreenEnabled ||
      moz ||
      ms ||
      webkitEnabled
    );
  };

  const handleClick = (type: string) => {
    if (player instanceof HTMLVideoElement) {
      switch (type) {
        case FULLSCREEN: {
          handleFullScreen();
          break;
        }
        case MUTE: {
          player.muted = !player.muted;
          break;
        }
        case NEXT: {
          break;
        }
        case PLAY_PAUSE: {
          if (!isPlaying) player.play();
          else player.pause();
          setIsPlaying(!isPlaying);
          break;
        }
        case PREV: {
          break;
        }
        case STOP: {
          player.pause();
          player.currentTime = 0;
          setProgress({ ...progress, value: 0 });
          setIsPlaying(false);
          break;
        }
        case VOLUME: {
          player.muted = !player.muted;
          break;
        }
        default:
          return;
      }
    }
  };

  if (!player) return null;

  return (
    <div className='player-controls' id='player-controls'>
      <div>
        <span className='player-controls__time player-controls__time--current'>
          {formatTime(player.currentTime)}
        </span>
        <progress
          className='player-controls__progress'
          max={progress.max}
          onPointerDown={handleProgressClick}
          ref={progressElement}
          value={progress.value}
        />
        <span className='player-controls__time player-controls__time--end'>
          {formatTime(player.duration)}
        </span>
      </div>
      <div>
        {/*<PlayerControlButton
          title={PREV}
          src='./assets/svg/controls/prev.svg'
          onClick={handleClick}
        />*/}
        <PlayerControlButton
          title={PLAY_PAUSE}
          src={
            isPlaying
              ? './assets/svg/controls/pause.svg'
              : './assets/svg/controls/play.svg'
          }
          onClick={handleClick}
        />
        <PlayerControlButton
          title={STOP}
          src='./assets/svg/controls/stop.svg'
          onClick={handleClick}
        />
        <PlayerControlButton
          title={MUTE}
          src={
            player.muted || !player.volume
              ? './assets/svg/controls/mute.svg'
              : player.volume > 0.5
              ? './assets/svg/controls/volume-adjustment.svg'
              : './assets/svg/controls/low-volume.svg'
          }
          onClick={handleClick}
        />
        <input
          className='player-controls__volume'
          min='0'
          max='100'
          onChange={handleVolume}
          onInput={handleVolume}
          ref={volumeElement}
          step='1'
          type='range'
          value={player.muted ? 0 : player.volume * 100}
        />
        {/*<PlayerControlButton
          title={FULLSCREEN}
          src='./assets/svg/controls/maximize.svg'
          onClick={handleClick}
        />*/}
        {/*<PlayerControlButton title={NEXT} src='./assets/svg/controls/next.svg' onClick={handleClick} />
         */}
      </div>
    </div>
  );
};
