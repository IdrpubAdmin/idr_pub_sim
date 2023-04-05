<template>
  <div>
    <Test></Test>
    <grid :data="gridProps.data" :columns="gridProps.columns" />
  </div>
</template>

<script>
import Test from '~/test.vue'

import 'tui-grid/dist/tui-grid.css';
import { Grid } from 'vue3-tui-grid';

export default {
  components: {
    Test: Test,
    grid: Grid
  },
  created() {
    this.gridProps = {
      data: [
        // for rowData prop
        {
          name: 'Beautiful Lies',
          artist: 'Birdy'
        },
        {
          name: 'X',
          artist: 'Ed Sheeran'
        }
      ],
      columns: [
        // for columnData prop
        {
          header: 'Name',
          name: 'name'
        },
        {
          header: 'Artist',
          name: 'artist'
        }
      ]
    };
  }
}
</script>
