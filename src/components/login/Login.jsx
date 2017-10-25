import React from 'react';
import {bindConnects} from 'libs/connect';
import {Link} from 'react-router-dom';

import UserActions from 'actions/UserActions';

class Login extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
      this.props.userActions.signIn();
  }

  render(){
    return(
      <h1> {this.props.userStore.auth}</h1>
    );
  }
}

export default bindConnects(
  [{
    actionName: 'userActions',
    action: UserActions,
    storeName: 'userStore'
  }]
)(Login);
