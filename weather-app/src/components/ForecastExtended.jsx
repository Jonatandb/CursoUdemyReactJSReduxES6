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
    //console.log('ForecastExtended -> getData()');
    const { city } = this.props;
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
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('ForecastExtended -> componentDidUpdate()');
    if (prevProps.city !== this.props.city) {
      //console.log('ForecastExtended -> componentDidUpdate(): prevProps.city != this.props.city => getData()');
      this.getData();
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
        <h2 className="forecastExtendedTitle">Pronóstico extendido: {city}</h2>
        {forecastData ? this.renderForecastItemDays(forecastData) : <CircularProgress />}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;
