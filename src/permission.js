import router from './router'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {getToken} from '@/utils/auth.js'
import store from './store';


const whiteList = ['/login']  // no redirect whitelist
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if(getToken()) {
    // 有token
    // console.log('有token')
    if(to.path == '/login') {
      // 有token去登录页，重定向到首页
      next({path: '/'})
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      // 有token且不去登录页
      if(store.getters.permissionList.length === 0){
        store.dispatch('GetUserInfo').then(res=> {
          const userRouter = res.data.userRouter
          store.dispatch('GenerateRoutes', userRouter).then(()=> {
            router.addRoutes(store.getters.addRouters)
            next({...to, replace: true}) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch(err=> {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err)
            next({ path: '/' })
          })
        })
      }
      next()
    }
  } else {
    // 没有token
    // console.log("没有token")
    if(whiteList.indexOf(to.path) !== -1) {
      // 在免登陆白名单，直接进入
      // console.log('白名单')
      next()
    } else {
      // console.log('重定向')
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }

})

router.afterEach( (to, from, next)=> {
  // console.log(to.matched)
  // 设置面包屑导航
  store.commit('SET_CRUMBLIST', to.matched)
  NProgress.done()  // finish progress bar
})
