
import LikeIcon from '../image/LikedIcon.svg';
import LikedIcon from '../image/LikedIcon.png';
import CommentIcon from '../image/CommentIcon.svg';
import ShareIcon from '../image/ShareIcon.svg';
import './VideoCard.css';
import VideoJS from './VideoJS';

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
export default function VideoCard ({id, title,subtitle, descripton, likeNumber, commentNumber, shareNumber, viewNumber, videoData, isfollow ,onClickHandle , onFollowHandle,islike,onLikeHandle}) {
    function changeImage(like,liked) {
        if(islike){
            document.getElementById("img").src=like;
            islike=false;}
        else
            document.getElementById("img").src=liked; islike=true;
    }
    return (
        <div key={title} className="card" 
            onClick={() => {
                if (onClickHandle) onClickHandle();
            }
            
        }
            
            
        >
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
                        <a  onClick={(event) => {onFollowHandle(event,id)}}>{isfollow ? "Followed" : "Follow"}</a>
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
                        <div id='img'  onClick={(event)=>{onLikeHandle(event,id)}}>{islike? <img src={LikedIcon}/>:<img src={LikeIcon}/>}</div>
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
                <div className="video">
                    <VideoJS options={gererateOptions(videoData)}></VideoJS>
                    <div className="videoView">
                        <span>{viewNumber}</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

