import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import * as UserReducer    from './UserReducers';

export const RootReducers = combineReducers({
  stores: combineReducers({
    userStore: combineReducers(UserReducer)
  }),
  routing: routerReducer
})