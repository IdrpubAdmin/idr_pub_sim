<template>
  <div class="user">
    <ul>
        <li>직업 : {{$store.state.job.koName}}</li>
        <li>레벨 : {{$store.state.lv}}</li>
        <li>Hp : {{$store.state.job.hp}}</li>
        <li>Mp : {{$store.state.job.mp}}</li>
        <li>데미지 : {{$store.state.job.damege}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GameUser',
}
</script>

<style scoped>

</style>
