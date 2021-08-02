import React, {useRef} from 'react';
import { Container } from '@material-ui/core';
import './index.css'
import VideoCard from '../../components/VideoCard';
import VideoCard2 from '../../components/VideoCard2';
import useIntersectionObserver from '@react-hook/intersection-observer';
//

const newSectionData = [
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
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            type: "video/mp4"
        }
    },
    {
        id: "2",
        title: "Nguyen Nam Hehee",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        viewNumber: "24.9k",
        isfollow: false,
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            type: "video/mp4"
        }
    },
    {
        id: "3",
        title: "Nguyen Nam 1234",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        viewNumber: "24.9k",
        isfollow: false,
        islike:true,
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        }
    }
]

const newrecommnendData = [
    {
        id: "1",
        title: "NickSeven",
        subtitle: "Thích ăn chuối aaaaaa quá trời quá đất luôn",
        time: "5 phút trước",
        viewNumber: "24.9k",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Big_Buck_Bunny_4K.webm/310px-seek%3D116-Big_Buck_Bunny_4K.webm.jpg",
        posterGif: "https://thumbs.gfycat.com/BlueFixedAtlanticspadefish-size_restricted.gif",
        
    },
    {
        id: "2",
        title: "NickOne1",
        subtitle: "Thích ăn chơm chơm",
        time: "20 phút trước",
        viewNumber: "24.9k",
        poster: "https://theplaylist.net/wp-content/uploads/2018/05/doctor-strange-avengers-infinity-war-1-750x400.jpg",
        posterGif: "https://media1.tenor.com/images/0e92f4c4c4290d9d51a234185886090f/tenor.gif?itemid=15245265",
        
    },
    {
        id: "3",
        title: "NickSeven2",
        subtitle: "Thích ăn chuối aaaaaa quá trời quá đất luôn",
        time: "5 phút trước",
        viewNumber: "24.9k",
        poster: "https://theplaylist.net/wp-content/uploads/2018/05/doctor-strange-avengers-infinity-war-1-750x400.jpg",
        posterGif: "https://media1.tenor.com/images/0e92f4c4c4290d9d51a234185886090f/tenor.gif?itemid=15245265",
    },
    {
        id: "4",
        title: "NickOne4",
        subtitle: "Thích ăn chơm chơm",
        time: "20 phút trước",
        viewNumber: "24.9k",
        poster: "https://znews-photo.zadn.vn/w660/Uploaded/bzcvolp3/2019_04_29/ironmantony.jpg",
        posterGif: "https://i.pinimg.com/originals/b9/6b/a7/b96ba7c09694b5ece6db21c7e917d943.gif",
    },
]

const LazyLoading = (props) => {
    const containerRef = useRef();
    const lockRef = useRef(false);
    const { isIntersecting } = useIntersectionObserver(containerRef);
    if (isIntersecting && !lockRef.current) {
        lockRef.current = true
    }
    return (
        <div key={props.keyV} ref={containerRef}>
            {lockRef.current && props.children}
        </div>
    )
}

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date(), newSectionData: newSectionData };
        this.followHandleClick = this.followHandleClick.bind(this);
    }

    componentDidMount() {

    }

    async followHandleClick(event,id) {
        event.preventDefault();
        let index = this.state.newSectionData.findIndex(ele => ele.id === id);
        if (this.state.newSectionData[index].isfollow){
            //generate API....
            this.state.newSectionData[index].isfollow = false;
        }else{
            //
            this.state.newSectionData[index].isfollow = true;
        }
        this.setState({newSectionData: this.state.newSectionData});
        
    }


    render(){
        return (
            <Container className="HomePage">
                <div className="newSection">
                    <h3>Mới</h3>
                    {newSectionData.map((item,idx) => {
                        return (
                            <LazyLoading key={item.title}>
                                <VideoCard {...item} onFollowHandle={this.followHandleClick}/>
                            </LazyLoading>
                        )
                    })}
                </div>
                
                <div className="recommnendSection">
                    <h3>Đề xuất</h3>
                    {newrecommnendData.map((item) => {
                        return <VideoCard2 key={item.title} {...item} onFollowHandle={this.followHandleClick}/>
                    })}
                </div> 
            </Container>    
        )
    }
}
