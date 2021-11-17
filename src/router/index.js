import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('@/views/Calculator.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
