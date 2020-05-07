import { SET_SELECTED_CITY } from '../constants/actions_constans';

export default (state = '', action) => {
  switch (action.type) {
    case SET_SELECTED_CITY:
      return action.payload;
    default:
      return state;
  }
};
