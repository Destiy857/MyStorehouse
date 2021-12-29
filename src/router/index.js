import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bookList',
    name: 'bookList',
    component: () => ('../views/bookList.vue')
  },
  {
    path: '/messageBoard',
    name: 'messageBoard',
    component: () => ('../views/messageBoard.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
