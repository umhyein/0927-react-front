import {createAction} from 'redux-actions';
import axios from 'libs/axios';
import history from 'libs/history';
//import toastr from 'libs/toastr';

import * as UserActionTypes from 'contants/UserActionTypes';

const signIn = (params) => {
  return dispatch => {
    axios.get('/api/test')
      .then((res) => {
        if(res) {
          dispatch(createAction(UserActionTypes.SIGNIN_SUCCESS)({
            auth:res.data
          }));
        }
      })
      .catch((res) => {
        dispatch(createAction(UserActionTypes.SIGNIN_FAIL)());
        console.log('error');
      });
  }
};

export default {signIn};
