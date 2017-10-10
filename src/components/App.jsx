import React from 'react';
import { Switch, Route } from 'react-router-dom';
import history from 'libs/history';

import Login from './login/Login';
import Main from './main/Main';
import Error from 'components/common/Error';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
        <Route component={Error} />
      </Switch>
    );
  }
}
