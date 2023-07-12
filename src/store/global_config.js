import { reject, uniqBy } from 'lodash-es'

const globalConfig = {
  namespaced: true,
  state: {
    menu: [],
    keepAlivePages: []
  },
  getters: {
    menu(state) {
      return state.menu
    },
    keepAlivePages(state) {
      return state.keepAlivePages
    }
  },
  mutations: {
    setMenu(state, payload) {
      state.menu = payload
    },
    setKeepAlivePages(state, payload) {
      state.keepAlivePages = payload
    }
  },
  actions: {
    getMenu({ commit }) {
      return new Promise((resolve) => {
        /**
         * id: 唯一 id
         * isHide: [菜单]是否隐藏
         * name: [菜单]显示名称
         * orderSort: [菜单]显示排序
         * icon: [菜单]显示 icon
         * component: [路由]组件名
         * path: [路由]路径
         */
        const exampleMenu = [{ id: '123456', isHide: false, name: 'Dashboard', orderSort: 0, icon: 'wb_cloudy', component: 'Dashboard', path: '/dashboard' }]
        commit('setMenu', exampleMenu)
        resolve(exampleMenu)
      })
    },
    addKeepAlivePage({ state, commit }, payload) {
      commit('setKeepAlivePages', uniqBy([...state.keepAlivePages, payload], 'name'))
    },
    removeKeepAlivePage({ state, commit }, payload) {
      commit('setKeepAlivePages', reject(state.keepAlivePages, ['name', payload.name]))
    }
  }
}

export default globalConfig
