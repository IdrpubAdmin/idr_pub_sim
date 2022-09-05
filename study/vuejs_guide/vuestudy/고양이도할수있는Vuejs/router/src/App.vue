<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product" replace>상품 정보</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log(this.$route)
  },
}
</script>

<style>
.router-link-active { background-color: #e25193;}
</style>
