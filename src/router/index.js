import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CategoryPage from '@/views/CategoryPage.vue'
import CategorySubPage from '@/views/CategorySubPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/categories',
    name: 'CategoryPage',
    component: CategoryPage
  },
  {
    path: '/categories/:categoryName',
    name: 'CategorySubPage',
    component: CategorySubPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
