import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  loginByUserName,
  getInfo,
  logout
} from '@/api/login.js'


const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    userRouter: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USERROUTER: (state, routes) => {
      state.userRouter = routes
    }
  },
  actions: {
    // 登录
    Login({
      commit,
      state
    }, userInfo) {
      let username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUserName(username, userInfo.password).then(res => {
          // console.log(res)
          commit('SET_TOKEN', res.data.data.token)
          setToken(res.data.data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    //获取用户信息
    GetUserInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          // console.log(res)
          if (!res.data) {
            reject('Verification failed, please login again')
          }
          const data = res.data
          if (data.userRouter && data.userRouter.length > 0) {
            commit('SET_USERROUTER', data.userRouter)
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 退出登录
    LogOUt({
      commit
    }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(err=> {
          reject(err)
        })
      })
    },
    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
