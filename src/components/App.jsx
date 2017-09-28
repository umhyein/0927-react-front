import React from 'react';
import { Switch, Route } from 'react-router-dom';
import history from 'libs/history';

import Login from './login/Login';
import Error from 'components/common/Error';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Switch>
        <Route exact path="/" component={Login} />
        <Route component={Error} />
      </Switch>
    );
  }
}
