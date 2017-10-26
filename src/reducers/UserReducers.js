import update from 'react-addons-update';

import * as UserActionTypes from 'contants/UserActionTypes';

export function auth (state = [], action = null) {
  switch(action.type){
    case UserActionTypes.SIGNIN_SUCCESS:
    return action.payload.auth;

    case UserActionTypes.SIGNIN_FAIL:
      return state;

    default:
      return state;
  }
}
