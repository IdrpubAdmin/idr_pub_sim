
<template>
  <div ref="table"></div>
</template>

<script>
  import { TabulatorFull } from 'tabulator-tables';

  export default {
    data() {
      return {
      }
    },
    mounted() {
      const tableData = [
        {id: 1, name: 'John', age: 30},
        {id: 2, name: 'Jane', age: 25},
        {id: 3, name: 'Bob', age: 40},
        
      ];
      const tableOptions = {
        columns: [
          {title: 'ID', field: 'id'},
          {title: 'Name', field: 'name'},
          {title: 'Age', field: 'age'},
        ],
        data: tableData,
      };
      const table = new TabulatorFull(this.$refs.table, tableOptions);
    }
  }
</script>

<style>
  @import 'tabulator-tables/dist/css/tabulator.min.css';
</style>