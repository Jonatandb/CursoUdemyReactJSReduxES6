import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './FerecastItem';

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

class ForecastExtended extends Component {
  renderForecastItemDays() {
    return days.map((day) => <ForecastItem weekDay={day} />);
  }

  render() {
    const { city } = this.props;
    return (
      <div>
        <h2 className="forecastExtendedTitle">Pronóstico extendido: {city}</h2>
        {this.renderForecastItemDays()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
