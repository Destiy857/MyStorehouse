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
        component: () => import('@/views/Home/Home.vue')
      },
      {
        path: '/homeDetails',
        name: 'homeDetails',
        component: () => import('@/views/Home/Details/details.vue')
      },
      {
        path: '/bookList',
        name: 'bookList',
        component: () => import('@/views/bookList/bookList.vue')
      },
      {
        path: '/messageBoard',
        name: 'messageBoard',
        component: () => import('@/views/Board/messageBoard.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About/about.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
