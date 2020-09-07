export default {
  namespaced: true,
  state: {
    text: '',
    color: 'error'
  },
  mutations: {
    SHOW_MESSAGE (state, payload) {
      state.text = payload.text
      state.color = payload.color || 'error'
    }
  },
  actions: {
    showAlert ({ commit }, payload) {
      commit('SHOW_MESSAGE', payload)
    }
  }
}
