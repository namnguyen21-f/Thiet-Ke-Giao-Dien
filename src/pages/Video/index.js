import React, {Fragment, useRef, useState} from 'react';
import { Container, Divider, InputAdornment } from '@material-ui/core';
import './index.css'
import LikeIcon from '../../image/LikedIcon.svg';
import CommentIcon from '../../image/CommentIcon.svg';
import useIntersectionObserver from '@react-hook/intersection-observer';
import VideoPlayer from '../../components/VideoJS';
import VideoCarousel from '../../components/VideoCarousel';
import Input from '@material-ui/core/Input';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import { withRouter } from "react-router";
import SendIcon from '@material-ui/icons/Send';
import GifIcon from '@material-ui/icons/Gif';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import IconButton from "@material-ui/core/IconButton";
import VideoCard4 from '../../components/VideoCard4';
//
import PickerGif from 'react-giphy-picker'
import Picker from 'emoji-picker-react';

const ChosenGift = ({onHandleGif}) =>{
    function selected(gif){
        onHandleGif(gif);
    }
    return (
        <div className="commentInput__dis">
            <PickerGif onSelected={selected} />
        </div>
    )
}

const ChosenEmoji = ({onHandleEmoji}) => {
    const onEmojiClick = (event, emojiObject) => {
      onHandleEmoji(emojiObject);
    };
  
    return (
      <div className="commentInput__dis">
        <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%' }} />
      </div>
    );
};



const newrecommnendData = [
    {
        id: "1",
        title: "NickSeven",
        subtitle: "Thích ăn chuối aaaaaa quá trời quá đất luôn",
        time: "5 phút trước",
        viewNumber: "24.9k",
        poster: "https://c.files.bbci.co.uk/650D/production/_118496852_gettyimages-96668384.jpg",
        posterGif: "https://i.pinimg.com/originals/86/06/3d/86063d349f9bd4b9b5145f1fa23957db.gif",
        videoData: {
            poster: 'https://c.files.bbci.co.uk/650D/production/_118496852_gettyimages-96668384.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            type: "video/mp4"
        }
    },
    {
        id: "2",
        title: "NickOne",
        subtitle: "Thích ăn chơm chơm",
        time: "20 phút trước",
        viewNumber: "24.9k",
        poster: "https://c.files.bbci.co.uk/650D/production/_118496852_gettyimages-96668384.jpg",
        posterGif: "https://i.pinimg.com/originals/86/06/3d/86063d349f9bd4b9b5145f1fa23957db.gif",
        videoData: {
            poster: 'https://c.files.bbci.co.uk/650D/production/_118496852_gettyimages-96668384.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            type: "video/mp4"
        }
    },
    {
        id: "3",
        title: "NickSeven",
        subtitle: "Thích ăn chuối aaaaaa quá trời quá đất luôn",
        time: "5 phút trước",
        viewNumber: "24.9k",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Big_Buck_Bunny_4K.webm/310px-seek%3D116-Big_Buck_Bunny_4K.webm.jpg",
        posterGif: "https://thumbs.gfycat.com/BlueFixedAtlanticspadefish-size_restricted.gif",
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
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Big_Buck_Bunny_4K.webm/310px-seek%3D116-Big_Buck_Bunny_4K.webm.jpg",
        posterGif: "https://thumbs.gfycat.com/BlueFixedAtlanticspadefish-size_restricted.gif",
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
                username: "Tage no age",
                content: "Hôm nay như tui vui quá đi thôi",
                likeNumber: "22.9k",
                commentNumber: "22.9k",
                img: "gif",
                url: "https://stickershop.line-scdn.net/stickershop/v1/product/23861/LINEStorePC/main.png",
            }
        ]
    }
]

