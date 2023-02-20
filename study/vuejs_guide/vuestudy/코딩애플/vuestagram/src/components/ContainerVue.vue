<template>
  <div>
    <template v-if="step == 0">
      <Post :인스타데이터="인스타데이터" v-for="인스타데이터 in 인스타데이터" :key="인스타데이터.name" />      
    </template>
    <template v-if="step == 1">
      <div class="upload-image" :style="{backgroundImage: `url(${src})`}"></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </template>
    <template v-if="step == 2">
      <div class="upload-image" :style="{backgroundImage: `url(${src})`}"></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
      </div>
    </template>
  </div>
</template>

<script>

import Post from "./PostVue.vue";

export default {
  props: {
    step: Number,
    인스타데이터: Array,
    src:String
  },
  components: {
    Post
  }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>