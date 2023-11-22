import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%; // Adjust the width as needed
  max-height:40vh;
  padding-top: 56.25%; // This sets the aspect ratio to 16:9
  position: relative;
  background: #000;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
`;

const Slideshow = () => {
  const videoId = 'BsIQ5Fiw9-4'; // YouTube video ID

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0`;

  return (
    <VideoContainer>
      <StyledIframe
        src={videoSrc}
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></StyledIframe>
    </VideoContainer>
  );
};


export default Slideshow;
