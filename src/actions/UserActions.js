import {createAction} from 'redux-actions';
import axios from 'libs/axios';
import history from 'libs/history';
import toastr from 'libs/toastr';

import * as UserActionTypes from 'constants/UserActionTypes';

const signIn = (params) => {
  return dispatch => {
    axios.post('/api/auth/signin')
      .then((res) => {
        if(res.data.result) {
          dispatch(createAction(UserActionTypes.SIGNIN_SUCCESS)());
          history.replace('/main');
        }
      })
      .catch((res) => {
        dispatch(createAction(UserActionTypes.SIGNIN_FAIL)());
      });
  }
};

export default {signIn};
