"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestFactory = void 0;
const RequestFactory_1 = __importDefault(require("./RequestFactory"));
exports.RequestFactory = RequestFactory_1.default;
// 导出拦截器
var interceptor_1 = require("./interceptor");
Object.defineProperty(exports, "onRequest", { enumerable: true, get: function () { return interceptor_1.onRequest; } });
Object.defineProperty(exports, "onRequestError", { enumerable: true, get: function () { return interceptor_1.onRequestError; } });
Object.defineProperty(exports, "onResponse", { enumerable: true, get: function () { return interceptor_1.onResponse; } });
Object.defineProperty(exports, "onResponseError", { enumerable: true, get: function () { return interceptor_1.onResponseError; } });
// 导出工具类
__exportStar(require("./util"), exports);
// 导出默认的json requst
const request = RequestFactory_1.default.createJsonRequest();
exports.default = request;
