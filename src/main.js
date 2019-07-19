import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store'
import Axios from 'axios'

Vue.config.productionTip = false

const http = Axios.create({
  baseURL: 'http://localhost:8081/api'
})

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
