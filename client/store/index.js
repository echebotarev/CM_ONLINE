import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import reducer from '../reducer'
import history from '../history'

import api from '../middlewares/api'

const middlewares = [];

middlewares.push(
	routerMiddleware(history),
	thunk,
	api
);

if (process.env.NODE_ENV === 'development') {
	// const { logger } = require('redux-logger');
	// middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(...middlewares)
));

export default store