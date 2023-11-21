import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

// Styled components
const EventsContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width:calc(100%-10px);
`;

const EventItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  background-color: ${({ isCurrent }) => (isCurrent ? '#b8de6f' : 'none')};
  color: ${({ hasPassed }) => (hasPassed ? '#737373' : '#000')};
  font-weight: ${({ isCurrent }) => (isCurrent ? 'bold' : 'normal')};
  opacity: ${({ hasPassed }) => (hasPassed ? '0.5' : '1')};
`;

const EventsWidget = () => {
  // Define the events with a start and end time
  const [events, setEvents] = useState([
    { id: 1, title: 'Morning Meet & Greet', startTime: '09:00', endTime: '10:00' },
    { id: 2, title: 'Presentation 1', startTime: '12:00', endTime: '13:00' },
    { id: 2, title: 'Demo Presentation', startTime: '13:00', endTime: '15:00' },
    { id: 3, title: 'Project Deadline', startTime: '15:00', endTime: '16:00' },
    { id: 4, title: 'Expo', startTime: '18:00', endTime: '19:00' },
    // ... other events
  ]);

  // Function to check if an event is current
  const isCurrentEvent = (startTime, endTime) => {
    const now = moment();
    const startMoment = moment(startTime, 'HH:mm');
    const endMoment = moment(endTime, 'HH:mm');
    return now.isBetween(startMoment, endMoment);
  };

  // Function to check if an event has passed
  const hasEventPassed = (endTime) => {
    const now = moment();
    const endMoment = moment(endTime, 'HH:mm');
    return now.isAfter(endMoment);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEvents(events.map(event => ({ ...event }))); // Force update the state to trigger re-render
    }, 60000); // Every minute

    return () => clearInterval(intervalId);
  }, [events]);

  return (
    <>
    <EventsContainer>
      <> <h1>Event Schedule</h1></>
      {events.map(event => {
        const isCurrent = isCurrentEvent(event.startTime, event.endTime);
        const hasPassed = hasEventPassed(event.endTime);

        return (
          <EventItem key={event.id} isCurrent={isCurrent} hasPassed={hasPassed}>
            <strong>{event.title}</strong> <br />
            {`${moment(event.startTime, 'HH:mm').format('h:mm A')} - ${moment(event.endTime, 'HH:mm').format('h:mm A')}`}
          </EventItem>
        );
      })}
    </EventsContainer>
    </>
  );
};

export default EventsWidget;
