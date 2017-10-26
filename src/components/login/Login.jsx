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
      <div className="container">
        <form className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <label className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder={this.props.userStore.auth} />
          <label className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
      </div>
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
