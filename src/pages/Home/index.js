import React, {useRef} from 'react';
import { Container } from '@material-ui/core';
import './index.css'
import VideoCard from '../../components/VideoCard';
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
        isfollow: true,
        islike: false,
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        }
    },
    {
        id: "2",
        title: "Nguyen Phuc",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        viewNumber: "24.9k",
        isfollow: true,
        islike: false,
        videoData: {
            poster: 'https://i.ytimg.com/vi/BwhvASARMhY/maxresdefault.jpg',
            url : "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
            type: "application/x-mpegURL"
        }
    },
    {
        id: "3",
        title: "Nguyen Phuc",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        viewNumber: "24.9k",
        isfollow: true,
        islike: false,
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        }
    },
    {
        id: "4",
        title: "Nguyen Phuc",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        isfollow: true,
        islike: false,
        viewNumber: "24.9k",
        videoData: {
            poster: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
            url : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            type: "video/mp4"
        }
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
        <div ref={containerRef}>
            {lockRef.current && props.children}
        </div>
    )
}

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date(), newSectionData: newSectionData };
        this.followHandleClick = this.followHandleClick.bind(this);
        this.likeHandleClick=this.likeHandleClick.bind(this);
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
        console.log("Done");
    }
    async likeHandleClick(event,id) {
        event.preventDefault();
        let index = this.state.newSectionData.findIndex(ele => ele.id === id);
        if (this.state.newSectionData[index].islike){
            //generate API....
            
            this.state.newSectionData[index].islike = false;
        }else{
            //
           
            this.state.newSectionData[index].islike = true;
        }
        this.setState({newSectionData: this.state.newSectionData});
        console.log("Done");
    }
     
    render(){
        return (
            <Container className="HomePage">
                <div className="newSection">
                    <h3>Mới</h3>
                    {newSectionData.map((item) => {
                        return (
                            <LazyLoading>
                                
                                <VideoCard {...item} onLikeHandle={this.likeHandleClick} onFollowHandle={this.followHandleClick}/>
                                
                            </LazyLoading>
                        )
                    })}
                </div>
                <div className="recommnendSection">
                    
                </div> 
            </Container>    
        )
    }
}
