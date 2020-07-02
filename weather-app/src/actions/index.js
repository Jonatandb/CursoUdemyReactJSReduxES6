import getForecastURLByCity from '../services/getForecastURLByCity';
import transformForecast from '../services/transformForecast';
import { SET_SELECTED_CITY, SET_FORECAST_DATA, SET_WEATHER } from '../constants/actions_constans';

export const setSelectedCityActionCreator = (value) => ({ type: SET_SELECTED_CITY, payload: value });

export const setForecastDataActionCreator = (payload) => ({ type: SET_FORECAST_DATA, payload });

export const fetchForecastData = (payload) => {
  return (dispatch) => {
    dispatch(setSelectedCityActionCreator(payload));

    fetch(getForecastURLByCity(payload))
      .then((response) => response.json())
      .then((forecastJSONResponse) => {
        if (forecastJSONResponse && forecastJSONResponse.cod && forecastJSONResponse.cod === '200') {
          const transformedForecastData = transformForecast(forecastJSONResponse);
          dispatch(setForecastDataActionCreator({ city: payload, forecastData: transformedForecastData }));
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

export const setWeather = (cities) => {
  // return (dispatch) => {
  //   dispatch();
  //   getData = () => {
  //     const { city } = this.state;
  //     fetch(getURLByCity(city))
  //       .then((response) => response.json())
  //       .then((weatherJSONResponse) => {
  //         if (weatherJSONResponse && weatherJSONResponse.cod && weatherJSONResponse.cod === 200) {
  //           this.setState({
  //             data: transformWeather(weatherJSONResponse),
  //           });
  //         } else {
  //           console.log(
  //             'WeatherLocation: Se produjo un error al obtener datos del servidor.',
  //             weatherJSONResponse && weatherJSONResponse.message && weatherJSONResponse.message,
  //           );
  //         }
  //       })
  //       .catch((reason) => console.log('WeatherLocation: Se produjo un error al obtener datos del servidor:', reason));
  //   };
  // };
};
