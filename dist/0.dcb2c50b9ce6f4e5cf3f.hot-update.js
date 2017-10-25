webpackHotUpdate(0,{

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = auth;

var _reactAddonsUpdate = __webpack_require__(312);

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _UserActionTypes = __webpack_require__(137);

var UserActionTypes = _interopRequireWildcard(_UserActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  switch (action.type) {
    case UserActionTypes.SIGNIN_SUCCESS:
      return action.payload.auth;

    case UserActionTypes.SIGNIN_FAIL:
      return (0, _reactAddonsUpdate2.default)(state, { $merge: {
          error: false,
          test: {}
        } });

    default:
      return state;
  }
}

/***/ })

})