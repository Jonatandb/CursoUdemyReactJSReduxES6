import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './FerecastItem';
import transformForecast from './../services/transformForecast';
import getForecastURLByCity from './../services/getForecastURLByCity';
import MyWeatherProgressIndicator from './MyWeatherProgressIndicator';

class ForecastExtended extends PureComponent {
  state = {
    forecastData: null,
  };

  componentDidMount() {
    this.getDataByCity(this.props.city);
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecastExtendedTitle">Pronóstico extendido: {city.split(',')[0]}</h2>
        {!forecastData ? <MyWeatherProgressIndicator size="2x" /> : this.renderForecastItemDays(forecastData)}
      </div>
    );
  }

  renderForecastItemDays(forecastData) {
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
