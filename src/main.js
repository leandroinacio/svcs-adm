// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuetify from 'vuetify'

// CSS Imports
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

// Setup axiox
axios.defaults.baseURL = 'http://localhost:8080/lawyer-0.0.1-SNAPSHOT/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
