<template>
  <div>
    <transition name="fade">
      <Modal @closeModal="모달창열렸니 = false" :모달창열렸니="모달창열렸니" :원룸들="원룸들" :누른거="누른거"></Modal>
    </transition>
    <div class="menu">
      <a v-for="작명 in 메뉴들" :key="작명" href="">{{작명}}</a>
    </div>
    <Discount v-if="showDiscount"></Discount>
    <button @click="priceSortL">가격낮은순정렬</button>
    <button @click="priceSortH">가격높은순정렬</button>
    <button @click="titleSort">가나다순정렬</button>
    <button @click="sortBack">되돌리기</button>
    <Card @openModal="모달창열렸니 = true; 누른거 = i" :원룸들="원룸들" :신고수="신고수" v-for="(원룸들, i) in 원룸들" :key="원룸들.id" ></Card>
  </div>
</template>

<script>

import data from './assets/oneroom.js'
import Discount from './DiscountComponent.vue'
import Modal from './ModalComponent.vue'
import Card from './CardComponent.vue'

export default {
  name: 'App',
  data() {
    return {
      showDiscount: true,
      원룸들오리지널: [...data],
      누른거: 0,
      원룸들 : data,
      모달창열렸니 : false,
      신고수: [0,0,0,0,0,0],
      메뉴들: ['Home','Shop','Abut'],
    }
  },
  components: {
    Discount,
    Modal,
    Card
  },
  methods: {
    priceSortL(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      })
    },
    priceSortH(){
      this.원룸들.sort(function(a,b){
        return b.price - a.price
      })
    },
    titleSort(){
      this.원룸들.sort(function(a,b){
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        if(a.title === b.title) return 0;
      })
    },
    sortBack(){
      this.원룸들 = [...this.원룸들오리지널]
    }
  },
}
</script>

<style>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave-from{}
.fade-leave-active{}
.fade-leave-to{}
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
