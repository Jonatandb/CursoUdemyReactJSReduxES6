import { SET_CITY } from '../actions';

export default (state, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.payload };
    default:
      return state;
  }
};
