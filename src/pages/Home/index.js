import React from 'react';
import { Container } from '@material-ui/core';
import './index.css'
import { VideoCard } from '../../components/Card';
//


const newSectionData = [
    {
        title: "Nguyen Phuc",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
    },
    {
        title: "Nguyen Phuc",
        subtitle: "Hôm nay như tui vui quá đi thôi",
        likeNumber: "991.9k",
        commentNumber: "2.9k",
        shareNumber: "24.9k",
    },
]

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date(), newSectionData: newSectionData};
    }

    componentDidMount() {

    }

    render(){
        return (
            <div className="HomePage">
                <div className="newSection">
                    <h3>Mới</h3>
                    {newSectionData.map((item) => {
                        return <VideoCard {...item}/>
                    })}
                </div>
                <div className="recommnendSection">

                </div>
            </div>        
        )
    }
}
