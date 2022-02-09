import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Notice from '../views/Notice.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
