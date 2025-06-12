// src/components/VideoPage.js
import React from 'react';


const VideoPage = () => {
  return (
    <div className="video-container" style={{width:"100%",height:"400px"}}>
      <video autoPlay loop muted playsInline className="background-video"  >
        <source src="/video/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
