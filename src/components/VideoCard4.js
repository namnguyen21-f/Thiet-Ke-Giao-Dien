
import {Link} from 'react-router-dom';
import { useState , useRef } from 'react';
import VideoJS from './VideoJS';
import './VideoCard4.css';

const gererateOptions = (props) => {
    const videoJsOptions = { 
        controls: true,
        responsive: true,
        fluid: true,
        poster: props.poster ,
        controlBar:{
            children: [
                'playToggle',
                'muteToggle',
            ]
        },
        sources: [{
          src: props.url,
          type: props.type,
        }]
    }
    return videoJsOptions;    
}
//title : string, subtitle: string, descripton: Componet for more dec, 
//  likeNumber, commentNumber, shareNumber : string
//  onClickHandle : card on Click
export default function VideoCard2 ({id, title, subtitle, onClickHandle, poster , posterGif, 
    videoData, time}) {
    const videoViewRef = useRef(null);
    const onPlayHandle = () => {
        videoViewRef.current.removeChild(videoViewRef.current.children[0]);
    }
    return (
        <div className="cardView4" 
            onClick={() => {
                if (onClickHandle) onClickHandle();
            }
        }>
            <div className="card-title">
                <div className="card-title-image">
                    <div className="roundedImage" style={{backgroundImage: 'url("https://cdn.logo.com/hotlink-ok/logo-social.png")'}}></div>
                </div>
                <div>

                    <div className="card-subtitle">
                         <Link to={`/video/${id}`}>
                            {subtitle && <span className="subtitle">{subtitle}</span>}
                        </Link>
                    </div>

                    <div className="card-row">

                        <div className="card-title-title">
                            <span className = "title">{title}</span>
                        </div>


                        <div className="card-time-time">
                            <span className = "time">{time}</span>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="card-body">
                <Link to={`/video/${id}`} className="video">
                    <img class="static" src={poster}></img>
                    <img className="active" src={posterGif}></img>   
                </Link>
            </div>
        </div>
    )
}
    