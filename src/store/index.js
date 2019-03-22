import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import user from './modules/user'
import permission from './modules/permission'
import app from './modules/app'
import getters from './getters'


 const store = new Vuex.Store({
  modules:{
    user,
    permission,
    app
  },
  getters
})

export default store
