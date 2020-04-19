import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => {
  return (
    <div className="locationContainer">
      <h1>{city.split(',')[0]}</h1>
    </div>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;
