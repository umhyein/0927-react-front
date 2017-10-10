import {createAction} from 'redux-actions';
import axios from 'libs/axios';
import history from 'libs/history';
//import toastr from 'libs/toastr';

import * as UserActionTypes from 'contants/UserActionTypes';

const signIn = (params) => {
  return dispatch => {
    axios.post('/test')
      .then((res) => {
        if(res.data.result) {
          dispatch(createAction(UserActionTypes.SIGNIN_SUCCESS)());
          test:res.data
        }
      })
      .catch((res) => {
        dispatch(createAction(UserActionTypes.SIGNIN_FAIL)());
      });
  }
};

export default {signIn};
