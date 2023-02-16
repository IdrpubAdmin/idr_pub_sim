<template>
    <div>
      <img :src="원룸들.image" class="romm-img">
      <h4 @click="$emit('openModal')">{{원룸들.title}}</h4>
      <p>{{원룸들.price}}원</p>
      <!-- <button @click="신고수[i]++">허위매물신고</button> <span>신고수 : {{신고수[i]}}</span> -->
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        원룸들: Object,
        신고수: Array
    }
}
</script>

<style>

</style>