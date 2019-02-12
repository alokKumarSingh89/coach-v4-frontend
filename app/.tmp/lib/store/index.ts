import { applyMiddleware, compose, createStore } from 'redux';

import { composeWithDevTools } from 'remote-redux-devtools';
import { default as reducers } from '@lib/store/reducers';
import reduxThunk from 'redux-thunk';

// store middlewares
const middlewares = [reduxThunk];

// store enhacer
const enhancer = compose(
  applyMiddleware(...middlewares),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// store instance
export default createStore(reducers, enhancer);
