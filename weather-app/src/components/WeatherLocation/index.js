import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { WeatherProgressIndicator } from '../../components/_MyComponents';

const WeatherLocation = ({ city, data, onWeatherLocationClick }) => (
  <div className="weatherLocationContainer" onClick={onWeatherLocationClick}>
    <Location city={city} />
    {!data ? <WeatherProgressIndicator /> : <WeatherData data={data} />}
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
  onWeatherLocationClick: PropTypes.func.isRequired,
};

export default WeatherLocation;
