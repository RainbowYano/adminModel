import {
  param2Obj
} from './utils'

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default {
  login: res => {
    const {
      username
    } = JSON.parse(res.body)
    const data = tokens[username]

    if (data) {
      return {
        code: 20000,
        data
      }
    }
    return {
      code: 60204,
      message: 'Account and password are incorrect.'
    }
  },
  // getInfo: res => {
  //   const { token } = param2Obj(res.url)
  //   const info = users[token]

  //   if (info) {
  //     return {
  //       code: 20000,
  //       data: info
  //     }
  //   }
  //   return {
  //     code: 50008,
  //     message: 'Login failed, unable to get user details.'
  //   }
  // },

  getInfo: () => {
    return {
      roles: ['editor'],
      introduction: 'I am an editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Normal Editor',
      userRouter: [{
        "id": "75",
        "text": "闪换交易",
        "state": "parent",
        "path": "/transactionRecord",
        "treeNodes": [{
          "id": "76",
          "text": "挂卖记录",
          "state": "alone",
          "path": "/saleRecord"
        }, {
          "id": "80",
          "text": "购买记录",
          "state": "alone",
          "path": "/publishRecord"
        }]
      }, {
        "id": "71",
        "text": "运营中心",
        "state": "parent",
        "path": "/operationCenter",
        "treeNodes": [{
          "id": "74",
          "text": "页面管理",
          "state": "alone",
          "path": "/pageManagement"
        }, {
          "id": "72",
          "text": "内容管理",
          "state": "alone",
          "path": "/contentManagement"
        }]
      }, {
        "id": "1",
        "text": "消息服务",
        "state": "parent",
        "path": "/backlog",
        "treeNodes": [{
          "id": "55",
          "text": "短信服务",
          "state": "alone",
          "path": "/messageInfo"
        }]
      }]
    }

  },
  logout: () => {
    return {
      code: 20000,
      data: 'success'
    }
  }
}
