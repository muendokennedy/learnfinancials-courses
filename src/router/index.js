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
    name: 'register',
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
  },
  {
    path: '/course/details',
    name: 'courseDetails',
    component: () => import('@/views/CourseDetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
