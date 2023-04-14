import { defineNuxtPlugin } from '#app'
import TuiGrid from 'vue3-tui-grid'
import 'tui-grid/dist/tui-grid.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TuiGrid)
})
