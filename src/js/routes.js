import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import {
  Home,
  App,
} from './containers'

const Routes = ({ history }) => (
  <Router history={history}>
    <Route exact path="/" component={App}>
      <IndexRoute component={App}/>
    </Route>
  </Router>
);

export default Routes;