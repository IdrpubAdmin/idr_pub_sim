<template>
  <div>
    <dest-componet></dest-componet>
    <p>{{message}}</p>
  </div>
</template>

<script>
import DestComponet from './components/DestComponet.vue';

export default {
  name: 'App',
  components:{
    DestComponet
  },
  created() {
    console.log(this.$store.state.count)
    this.$store.commit('increment')
  },
  computed: {
    message() {
      return this.$store.getters.message
    }
  }
}
</script>

<style>

</style>
