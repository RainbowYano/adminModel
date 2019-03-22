const app = {
  state: {
    isCollapse: false
  },
  mutations: {
    SET_COLLAPSE: (state,isCollapse) => {
      state.isCollapse = isCollapse
    }
  },
  actions: {
    IsCollapse({commit,state}) {
      return new Promise((resolve,reject) => {
        commit('SET_COLLAPSE',!state.isCollapse)
        resolve()
      })
    }
  }
}

export default app
