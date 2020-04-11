import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from '../../services/transformWeather';
import getURLByCity from '../../services/getURLByCity';

/*
OpenWeatherMap:	Servicio gratuito que provee datos del clima
---------------

	Página principal:
					https://openweathermap.org/

	Documentación de la API:
					https://openweathermap.org/api

	Guía de uso - How to start:
					https://openweathermap.org/appid

	Ciudad Autónoma de Buenos Aires -> id: 3433955

*/

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null,
    };
  }

  componentDidMount() {
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    const { city } = this.state;
    fetch(getURLByCity(city))
      .then((response) => response.json())
      .then((weatherJSONResponse) => {
        if (weatherJSONResponse && weatherJSONResponse.cod && weatherJSONResponse.cod === 200) {
          this.setState({
            data: transformWeather(weatherJSONResponse),
          });
        } else {
          console.log(
            'WeatherLocation.handleUpdateClick(): Se produjo un error al obtener datos del servidor.',
            weatherJSONResponse && weatherJSONResponse.message && weatherJSONResponse.message,
          );
        }
      })
      .catch((reason) =>
        console.log('WeatherLocation.handleUpdateClick(): Se produjo un error en alguna de las Promises:', reason),
      );
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationContainer" onClick={this.props.onWeatherLocationClick}>
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress size={60} />}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func.isRequired,
};

export default WeatherLocation;
