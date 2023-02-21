<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="?" />
    <div class="post-header" v-for="follower in follower" :key="follower.id">
      <div class="profile" :style="{backgroundImage: `url(${follower.image})`}"></div>
      <span class="profile-name">{{follower.name}}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, reactive, toRefs } from 'vue';
import axios from 'axios'

export default {
  props : {
    one: Number
  },
  setup(props) {
    // data 쓰는법
    let follower = ref([])
    let test = reactive({name : 'Kim'})
    let followerOriginal = ref([]);
    // 여러개인 프롭스 쓰는법
    let { one } = toRefs(props);
    console.log(one.value)

    // mounted 쓰는법
    onMounted(() => {
      axios.get('/follower.json').then((a)=>{
        follower.value = a.data
        followerOriginal.value = [...a.data];
      }) 
    })

    function search(검색어){
      let newFollower = followerOriginal.value.filter((a)=>{
        return a.name.indexOf(검색어) != -1
      });
      follower.value = [...newFollower]
    }

    return {follower, test, search}
  }
}
</script>

<style>

</style>