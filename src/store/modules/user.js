import { getToken, setToken, removeToken } from '@/utils/auth'
import api from '@/api/user'

const user = {
  state: {
    token: getToken() || 'admin',
    name: '',
    avatar: '',
    roles: []
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
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        api.login(userInfo).then(res => {
          if (res.code === 200) {
            setToken(res.data)
            commit('SET_TOKEN', res.data)
          }
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 获取用户信息
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        api.getUserInfo().then(res => {
          if (res.code === 200) {
            commit('SET_NAME', res.data.name)
            commit('SET_AVATAR', res.data.avatar)
            commit('SET_ROLES', res.data.role)
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    //
    // // 登出
    // LogOut ({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
