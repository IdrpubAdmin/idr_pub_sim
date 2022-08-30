<template>
  <div id="app">
    {{ message }}
    <div class="edit-form">
      <input type="text" :value="message" @input="doUpdate">
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    message() {
      return this.$store.getters.message
    }
  },
  methods: {
    doUpdate(e){
      this.$store.dispatch('doUpdate', e.target.value)
    },
  },
}
</script>

<style>

</style>
