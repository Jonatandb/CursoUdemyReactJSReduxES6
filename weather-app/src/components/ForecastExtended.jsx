import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './FerecastItem';
import { CircularProgress } from '@material-ui/core';
import { api_key } from './../constants/api_url';
// const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

// const data = {
//   temperature: 99,
//   weatherState: 'sun',
//   humidity: 99,
//   wind: '99 m/s',
// };

const url_api = 'https://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: null,
    };
  }

  componentDidMount() {
    const url = `${url_api}?q=${this.props.city}&appid=${api_key}`;
    console.log('url:', url);
    fetch(url)
      .then((data) => data.json())
      .then((weatherData) => console.log(weatherData));
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
