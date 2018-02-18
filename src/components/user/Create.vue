<template>
  <v-layout row justify-center>
    <v-flex xs10>
      <form>

        <!-- Basic fields -->
        <v-text-field box
          v-model="user.name"
          label="Nome Completo"
          data-vv-name="name"
          required
        ></v-text-field>
        <v-text-field box
          v-model="user.title"
          label="Titulo"
          data-vv-name="title"
          required
        ></v-text-field>
        <v-text-field box
          v-model="user.email"
          label="E-mail"
          data-vv-name="email"
          required
        ></v-text-field>
        <v-select box
          :items="roles"
          v-model="user.role"
          label="Nivel Administrativo"
          data-vv-name="role"
          required
        ></v-select>
        <v-checkbox
          v-model="user.isActive"
          value="1"
          label="Ativo?"
          data-vv-name="checkbox"
          type="checkbox"
        ></v-checkbox>

        <!-- Password fields -->
        <v-spacer></v-spacer>
        <v-divider></v-divider>
        <v-spacer></v-spacer>

        <v-text-field
          v-model="user.password"
          label="Password"
          data-vv-name="password"
          type="password"
          required
        ></v-text-field>
        <v-text-field
          v-model="retype"
          label="Retype Password"
          data-vv-name="retype"
          type="password"
          required
        ></v-text-field>
        <v-alert :type="confirmationType" :value="true">
          {{confirmationMsg}}
        </v-alert>

        <v-btn color="success" @click="createUser">submit</v-btn>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'CreateUser',
  data () {
    return {
      user: {},
      retype: '',
      roles: ['Admin', 'User'],
      confirmationType: 'warning',
      confirmationMsg: 'Digite sua senha e confirme.'
    }
  },
  watch: {
    'user.password' () {
      this.checkConfirmation()
    },
    retype () {
      this.checkConfirmation()
    }
  },
  methods: {
    createUser () {
      console.log(this.user)
    },
    checkConfirmation () {
      this.confirmationType = 'warning'
      this.confirmationMsg = 'Digite sua senha e confirme.'

      if (this.user.password) {
        if (this.user.password === this.retype) {
          this.confirmationType = 'success'
          this.confirmationMsg = 'Confirmacao de senha aceita.'
        } else {
          this.confirmationType = 'error'
          this.confirmationMsg = 'Confirmacao de senha invalida.'
        }
      }
    }
  }
}
</script>
