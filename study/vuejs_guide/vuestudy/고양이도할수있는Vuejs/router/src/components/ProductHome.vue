<template>
  <div>
    {{detail.content}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters('product', ['detail']),
}
</script>

<style scoped>

</style>
