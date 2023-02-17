<template>
  <div>
    <Post :인스타데이터="인스타데이터" v-for="인스타데이터 in 인스타데이터" :key="인스타데이터.name" />
  </div>
</template>

<script>

import Post from "./PostVue.vue";

export default {
  props: {
    인스타데이터: Array
  },
  components: {
    Post
  }
}
</script>

<style>

</style>