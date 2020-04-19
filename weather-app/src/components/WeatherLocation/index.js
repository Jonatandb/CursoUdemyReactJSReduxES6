import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import MyWeatherProgressIndicator from '../MyWeatherProgressIndicator';
import './styles.css';
import transformWeather from '../../services/transformWeather';
import getURLByCity from '../../services/getURLByCity';

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
    this.getData();
  }

  getData = () => {
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
            'WeatherLocation: Se produjo un error al obtener datos del servidor.',
            weatherJSONResponse && weatherJSONResponse.message && weatherJSONResponse.message,
          );
        }
      })
      .catch((reason) => console.log('WeatherLocation: Se produjo un error al obtener datos del servidor:', reason));
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationContainer" onClick={this.props.onWeatherLocationClick}>
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <MyWeatherProgressIndicator size="2x" />}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func.isRequired,
};

export default WeatherLocation;
