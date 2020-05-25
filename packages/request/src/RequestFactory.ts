import axios from 'axios';
import { configJson, configForm } from './config';
import { RequestConfig, RequestInstance } from './interfaces';

class RequestFactory {
  // 创建通用request
  static create(options: RequestConfig = {}): RequestInstance {
    if (typeof options !== 'object') {
      throw new Error('config options must be a object');
    }

    // 创建实例
    const instance = axios.create({
      ...configJson,
      ...options,
    });
    return instance;
  }

  // 常用json请求
  static createJsonRequest(options: RequestConfig = {}): RequestInstance {
    if (typeof options !== 'object') {
      throw new Error('config option must be a object');
    }

    // 创建实例
    const instance = axios.create({
      ...configJson,
      ...options,
      headers: {
        // 切换content-type, transformRequest里面的方法也要相应的注释掉或不注释掉
        'Content-Type': 'application/json',
      },
    });
    return instance;
  }

  // 常用form请求
  static createFormRequest(options: RequestConfig = {}): RequestInstance {
    if (typeof options !== 'object') {
      throw new Error('config option must be a object');
    }

    // 创建实例
    const instance = axios.create({
      ...configForm,
      ...options,
      headers: {
        // 切换content-type, transformRequest里面的方法也要相应的注释掉或不注释掉
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return instance;
  }
}

export default RequestFactory;
