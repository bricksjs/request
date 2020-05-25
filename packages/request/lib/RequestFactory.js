"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = require("./config");
class RequestFactory {
    // 创建通用request
    static create(options = {}) {
        if (typeof options !== 'object') {
            throw new Error('config options must be a object');
        }
        // 创建实例
        const instance = axios_1.default.create(Object.assign(Object.assign({}, config_1.configJson), options));
        return instance;
    }
    // 常用json请求
    static createJsonRequest(options = {}) {
        if (typeof options !== 'object') {
            throw new Error('config option must be a object');
        }
        // 创建实例
        const instance = axios_1.default.create(Object.assign(Object.assign(Object.assign({}, config_1.configJson), options), { headers: {
                // 切换content-type, transformRequest里面的方法也要相应的注释掉或不注释掉
                'Content-Type': 'application/json',
            } }));
        return instance;
    }
    // 常用form请求
    static createFormRequest(options = {}) {
        if (typeof options !== 'object') {
            throw new Error('config option must be a object');
        }
        // 创建实例
        const instance = axios_1.default.create(Object.assign(Object.assign(Object.assign({}, config_1.configForm), options), { headers: {
                // 切换content-type, transformRequest里面的方法也要相应的注释掉或不注释掉
                'Content-Type': 'application/x-www-form-urlencoded',
            } }));
        return instance;
    }
}
exports.default = RequestFactory;
