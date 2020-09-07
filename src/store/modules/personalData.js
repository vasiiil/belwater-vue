import axios from '../../axios-belwater-api'
import Vue from 'vue'

const session = Vue.prototype.$session

const state = {
  headers: null,
  items: null,
  loaded: false
}

const mutations = {
  setData (state, response) {
    state.headers = response.headers
    state.items = response.items
    state.loaded = true
  },
  clear (state) {
    state.headers = null
    state.items = null
    state.loaded = false
  }
}

const actions = {
  getData ({ dispatch, commit }, method) {
    commit('clear')
    axios.post('personal/get-data', { token: session.get('token'), method: method })
      .then(response => {
        if (response.data.err) {
          dispatch('alert/showAlert', { text: response.data.err }, { root: true })
        } else if (response.data.message) {
          dispatch('alert/showAlert', { text: response.data.message, color: 'success' }, { root: true })
        }
        commit('setData', response.data)
      })
      .catch(() => (dispatch('alert/showAlert', { text: 'Упс, что-то пошло не так. Обновите страницу и попробуйте еще раз!' }, { root: true })))
      .finally(() => (dispatch('preloader/hide_preloader', {}, { root: true })))
  }
}

const getters = {
  headers: () => state.headers,
  items: () => state.items,
  loaded: () => state.loaded
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
