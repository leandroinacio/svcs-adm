<template>
  <v-container fluid>
    <v-layout row justify-start>

      <!-- Menu Nav -->
      <v-flex xs3>
        <v-navigation-drawer permanent>
          <v-toolbar flat>
            <v-list>
              <v-list-tile>
                <v-list-tile-title class="title">
                  Application
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-divider></v-divider>
          <v-list dense class="pt-0">
            <v-list-tile v-for="url in urls" :key="url.name" @click="handleSelect">
              <!-- <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action> -->
              <v-list-tile-content>
                <router-link :to="url.link" tag="v-list-tile-title">{{url.name}}</router-link>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-flex>

      <v-flex xs8>
        <router-view/>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        urls: [
          {
            link: '/user',
            name: 'Users'
          },
          {
            link: '/article',
            name: 'Artigos'
          }]
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>