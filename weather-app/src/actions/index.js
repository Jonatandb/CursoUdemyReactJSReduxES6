import getWeatherURLByCity from '../services/getWeatherURLByCity';
import getForecastURLByCity from '../services/getForecastURLByCity';
import transformForecast from '../services/transformForecast';
import transformWeather from '../services/transformWeather';

import {
  SET_SELECTED_CITY,
  SET_FORECAST_DATA,
  SET_WEATHER_CITY,
  GET_WEATHER_CITY,
} from '../constants/actions_constans';

const setSelectedCityActionCreator = (payload) => ({ type: SET_SELECTED_CITY, payload });

const setForecastDataActionCreator = (payload) => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCityActionCreator = (payload) => ({ type: GET_WEATHER_CITY, payload });

const setWeatherCityActionCreator = (payload) => ({ type: SET_WEATHER_CITY, payload });

export const getForecastData = (city) => {
  return (dispatch) => {
    dispatch(setSelectedCityActionCreator(city));
    fetch(getForecastURLByCity(city))
      .then((response) => response.json())
      .then((forecastJSONResponse) => {
        if (forecastJSONResponse && forecastJSONResponse.cod && forecastJSONResponse.cod === '200') {
          const transformedForecastData = transformForecast(forecastJSONResponse);
          dispatch(setForecastDataActionCreator({ city, forecastData: transformedForecastData }));
        } else {
          console.log(
            `getForecastData -> Se produjo un error al obtener datos del servidor para la ciudad: ${city}`,
            forecastJSONResponse && forecastJSONResponse.message && forecastJSONResponse.message,
          );
        }
      })
      .catch((reason) =>
        console.log(
          `getForecastData -> Se produjo un error al obtener datos del servidor para la ciudad: ${city}`,
          reason,
        ),
      );
  };
};

export const getWeather = (cities) => {
  return (dispatch) => {
    cities.forEach((city) => {
      dispatch(getWeatherCityActionCreator(city));
      fetch(getWeatherURLByCity(city))
        .then((response) => response.json())
        .then((weatherJSONResponse) => {
          let transformedWeatherData = null;
          if (weatherJSONResponse && weatherJSONResponse.cod && weatherJSONResponse.cod === 200) {
            transformedWeatherData = transformWeather(weatherJSONResponse);
          } else {
            console.log(
              `getWeather -> Se produjo un error al obtener datos del servidor para la ciudad: ${city}`,
              weatherJSONResponse && weatherJSONResponse.message && weatherJSONResponse.message,
            );
          }
          dispatch(setWeatherCityActionCreator({ city, weatherData: transformedWeatherData }));
        })
        .catch((reason) =>
          console.log(
            `getWeather -> Se produjo un error al obtener datos del servidor para la ciudad: ${city}`,
            reason,
          ),
        );
    });
  };
};
