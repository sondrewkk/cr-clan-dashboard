import Vue from 'vue'
import Vuex from 'vuex'
import { userAuthentication } from './userAuthentication'
import { user } from './user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    userAuthentication,
    user
  }
})
