import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import {
  Home,
  App,
} from './containers'

let Routes = ({ history }) => (
  <Router history={history}>
    <Route exact path="/" component={Home}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
);

export default Routes;