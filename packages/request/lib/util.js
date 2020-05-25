"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatData = exports.formatConfigUrl = void 0;
const name_styles_1 = require("name-styles");
// 处理#分隔的URL
exports.formatConfigUrl = (config = {}) => {
    let cfg = Object.assign({}, config);
    let { url } = cfg;
    if (!url || url.indexOf('#') === -1) {
        return cfg;
    }
    const data = window;
    const configKeys = url.split('#');
    if (configKeys.length === 2) {
        configKeys.unshift('LOCAL');
    }
    const keys = configKeys.map((key, index) => (index === 0 ? `${key}_CONFIG` : key));
    const [configKey, gsvKey, methodName] = keys;
    url = data[configKey].API_PATH[gsvKey] + methodName;
    // 重写url
    cfg = Object.assign(Object.assign({}, cfg), { url });
    return cfg;
};
// data.key 转化为 下划线: user_name
exports.formatData = (data = {}, formatter = 'snake') => {
    const formatters = {
        camel: name_styles_1.camel,
        pascal: name_styles_1.pascal,
        hyphen: name_styles_1.hyphen,
        snake: name_styles_1.snake,
    };
    if (Object.keys(formatters).indexOf(formatter) === -1) {
        throw new Error('formatter must be one of camel, ascal, hyphen, snake');
    }
    const res = {};
    Object.keys(data).forEach((key) => {
        const formatted = formatters[formatter](key);
        res[formatted] = data[key];
    });
    return res;
};
exports.default = exports.formatConfigUrl;
