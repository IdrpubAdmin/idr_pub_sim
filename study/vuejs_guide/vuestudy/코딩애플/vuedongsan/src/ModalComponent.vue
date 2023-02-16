<template>
  <div class="black-bg" v-if="모달창열렸니">
      <div class="white-bg">
        <img :src="원룸들[누른거].image" style="width:100%">
        <h4>{{원룸들[누른거].title}}</h4>
        <p>{{원룸들[누른거].content}}</p>
        <input type="text" v-model.number="month">
        <p>{{month}}개월 선택함 : {{원룸들[누른거].price * month}}</p>
        <button @click="$emit('closeModal')">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  data() {
    return {
      month: 1
    }
  },
  watch: {
    month(a){
      if (isNaN(a) == true){
        alert('문자입력하지마라');
        this.month = 1;
      }
    }
  },
  beforeUpdate(){
    if (this.month == 2){
      alert('2개월은 안됨')
      this.month = 1;
    }
  },
  props: {
    모달창열렸니: Boolean,
    원룸들: Array,
    누른거: Number
  }
}
</script>

<style>

</style>