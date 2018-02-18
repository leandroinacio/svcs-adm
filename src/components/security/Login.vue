<template>
  <v-form v-model="form">
    <v-container fluid>
      
      <!-- Username -->
      <v-layout row justify-center>
        <v-flex xs6>
          <v-text-field box
            label="Name"
            v-model="username"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
      
      <!-- Password -->
      <v-layout row justify-center>
        <v-flex xs6>
          <v-text-field box
            label="Password"
            v-model="password"
            type="password"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>

      <!-- Login button -->
      <v-layout row justify-center>
        <v-flex xs6>
          <v-btn color="info" @click="submitForm">Login</v-btn>
        </v-flex>
      </v-layout>

    </v-container>
  </v-form>
</template>

<script>
import { login } from '@/service/Security'
import User from '@/model/security/User'
import Auth from '@/store/Auth'

export default {
  name: 'Login',
  data: function () {
    return {
      username: '',
      password: '',
      form: null
    }
  },
  methods: {
    submitForm () {
      let self = this
      let user = new User(this.username, this.password)
      login(user).then(response => {
        Auth.commit('authenticate', response)
        self.$router.push({ name: 'MainMenu' })
      })
    }
  }
}
</script>
