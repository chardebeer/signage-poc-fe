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
    'Welcome to our Open Day!',
  //  'Next Presentation starts at 15:00 in Room 2',
    'Re-Registration Now Open',
    'Don\'t miss out on Early Bird Discounts',
    // 'Join our Evening Gala at 18:00 in the Main Hall',
   'Free Campus Tours Available at the Information Desk',
    // 'Library Exhibition: "History of Our University" - All Day',
    // 'Reminder: Scholarship Applications Due Next Friday',
    // 'Career Services Workshop at 14:00 in Room 5',
    // 'Student Council Elections: Voting Closes at 16:00',
    // 'Alumni Meet and Greet in the Alumni Lounge at 17:00',
    // 'Health and Wellness Seminar in Room 8 at 11:00',
    // 'Art Show Opening in the Student Gallery at 19:00',
    // 'Join our Sustainability Initiative! Meeting at 12:30 in Room 3',
    // 'Founders Day Celebration - All Events Free Today!'
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
