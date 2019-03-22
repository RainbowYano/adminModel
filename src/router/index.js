import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/views/home/index'

//如登录页和一些不用权限的公用页面
export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    name: '首页',
    meta: {
      title: '首页',
      icon: 'el-icon-menu'
    },
    children: [{
      path: 'home',
      component: Home,
      name: 'home',
      meta: {
        title: '首页',
        icon: 'el-icon-menu'
      }
    }]
  },

  {
    path:'/login',
    name:'login',
    component: () => import('@/views/login/index.vue')
  }
]

const router =  new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})

//异步挂载的路由
//动态需要根据权限加载的路由表
/**
* 加载路由
*/
import Layout from '../views/layout/index.vue'
const SaleRecord = () => import('@/views/transaction-record/sale-record')
const PublishRecord = () => import('@/views/transaction-record/publish-record')
const PageManagement = () => import('@/views/operation-center/page-management')
const ContentManagement = () => import('@/views/operation-center/content-management')
const MessageInfo = () => import('@/views/backlog/message-info')
const Authorization = () => import('@/views/backlog/authorization')
/**
 *  动态路由
 */
export const asyncRouterMap = [
  {
    path: '/transactionRecord',
    name:'transactionRecord',
    redirect: "/transactionRecord/saleRecord",
    component: Layout,
    meta: {
      title: '闪换交易',
      icon: 'el-icon-document'
    },
    children: [
      {
        path: 'saleRecord',
        name: "saleRecord",
        component: SaleRecord,
        meta: {
          title:'购买记录'
        }
      },
      {
        path: 'publishRecord',
        component: PublishRecord,
        name: 'publishRecord',
        meta: {
          title: '挂卖记录'
        }
      }
    ]
  },
  {
    path: '/operationCenter',
    component: Layout,
    redirect: '/operationCenter/pageManagement',
    name: 'operationCenter',
    meta: {
      title: '运营中心',
      icon: 'el-icon-service'
    },
    children: [
      {
        path: 'pageManagement',
        component: PageManagement,
        name: 'pageManagement',
        meta: { title: '页面管理' }
      },
      {
        path: 'contentManagement',
        component: ContentManagement,
        name: 'contentManagement',
        meta: { title: '内容管理' }
      }
    ]
  },
  {
    path: '/backlog',
    component: Layout,
    name: 'backlog',
    meta: { title: '消息服务', icon: 'el-icon-message'},
    children: [
      {
        path: 'messageInfo',
        component: MessageInfo,
        name: 'messageInfo',
        meta: { title: '短信服务' }
      },
      {
        path: 'authorization',
        component: Authorization,
        name: '服务号授权与消息代发',
        meta: { title: '服务号授权与消息代发' }
      }
    ]
  }
]



export default router





