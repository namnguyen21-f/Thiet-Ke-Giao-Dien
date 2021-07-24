
import LikeIcon from '../image/LikedIcon.svg';
import CommentIcon from '../image/CommentIcon.svg';
import ShareIcon from '../image/ShareIcon.svg';
import './VideoCard2.css';
//title : string, subtitle: string, descripton: Componet for more dec, 
//  likeNumber, commentNumber, shareNumber : string
//  onClickHandle : card on Click
export default function VideoCard2 ({id, title, subtitle, onClickHandle, time}) {
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
                    <div className="card-row">

                        <div className="card-title-title">
                            <span className = "title">{title}</span>
                        </div>


                        <div className="card-time-time">
                            <span className = "time">{time}</span>
                        </div>
                    
                    </div>

                    <div className="card-subtitle">
                        {subtitle && <span className="subtitle">{subtitle}</span>}
                    </div>

                </div>
            </div>
            <div className="card-body">
                <div className="video">
                    <video controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                     poster="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"></video>
                </div>
            </div>
        </div>
    )
}
    