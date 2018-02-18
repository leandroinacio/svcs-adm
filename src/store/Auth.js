import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokenId: '',
    userId: '',
    userRole: '',
    permissions: []
  },
  getters: {
    getJWT: state => {
      return state.tokenId
    }
  },
  mutations: {
    // Store the JWT and retrieve the object
    authenticate (state, response) {
      let jwt = response.data.token
      state.tokenId = jwt
      axios.defaults.headers.common['Authorization'] = jwt

      let base64Url = jwt.split('.')[1]
      let base64 = base64Url.replace('-', '+').replace('_', '/')
      state.userRole = JSON.parse(window.atob(base64)).sub
    },

    // Clear the auth0
    logoff (state) {
      state.tokenId = ''
      state.userId = ''
      state.userRole = ''
      state.permissions = []
    }
  }
})
