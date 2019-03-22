import request from '../utils/request'

// 登录
export function loginByUserName(username,password) {
  const data = {
    username,
    password
  }
  return request({
    url:'/user/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getInfo(){
  return request({
    url:'/user/info',
    method:'get'
  })
}

// 退出登录
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
