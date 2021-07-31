import "video.js/dist/video-js.css";
import './VideoJS.css'
import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';

// eslint-disable-next-line import/prefer-default-export
const usePlayer = ({ options , onPlayHandle,id1}) => {
  const videoRef = useRef(null);

  const [player, setPlayer] = useState(null);
  
  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, options);
    vjsPlayer.on('play' , () => {if (onPlayHandle) {onPlayHandle()}});
    setPlayer(vjsPlayer);
    return () => {
      if (player !== null) {
        player.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (player !== null) {
      player.src(options.sources[0].src);
      player.poster(options.poster);
    }
  }, [options]);

  return videoRef;
};



const VideoPlayer = (props) => {
  const playerRef = usePlayer(props);
  useEffect(() => {
    document.querySelector('.vjs-big-play-button').addEventListener('click' , (event) =>{
      event.preventDefault();
    })
    document.querySelector('.vjs-play-control').addEventListener('click' , (event) =>{
      event.preventDefault();
    })
    document.querySelector('.vjs-mute-control').addEventListener('click' , (event) =>{
      event.preventDefault();
    })
  },[])
  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js"/>
    </div>
  );
};

export default VideoPlayer;