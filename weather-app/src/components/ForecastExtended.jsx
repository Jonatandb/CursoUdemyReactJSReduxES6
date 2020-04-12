import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './FerecastItem';
import { CircularProgress } from '@material-ui/core';
import transformForecast from './../services/transformForecast';
import getForecastURLByCity from './../services/getForecastURLByCity';

class ForecastExtended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: null,
    };
  }

  getData = () => {
    const { city } = this.props;
    fetch(getForecastURLByCity(city))
      .then((response) => response.json())
      .then((forecastJSONResponse) => {
        if (forecastJSONResponse && forecastJSONResponse.cod && forecastJSONResponse.cod === '200') {
          this.setState({
            forecastData: transformForecast(forecastJSONResponse),
          });
        } else {
          console.log(
            'ForecastExtended: Se produjo un error al obtener datos del servidor.',
            forecastJSONResponse && forecastJSONResponse.message && forecastJSONResponse.message,
          );
        }
      })
      .catch((reason) => console.log('ForecastExtended: Se produjo un error en alguna de las Promises:', reason));
  };

  componentDidMount() {
    this.getData();
  }

  renderForecastItemDays() {
    return this.state.forecastData.map((day) => (
      <ForecastItem key={day.dt} weekDay={day.dt_txt.split(' ')[0]} hour={day.dt_txt.split(' ')[1]} data={day.main} />
    ));
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
