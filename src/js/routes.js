import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import {
  Home,
  App,
  IllustrationInfo
} from './containers'

let Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path=":id" component={IllustrationInfo}/>
    </Route>
  </Router>
);

export default Routes;