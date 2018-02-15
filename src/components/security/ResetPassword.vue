<template>
  <v-form v-model="form">
    <v-container fluid>
      
      <!-- Username -->
      <v-layout row justify-center>
        <v-flex xs6>
          <v-text-field
            label="Email"
            v-model="email"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>

      <!-- Login button -->
      <v-layout row justify-center>
        <v-flex xs6>
          <v-btn color="info">Reset Password</v-btn>
        </v-flex>
      </v-layout>

    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    login () {
    }
  }
}
</script>
