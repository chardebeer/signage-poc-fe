import React from 'react';
import styled from 'styled-components';

const WeatherWidget = styled.div`
  background: #fff;
  padding: 10px;
  max-width:calc(100%-10px);
  max-height: 200px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const Temperature = styled.h2`
  font-size: 2.5rem;
  color: #ff903f;
  margin: 0;
`;

const Condition = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 5px 0 20px;
`;

const WeatherIcon = styled.img`
  width: 100px; // You can adjust the size as needed
`;

const Weather = () => {
  // Static data to simulate a real widget
  const staticWeatherData = {
    temperature: '19°C',
    condition: 'Partly Cloudy',
    icon: 'https://openweathermap.org/img/wn/02d.png' // You can use an actual weather icon URL here
  };

  return (
    <WeatherWidget>
      <Temperature>{staticWeatherData.temperature}</Temperature>
      <WeatherIcon src={staticWeatherData.icon} alt="Weather Icon" />
      <Condition>{staticWeatherData.condition}</Condition>
    </WeatherWidget>
  );
};

export default Weather;
