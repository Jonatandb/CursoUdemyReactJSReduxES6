import { combineReducers } from 'redux';
import setSelectedCityReducer from './setSelectedCityReducer';
import setForecastDataReducer, { forecastDataSelector as _forecastDataSelector } from './setForecastDataReducer';

export default combineReducers({ selectedCity: setSelectedCityReducer, cities: setForecastDataReducer });

export const selectedCitySelector = (state) => state.selectedCity;

export const forecastDataSelector = (state) => _forecastDataSelector(state.cities, selectedCitySelector(state));
