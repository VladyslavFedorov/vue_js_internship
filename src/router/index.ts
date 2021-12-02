import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tasks',
    component: Home,
    redirect: '/tasks',
    children: [
      {
        path: '/tasks',
        component: () => import('@/components/Tasks.vue')
      },
      {
        path: '/activity',
        component: () => import('@/components/Activity.vue')
      },
      {
        path: '/kanban',
        component: () => import('@/components/Kanban.vue')
      },
      {
        path: '/calendar',
        component: () => import('@/components/Calendar.vue')
      },
      {
        path: '/files',
        component: () => import('@/components/Files.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
