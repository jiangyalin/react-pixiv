import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { createStore } from 'redux';

import '../styles/public.scss'
import '../../bower_components/font-awesome/css/font-awesome.min.css'
import Routes from './routes';
import { cs } from './reducers';
import { Provider } from 'react-redux';

const store = createStore(cs);
const rootEl = document.getElementById('app');

render(
  <Provider store={store}>
    <Routes history={browserHistory}/>
  </Provider>,
  rootEl
);