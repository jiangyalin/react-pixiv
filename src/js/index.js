import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router'
import Routes from './routes';

const rootEl = document.getElementById('app');

render(
  <Routes history={browserHistory}/>,
  rootEl
);