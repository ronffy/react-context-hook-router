/**
 * @description 
 * @author ronffy
 * @Date 2020-06-09 16:48:16
 * @LastEditTime 2020-06-09 16:51:28
 * @LastEditors ronffy
 */
import axios, { AxiosResponse } from 'axios';

axios.interceptors.response.use(
  response => {
    if (!checkRspStatus(response)) {
      // 上报错误
    }
    return response;
  },
  error => {
    // 对网络错误进行拦截
    console.log('axios-error:', error);
    return Promise.reject(error);
  }
);


function checkRspStatus({ status, data = {} }: AxiosResponse) {
  if (
    (status >= 200 && status < 300)
    && (data.code === 0 || data.code === 200) // code 码是服务端返回的
  ) {
    return true;
  }

  return false;
}