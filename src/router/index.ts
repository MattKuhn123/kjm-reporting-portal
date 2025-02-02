import { createRouter, createWebHistory } from 'vue-router'
import InstructionsView from '@/views/InstructionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InstructionsView,
    },
    {
      path: '/photo',
      name: 'photo',
      component: () => import('../views/PhotoView.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/UploadView.vue'),
    },
    {
      path: '/review',
      name: 'review',
      component: () => import('../views/ReviewView.vue'),
    },
    {
      path: '/complete',
      name: 'complete',
      component: () => import('../views/CompleteView.vue'),
    },
  ],
})

export default router
