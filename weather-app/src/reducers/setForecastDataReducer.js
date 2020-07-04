import { createSelector } from 'reselect';
import { SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY } from '../constants/actions_constans';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA: {
      const { city, forecastData } = action.payload;
      return {
        ...state,
        [city]: { ...state[city], forecastData, forecastDataDate: new Date() },
      };
    }
    case GET_WEATHER_CITY: {
      const city = action.payload;
      return { ...state, [city]: { ...state[city], weather: null } };
    }
    case SET_WEATHER_CITY: {
      const { city, weatherData } = action.payload;
      return { ...state, [city]: { ...state[city], weather: weatherData } };
    }
    default:
      return state;
  }
};

export const forecastDataSelector = createSelector(
  (state, city) => state[city] && state[city].forecastData,
  (forecastData) => forecastData,
);
