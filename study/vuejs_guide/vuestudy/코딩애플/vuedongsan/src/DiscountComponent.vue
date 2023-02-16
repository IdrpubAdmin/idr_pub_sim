<template>
  <div class="discount">
    <h4>지금 결제하면 {{num}}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: 'DiscountComponent',
  data() {
    return {
      num: 30
    }
  },
  mounted(){
    setInterval(()=>{
        this.num--;
    }, 1000);
  }
}
</script>

<style>
.discount{
  background-color: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>