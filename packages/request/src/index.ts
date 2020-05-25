import RequestFactory from './RequestFactory';

// 导出拦截器
export {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError,
} from './interceptor';

// 导出工具类
export * from './util';

// 导出工厂
export {
  RequestFactory,
};

// 导出默认的json requst
const request = RequestFactory.createJsonRequest();
export default request;
