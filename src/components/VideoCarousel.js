import React, { useEffect, useRef, useState } from "react";
import ReportIcon from '@material-ui/icons/Report';
import VideoPlayer from "./VideoJS";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LogoIcon from '../image/LogoIcon.svg';
import VideoCard3 from './VideoCard3';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Link } from "react-router-dom";
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
//data
export default function VideoCarousel ({videoArray, currentVideo, header,onPlayHandle}) {
    const [selected, setSelected] = useState(null);    

    useEffect(() => {
        
        if (videoArray && currentVideo && videoArray[0]) {
            setSelected(currentVideo);
        }
 
    }, [currentVideo]);

    // const handleSelectedImageChange = (newIdx) => {
    //     // if (videoArray && videoArray.length > 0) {
    //     //   setSelected(videoArray[newIdx]);
    //     //   setSelectedIndex(newIdx);
    //     // }
    // };

    // const handleRightClick = (idx) => {
    //     const widthItem = document.querySelector('.carousel .carousel__nav .card').clientWidth;
    //     const widthContiner = document.querySelector('.carousel').clientWidth;
    //     setTimeout(
    //     function() {
    //         if (offSet - widthItem >= 0){
    //             setOffSet(offSet - widthItem);
    //         }else{
    //             const dt = (videoArray.length * widthItem) - (widthContiner + Math.abs(offSet));
    //             console.log(dt)
    //             if ( dt > widthItem){
    //                 setOffSet(offSet - widthItem);
    //             }else{
    //                 setOffSet(offSet - dt);
    //             }
    //         }
    //     },150);
    // };
  
    // const handleLeftClick = () => {
    //     const widthItem = document.querySelector('.carousel .carousel__nav .card').clientWidth;
    //     const widthContiner = document.querySelector('.carousel').clientWidth;
    //     setTimeout(
    //     function() {
    //         if (offSet + widthItem >= 0){
    //             setOffSet(0);
    //         }else{
    //             setOffSet(offSet + widthItem);
    //         }
    //     },150);
    // };

    const handleBackClick = () => {
      
    };

    const handleReportClick = () => {
      
    };


    return (
        <div className="video-container">
            {header && <h2 className="header">{header}</h2>}
            <div className="selected">
              {selected && selected.videoData && <VideoPlayer onPlayHandle={() => {onPlayHandle()}} options={gererateOptions(selected.videoData)}></VideoPlayer>}
              <a className="backBtn" onClick={() => {handleBackClick()}}><ArrowBackIcon></ArrowBackIcon></a>
              <a className="reportBtn" onClick={() => {handleReportClick()}}><ReportIcon></ReportIcon> <span>Report</span></a>
              <div className="logo"><img src={LogoIcon}></img></div>
            </div>
        </div>
    )

}