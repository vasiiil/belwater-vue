export default {
  namespaced: true,
  state: {
    preloader_show: false
  },
  mutations: {
    change_preloader (state, value) {
      state.preloader_show = value
    }
  },
  actions: {
    show_preloader ({ commit }) {
      commit('change_preloader', true)
    },
    hide_preloader ({ commit }) {
      commit('change_preloader', false)
    }
  },
  getters: {
    preloader_show (state) {
      return state.preloader_show
    }
  }
}
