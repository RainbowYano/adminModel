import {asyncRouterMap, constantRouterMap} from '@/router/index'

/**
 * 通过对比所有的路由表和请求回来有权限的permissionlist来获得可访问的路由
 * @param asyncRouter 所有的路由表
 * @param route 请求回来有权限的permissionlist
 */
// function filterRouter(asyncRouter,  ajaxvalue) {
// let router = []
// asyncRouter.forEach(w => {
//   ajaxvalue.forEach(n => {
//     if(w.id == n.id) {
//       if(w.children.length == n.children.length) {
//         router.push(w)
//       } else {
//         let childrenarr = []
//         n.children.forEach(nn=> {
//           w.children.forEach(ww=> {
//             if(ww.id == nn.id) {
//               childrenarr.push(ww)
//             }
//           })
//         })
//         w.children = childrenarr
//         router.push(w)
//       }
//     }
//   })
// });
// }


/**
* 根据后台返回的路由动态筛选路由
*/
function filterAsyncRouter (userRouter, allRouter) {
  let accessedRouters = []
  allRouter.forEach((val, i) => {
    userRouter.forEach((item, index) => {
      if (item.text === val.meta.title) {
        if (item.treeNodes && item.treeNodes.length > 0) {
          val.children = filterAsyncRouter(item.treeNodes, val.children)
        }
        accessedRouters.push(val)
      }
    })
  })
  return accessedRouters
}

const permission = {
  state: {
    permissionList:[],
    addRouters:[],
    sidebarMenU: [],
    crumbList:[]
  },
  mutations: {
    SET_ROUTERS: (state,routers) =>  {
      state.addRouters = routers
      state.permissionList = constantRouterMap.concat(routers)
    },
    SET_MENU: (state, menu) => {
      let firstRoute = []
      firstRoute.push(constantRouterMap[0])
      state.sidebarMenU = firstRoute.concat(...menu)
    },
    SET_CRUMBLIST:(state, list) =>{
      state.crumbList = list
    }
  },
  actions: {
    GenerateRoutes({commit},data) {
      return new Promise((resolve,reject) => {
        let userRouter = data
        let accessRouters
        accessRouters = filterAsyncRouter(userRouter, asyncRouterMap)
        commit('SET_ROUTERS',accessRouters)
        commit('SET_MENU',accessRouters)
        resolve()

      })
    }
  }
}

export default permission
