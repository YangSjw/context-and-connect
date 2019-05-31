import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Parent from './components/Parent'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Parent} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
