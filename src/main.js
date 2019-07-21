import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store'
import Axios from 'axios'

require('dotenv').config()

Vue.config.productionTip = false

const http = Axios.create({
  baseURL: process.env.API_URL
})

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
