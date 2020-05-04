import { createStore } from 'redux';
import { reducers } from '../reducers';

const initialState = { city: 'Buenos Aires,ar' };

export const store = createStore(
  reducers.cityReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
