import React from 'react'
import "babel-polyfill"
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import '../styles/public.scss'
import '../../bower_components/font-awesome/css/font-awesome.min.css'
import Routes from './routes'
import reducers from './reducers'
import { Provider } from 'react-redux'

const rootEl = document.getElementById('app');
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Routes history={browserHistory}/>
  </Provider>,
  rootEl
);