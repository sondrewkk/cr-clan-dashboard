import Vue from 'vue'
import Vuex from 'vuex'
import { userAuthentication } from './userAuthentication'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    userAuthentication
  }
})
