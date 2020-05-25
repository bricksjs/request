import { formatConfigUrl } from './util';
import {
  RequestConfig, RequestError, RequestResponse,
} from './interfaces';

// 通用请求拦截器
export const onRequest = (config: RequestConfig): RequestConfig => {
  const cfg = formatConfigUrl(config);
  // cfg.data = formatData(cfg.data, 'snake');
  return cfg;
};

// 通用请求错误时候
export const onRequestError = (error: RequestError): void => {
  Promise.reject(error);
};

// 通用响应
export const onResponse = (response: RequestResponse): RequestResponse => response;

// 通用响应错误
export const onResponseError = (error: RequestError): void => { Promise.reject(error); };
