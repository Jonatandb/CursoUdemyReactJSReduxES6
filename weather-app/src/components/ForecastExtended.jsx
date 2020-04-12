import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './FerecastItem';
import { CircularProgress } from '@material-ui/core';

// const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

// const data = {
//   temperature: 99,
//   weatherState: 'sun',
//   humidity: 99,
//   wind: '99 m/s',
// };

class ForecastExtended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: null,
    };
  }

  renderForecastItemDays() {
    return <CircularProgress />;
    //return days.map((day) => <ForecastItem key={day} weekDay={day} hour={10} data={data} />);
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecastExtendedTitle">Pronóstico extendido: {city}</h2>
        {forecastData ? this.renderForecastItemDays() : <CircularProgress />}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
