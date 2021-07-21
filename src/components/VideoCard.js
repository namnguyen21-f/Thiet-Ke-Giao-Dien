
import LikeIcon from '../image/LikedIcon.svg';
import CommentIcon from '../image/CommentIcon.svg';
import ShareIcon from '../image/ShareIcon.svg';
import './VideoCard.css';
//title : string, subtitle: string, descripton: Componet for more dec, 
//  likeNumber, commentNumber, shareNumber : string
//  onClickHandle : card on Click
export default function VideoCard ({id, title,subtitle, descripton, likeNumber, commentNumber, shareNumber, isfollow ,onClickHandle , onFollowHandle}) {
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
                    <div className="card-title-title d-flex">
                        <div>
                            <span className="title">{title}</span>
                            {subtitle && <span className="subtitle">{subtitle}</span>}
                        </div>
                        <a onClick={(event) => {onFollowHandle(event,id)}}>{isfollow ? "Followed" : "Follow"}</a>
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
                        <img src={LikeIcon}></img>
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
                    <video controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" poster="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"></video>
                </div>
            </div>
        </div>
    )
}
