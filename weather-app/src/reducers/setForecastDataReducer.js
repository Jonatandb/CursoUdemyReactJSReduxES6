import { SET_FORECAST_DATA } from '../constants/actions_constans';

export default (state, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA:
      const { city, forecastData } = action.payload;
      return {
        ...state,
        cities: [...state.cities, { [city]: { forecastData, weather: null } }],
      };
    default:
      return state;
  }
};
