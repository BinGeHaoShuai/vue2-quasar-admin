import dashboardApi from 'src/api/dashboard'

const dashboardState = {
  namespaced: true,
  state: {
    summaryData: {}
  },
  getters: {
    summaryData(state) {
      return state.summaryData
    }
  },
  mutations: {
    setSummaryData(state, payload) {
      state.summaryData = payload
    }
  },
  actions: {
    getSummaryData({ commit }) {
      commit('setSummaryData', {})
      return new Promise((resolve, reject) => {
        dashboardApi.getSummaryData().then(res => {
          commit('setSummaryData', res)
          resolve()
        }).catch(reject)
      })
    }
  }
}

export default dashboardState
