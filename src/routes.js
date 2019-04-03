import React from 'react';
import { Switch, Route } from 'react-router-dom';
import constants from './common/constants';
import Login from './container/Login';
import RegisterList from './container/RegisterList';

const NoMatch = ({ location }) => (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Login}></Route>
      <Route exact path={constants.ROUTES.LOGIN} component={Login}></Route>
      <Route exact path={constants.ROUTES.REGISTER_LIST} component={RegisterList}></Route>
      <Route component={NoMatch} />
    </Switch>
  );
};
export default Routes;