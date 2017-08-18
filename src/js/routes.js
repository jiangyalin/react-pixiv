import React from 'react'
import { Provider, connect } from 'react-redux';
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

// const mapStateToProps = (store) => {
//   return {
//     store: store
//   }
// };
//
// Routes = connect(
//   mapStateToProps
// )(Routes);

export default Routes;