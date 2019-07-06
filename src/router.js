import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from "./views/Register.vue"
import Dashboard from './views/Dashboard.vue'
import Clan from './views/Clan.vue'
import Family from './views/Family.vue'
import Reports from './views/Reports.vue'
import Settings from './views/Settings.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/clan',
      name: 'clan',
      component: Clan
    },
    {
      path: '/family',
      name: 'family',
      component: Family
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
