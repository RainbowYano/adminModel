import focus from './focus'

const install = function(Vue) {
  Vue.directives('focus',focus)
}

if(window.Vue) {
  window['focus'] = focus
  Vue.use(install)
}

focus.install = install
export default focus
