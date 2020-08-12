import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/'

import './config/rem'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

