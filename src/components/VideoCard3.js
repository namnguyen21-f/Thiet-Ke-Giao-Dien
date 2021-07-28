
import LikeIcon from '../image/LikedIcon.svg';
import CommentIcon from '../image/CommentIcon.svg';
import ShareIcon from '../image/ShareIcon.svg';
import './VideoCard.css';
import VideoJS from './VideoJS';
import { useState , useRef } from 'react';
const gererateOptions = (props) => {
    const videoJsOptions = { 
        controls: true,
        responsive: true,
        fluid: true,
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
export default function VideoCard3 ({id, title,subtitle, descripton, likeNumber, commentNumber, shareNumber, viewNumber, 
        videoData, isfollow ,onClickHandle , onFollowHandle, refI}) {
    const [isPlay , setIsPlay] = useState(false);
    const videoViewRef = useRef(null);
    const onPlayHandle = () => {
        videoViewRef.current.removeChild(videoViewRef.current.children[0]);
    }

    return (
        <div ref={refI} key={title} className="card" 
            onClick={() => {
                if (onClickHandle) onClickHandle();
            }
        }>
            <div className="card-title">
                <div className="card-title-image">
                    <div className="roundedImage" style={{backgroundImage: 'url("https://cdn.logo.com/hotlink-ok/logo-social.png")'}}></div>
                </div>
                <div>
                    <div className="card-title-title d-flex">
                        <div>
                            <span className="title">{title}</span>
                            {subtitle && <span className="subtitle">{subtitle}</span>}
                        </div>
                    </div>
                    {descripton && 
                        <div className="card-title-descripton">
                            {descripton}
                        </div>}
                    
                </div>
            </div>
            <div className="card-body">
                <div className="video">
                    <VideoJS onPlayHandle={() => {onPlayHandle()}} options={gererateOptions(videoData)}></VideoJS>
                    <div ref={videoViewRef} className="videoView">
                        <span>{viewNumber}</span>
                    </div>    
                </div>
            </div>
        </div>
    )
}
    

