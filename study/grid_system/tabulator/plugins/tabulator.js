import { TabulatorFull } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('tabulator', TabulatorFull )
})