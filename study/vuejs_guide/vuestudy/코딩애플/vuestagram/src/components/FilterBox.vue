<template>
  <div @click="fire" class="filter-item" :class="filters" :style="{backgroundImage: `url(${이미지})`}">
    <slot></slot>
  </div> 
</template>

<script>
export default {
  methods: {
    fire(){
      this.emitter.emit('filter', this.filters)
    }
  },  
  props: {
    이미지: String,
    filters: String
  }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>