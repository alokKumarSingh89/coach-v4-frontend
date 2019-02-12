import { applyMiddleware, compose, createStore } from 'redux';

import { default as reducers } from 'lib/store/reducers';
import reduxThunk from 'redux-thunk';

// store middlewares
const middlewares = [reduxThunk];

// store enhacer
const enhancer = compose(applyMiddleware(...middlewares));

// store instance
export default createStore(reducers, enhancer);
