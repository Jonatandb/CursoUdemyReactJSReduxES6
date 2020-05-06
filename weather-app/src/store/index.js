import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from '../reducers';
import thunk from 'redux-thunk';

const initialState = { selectedCity: '' };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers.setSelectedCityReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);
