import _Promise from "@babel/runtime-corejs3/core-js/promise";
import { formatConfigUrl } from './util';
// 通用请求拦截器
export var onRequest = function onRequest(config) {
  var cfg = formatConfigUrl(config); // cfg.data = formatData(cfg.data, 'snake');

  return cfg;
}; // 通用请求错误时候

export var onRequestError = function onRequestError(error) {
  _Promise.reject(error);
}; // 通用响应

export var onResponse = function onResponse(response) {
  return response;
}; // 通用响应错误

export var onResponseError = function onResponseError(error) {
  _Promise.reject(error);
};