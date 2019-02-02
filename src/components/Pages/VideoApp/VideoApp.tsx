import { VideoInfos, FiltersState } from '../../../types';

import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';

import { updateCurrentVideo } from '../../../redux/currentVideo/actions';
import { loadApp } from '../../../redux/app/actions';
import { getUrlParameters, sortDesc } from '../../../services/utils';

import Logo from '../../Atoms/Logo/Logo';
import FiltersBlock from '../../Molecules/FiltersBlock/FiltersBlock';
import PlayerBlock from '../../Organisms/PlayerBlock/PlayerBlock';
import VideoCard from '../../Atoms/VideoCard/VideoCard';

import { ALL } from '../../../constants';

import './VideoApp.css';

interface Props {
  currentVideo: number;
  filters: FiltersState;
  loadApp: (urlParams: Array<string>) => void;
  updateCurrentVideo: (id: number) => void;
  videos: Array<VideoInfos>;
}

class VideoApp extends Component<Props> {
  handleClick = (videoId: number) => {
    const { updateCurrentVideo } = this.props;
    if (updateCurrentVideo) {
      updateCurrentVideo(videoId);
    }
  };

  componentDidMount() {
    const { loadApp } = this.props;

    const urlParams = getUrlParameters();
    if (loadApp) {
      loadApp(urlParams);
    }
  }

  render() {
    const { currentVideo, filters, videos } = this.props;
    const video = videos.find(video => video.id === currentVideo);

    const filteredVideos = videos
      .filter(
        (video: VideoInfos) =>
          (filters.categories.value === ALL ||
            video.category === filters.categories.value) &&
          (filters.years.value === ALL || video.year === filters.years.value)
      )
      .sort(sortDesc);

    const logo = false;
    if (logo) {
      return <Logo />;
    }

    return (
      <div className='video-app'>
        <div className='video-app__player'>
          {video && <h1>{video.title}</h1>}
          {video && <PlayerBlock />}
        </div>

        <div className='video-app__filters'>
          <FiltersBlock />
        </div>
        <div className='video-app__grid'>
          {filteredVideos &&
            filteredVideos.map(video => (
              <VideoCard
                key={video.id}
                onClick={this.handleClick}
                video={video}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currentVideo: state.currentVideo,
  filters: state.filters,
  videos: state.videos
});

const mapDispatchToProps = { loadApp, updateCurrentVideo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoApp);
