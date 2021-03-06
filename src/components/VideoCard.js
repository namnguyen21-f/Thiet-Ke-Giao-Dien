
import LikeIcon from '../image/LikeIcon.svg';
import CommentIcon from '../image/CommentIcon.svg';
import ShareIcon from '../image/ShareIcon.svg';
import LikedIcon from '../image/LikedIcon.svg';
import './VideoCard.css';
import VideoJS from './VideoJS';
import { useState , useRef } from 'react';
import {Link} from 'react-router-dom';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
const gererateOptions = (props) => {
    const videoJsOptions = { 
        controls: true,
        responsive: true,
        fluid: true,
        controlBar:{
            children: [
                'playToggle',
                'muteToggle',
            ]
        },
        autoplay:'muted',
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
    const videoViewRef = useRef(null);
    const onPlayHandle = () => {
        
    }

    var state='white'
    var state1='blue';
   
    var like=LikeIcon
    if(islike){like=LikedIcon}

    const videoPlayClick = (event) =>{
        event.preventDefault();
    }
    return (
        <div key={title} className="card" 
            onClick={() => {
                if (onClickHandle) onClickHandle();
            }
        }>
            <div className="card-title">
                <div className="card-title-image">
                    <div className="roundedImage" style={{backgroundImage: 'url("https://cdn.logo.com/hotlink-ok/logo-social.png")'}}></div>
                </div>
                <div>
                    <div className="card-title-title d-flex" >
                        <div>
                            <Link to={'/video/' + id}><span className="title">{title}</span></Link>
                            {subtitle && <span className="subtitle">{subtitle}</span>}
                           
                        </div>
                        <a className={isfollow ? "active" : "" } onClick={(event) => {onFollowHandle(event,id);}  } >{!isfollow ?  "Follow":"Followed" }</a>
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
                <Link to={`/video/${id}`} className="video">
                    <VideoJS onPlayHandle={() => {onPlayHandle()}} options={gererateOptions(videoData)}></VideoJS>
                        
                </Link>
            </div>
        </div>
    )
}
    

