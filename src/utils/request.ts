
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd'
import storage from './storage'
import { prefix } from '@config';
import { RequestResponse } from '@ts-types';

const defaultHeaders = {
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
}

const defaultOptions: Partial<AxiosRequestConfig> = {
  method: 'GET',
  headers: defaultHeaders,
}

type RequestPromise<T> = Promise<Partial<AxiosResponse<T>> & {
  success: boolean,
  message: string,
  statusCode: number,
}>

export default function request(url: string, options: AxiosRequestConfig = {}): RequestPromise<RequestResponse> {
  options = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    url,
  }

  // 关闭错误提示
  let _offErrorTip = false;
  if (options.data && options.data._offErrorTip) {
    _offErrorTip = true;
    delete options.data._offErrorTip;
  }

  if (options.method.toUpperCase() === 'GET' && options.data) {
    options.params = options.data;
    delete options.data
  }

  // 设置 Authorization
  const token = storage.getItem(`${prefix}-token`);
  if (token) {
    options.headers = {
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    }
  }

  return axios(options)
    .then(response => {
      const { status, statusText } = response
      const successed = checkRspStatus(response)
      if (successed) {
        const data = Array.isArray(response.data) ? response.data : (response.data.data || {})
        return Promise.resolve({
          ...response,
          success: true,
          message: statusText,
          statusCode: status,
          data
        })
      }

      const error = {
        name: 'http error',
        message: 'http response status error',
        config: options,
        code: `${status}`,
        response,
        isAxiosError: false,
      }
      return Promise.reject(error)
    })
    .catch(error => {
      const { response } = error

      // 错误提示
      if (!_offErrorTip) {
        tipError(response || {
          ...error,
          status: 600
        })
      }

      let msg
      let statusCode

      if (response && response instanceof Object) {
        const { statusText } = response
        statusCode = response.status
        msg = response.data.message || statusText
      } else {
        statusCode = 600
        msg = error.message || 'Network Error'
      }

      /* eslint-disable */
      return Promise.resolve({
        ...response,
        data: response && response.data.data || {},
        success: false,
        status: statusCode,
        message: msg,
      })
    })
}

export function checkRspStatus({ status, data = {} }: AxiosResponse) {
  if (
    (status >= 200 && status < 300)
    && (data.code === 0 || data.code === 200) // code 码是服务端返回的
  ) {
    return true;
  }

  return false;
}

function tipError(response: AxiosResponse) {
  const { data = {}, status, statusText } = response;
  let errorMsg = data.message || statusText || '请求错误，请刷新重试';
  message.error(errorMsg);

  if (status === 401 || data.code === 401) {
    storage.removeItem(`${prefix}-token`);
  }

  console.error('http返回结果的 status 码错误，错误信息是:', response);
}
