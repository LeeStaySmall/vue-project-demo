import router from '@/router'
import store from '@/store'
import {
  getToken
} from './auth'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import {
  Message
} from 'element-ui'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
      NProgress.done()
    } else { // 实时拉取用户的信息
      store.dispatch('GetUserInfo').then(res => {
        next()
      }).catch(err => {
        store.dispatch('FedLogOut').then(() => {
          Message.error('拉取用户信息失败，请重新登录！' + err)
          next({
            path: '/'
          })
        })
      })
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
