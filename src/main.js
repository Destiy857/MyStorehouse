import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Moment from 'moment'

Vue.config.productionTip = false

// 定义全局时间戳过滤器
Vue.filter('formatDate', function (value) {
  return Moment(value).format('YYYY-MM-DD HH:mm:ss')
})

Vue.filter('formatDates', function (value) {
  return Moment(value).format('YYYY-MM-DD')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
