import { VideoInfos } from '../../../types';

import React, { Component } from 'react';

import './VideoCard.css';

interface Props {
  video: VideoInfos;
  onClick: (id: number) => void;
}

export default class VideoCard extends Component<Props> {
  handleClick = (videoId: number) => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(videoId);
    }
  };

  render() {
    const { video } = this.props;

    const thumbnail = video.thumbnail
      ? video.thumbnail
      : './assets/images/butterfly.png';

    return (
      <figure className='video-card'>
        <a onClick={() => this.handleClick(video.id)}>
          <img className='video-card__img' src={thumbnail} />
          <br />
          <span>{video.title}</span>
        </a>
      </figure>
    );
  }
}
