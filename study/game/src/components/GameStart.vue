<template>
  <div class="start-game">
    <h1>
      <img src="static/images/logo.png" alt="로고">
    </h1>
    <div class="start-btn">
      <router-link to="/job" tag="button">게임시작</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameStart',
}
</script>

<style scoped>
  .start-game{
    padding: 80px 20px;
  }
  .start-btn{
    width: 300px;
    height: 50px;
    margin: 0 auto;
    border: 3px solid #000;
    margin-top: 60px;
  }
</style>
