webpackHotUpdate(0,{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(317);

var _axios = __webpack_require__(359);

var _axios2 = _interopRequireDefault(_axios);

var _history = __webpack_require__(49);

var _history2 = _interopRequireDefault(_history);

var _UserActionTypes = __webpack_require__(137);

var UserActionTypes = _interopRequireWildcard(_UserActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signIn = function signIn(params) {
  return function (dispatch) {
    _axios2.default.get('/api/test').then(function (res) {
      if (res.data.result) {
        dispatch((0, _reduxActions.createAction)(UserActionTypes.SIGNIN_SUCCESS)({
          test: res.data
        }));
      }
    }).catch(function (res) {
      dispatch((0, _reduxActions.createAction)(UserActionTypes.SIGNIN_FAIL)());
      _history2.default.replace('/');
    });
  };
};
//import toastr from 'libs/toastr';

exports.default = { signIn: signIn };

/***/ })

})