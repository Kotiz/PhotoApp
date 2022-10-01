import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CategoryPage from '@/views/CategoryPage.vue'
import CategorySubPage from '@/views/CategorySubPage.vue'
// import AddPhotoPage from '@/views/AddPhotoPage.vue'
function lazyLoad () {
  return () => import('@/views/AddPhotoPage.vue')
}

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
  },
  {
    path: '/addphotopage',
    name: 'AddPhotoPage',
    component: lazyLoad('AddPhotoPAge')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
