"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

var _config = require("./config");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

var RequestFactory = /*#__PURE__*/function () {
  function RequestFactory() {
    (0, _classCallCheck2.default)(this, RequestFactory);
  }

  (0, _createClass2.default)(RequestFactory, null, [{
    key: "create",
    // 创建通用request
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if ((0, _typeof2.default)(options) !== 'object') {
        throw new Error('config options must be a object');
      } // 创建实例


      var instance = _axios.default.create(_objectSpread(_objectSpread({}, _config.configJson), options));

      return instance;
    } // 常用json请求

  }, {
    key: "createJsonRequest",
    value: function createJsonRequest() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if ((0, _typeof2.default)(options) !== 'object') {
        throw new Error('config option must be a object');
      } // 创建实例


      var instance = _axios.default.create(_objectSpread(_objectSpread(_objectSpread({}, _config.configJson), options), {}, {
        headers: {
          // 切换content-type, transformRequest里面的方法也要相应的注释掉或不注释掉
          'Content-Type': 'application/json'
        }
      }));

      return instance;
    } // 常用form请求

  }, {
    key: "createFormRequest",
    value: function createFormRequest() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if ((0, _typeof2.default)(options) !== 'object') {
        throw new Error('config option must be a object');
      } // 创建实例


      var instance = _axios.default.create(_objectSpread(_objectSpread(_objectSpread({}, _config.configForm), options), {}, {
        headers: {
          // 切换content-type, transformRequest里面的方法也要相应的注释掉或不注释掉
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }));

      return instance;
    }
  }]);
  return RequestFactory;
}();

var _default = RequestFactory;
exports.default = _default;