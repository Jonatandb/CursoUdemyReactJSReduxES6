import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './FerecastItem';
import transformForecast from './../services/transformForecast';
import getForecastURLByCity from './../services/getForecastURLByCity';
import MyWeatherProgressIndicator from './MyWeatherProgressIndicator';

class ForecastExtended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: null,
    };
  }

  getDataByCity = (city) => {
    //console.log('ForecastExtended -> getData()');
    fetch(getForecastURLByCity(city))
      .then((response) => response.json())
      .then((forecastJSONResponse) => {
        if (forecastJSONResponse && forecastJSONResponse.cod && forecastJSONResponse.cod === '200') {
          //console.log('ForecastExtended -> getData() -> forecastJSONResponse:', forecastJSONResponse);
          const transformedForecastData = transformForecast(forecastJSONResponse);
          //console.log(
          //   'ForecastExtended -> getData() -> transformForecast(forecastJSONResponse):',
          //   transformedForecastData,
          // );
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

  componentDidMount() {
    //console.log('ForecastExtended -> componentDidMount()');
    this.getDataByCity(this.props.city);
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('ForecastExtended -> componentDidUpdate()');
    const { city } = this.props;
    if (prevProps.city !== city) {
      //console.log('ForecastExtended -> componentDidUpdate(): prevProps.city != this.props.city => getData()');
      this.setState({
        forecastData: null,
      });
      this.getDataByCity(city);
    } //  else {
    //   console.log(
    //    'ForecastExtended -> componentDidUpdate(): prevProps.city == this.props.city => No call to getData()',
    //   );
    // }
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map(({ weekDay, hour, data }) => (
      <ForecastItem key={weekDay + hour} weekDay={weekDay} hour={hour} data={data} />
    ));
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    //console.log('ForecastExtended -> render() -> city:', city);
    //console.log('ForecastExtended -> render() -> forecastData:', forecastData);
    return (
      <div>
        <h2 className="forecastExtendedTitle">Pronóstico extendido: {city.split(',')[0]}</h2>
        {forecastData ? this.renderForecastItemDays(forecastData) : <MyWeatherProgressIndicator size="2x" />}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
