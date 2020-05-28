"use strict";

var _Object$keys = require("@babel/runtime-corejs3/core-js/object/keys");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js/instance/for-each");

var _context;

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _exportNames = {
  RequestFactory: true,
  onRequest: true,
  onRequestError: true,
  onResponse: true,
  onResponseError: true
};

_Object$defineProperty(exports, "RequestFactory", {
  enumerable: true,
  get: function get() {
    return _RequestFactory.default;
  }
});

_Object$defineProperty(exports, "onRequest", {
  enumerable: true,
  get: function get() {
    return _interceptor.onRequest;
  }
});

_Object$defineProperty(exports, "onRequestError", {
  enumerable: true,
  get: function get() {
    return _interceptor.onRequestError;
  }
});

_Object$defineProperty(exports, "onResponse", {
  enumerable: true,
  get: function get() {
    return _interceptor.onResponse;
  }
});

_Object$defineProperty(exports, "onResponseError", {
  enumerable: true,
  get: function get() {
    return _interceptor.onResponseError;
  }
});

exports.default = void 0;

var _RequestFactory = _interopRequireDefault(require("./RequestFactory"));

var _interceptor = require("./interceptor");

var _util = require("./util");

_forEachInstanceProperty(_context = _Object$keys(_util)).call(_context, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _util[key];
    }
  });
});

// 导出拦截器
// 导出工具类
// 导出工厂
// 导出默认的json requst
var request = _RequestFactory.default.createJsonRequest();

var _default = request;
exports.default = _default;