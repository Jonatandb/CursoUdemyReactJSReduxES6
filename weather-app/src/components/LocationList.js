import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
  const onWeatherLocationSelected = (city) => {
    //console.log('LocationList -> onWeatherLocationSelected -> city:', city);
    onSelectedLocation(city);
  };

  return (
    <div className="locationList">
      {cities.map((c) => (
        <WeatherLocation key={c} city={c} onWeatherLocationClick={() => onWeatherLocationSelected(c)} />
      ))}
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
};

export default LocationList;
