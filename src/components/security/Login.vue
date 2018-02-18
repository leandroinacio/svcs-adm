<template>
  <v-form v-model="form">
    <v-container fluid>
      
      <!-- Username -->
      <v-layout row justify-center>
        <v-flex xs6>
          <v-text-field box
            label="Name"
            v-model="user.name"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
      
      <!-- Password -->
      <v-layout row justify-center>
        <v-flex xs6>
          <v-text-field box
            label="Password"
            v-model="user.password"
            type="password"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>

      <!-- Login button -->
      <v-layout row justify-center>
        <v-flex xs6>
          <v-btn color="info">Login</v-btn>
        </v-flex>
      </v-layout>

    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'
import Properties from '@/config/Properties'

export default {
  name: 'Login',
  data: function () {
    return {
      user: {},
      form: null
    }
  },
  methods: {
    login: function () {
      let self = this

      axios.post(Properties.API.LOCATION + Properties.API.LOGIN, this.user)
        .then(function (response) {
          localStorage.setItem(response, Properties.API.AUTHENTICATION)
          self.$router.push({ name: 'ListUser' })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
