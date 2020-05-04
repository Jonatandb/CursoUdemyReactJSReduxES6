import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './FerecastItem';
import transformForecast from './../services/transformForecast';
import getForecastURLByCity from './../services/getForecastURLByCity';
import { WeatherProgressIndicator } from '../components/_MyComponents';

class ForecastExtended extends PureComponent {
  state = {
    forecastData: null,
  };

  componentDidMount() {
    this.props.city && this.getDataByCity(this.props.city);
  }

  render() {
    let { city } = this.props;
    city = (city && city.split(',')[0]) || city;
    const { forecastData } = this.state;
    let component;
    if (city && forecastData) {
      component = (
        <>
          <h4 className="forecastExtendedTitle">Pronóstico extendido para {city}</h4>
          {this.renderForecastItemForEachDay(forecastData)})
        </>
      );
    } else if (city && !forecastData) {
      component = (
        <>
          <h4 className="forecastExtendedTitle">Cargando pronóstico extendido para {city}</h4>
          <WeatherProgressIndicator size="2x" />
        </>
      );
    } else {
      component = <h4 className="forecastExtendedTitle">Seleccione una ciudad para ver el pronóstico extendido</h4>;
    }
    return <div>{component}</div>;
  }

  renderForecastItemForEachDay(forecastData) {
    return forecastData.map(({ weekDay, hour, data }) => (
      <ForecastItem key={weekDay + hour} weekDay={weekDay} hour={hour} data={data} />
    ));
  }

  getDataByCity = (city) => {
    fetch(getForecastURLByCity(city))
      .then((response) => response.json())
      .then((forecastJSONResponse) => {
        if (forecastJSONResponse && forecastJSONResponse.cod && forecastJSONResponse.cod === '200') {
          const transformedForecastData = transformForecast(forecastJSONResponse);
          this.setState({
            forecastData: transformedForecastData,
          });
        } else {
          console.log(
            'ForecastExtended -> getData(): Se produjo un error al obtener datos del servidor.',
            forecastJSONResponse && forecastJSONResponse.message && forecastJSONResponse.message,
          );
        }
      })
      .catch((reason) =>
        console.log('ForecastExtended -> getData(): Se produjo un error al obtener datos del servidor:', reason),
      );
  };
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
