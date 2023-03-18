import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import storage from 'helpers/storage';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { Caption, VideoStyled } from './VideoPlayer.styled';

const arr = storage.load('progressCourses') ?? [];

const Video = props => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current, props);
      _player.ready(function () {
        const matchEl = arr.find(el => el.title === props.data);
        _player.currentTime(matchEl ? matchEl.time : '0');
      });

      setPlayer(_player);

      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, [player, props]);

  const handleClick = () => {
    const curTime = player?.cache_?.currentTime;

    if (arr.length < 0 || arr.every(el => el.title !== props.data)) {
      arr.push({ title: props.data, time: curTime });
    }
    if (arr.map(el => (el.title === props.data ? (el.time = curTime) : el)));

    storage.save('progressCourses', arr);
  };

  return (
    <div data-vjs-player>
      <Caption>
        Lesson {props.lessonNumber} - {props.data}
      </Caption>
      <VideoStyled
        ref={videoNode}
        onClick={handleClick}
        className="video-js"
      ></VideoStyled>
    </div>
  );
};

const VideoPlayer = ({ poster, link, title, lessonNumber }) => {
  const isLoading = useSelector(selectIsLoading);

  const play = {
    lessonNumber: lessonNumber,
    data: title,
    fill: true,
    fluid: true,
    controls: true,
    preload: 'metadata',
    poster: poster,
    sources: [
      {
        src: link,
        type: 'application/x-mpegURL',
      },
    ],
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="App">
          <Video {...play} />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

Video.propTypes = {
  controls: PropTypes.bool,
  data: PropTypes.string,
  fill: PropTypes.bool,
  fluid: PropTypes.bool,
  lessonNumber: PropTypes.number,
  poster: PropTypes.string,
  preload: PropTypes.string,
  sources: PropTypes.arrayOf(PropTypes.object),
};

VideoPlayer.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  lessonNumber: PropTypes.number,
  poster: PropTypes.string,
};
