import React from 'react'
import { Provider, connect } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router'

import {
  Home,
  App,
} from './containers'

const Routes = ({ store, history }) => (
    <Router history={history}>
      <Route exact path="/" component={App}>
        <IndexRoute component={App}/>
      </Route>
    </Router>
);

export default Routes;