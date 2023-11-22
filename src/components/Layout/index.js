import React from 'react';
import styled from 'styled-components';
import Announcements from '../Announcements';
import Weather from '../Weather';
import Slideshow from '../Slideshow';
import EventList from '../EventList';
// Other imports for different widgets would go here

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  padding: 10px;
  max-height: 100vh; // Adjust as needed to fill the screen
  background: #ececec; // Just a placeholder color
`;

const Header = styled.header`
  grid-column: span 12;
  background: #0E284B;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  z-index:99;
`;

const MainContent = styled.main`
  grid-column: span 8;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: auto;
`;

const SideBar = styled.aside`
  grid-column: span 4;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: auto;
`;

const Footer = styled.footer`
  grid-column: span 12;
  position: absoloute;
  background: #0E284B;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
`;

// Placeholder components just to demonstrate the layout
const Widget = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`;

// We'll create the following components based on the image provided
// For this example, I'll just set up placeholders.

// Actual component imports and definitions would go here

const Layout = () => {
  return (
    <GridContainer>
      <Header>      <Announcements />
</Header>
      <MainContent>
        <Slideshow />
        {/* More main content widgets */}
      </MainContent>
      <SideBar>
        <EventList />
        <Weather />
      </SideBar>
    </GridContainer>
  );
};

export default Layout;
