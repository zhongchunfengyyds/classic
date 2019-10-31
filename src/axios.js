import axios from 'axios'
import QS from 'qs';
// let baseURL = 'http://47.101.134.233:3000';
let baseURL = 'http://127.0.0.1:3000';

//将URL地址前面相同的一段封装
const $http = axios.create({
  baseURL: baseURL,
  timeout: 10000
})
$http.defaults.headers['content-Type'] = 'application/x-www-form-urlencoded'

// 封装get
const get = (url, params) => {
  return new Promise((resolve, reject) => {
    $http.get(url, {
      params,
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
//封装post
const post = (url, params) => {
  params = QS.stringify(params) || {};
  return new Promise((resolve, reject) => {
    $http.post(url,
      params
    ).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
const api = {
  get,
  post
}
export default api