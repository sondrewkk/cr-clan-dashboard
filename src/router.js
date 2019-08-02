import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Player from './views/Player.vue'
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
      component: Home,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard,
          meta: { requiresAuth: true }
        },
        {
          path: 'player',
          name: 'Player',
          component: Player,
          meta: { requiresAuth: true }
        },
        {
          path: 'clan',
          name: 'Clan',
          component: Clan,
          meta: { requiresAuth: true }
        },
        {
          path: 'family',
          name: 'Family',
          component: Family,
          meta: { requiresAuth: true }
        },
        {
          path: 'reports',
          name: 'Reports',
          component: Reports,
          meta: { requiresAuth: true }
        },
        {
          path: 'settings',
          name: 'Settings',
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
  
  // Check if user need to be authorized to access route
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authorizeStatus = store.getters['userAuthentication/status']
    
    if (authorizeStatus === 'Authorized') {
      // If authorized go to route
      next()
    } else {
      // If the user is not authorized redirect to login page with the requested path as redirect
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    // Go to route if authoriziation is not requierd
    next()
  } 
})

export default router
