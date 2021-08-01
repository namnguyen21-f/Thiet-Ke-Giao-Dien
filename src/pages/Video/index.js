import React, {Fragment, useRef} from 'react';
import { Container, InputAdornment } from '@material-ui/core';
import './index.css'
import LikeIcon from '../../image/LikedIcon.svg';
import CommentIcon from '../../image/CommentIcon.svg';
import useIntersectionObserver from '@react-hook/intersection-observer';
import VideoPlayer from '../../components/VideoJS';
import VideoCarousel from '../../components/VideoCarousel';
import Input from '@material-ui/core/Input';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import { withRouter } from "react-router";
import Button from '@material-ui/core/Button';
import SearchIcon from "@material-ui/icons/Search";
import {TextField} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import GifIcon from '@material-ui/icons/Gif';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import IconButton from "@material-ui/core/IconButton";
import VideoCard2 from '../../components/VideoCard2';
//


var newSectionData = [
    {
        id: "1",
        title: "Nguyen Nam Heh",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        viewNumber: "24.9k",
        isfollow: false,
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        },
        path: "/video/1",
    },
    {
        id: "2",
        title: "Nguyen Nam h",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        viewNumber: "24.9k",
        isfollow: false,
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        },
        path: "/video/2",
    },
    {
        id: "3",
        title: "Nguyen Nam dHeh",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        viewNumber: "24.9k",
        isfollow: false,
        videoData: {
            poster: 'https://i.ytimg.com/vi/c2gB83g_HSc/maxresdefault.jpg',
            url : "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
            type: "application/x-mpegURL"
        },
        path: "/video/3",
    },
    {
        id: "4",
        title: "Nguyen Nam sHeh",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        viewNumber: "24.9k",
        isfollow: false,
        videoData: {
            poster: 'https://i.ytimg.com/vi/c2gB83g_HSc/maxresdefault.jpg',
            url : "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
            type: "application/x-mpegURL"
        },
        path: "/video/4",
    },
    {
        id: "5",
        title: "Nguyen Nam rHeh",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        viewNumber: "24.9k",
        isfollow: false,
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        },
        path: "/video/5",
    },
]
const newrecommnendData = [
    {
        id: "1",
        title: "NickSeven",
        subtitle: "Thích ăn chuối aaaaaa quá trời quá đất luôn",
        time: "5 phút trước",
        viewNumber: "24.9k",
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        }
    },
    {
        id: "2",
        title: "NickOne",
        subtitle: "Thích ăn chơm chơm",
        time: "20 phút trước",
        viewNumber: "24.9k",
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        }
    },
    {
        id: "3",
        title: "NickSeven",
        subtitle: "Thích ăn chuối aaaaaa quá trời quá đất luôn",
        time: "5 phút trước",
        viewNumber: "24.9k",
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        }
    },
    {
        id: "4",
        title: "NickOne",
        subtitle: "Thích ăn chơm chơm",
        time: "20 phút trước",
        viewNumber: "24.9k",
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        }
    },
]
let newComment = [
    {
        id : "1",
        username: "HoangNam",
        content: "Hôm nay như tui vui quá đi thôi",
        img: "gif",
        url: "https://i.pinimg.com/originals/1e/3e/37/1e3e3738d81b9db4f6b6505b236a996a.gif",
        likeNumber: "22.9k",
        commentNumber: "22.9k",
        relativeCmt: [
            {
                id : "1",
                username: "HoangNam",
                content: "Hôm nay như tui vui quá đi thôi",
                likeNumber: "22.9k",
                commentNumber: "22.9k",
                img: "gif",
                url: "https://stickershop.line-scdn.net/stickershop/v1/product/23861/LINEStorePC/main.png",
            }
        ]
    }
]

