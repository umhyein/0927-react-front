import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

const bindConnects = (mapper) => {
  return connect(reducer => {
    let obj = {};

    mapper.map((item) => {
      obj[item.storeName] = reducer.stores[item.storeName];
    });

    return obj;

  }, (dispatch) => {
    let obj = {dispatch: dispatch};

    mapper.map((item) => {
      obj[item.actionName] = bindActionCreators(_.assign({}, item.action), dispatch)
    });

    return obj;
  })
}

export {bindConnects};
