// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    script: [
      {
        src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
        async: true,
        defer: true
      }
    ]
  }
})
