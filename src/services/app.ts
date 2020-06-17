/**
 * @description 
 * @author ronffy
 * @Date 2020-06-10 18:20:33
 * @LastEditTime 2020-06-15 20:15:12
 * @LastEditors ronffy
 */
import apis from '../config/apis';
import axios from 'axios';

export const fetchUploadError = async (errorInfo) => {
  // 只有生产环境才发送错误信息
  if (process.env.NODE_ENV !== 'production') {
    return Promise.resolve();
  }

  return axios({
    url: apis.uploadError,
    method: 'POST',
    data: errorInfo
  })
}

export const fetchErrorList = async () => {
  return axios({
    url: apis.errorList,
  })
  .then(res => {
    return res.data.data;
  })
}