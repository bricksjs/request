import _Object$defineProperty from "@babel/runtime-corejs3/core-js/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _typeof from "@babel/runtime-corejs3/helpers/typeof";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import axios from 'axios';
import { configJson, configForm } from './config';

var RequestFactory = /*#__PURE__*/function () {
  function RequestFactory() {
    _classCallCheck(this, RequestFactory);
  }

  _createClass(RequestFactory, null, [{
    key: "create",
    // 创建通用request
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_typeof(options) !== 'object') {
        throw new Error('config options must be a object');
      } // 创建实例


      var instance = axios.create(_objectSpread(_objectSpread({}, configJson), options));
      return instance;
    } // 常用json请求

  }, {
    key: "createJsonRequest",
    value: function createJsonRequest() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_typeof(options) !== 'object') {
        throw new Error('config option must be a object');
      } // 创建实例


      var instance = axios.create(_objectSpread(_objectSpread(_objectSpread({}, configJson), options), {}, {
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

      if (_typeof(options) !== 'object') {
        throw new Error('config option must be a object');
      } // 创建实例


      var instance = axios.create(_objectSpread(_objectSpread(_objectSpread({}, configForm), options), {}, {
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

export default RequestFactory;