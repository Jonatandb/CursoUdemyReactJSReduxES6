import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities, onSelectedLocation }) => {
  const onWeatherLocationSelected = (city) => {
    onSelectedLocation(city);
  };

  return (
    <div className="locationList">
      {cities.map((city) => (
        <WeatherLocation
          key={city.key}
          city={city.name}
          data={city.data}
          onWeatherLocationClick={() => onWeatherLocationSelected(city.name)}
        />
      ))}
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
};

export default LocationList;
