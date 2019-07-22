import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Clan from './views/Clan.vue'
import Family from './views/Family.vue'
import Reports from './views/Reports.vue'
import Settings from './views/Settings.vue'
import { store } from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/home',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard,
          meta: { requiresAuth: true }
        },
        {
          path: 'clan',
          name: 'clan',
          component: Clan,
          meta: { requiresAuth: true }
        },
        {
          path: 'family',
          name: 'family',
          component: Family,
          meta: { requiresAuth: true }
        },
        {
          path: 'reports',
          name: 'reports',
          component: Reports,
          meta: { requiresAuth: true }
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters['userAuthentication/status'] === 'Authorized') {
      // TODO: Navigate to from route after authentication
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
