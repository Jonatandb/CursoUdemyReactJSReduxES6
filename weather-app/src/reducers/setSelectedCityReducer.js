import toPairs from 'lodash.topairs';
import { createSelector } from 'reselect';
import { SET_SELECTED_CITY } from '../constants/actions_constans';

export default (state = '', action) => {
  switch (action.type) {
    case SET_SELECTED_CITY:
      return action.payload;
    default:
      return state;
  }
};

const fromObjToArray = (cities) => toPairs(cities).map(([key, value]) => ({ key, name: key, data: value.weather }));

export const getWeatherCities = createSelector(
  (state) => fromObjToArray(state),
  (cities) => cities,
);
