import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from '../reducers';
import thunk from 'redux-thunk';

const initialState = { city: '' };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(reducers.cityReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
