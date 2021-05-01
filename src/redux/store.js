import { createStore , applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import createSagaMiddleWare from 'redux-saga';

import rootReducers from './root-reducer';

import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleWare();


const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
};

export const store = createStore(rootReducers , applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

