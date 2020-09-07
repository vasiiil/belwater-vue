import router from '../../router/index'
import axios from '../../axios-belwater-api'
import Vue from 'vue'

const session = Vue.prototype.$session

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    clear (state) {
      state.user = null
    }
  },
  actions: {
    storeUser ({ commit }, response) {
      if (response.data.user) {
        session.start()
        session.set('token', response.data.user.auth_key)
        commit('setUser', response.data.user)
      }
    },
    signup ({ dispatch, commit }, authData) {
      axios.post('auth/signup', { SignupForm: authData })
        .then(response => {
          if (response.data.err) {
            dispatch('alert/showAlert', { text: 'Что-то пошло не так. Попробуйте еще раз' }, { root: true })
          } else {
            dispatch('storeUser', response)
            router.replace('/personal')
          }
        })
        .catch(() => (dispatch('alert/showAlert', { text: 'Упс, что-то пошло не так. Обновите страницу и попробуйте еще раз!' }, { root: true })))
        .finally(() => (dispatch('preloader/hide_preloader', {}, { root: true })))
    },
    login ({ dispatch, commit }, authData) {
      axios.post('auth/login', {
        LoginForm: {
          email: authData.email,
          password: authData.password
        }
      })
        .then(response => {
          if (response.data.err) {
            dispatch('alert/showAlert', { text: 'Логин с паролем не найдены' }, { root: true })
          } else {
            dispatch('storeUser', response)
          }
        })
        .catch(() => (dispatch('alert/showAlert', { text: 'Упс, что-то пошло не так. Обновите страницу и попробуйте еще раз!' }, { root: true })))
        .finally(() => (dispatch('preloader/hide_preloader', {}, { root: true })))
    },
    logout ({ commit }) {
      if (session.exists()) {
        commit('clear')
        session.destroy()
        router.replace('/')
      }
    },
    fetchUser ({ dispatch, commit }) {
      if (session.exists()) {
        axios.post('auth/get-user', { token: session.get('token') })
          .then(response => {
            if (response.data.err) {
              dispatch('alert/showAlert', { text: 'Что-то пошло не так. Обновите страницу' }, { root: true })
            } else {
              dispatch('storeUser', response)
            }
          })
          .catch(() => (dispatch('alert/showAlert', { text: 'Упс, что-то пошло не так. Обновите страницу и попробуйте еще раз!' }, { root: true })))
          .finally(() => (dispatch('preloader/hide_preloader', {}, { root: true })))
      } else {
        dispatch('alert/showAlert', { text: 'qweqweqwe' }, { root: true })
      }
    },
    tryAutoLogin ({ dispatch }) {
      dispatch('fetchUser')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.user !== null
    }
  }
}
