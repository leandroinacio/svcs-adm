<template>
  <form>
    <v-text-field
      v-model="name"
      label="Name"
      :counter="10"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-select
      :items="items"
      v-model="select"
      label="Select"
      data-vv-name="select"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      value="1"
      label="Option"
      data-vv-name="checkbox"
      type="checkbox"
      required
    ></v-checkbox>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script>
export default {
  name: 'CreateUser',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
