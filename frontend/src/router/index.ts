import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/profile',
    name: 'userHome',
    component: ProfilePage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router