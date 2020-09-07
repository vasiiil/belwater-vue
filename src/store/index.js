import Vue from 'vue'
import Vuex from 'vuex'

import userAuth from './modules/userAuth'
import personalCommon from './modules/personalCommon'
import personalData from './modules/personalData'
import alert from './modules/alert'
import preloader from './modules/preloader'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    userAuth,
    personalCommon,
    personalData,
    alert,
    preloader
  }
})
