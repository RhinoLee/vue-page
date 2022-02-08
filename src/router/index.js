import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Chat from '../views/Chat.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
