import { formatConfigUrl } from './util';
// 通用请求拦截器
export const onRequest = (config) => {
    const cfg = formatConfigUrl(config);
    // cfg.data = formatData(cfg.data, 'snake');
    return cfg;
};
// 通用请求错误时候
export const onRequestError = (error) => {
    Promise.reject(error);
};
// 通用响应
export const onResponse = (response) => response;
// 通用响应错误
export const onResponseError = (error) => { Promise.reject(error); };
