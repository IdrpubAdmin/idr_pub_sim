<template>
  <div> 
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/list">List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/detail">Detail</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mt-4">
      <router-view :블로그글="블로그글"></router-view>
    </div>
  </div>
</template>

<script>

import data from "./assets/data"

export default {
  name: 'App',
  data() {
    return {
      블로그글: data
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
