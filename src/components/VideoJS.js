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
  }, [options.sources[0].src]);

  return videoRef;
};

const VideoPlayer = (props) => {
  const playerRef = usePlayer(props);
  useEffect(() => {
    if (playerRef.current !== null){
      const initialId = playerRef.current.id;
      const id = '#' + playerRef.current.id.replace('_html5_api' , '') + ' ';

      if(props.options.autoplay){
        window.addEventListener('scroll', function () {
          if (document.querySelector('#' + initialId)) {
            var windowHeight = window.innerHeight,
            videoEl = document.querySelector('#' + initialId);
            const videoHeight = videoEl.clientHeight;
            const videoClientRect = videoEl.getBoundingClientRect().top;
            if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
              videoEl.play();
            } else {
              videoEl.pause();
            }
          }
        })
      }
      if (props.options.limitPreload){
        playerRef.current.addEventListener("timeupdate", function() {
          if (this.currentTime > props.options.limitPreload) {
              this.pause();
           }
        }, false);
      }
  
      document.querySelector(id + '.vjs-big-play-button').addEventListener('click' , (event) =>{
        event.preventDefault() ;
      })
      document.querySelector(id + '.vjs-play-control').addEventListener('click' , (event) =>{
        event.preventDefault();
      })
      document.querySelector(id + '.vjs-mute-control').addEventListener('click' , (event) =>{
        event.preventDefault();
      })
    }
    
    
  },[])
  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js"/>
    </div>
  );
};

export default VideoPlayer;