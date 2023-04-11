<template>
  <div ref="wrapper"></div>
</template>

<script>
import { default as Grid } from 'gridjs';

export default {
  mounted() {
    const table = this.$grid({
      data: [
        ['John', 'Doe', 24],
        ['Jane', 'Doe', 32],
        ['Foo', 'Bar', 42],
      ],
      columns: ['First Name', 'Last Name', 'Age'],
    })
    table.render(this.$refs.wrapper)
  },
}
</script>