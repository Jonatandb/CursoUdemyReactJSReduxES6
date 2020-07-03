import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import setSelectedCityReducer, { getWeatherCities as _getWeatherCities } from './setSelectedCityReducer';
import setForecastDataReducer, { forecastDataSelector as _forecastDataSelector } from './setForecastDataReducer';

export default combineReducers({ selectedCity: setSelectedCityReducer, cities: setForecastDataReducer });

export const selectedCitySelector = createSelector(
  (state) => state.selectedCity,
  (selectedCity) => selectedCity,
);

export const forecastDataSelector = createSelector(
  (state) => state.cities,
  selectedCitySelector,
  _forecastDataSelector,
);

export const getWeatherCities = createSelector((state) => state.cities, _getWeatherCities);
