import React from 'react';
import {bindConnects} from 'libs/connect';
import {Link} from 'react-router-dom';

import UserActions from 'actions/UserActions';

class Login extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data : {
        test : ""
      }
    }
  }

  render(){
    return(
      <h2> Sing In </h2>
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
