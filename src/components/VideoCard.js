
import LikeIcon from '../image/LikedIcon.svg';
import CommentIcon from '../image/CommentIcon.svg';
import ShareIcon from '../image/ShareIcon.svg';
import LikedIcon from '../image/LikedIcon.png';
import './VideoCard.css';
import VideoJS from './VideoJS';
import { useState , useRef } from 'react';
<<<<<<< Updated upstream
import { colors } from '@material-ui/core';
=======
import {Link} from 'react-router-dom';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import videojs from 'video.js';
>>>>>>> Stashed changes
const gererateOptions = (props) => {
    const videoJsOptions = { 
        controls:true,
        controlBar: {
            children: [
                "playToggle",
                'muteToggle'
            ]
        },
<<<<<<< Updated upstream
        autoplay:'muted',
        responsive: true,
        fluid: true,
        liveui:false,
=======
     
>>>>>>> Stashed changes
        poster: props.poster ,
       
        sources: [{
          src: props.url,
          type: props.type,
        }]
    }
    return videoJsOptions;    
}

// title : string, subtitle: string, descripton: Componet for more dec, 
//  likeNumber, commentNumber, shareNumber : string
//  onClickHandle : card on Click

export default function VideoCard ({id, title,subtitle, descripton, likeNumber, commentNumber, shareNumber, viewNumber, 
        videoData, isfollow, islike ,onClickHandle , onFollowHandle, onLikeHandle}) {
    const [isPlay , setIsPlay] = useState(false);
    const videoViewRef = useRef(null);
    const onPlayHandle = () => {
        videoViewRef.current.removeChild(videoViewRef.current.children[0]);
    }
<<<<<<< Updated upstream

=======
    var state='white'
    var state1='blue';
    if(isfollow){state='#04009A';state1='white'}
    var like=LikeIcon
    if(islike){like=LikedIcon}
    const videoPlayClick = (event) =>{
        event.preventDefault();
    }
>>>>>>> Stashed changes
    return (
        <div key={title} className="card" 
            onClick={() => {
                if (onClickHandle) 
               
                onClickHandle();
            }
        }>
            <div className="card-title">
                <div className="card-title-image">
                    <div className="roundedImage" style={{backgroundImage: 'url("https://cdn.logo.com/hotlink-ok/logo-social.png")'}}></div>
                </div>
                <div>
                    <div className="card-title-title d-flex" >
                        <div>
                            <span className="title">{title}</span>
                            {subtitle && <span className="subtitle">{subtitle}</span>}
                        </div>
                        <a  style={{backgroundColor:state,color:state1}}onClick={(event) => {onFollowHandle(event,id);}  } >{!isfollow ?  "Follow":"Followed" }</a>
                    </div>
                    {descripton && 
                        <div className="card-title-descripton">
                            {descripton}
                        </div>}
                    
                </div>
            </div>
            <div className="card-body">
                <div className="videoInteraction">
                    <div>
                        <img src={like} onClick={(event) => {onLikeHandle(event,id);console.log(islike)} }></img>
                        <span>{likeNumber}</span>
                    </div>
                    <div>
                        <img src={CommentIcon}></img>
                        <span>{commentNumber}</span>
                    </div>
                    <div>
                        <img src={ShareIcon}></img>
                        <span>{shareNumber}</span>
                    </div>
                </div>
<<<<<<< Updated upstream
                <div className="video"  >
                 
                    <VideoJS onPlayHandle={() => {onPlayHandle()}} options={gererateOptions(videoData)} id1={id}  ></VideoJS>
=======
                <Link to={`/video/${id}`} className="video">
                    <VideoJS onPlayHandle={() => {onPlayHandle() ;}} options={gererateOptions(videoData)} >{}</VideoJS>
>>>>>>> Stashed changes
                    <div ref={videoViewRef} className="videoView" >
                        <span>{viewNumber}</span>
                    </div>    
                </div>
            </div>
        </div>
    )
}
    

