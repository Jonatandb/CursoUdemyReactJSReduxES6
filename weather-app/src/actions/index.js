import getForecastURLByCity from '../services/getForecastURLByCity';
import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const setCityActionCreator = (value) => ({ type: SET_CITY, payload: value });

export const setForecastDataActionCreator = (payload) => ({ type: SET_FORECAST_DATA, payload });

export const fetchForecastData = (payload) => {
  return (dispatch) => {
    dispatch(setCityActionCreator(payload));

    return fetch(getForecastURLByCity(payload))
      .then((response) => response.json())
      .then((forecastJSONResponse) => {
        if (forecastJSONResponse && forecastJSONResponse.cod && forecastJSONResponse.cod === '200') {
          const transformedForecastData = transformForecast(forecastJSONResponse);
          const action = setForecastDataActionCreator({ city: payload, transformedForecastData });
          dispatch(action);
          console.log('action dispatcheada:', action);
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
