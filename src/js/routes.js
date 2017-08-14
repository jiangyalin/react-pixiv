import React from 'react'
import { Provider, connect } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'

import {
  Home,
  App,
} from './containers'

const Routes = ({ store, history }) => (
    <Router history={history}>
      <Route exact path="/" component={Home}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
);

export default Routes;