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
    // eslint-disable-next-line no-constant-condition
    if (true) { // TODO: Add a function to verify if a user is logged in or not
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
