"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = exports.formatData = exports.formatConfigUrl = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/get-own-property-symbols"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/for-each"));

var _keys2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/object/keys"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/map"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/index-of"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _nameStyles = require("name-styles");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys2.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context3; (0, _forEach.default)(_context3 = ownKeys(Object(source), true)).call(_context3, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context4; (0, _forEach.default)(_context4 = ownKeys(Object(source))).call(_context4, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

// 处理#分隔的URL
var formatConfigUrl = function formatConfigUrl() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var cfg = _objectSpread({}, config);

  var _cfg = cfg,
      url = _cfg.url;

  if (!url || (0, _indexOf.default)(url).call(url, '#') === -1) {
    return cfg;
  }

  var data = window;
  var configKeys = url.split('#');

  if (configKeys.length === 2) {
    configKeys.unshift('LOCAL');
  }

  var keys = (0, _map.default)(configKeys).call(configKeys, function (key, index) {
    return index === 0 ? "".concat(key, "_CONFIG") : key;
  });

  var _keys = (0, _slicedToArray2.default)(keys, 3),
      configKey = _keys[0],
      gsvKey = _keys[1],
      methodName = _keys[2];

  url = data[configKey].API_PATH[gsvKey] + methodName; // 重写url

  cfg = _objectSpread(_objectSpread({}, cfg), {}, {
    url: url
  });
  return cfg;
}; // data.key 转化为 下划线: user_name


exports.formatConfigUrl = formatConfigUrl;

var formatData = function formatData() {
  var _context, _context2;

  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'snake';
  var formatters = {
    camel: _nameStyles.camel,
    pascal: _nameStyles.pascal,
    hyphen: _nameStyles.hyphen,
    snake: _nameStyles.snake
  };

  if ((0, _indexOf.default)(_context = (0, _keys2.default)(formatters)).call(_context, formatter) === -1) {
    throw new Error('formatter must be one of camel, ascal, hyphen, snake');
  }

  var res = {};
  (0, _forEach.default)(_context2 = (0, _keys2.default)(data)).call(_context2, function (key) {
    var formatted = formatters[formatter](key);
    res[formatted] = data[key];
  });
  return res;
};

exports.formatData = formatData;
var _default = formatConfigUrl;
exports.default = _default;