import { combineReducers } from 'redux';
import setSelectedCityReducer from './setSelectedCityReducer';
import setForecastDataReducer from './setForecastDataReducer';

export default combineReducers({ selectedCity: setSelectedCityReducer, cities: setForecastDataReducer });
