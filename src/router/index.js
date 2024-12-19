import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: {
        noCache: false
      }
    },
    {
      path: '/history',
      name: 'History',
      component: () => import('../views/History.vue'),
      meta: {
        noCache: false
      }
    },
    {
      path: '/education',
      name: 'Education',
      component: () => import('../views/Education.vue'),
      meta: {
        noCache: false
      }
    },
    {
      path: '/achievement',
      name: 'Achievement',
      component: () => import('../views/Achievement.vue'),
      meta: {
        noCache: true
      }
    },
    {
      path: '/organization',
      name: 'Organization',
      component: () => import('../views/Organization.vue'),
      meta: {
        noCache: false
      }
    }
  ]
})

export default router 