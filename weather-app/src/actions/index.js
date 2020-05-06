import getForecastURLByCity from '../services/getForecastURLByCity';
import transformForecast from '../services/transformForecast';
import { SET_SELECTED_CITY, SET_FORECAST_DATA } from '../constants/actions_constans';

export const setSelectedCityActionCreator = (value) => ({ type: SET_SELECTED_CITY, payload: value });

export const setForecastDataActionCreator = (payload) => ({ type: SET_FORECAST_DATA, payload });

export const fetchForecastData = (payload) => {
  return (dispatch) => {
    dispatch(setSelectedCityActionCreator(payload));

    return fetch(getForecastURLByCity(payload))
      .then((response) => response.json())
      .then((forecastJSONResponse) => {
        if (forecastJSONResponse && forecastJSONResponse.cod && forecastJSONResponse.cod === '200') {
          const transformedForecastData = transformForecast(forecastJSONResponse);
          const action = setForecastDataActionCreator({ city: payload, forecastData: transformedForecastData });
          dispatch(action);
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
};
