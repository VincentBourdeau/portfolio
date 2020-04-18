import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import { isNil } from 'lodash'
import Home from '@/views/Home'
import CheckLogin from '@/views/CheckLogin'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-about" */ '@/views/About.vue'
        ),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-projects" */ '@/views/Projects.vue'
        ),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/check-login',
      name: 'check-login',
      component: CheckLogin,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue'
        ),
      meta: {
        authNotRequired: true
      }
    },
    { path: '/login', redirect: '/' },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
