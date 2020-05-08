import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './FerecastItem';
import { WeatherProgressIndicator } from '../components/_MyComponents';

const renderForecastItemForEachDay = (forecastData) => {
  return forecastData.map(({ weekDay, hour, data }) => (
    <ForecastItem key={weekDay + hour} weekDay={weekDay} hour={hour} data={data} />
  ));
};

const ForecastExtended = (props) => {
  let { city } = props;
  city = (city && city.split(',')[0]) || city;
  const { forecastData } = props;
  let component;
  if (city && forecastData) {
    component = (
      <>
        <h4 className="forecastExtendedTitle">Pronóstico extendido para {city}</h4>
        {renderForecastItemForEachDay(forecastData)}
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
};

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
};

export default ForecastExtended;
