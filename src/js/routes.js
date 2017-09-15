import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import {
  Home,
  App,
  Login,
  IllustrationInfo
} from './containers'

let Routes = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login}>
        <IndexRoute component={Login}/>
      </Route>
      <Route path=":id" component={IllustrationInfo}/>
    </Route>
    <Route path="*" component={Home}/>
  </Router>
);

export default Routes;