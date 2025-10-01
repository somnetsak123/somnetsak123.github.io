import { createRouter, createWebHistory } from 'vue-router'
import index from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('@/pages/index.vue'),
    },
  ],
})

export default router
