import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/history',
      name: 'History',
      component: () => import('../views/History.vue')
    },
    {
      path: '/education',
      name: 'Education',
      component: () => import('../views/Education.vue')
    },
    {
      path: '/achievement',
      name: 'Achievement',
      component: () => import('../views/Achievement.vue')
    }
  ]
})

export default router 