let CommentItem = ({item, clName,children}) => {
    return (
        <div key={item.id} className={clName ? clName + " commentItem" : "commentItem"}>
            <div className="roundedImage" style={{backgroundImage: 'url("https://cdn.logo.com/hotlink-ok/logo-social.png")'}}></div>
            <div>
                <div className="d-flex commentItem__content">
                    <div>
                        <span className="title">{item.username}{item.dec && <span>{item.dec}</span>}</span>
                        {item.img && item.img == "gif" && <img className="gif img" src={item.url}></img>}
                        {item.content && <span className="subtitle">{item.content}</span>}
                    </div>  
                    {/* <a onClick={(event) => {onFollowHandle(event,id)}}>{isfollow ? "Followed" : "Follow"}</a> */}
                </div>
                <div className="d-flex commentItem__info">
                    <div className="d-flex mr1">
                        <img src={LikeIcon}></img>
                        <span>{item.likeNumber}</span>
                    </div>
                    <div className="d-flex">
                        <img src={CommentIcon}></img>
                        <span>{item.commentNumber}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LazyLoading = (props) => {
    const containerRef = useRef();
    const lockRef = useRef(false);
    const { isIntersecting } = useIntersectionObserver(containerRef);
    if (isIntersecting && !lockRef.current) {
        lockRef.current = true
    }
    return (
        <div ref={containerRef}>
            {lockRef.current && props.children}
        </div>
    )
}

class VideoPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date(), videoCarouselData: newSectionData, 
            currentVideo: null , userComment : "",userCommentImageURl: null,
            isOptionClick: false};
        this.handleGifSelect = this.handleGifSelect.bind(this);
        this.handleOpenOption = this.handleOpenOption.bind(this);
    }
    // "https://i.pinimg.com/originals/1e/3e/37/1e3e3738d81b9db4f6b6505b236a996a.gif"

    handleGifSelect(url) {
        this.setState({userCommentImageURl: url, isOptionClick: false})
    }

    handleOpenOption(){
        this.setState({isOptionClick: true})
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.id!== prevProps.match.params.id){
            const id = this.props.match.params.id;
            this.setState({videoCarouselData: newSectionData, currentVideo: newSectionData[id]})
        }
    }

    componentDidMount() {
        const paramId = this.props.match.params.id;
        this.setState({videoCarouselData: newSectionData, currentVideo: newSectionData[0]})
    }

    render(){
        return (
            <Container maxWidth={false} className="VideoPage">
                <div className="videoSection">
                    {this.state.currentVideo && <VideoCarousel videoArray={this.state.videoCarouselData} currentVideo={this.state.currentVideo}></VideoCarousel>}
                    {this.state.currentVideo && <div className="videoDes">
                            <span className="tag">{this.state.currentVideo.tag || "#tag"}</span>
                            <h3 className="title">{this.state.currentVideo.title}</h3>
                            <span className="subtitle">{this.state.currentVideo.subtitle}</span>
                            <span className="description">10.451 lượt xem - 29 thg 4, 2021</span>
                        </div>
                    }
                    <div className="commentContainer">
                        <div className="userComment">
                            <div className="d-flex">
                                <div className="roundedImage" style={{backgroundImage: 'url("https://cdn.logo.com/hotlink-ok/logo-social.png")'}}></div>
                                <form noValidate autoComplete="off">
                                    {this.state.userCommentImageURl && <img src={this.state.userCommentImageURl}></img>}
                                    <div className="commentInput">
                                        <Input placeholder="Nhập “Miến hài”" 
                                            value={this.state.userComment} onChange={(event) => {
                                                this.setState({userComment: event.target.value}); 
                                            }} 
                                            inputProps={{ 'aria-label': 'description' }}
                                            endAdornment={
                                                <InputAdornment style={{width: "fit-content"}} position="end">
                                                    <IconButton onClick={this.handleOpenOption}>
                                                        <InsertEmoticonIcon />
                                                    </IconButton>
                                                    <IconButton>
                                                        <GifIcon />
                                                    </IconButton>
                                                    <IconButton>
                                                        <SettingsVoiceIcon />
                                                    </IconButton>
                                                    <IconButton>
                                                        <SendIcon></SendIcon>
                                                    </IconButton>
                                                </InputAdornment>
                                            }  
                                        />
                                        {this.state.isOptionClick && <div className="commentInput__dis">
                                            <TextField className="search"
                                                InputProps={{
                                                    startAdornment: (
                                                    <InputAdornment>
                                                        <IconButton>
                                                            <SearchIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <div className="scrollBar">
                                                <img onClick={(event) =>{this.handleGifSelect("https://i.pinimg.com/originals/1e/3e/37/1e3e3738d81b9db4f6b6505b236a996a.gif")}} src={"https://i.pinimg.com/originals/1e/3e/37/1e3e3738d81b9db4f6b6505b236a996a.gif"}></img>
                                                <img src={"https://i.pinimg.com/originals/60/f2/a0/60f2a03fde642d6d1dd953fd4d44ab5c.gif"}></img>
                                            </div>
                                        </div>}
                                    </div>
                                </form>
                            </div>
                            {/* <div className="commentOption">
                                <Button variant="contained" color="primary">
                                    Send
                                </Button>
                               
                            </div> */}
                        </div>
                        <div className="commentSection">
                            {newComment.map((item, idx) => (
                                <Fragment>
                                    <CommentItem clName="mainItem" item={item}></CommentItem>
                                    {item.relativeCmt && item.relativeCmt.map(rel => {
                                        return (
                                            <CommentItem item={rel} clName="ml325 nestedItem mt1">
                                    
                                            </CommentItem>
                                        )
                                    })}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="recommendContainer">
                    {newrecommnendData.map((item) => {
                        return <VideoCard2 {...item} onFollowHandle={this.followHandleClick}/>
                    })}
                </div>
            </Container>    
        )
    }
}


export default withRouter(VideoPage)