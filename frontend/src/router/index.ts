import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router