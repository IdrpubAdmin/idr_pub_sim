<template>
  <div>
    <div class="black-bg" v-if="모달창열렸니">
      <div class="white-bg">
        <img :src="원룸들[누른거].image" style="width:100%">
        <h4>{{원룸들[누른거].title}}</h4>
        <p>{{원룸들[누른거].content}}</p>
        <p>{{원룸들[누른거].price}}</p>
        <button @click="모달창열렸니 = false">닫기</button>
      </div>
    </div>
    <div class="menu">
      <a v-for="작명 in 메뉴들" :key="작명" href="">{{작명}}</a>
    </div>
    <Discount></Discount>
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-for="(원룸들,i) in 원룸들" :key="원룸들.id">
      <img :src="원룸들.image" class="romm-img">
      <h4 @click="모달창열렸니 = true; 누른거 = i">{{원룸들.title}}</h4>
      <p>{{원룸들.price}}원</p>
      <button @click="신고수[i]++">허위매물신고</button> <span>신고수 : {{신고수[i]}}</span>
    </div>
  </div>
</template>

<script>

import data from './assets/oneroom.js'
import Discount from './DiscountComponent.vue'

export default {
  name: 'App',
  data() {
    return {
      누른거: 0,
      원룸들 : data,
      모달창열렸니 : false,
      신고수: [0,0,0,0,0,0],
      메뉴들: ['Home','Shop','Abut'],
    }
  },
  components: {
    Discount : Discount
  }
}
</script>

<style>
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.romm-img{
  width: 100%;
  margin-top: 40px;
}

</style>
