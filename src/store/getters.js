
const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  roles: state => state.user.roles,
  userRouter: state => state.user.userRouter,
  permissionList: state => state.permission.permissionList,
  addRouters: state => state.permission.addRouters,
  sidebarMenU: state => state.permission.sidebarMenU,
  crumbList: state => state.permission.crumbList,
  isCollapse: state => state.app.isCollapse
}
export default getters