let CommentItem = ({item,trace, clName,children , handleSend}) => {
    const [isOpen, setisOpen] = useState(false);
    const [userComment, setUserComment] = useState(false);
    const [isOptionClick, setisOptionClick] = useState(false);
    const [optionStyle, setOptionStyle] = useState("");
    const [commentGifURl, setCommentGifURl] = useState(null);

    const respondClick = () =>{
        setisOpen(true);
        setUserComment("@" + item.username +" ");
    }

    const handleSendCmt = () =>{
        handleSend(item , commentGifURl, userComment , trace);
        setisOpen(false);
    }

    const handleGifSelect = (gif) =>{
        setCommentGifURl(gif.downsized_medium.url);
        setisOptionClick(false);
    }

    function handleChangeInput(event) {
        setUserComment(event.target.value);
    }

    const handleEmojiSelect = (emoji) =>{
        setUserComment(userComment + emoji.emoji);
        setisOptionClick(false);
    }

    const handleOpenOption = (type) =>{
        if (isOptionClick == true){
            setOptionStyle(type);
        }else{
            setOptionStyle(type);
            setisOptionClick(true);
        }
    }
    return (
        <div className={clName ? clName + " commentItem" : "commentItem"}>
            <div className="">
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
                        <div className="mr1">
                            <img src={LikeIcon}></img>
                            <span>{item.likeNumber}</span>
                        </div>
                        <div className="" onClick={() => respondClick()}>
                            <img src={CommentIcon}></img>
                            <span>{item.commentNumber}</span>
                        </div>
                    </div>
                    {isOpen &&
                        <div className="userComment">
                            <div className="d-flex">
                                <div className="roundedImage" style={{backgroundImage: 'url("https://cdn.logo.com/hotlink-ok/logo-social.png")'}}></div>
                                <form noValidate autoComplete="off">
                                    <div className="commentInput">
                                        {commentGifURl && <img style={{maxWidth:"400px"}} src={commentGifURl}></img>}
                                        <div style={{position: "relative"}}>
                                            <Input row={4} multiline placeholder="Nhập “Miến hài”" 
                                                value={userComment} onChange={(event) => {handleChangeInput(event)}} 
                                                inputProps={{ 'aria-label': 'description' }}
                                                endAdornment={
                                                    <InputAdornment style={{width: "fit-content"}} position="end">
                                                        <IconButton onClick={() => {handleOpenOption("emoji")}}>
                                                            <InsertEmoticonIcon />
                                                        </IconButton>
                                                        <IconButton onClick={() => {handleOpenOption("gif")}}>
                                                            <GifIcon />
                                                        </IconButton>
                                                        <IconButton>
                                                            <SettingsVoiceIcon />
                                                        </IconButton>
                                                        <IconButton  onClick={() => {handleSendCmt()}}>
                                                            <SendIcon></SendIcon>
                                                        </IconButton>
                                                    </InputAdornment>
                                                }  
                                            />
                                            {isOptionClick && optionStyle=="emoji" && <ChosenEmoji onHandleEmoji={handleEmojiSelect}/>}
                                            {isOptionClick && optionStyle=="gif" && <ChosenGift onHandleGif={handleGifSelect}/>}
                                        </div>
                                        
                                    </div>    
                                </form>
                            </div>
                        </div>
                    }  
                </div>
            </div>
            {item.relativeCmt && item.relativeCmt.map((rel,idx2) => {
                const trace2 = trace + "," + idx2;
                return (
                    <CommentItem key={rel.id} handleSend={handleSend} trace={trace2}  item={rel} clName="ml325 mt1"/>
                )
            })}    
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
        this.state = {date: new Date(), videoCarouselData: newrecommnendData, commentData: newComment,
            currentVideo: null , userComment : "",userCommentGifURl: null,userCommentEmoji: [],
            isOptionClick: false , optionStyle: ""};
        this.handleGifSelect = this.handleGifSelect.bind(this);
        this.handleEmojiSelect = this.handleEmojiSelect.bind(this);
        this.handleOpenOption = this.handleOpenOption.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSendCmt = this.handleSendCmt.bind(this);
        this.handleRespondCmt = this.handleRespondCmt.bind(this);
    }
    // "https://i.pinimg.com/originals/1e/3e/37/1e3e3738d81b9db4f6b6505b236a996a.gif"

    handleSendCmt(){
        const newCmt = {
            id : Math.random() * 100,
            username: "HoangNam",
            likeNumber: "0",
            commentNumber: "0",
        }
        if (this.state.userComment == ""){
            alert("Input the content");
        }else{
            newCmt.content = this.state.userComment;
            if (this.state.userCommentGifURl != null){
                newCmt.url = this.state.userCommentGifURl;
                newCmt.img = "gif";
            }
            this.state.commentData.push(newCmt);
            this.setState({commentData: this.state.commentData})
            this.setState({userComment: "", userCommentGifURl:null, isOptionClick:false,optionStyle: "" })
        }
    }
    // handleSend(item , commentGifURl, userComment , trace);
    handleRespondCmt(item , commentGifURl, userComment , trace){
        const newCmt = {
            id : Math.random() * 10000,
            username: "HoangNam",
            likeNumber: "0",
            commentNumber: "0",
        }
        if (userComment == ""){
            alert("Input the content");
        }else{
            newCmt.content = userComment;
            if (commentGifURl != null){
                newCmt.url = commentGifURl;
                newCmt.img = "gif";
            }
            const traceArr = trace.split(",");
            if (traceArr.length == 1){
                this.state.commentData.find(x => x.id === item.id).relativeCmt.push(newCmt);
            }else if (traceArr.length == 2){
        
                if (this.state.commentData[traceArr[0]].relativeCmt.find(x => x.id === item.id).relativeCmt == undefined){
                    this.state.commentData[parseInt(traceArr[0])].relativeCmt.find(x => x.id === item.id).relativeCmt = [newCmt]
                }else{
                    this.state.commentData[parseInt(traceArr[0])].relativeCmt.find(x => x.id === item.id).relativeCmt.push(newCmt);
                }
                
            }
            this.setState({commentData: this.state.commentData})
        }
    }
    

    handleChangeInput(event) {
        this.setState({userComment: event.target.value}); 
    }

    handleGifSelect(gif) {
        this.setState({userCommentGifURl: gif.downsized_medium.url, isOptionClick: false})
    }

    handleEmojiSelect(emoji) {
        this.setState({userComment: this.state.userComment + emoji.emoji}); 
        this.state.userCommentEmoji.push(emoji.emoji);
        this.setState({userCommentEmoji: this.state.userCommentEmoji, isOptionClick: false})
    }

    handleOpenOption(type){
        if (this.state.isOptionClick == true){
            this.setState({optionStyle: type})
        }else{
            this.setState({optionStyle: type ,isOptionClick: true})
        }
        
    }



    componentDidUpdate(prevProps){
        if(this.props.match.params.id!== prevProps.match.params.id){
            
            const id = this.props.match.params.id;
            this.setState({videoCarouselData: newrecommnendData, currentVideo: newrecommnendData[id-1]})
        }
    }

    componentDidMount() {
        
        this.setState({videoCarouselData: newrecommnendData, currentVideo: newrecommnendData[0]})
    }

    render(){
        return (
            <Container maxWidth={false} className="VideoPage">
                <div className="videoSection">
                    {this.state.currentVideo && <VideoCarousel videoArray={this.state.videoCarouselData} currentVideo={this.state.currentVideo}></VideoCarousel>}
                    {this.state.currentVideo && <div className="videoDes">
                            <span className="tag">{this.state.currentVideo.tag || "#tag"}</span>
                            <span className="subtitle">{this.state.currentVideo.subtitle}</span>
                            <h3 className="title">{this.state.currentVideo.title}</h3>
                            <span className="description">10.451 lượt xem - 29 thg 4, 2021</span>
                        </div>
                    }
                    <div className="commentContainer">
                        <div className="userComment">
                            <div className="d-flex">
                                <div className="roundedImage" style={{backgroundImage: 'url("https://cdn.logo.com/hotlink-ok/logo-social.png")'}}></div>
                                <form noValidate autoComplete="off">
                                    {this.state.userCommentGifURl && <img src={this.state.userCommentGifURl}></img>}
                                    <div className="commentInput">
                                        <Input row={4} multiline  placeholder="Nhập “Miến hài”" 
                                            value={this.state.userComment} onChange={this.handleChangeInput} 
                                            inputProps={{ 'aria-label': 'description' }}
                                            endAdornment={
                                                <InputAdornment style={{width: "fit-content"}} position="end">
                                                    <IconButton onClick={() => {this.handleOpenOption("emoji")}}>
                                                        <InsertEmoticonIcon />
                                                    </IconButton>
                                                    <IconButton onClick={() => {this.handleOpenOption("gif")}}>
                                                        <GifIcon />
                                                    </IconButton>
                                                    <IconButton>
                                                        <SettingsVoiceIcon />
                                                    </IconButton>
                                                    <IconButton  onClick={this.handleSendCmt}>
                                                        <SendIcon></SendIcon>
                                                    </IconButton>
                                                </InputAdornment>
                                            }  
                                        />
                                        {this.state.isOptionClick && this.state.optionStyle=="emoji" && <ChosenEmoji onHandleEmoji={this.handleEmojiSelect}/>}
                                        {this.state.isOptionClick && this.state.optionStyle=="gif" && <ChosenGift onHandleGif={this.handleGifSelect}/>}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="commentSection">
                            {this.state.commentData && this.state.commentData.map((item, idx) => {
                                const trace= idx + "";
                                return (<CommentItem key={item.id} trace={trace} clName="mainItem" item={item} handleSend={this.handleRespondCmt}></CommentItem>)
                            })}
                        </div>
                    </div>
                </div>
                <div className="recommendContainer">
                    {newrecommnendData.map((item) => {
                        return <VideoCard4 key={item.id} {...item} onFollowHandle={this.followHandleClick}/>
                    })}
                </div>
            </Container>    
        )
    }
}


export default withRouter(VideoPage)