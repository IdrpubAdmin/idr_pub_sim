import { GridGlobal } from 'gridjs-vue'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(GridGlobal)
})