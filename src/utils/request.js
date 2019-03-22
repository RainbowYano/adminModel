import axios from 'axios'
// import store from '../store/index'
import {getToken} from '@/utils/auth.js'
import {Message} from 'element-ui'
import store from '@/store'

// axios 实例
const service = axios.create({
  baseURL: '/',
  timeout: 5000 // request timeout
})

// 请求拦截
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 每次发送请求之前都携带一个token
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // 请求错误时
    console.log(error) // for debug
    return Promise.reject(error);
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    Message({
      message: error.message,
      type:'error',
      duration: 5 * 1000
    })
    return Promise.reject(error);
  })



export default service
