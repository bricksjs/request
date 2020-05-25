"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onResponseError = exports.onResponse = exports.onRequestError = exports.onRequest = void 0;
const util_1 = require("./util");
// 通用请求拦截器
exports.onRequest = (config) => {
    const cfg = util_1.formatConfigUrl(config);
    // cfg.data = formatData(cfg.data, 'snake');
    return cfg;
};
// 通用请求错误时候
exports.onRequestError = (error) => {
    Promise.reject(error);
};
// 通用响应
exports.onResponse = (response) => response;
// 通用响应错误
exports.onResponseError = (error) => { Promise.reject(error); };
