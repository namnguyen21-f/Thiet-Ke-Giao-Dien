import React from 'react';
import { Container } from '@material-ui/core';
import './index.css'
import VideoCard from '../../components/VideoCard';
import VideoCard2 from '../../components/VideoCard2';
//


const newSectionData = [
    {
        id: "1",
        title: "Nguyen Nam Heh",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        isfollow: false,
    },
    {
        id: "2",
        title: "Nguyen Phuc",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
        isfollow: true,
    },
]

const newrecommnendData = [
    {
        id: "1",
        title: "NickSeven",
        subtitle: "Thích ăn chuối aaaaaa quá trời quá đất luôn",
        time: "5 phút trước"
    },
    {
        id: "1",
        title: "NickOne",
        subtitle: "Thích ăn chơm chơm",
        time: "20 phút trước"
    },
]

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
        console.log("Done");
    }


    render(){
        return (
            <Container className="HomePage">
                <div className="newSection">
                    <h3>Mới</h3>
                    {newSectionData.map((item) => {
                        return <VideoCard {...item} onFollowHandle={this.followHandleClick}/>
                    })}
                </div>
                
                <div className="recommnendSection">
                    <h3>Đề xuất</h3>
                    {newrecommnendData.map((item) => {
                        return <VideoCard2 {...item} onFollowHandle={this.followHandleClick}/>
                    })}
                </div> 
            </Container>    
        )
    }
}
