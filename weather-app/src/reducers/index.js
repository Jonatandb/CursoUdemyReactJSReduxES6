import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import setSelectedCityReducer from './setSelectedCityReducer';
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
