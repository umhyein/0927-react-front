import update from 'react-addons-update';

import * as UserActionTypes from 'constants/UserActionTypes';

export function auth (state = {user:{}}, action = null) {
  switch(action.type){
    case UserActionTypes.SIGNIN_SUCCESS:
      return update(state, {$merge: {
        error: false
      }});

    case UserActionTypes.SIGNIN_FAIL:
      return update(state, {$merge: {
        error: true
      }});
  }
}