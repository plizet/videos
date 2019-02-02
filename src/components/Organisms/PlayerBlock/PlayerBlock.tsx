import { VideoInfos } from '../../../types';

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Player from '../../Atoms/Player/Player';
import PlayerControls from '../../Molecules/PlayerControls/PlayerControls';

import './PlayerBlock.css';

interface Props {
  video: VideoInfos;
}
const PlayerBlock = ({
  video: { id, description, urlName, ...props }
}: Props) => {
  const [player, setPlayer] = useState<HTMLVideoElement | null>(null);

  useEffect(
    () => {
      const playerElem = document.getElementById('player') as HTMLVideoElement;
      setPlayer(playerElem);
    },
    [id]
  );

  return (
    <figure className='player-block' id='player-block'>
      <Player key={`player-${id}`} {...props} />
      <PlayerControls key={`controls-${id}`} player={player} />
      <figcaption className='player-block__description'>{`${description}`}</figcaption>
    </figure>
  );
};

const mapStateToProps = (state: any) => {
  return {
    video: state.videos.find(
      (video: VideoInfos) => video.id === state.currentVideo
    )
  };
};

export default connect(
  mapStateToProps,
  null
)(PlayerBlock);
