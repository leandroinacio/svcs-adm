<template>
  <v-app id="app">
      <router-view/>

      <!-- Footer -->
      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>&copy; Sistema administrativo de sites - {{ new Date().getFullYear() }}</div>
      </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
