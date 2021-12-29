import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: layout,
    redirect: '/Home',
    children: [
      {
        path: 'Home',
        name: 'HomePage',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/bookList',
        name: 'bookList',
        component: () => import('@/views/bookList.vue')
      },
      {
        path: '/messageBoard',
        name: 'messageBoard',
        component: () => import('@/views/messageBoard.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
