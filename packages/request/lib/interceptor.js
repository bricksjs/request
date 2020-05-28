"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.onResponseError = exports.onResponse = exports.onRequestError = exports.onRequest = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/promise"));

var _util = require("./util");

// 通用请求拦截器
var onRequest = function onRequest(config) {
  var cfg = (0, _util.formatConfigUrl)(config); // cfg.data = formatData(cfg.data, 'snake');

  return cfg;
}; // 通用请求错误时候


exports.onRequest = onRequest;

var onRequestError = function onRequestError(error) {
  _promise.default.reject(error);
}; // 通用响应


exports.onRequestError = onRequestError;

var onResponse = function onResponse(response) {
  return response;
}; // 通用响应错误


exports.onResponse = onResponse;

var onResponseError = function onResponseError(error) {
  _promise.default.reject(error);
};

exports.onResponseError = onResponseError;