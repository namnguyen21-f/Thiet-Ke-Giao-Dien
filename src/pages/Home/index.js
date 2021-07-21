import React from 'react';
import { Container } from '@material-ui/core';
import './index.css'
import VideoCard from '../../components/VideoCard';
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

                </div> 
            </Container>    
        )
    }
}
