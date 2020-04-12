import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from '../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

// Weather Icons:
// --------------

// 	Weather Icons sitio oficial:
// 		http://erikflowers.github.io/weather-icons/

// 	React Weather Icons:
// 		https://www.npmjs.com/package/react-weathericons

// 	Weather Icons CDN:
// 		https://cdnjs.com/libraries/weather-icons

// 		Agregar a index.html:
// 			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css" />

const icons = {
  // http://erikflowers.github.io/weather-icons/
  [CLOUD]: 'cloud',
  [SUN]: 'day-sunny',
  [RAIN]: 'rain',
  [SNOW]: 'snow',
  [THUNDER]: 'day-thunderstorm',
  [DRIZZLE]: 'day-showers',
};

const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];
  const sizeIcon = '4x';

  if (icon) return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  else return <WeatherIcons className="wicon" name="meteor" size={sizeIcon} />;
};

const WeatherTemperature = ({ temperature, weatherState }) => {
  return (
    <div className="weatherTemperatureContainer">
      {getWeatherIcon(weatherState)}
      <span className="temperature">{` ${temperature}`}</span>
      <span className="temperatureType">{` ºC`}</span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
