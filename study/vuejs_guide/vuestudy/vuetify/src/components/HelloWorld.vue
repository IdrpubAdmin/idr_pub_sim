<template>
  <div>
    <header-component></header-component>
    <history-content></history-content>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import HeaderComponent from './HeaderComponent.vue'
  import HistoryContent from './HistoryContent.vue'
  import FooterComponent from './FooterComponent.vue'
  export default {
    name: 'HelloWorld',

    data: () => ({
  
    }),
    components: {
      HeaderComponent,
      HistoryContent,
      FooterComponent
    }
  }
</script>
