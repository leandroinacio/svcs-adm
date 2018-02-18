<template>
  <v-layout row justify-center>
    <v-flex xs10>
      <form>
        <v-text-field
          v-model="article.name"
          label="Nome"
          data-vv-name="name"
          required
        ></v-text-field>

        <!-- Description -->
        <v-text-field
          name="input-7-3"
          label="Texto"
          v-model="article.value"
          multi-line
        ></v-text-field>
        
        <v-select
          :items="types"
          v-model="article.type"
          label="Tipo"
          data-vv-name="contato"
          required
        ></v-select>

        <v-checkbox
          v-model="article.isActive"
          value="1"
          label="Ativo?"
          data-vv-name="isActive"
          type="checkbox"
        ></v-checkbox>

        <v-btn color='success' @click="createArticle">submit</v-btn>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'CreateUser',
  data () {
    return {
      article: {},
      types: ['Contact', 'Article', 'News']
    }
  },
  methods: {
    createArticle () {
      console.log(this.article)
    }
  }
}
</script>
