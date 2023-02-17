<template>
  <div>
    <div v-for="(블로그글, i) in 블로그글" :key="블로그글.number">
      <!-- 이거왜 i는 되고 블로그글.number는 안돼 -->
      <h5 @click="$router.push('/detail/' + i)">{{블로그글.title}}</h5>
      <p>{{블로그글.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    블로그글: Array
  }
}
</script>

<style>

</style>