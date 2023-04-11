import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from 'ag-grid-vue3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('ag-grid-vue', AgGridVue)
})