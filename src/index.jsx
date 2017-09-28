import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {routerMiddleware} from 'react-router-redux';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {RootReducer} from 'reducers/RootReducer';
import history from 'libs/history';

import App from 'components/App';

const configureStore = (history, initialState = {}) => {
  const enhancer = compose(
    applyMiddleware(ReduxThunk, routerMiddleware(history)));
    return createStore(RootReducer, initialState, enhancer);
};

ReactDOM.render((
  <Provider store={configureStore()}>
    <Router>
      <App/>
    </Router>
  </Provider>
  ), document.getElementById('frontApp'));