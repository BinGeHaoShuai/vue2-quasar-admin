import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import globalConfig from './global_config'
import dashboardState from 'src/store/dashboard'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    globalConfig,
    dashboardState
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      paths: [
        'dashboardState'
      ]
    }),
    createPersistedState({
      storage: window.localStorage,
      paths: [
        'globalConfig'
      ]
    })
  ],
  strict: process.env.DEBUGGING
})

export default Store
