<template>
  <ag-grid-vue
    style="width: 100%; height: 300px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :pagination="true"
    :paginationPageSize="10"
  >
  </ag-grid-vue>
</template>

<script>

export default {
  name: "App",
  // data() {
  //   return {
  //     // 열 정의
  //     columnDefs: [
  //       { headerName: "Make", field: "make" },
  //       { headerName: "Model", field: "model" },
  //       { headerName: "Price", field: "price" },
  //       // sortable: true 정렬기능 활성화
  //       // filter: true 필터기능 활성화
  //       // checkboxSelection: true 체크박스 활성화 (라디오인듯?)
  //     ],
  //     // 행 정의
  //     rowData: [
  //       { make: "Toyota", model: "Celica", price: 35000 },
  //       { make: "Ford", model: "Mondeo", price: 32000 },
  //       { make: "Porsche", model: "Boxster", price: 72000 },
  //     ],
  //   };
  // },
  setup() {
    const columnDefs = ref([
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" },
    ])
    const rowData = ref([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
    ])
    return {columnDefs, rowData}
  }
};
</script>