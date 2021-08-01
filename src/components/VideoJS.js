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

    vjsPlayer.on('play' , () => {onPlayHandle()});
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
  console.log(props)
  return (
    <div data-vjs-player>
    
      <video ref={playerRef} className="video-js" onClick={()=>{window.open("video/"+props.id1,"_self");}} />
    </div>
  );
};

export default VideoPlayer;