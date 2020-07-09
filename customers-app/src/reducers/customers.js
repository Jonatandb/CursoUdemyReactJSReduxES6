import { handleActions } from "redux-actions";
import { FETCH_CUSTOMERS } from "../constants";

const defaultState = [];

export const customers = handleActions(
  {
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
  },
  defaultState
);
