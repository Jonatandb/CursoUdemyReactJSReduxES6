import { SET_CITY } from '../actions';

export default (state, action) => {
  console.log('cityReducer recibió: ' + JSON.stringify(action));
  let result = state;
  switch (action.type) {
    case SET_CITY:
      result = { ...state, city: action.value };
      break;
    default:
      result = state;
  }
  console.log('cityReducer state final devuelto: ' + JSON.stringify(result));
  return result;
};
