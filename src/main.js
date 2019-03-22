import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './style/index.less'  // 全局css
import './style/normalize.css' // normalize

import './mock/index'   //mock数据

import './icons/index'  //icon

import './permission.js'  //权限控制
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// console.log(process.env.NODE_ENV)
// console.log(process.env.BASE_URL)
// console.log(process.env.VUE_APP_SECRET)
// console.log(process.env.VUE_APP_BASE_API)
