import { createRouter, createWebHistory } from 'vue-router'
import CourseHome from '@/views/CourseHomeView.vue'

const routes = [
  {
    path: '/',
    name: 'courseHome',
    component: CourseHome
  },
  {
    path: '/register',
    name: 'registerView',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/about',
    name: 'courseAbout',
    component: () => import('@/views/CourseAboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
