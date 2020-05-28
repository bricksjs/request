import _Object$defineProperty from "@babel/runtime-corejs3/core-js/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptors";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js/object/get-own-property-symbols";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _Object$keys from "@babel/runtime-corejs3/core-js/object/keys";
import _slicedToArray from "@babel/runtime-corejs3/helpers/slicedToArray";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js/instance/map";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js/instance/index-of";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source))).call(_context4, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { camel, pascal, hyphen, snake } from 'name-styles';
// 处理#分隔的URL
export var formatConfigUrl = function formatConfigUrl() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var cfg = _objectSpread({}, config);

  var _cfg = cfg,
      url = _cfg.url;

  if (!url || _indexOfInstanceProperty(url).call(url, '#') === -1) {
    return cfg;
  }

  var data = window;
  var configKeys = url.split('#');

  if (configKeys.length === 2) {
    configKeys.unshift('LOCAL');
  }

  var keys = _mapInstanceProperty(configKeys).call(configKeys, function (key, index) {
    return index === 0 ? "".concat(key, "_CONFIG") : key;
  });

  var _keys = _slicedToArray(keys, 3),
      configKey = _keys[0],
      gsvKey = _keys[1],
      methodName = _keys[2];

  url = data[configKey].API_PATH[gsvKey] + methodName; // 重写url

  cfg = _objectSpread(_objectSpread({}, cfg), {}, {
    url: url
  });
  return cfg;
}; // data.key 转化为 下划线: user_name

export var formatData = function formatData() {
  var _context, _context2;

  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'snake';
  var formatters = {
    camel: camel,
    pascal: pascal,
    hyphen: hyphen,
    snake: snake
  };

  if (_indexOfInstanceProperty(_context = _Object$keys(formatters)).call(_context, formatter) === -1) {
    throw new Error('formatter must be one of camel, ascal, hyphen, snake');
  }

  var res = {};

  _forEachInstanceProperty(_context2 = _Object$keys(data)).call(_context2, function (key) {
    var formatted = formatters[formatter](key);
    res[formatted] = data[key];
  });

  return res;
};
export default formatConfigUrl;