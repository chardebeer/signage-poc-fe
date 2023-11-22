import React from 'react';
import styled from 'styled-components';

const IconLogo = styled.div`
  display: block;
  z-index: 100;
  top:20px;
  right:20px;
  position: fixed;
  background-size: contain;
  background-image: url("https://aie.ac/images/header-logo-aie.png");
  background-repeat: no-repeat;
  width: 300px;
  height: 100px;
`;



const Logo = () => {


  return (
    <IconLogo />
  );
};

export default Logo;
