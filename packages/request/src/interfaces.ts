import {
  AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError,
} from 'axios';

declare global {
  interface Window {
    [prop: string]: Sysconfig;
  }
}

export type RequestConfig = AxiosRequestConfig;
export type RequestInstance = AxiosInstance;
export type RequestResponse = AxiosResponse;
export type RequestError = AxiosError;

// export interface RequestFactory {
//   // create(config: RequestConfig): RequestInstance;
//   // createJsonRequest(config: RequestConfig): RequestInstance;
//   // createFormRequest(config: RequestConfig): RequestInstance;
// }

export interface Sysconfig {
  API_PATH: {
    [prop: string]: string;
  };
}

export interface Formatters {
  [prop: string]: Function;
}

export interface ObjectMap {
  [key: string]: any;
}
