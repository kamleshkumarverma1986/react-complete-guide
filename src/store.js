import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import user from './reducers/userReducer';
import math from './reducers/mathReducer';

export default createStore(combineReducers({ math, user }), {}, applyMiddleware(logger));