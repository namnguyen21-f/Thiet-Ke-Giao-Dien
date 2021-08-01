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
<<<<<<< Updated upstream

    vjsPlayer.on('play' , () => {onPlayHandle()});
=======
    vjsPlayer.on('play' , () => {if (onPlayHandle) {onPlayHandle()}});
 
>>>>>>> Stashed changes
    setPlayer(vjsPlayer);
    return () => {
      if (player !== null) {
        
        player.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (player !== null) {
      player.src(options.sources.src);
    }
  }, [options.sources.src]);

  return videoRef;
};



const VideoPlayer = (props) => {
  const playerRef = usePlayer(props);
<<<<<<< Updated upstream
  console.log(props)
  return (
    <div data-vjs-player>
    
      <video ref={playerRef} className="video-js" onClick={()=>{window.open("video/"+props.id1,"_self");}} />
=======
  useEffect(() => {
    const id = '#' +playerRef.current.id.replace('_html5_api' , '') + ' ';
    document.querySelector(id + '.vjs-big-play-button').addEventListener('click' , (event) =>{
      event.preventDefault() ;
    })
    document.querySelector(id + '.vjs-play-control').addEventListener('click' , (event) =>{
      event.preventDefault();
    })
    document.querySelector(id + '.vjs-mute-control').addEventListener('click' , (event) =>{
      event.preventDefault();
    })

  },[])
  return (
    <div data-vjs-player>
      <video  id={props.id1} ref={playerRef} className="video-js"/>
>>>>>>> Stashed changes
    </div>
  );
};

export default VideoPlayer;