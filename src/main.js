// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
<<<<<<< HEAD
import './style/usage/app.scss'	
=======
import AppHeader from './components/header/appheader'

import '@/style/usage/app.scss'
>>>>>>> master
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<AppHeader/>',
  components: { AppHeader }
})
