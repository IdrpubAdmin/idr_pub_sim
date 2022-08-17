<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>

export default {
  name: 'TestComponet',
  computed: {
    message() {
      return this.$store.getters.message
    }
  }
}
</script>

<style>

</style>
