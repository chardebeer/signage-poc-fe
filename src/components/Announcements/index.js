import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for sliding and fading effect
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Styled components
const AnnouncementsContainer = styled.div`
  background-color: rgba(0,0,0,0);
  padding: 10px 20px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  min-height: 50px; // Set a minimum height
`;

const AnnouncementText = styled.div`
  text-align: left;
  font-size: 2rem;
  opacity: 0; // Start with text invisible
  animation: ${slideIn} 2s ease forwards, ${fadeOut} 2s ease forwards 4s; // Slide in and fade out with delay
  position: absolute;
  left: 50;
  width: 100%;
`;

const Announcements = () => {
  // Dummy data for the announcements
  const announcements = [
    'Welcome to Campus Digital Signage!',
    'Today\'s guest lecture: "The Future of AI"',
    'Library hours extended until 11 PM this week.',
    'Don\'t miss tonight\'s game at the stadium!',
  ];

  // State to keep track of the current announcement index
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    // Set an interval to cycle through the announcements
    const intervalId = setInterval(() => {
      setCurrentAnnouncement((prevAnnouncement) =>
        (prevAnnouncement + 1) % announcements.length
      );
    }, 6000); // Change announcement every 6 seconds to allow for fade effect

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [announcements.length]);

  return (
    <AnnouncementsContainer>
      {announcements.map((announcement, index) => (
        <AnnouncementText
          key={index}
          style={{
            display: index === currentAnnouncement ? 'block' : 'none',
          }}
        >
          {announcement}
        </AnnouncementText>
      ))}
    </AnnouncementsContainer>
  );
};

export default Announcements;
