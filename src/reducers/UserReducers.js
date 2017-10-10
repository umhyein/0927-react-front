import update from 'react-addons-update';

import * as UserActionTypes from 'contants/UserActionTypes';

export function auth (state = {tset:{}}, action = null) {
  switch(action.type){
    case UserActionTypes.SIGNIN_SUCCESS:
      return update(state, {$merge: {
        test: action.payload.test
      }});

    case UserActionTypes.SIGNIN_FAIL:
      return update(state, {$merge: {
        error: false,
        test: {}
      }});

    default:
      return state;
  }
}
