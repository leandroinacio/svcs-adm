// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Properties from '@/config/Properties'
import Vuetify from 'vuetify'

// CSS Imports
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

// Add a request interceptor
axios.interceptors.request.use(setJWT)

function setJWT (config) {
  let token = localStorage.getItem(Properties.API.AUTHENTICATION)
  console.log(router.name)
  if (router.name !== 'Login' && token) {
    config.headers[Properties.API.AUTHENTICATION] = token
    router.push({ name: 'ListUser' })
  } else {
    router.push({ name: 'Login' })
  }
  return config
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
