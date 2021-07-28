import React, { useEffect, useRef, useState } from "react";
import ReportIcon from '@material-ui/icons/Report';
import VideoPlayer from "./VideoJS";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LogoIcon from '../image/LogoIcon.svg';
import VideoCard3 from './VideoCard3';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
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
export default function VideoCarousel ({videoArray, header,onPlayHandle}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const carouselItemsRef = useRef([]);
    const [offSet, setOffSet] = useState(0);
    useEffect(() => {
        if (videoArray && videoArray[0]) {
            setSelectedIndex(0);
            setSelected(videoArray[0]);
            setOffSet(0);
        }
    }, [videoArray]);

    const handleSelectedImageChange = (newIdx) => {
        if (videoArray && videoArray.length > 0) {
          setSelected(videoArray[newIdx]);
          setSelectedIndex(newIdx);
          if (carouselItemsRef?.current[newIdx]) {
            carouselItemsRef?.current[newIdx]?.scrollIntoView({
              inline: "center",
              behavior: "smooth"
            });
          }
        }
    };

    const handleRightClick = () => {
      // if (videoArray && videoArray.length > 0) {
      //   let newIdx = selectedIndex + 1;
      //   if (newIdx >= videoArray.length) {
      //     newIdx = 0;
      //   }
      //   handleSelectedImageChange(newIdx);
      // }
    };
  
    const handleLeftClick = () => {
      // if (videoArray && videoArray.length > 0) {
      //   let newIdx = selectedImageIndex - 1;
      //   if (newIdx < 0) {
      //     newIdx = images.length - 1;
      //   }
      //   handleSelectedImageChange(newIdx);
      // }
    };

    const handleBackClick = () => {
      
    };

    const handleReportClick = () => {
      
    };


    return (
        <div className="carousel-container">
            {header && <h2 className="header">{header}</h2>}
            <div className="selected">
              {selected && selected.videoData && <VideoPlayer onPlayHandle={() => {onPlayHandle()}} options={gererateOptions(selected.videoData)}></VideoPlayer>}
              <a className="backBtn" onClick={() => {handleBackClick()}}><ArrowBackIcon></ArrowBackIcon></a>
              <a className="reportBtn" onClick={() => {handleReportClick()}}><ReportIcon></ReportIcon> <span>Report</span></a>
              <div className="logo"><img src={LogoIcon}></img></div>
            </div>
            <div className="carousel">
                <div className="carousel__nav" style={{transform: `translateX(${offSet}px)`}}>
                    {videoArray && videoArray.map((video, idx) => (
                      <VideoCard3 refI={carouselItemsRef[idx]} onClickHandle={() => {handleSelectedImageChange(idx)}} {...video} ></VideoCard3>
                    ))}
                </div>
                <button 
                    className="carousel__button carousel__button-left"
                    onClick={handleLeftClick()}
                >
                    <KeyboardArrowLeftIcon/>
                </button>
                <button
                    className="carousel__button carousel__button-right"
                    onClick={handleRightClick()}
                >
                    <KeyboardArrowRightIcon/>
                </button>
            </div>
        </div>
    )

}