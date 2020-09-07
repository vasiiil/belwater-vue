import axios from '../../axios-belwater-api'
import Vue from 'vue'

const session = Vue.prototype.$session

const state = {
  receipt: null,
  meteresInfo: null,
  metereInfo: null,
  meteres: null,
  payments: null,
  paymentResult: null
}

const mutations = {
  setReceipt (state, response) {
    state.receipt = atob(response.receipt)
  },
  setMeteresInfo (state, response) {
    state.meteresInfo = response
  },
  setMetereInfo (state, response) {
    state.metereInfo = response
  },
  setMeteres (state, response) {
    state.meteres = response
  },
  setPayments (state, response) {
    state.payments = response
  },
  setPaymentResult (state, response) {
    state.paymentResult = response
  }
}

const actions = {
  prepareResponse ({ dispatch }, response) {
    return new Promise((resolve, reject) => {
      if (response.err) {
        dispatch('alert/showAlert', { text: response.err }, { root: true })
        /* eslint prefer-promise-reject-errors: ["error", {"allowEmptyReject": true}] */
        reject()
      } else if (response.message) {
        dispatch('alert/showAlert', { text: response.message, color: 'success' }, { root: true })
      }
      resolve(response)
    })
  },
  sendRequest ({ dispatch, commit }, requestData) {
    requestData = Object.assign({}, {
      url: 'personal/get-data',
      method: '',
      params: {},
      commit: null,
      goToLink: false
    }, requestData)
    axios.post(requestData.url, { token: session.get('token'), method: requestData.method, params: requestData.params || {} })
      .then(response => {
        dispatch('prepareResponse', response.data)
          .then(result => {
            if (requestData.commit) {
              commit(requestData.commit, result)
            }
            if (requestData.goToLink && result.link) {
              window.open(result.link, '_blank')
            }
          })
      })
      .catch(() => (dispatch('alert/showAlert', { text: 'Упс, что-то пошло не так. Обновите страницу и попробуйте еще раз!' }, { root: true })))
      .finally(() => (dispatch('preloader/hide_preloader', {}, { root: true })))
  },
  getReceipt ({ dispatch }) {
    dispatch('sendRequest', {
      method: 'printReceipt',
      commit: 'setReceipt'
    })
  },
  getMeteresInfo ({ dispatch }) {
    dispatch('sendRequest', {
      method: 'meteresInfo',
      commit: 'setMeteresInfo'
    })
  },
  getMetereInfo ({ dispatch }, data) {
    dispatch('sendRequest', {
      method: 'metereInfo',
      params: data,
      commit: 'setMetereInfo'
    })
  },
  getMeteres ({ dispatch }) {
    dispatch('sendRequest', {
      method: 'meteres',
      commit: 'setMeteres'
    })
  },
  flushMeteres ({ dispatch }, data) {
    dispatch('sendRequest', {
      method: 'flushMeteres',
      params: { meteres: data }
    })
  },
  getPayments ({ dispatch }) {
    dispatch('sendRequest', {
      method: 'payment',
      commit: 'setPayments'
    })
  },
  pay ({ dispatch }, data) {
    dispatch('sendRequest', {
      url: 'personal/pay',
      params: data,
      goToLink: true
    })
  },
  getPaymentResult ({ dispatch }, paymentId) {
    dispatch('sendRequest', {
      url: 'personal/get-payment',
      params: paymentId,
      commit: 'setPaymentResult'
    })
  }
}

const getters = {
  receipt: () => state.receipt,
  error: () => state.error,
  meteresInfo: () => state.meteresInfo,
  metereInfo: () => state.metereInfo,
  meteres: () => state.meteres,
  payments: () => state.payments,
  paymentResult: () => state.paymentResult
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
