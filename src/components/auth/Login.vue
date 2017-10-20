<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">

        <!-- Error message -->
        <div class="alert alert-danger" role="alert" v-if="errorMessage">
          Not authorized.
        </div>

        <!-- Username -->
        <form>
          <div class="form-group">
            <label for="inputUsername">Username</label>
            <input type="text" class="form-control" id="inputUsername" 
              placeholder="Enter username" v-model="user.username">
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="inputPassword">Password</label>
            <input type="password" class="form-control" id="inputPassword" 
              placeholder="Password" v-model="user.password">
          </div>

          <!-- Login -->
          <button class="btn btn-primary" @click="login">Submit</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data: function () {
    return {
      user: {},
      errorMessage: ''
    }
  },
  methods: {
    login: function () {
      let self = this
      axios.post('http://localhost:8181/lawyer/api/v1/auth', this.user)
        .then(function (response) {
          self.$router.push({ name: 'ListUser' })
        })
        .catch(function (error) {
          self.errorMessage = error
        })
    }
  }
}
</script>
