<template>
  <div
      class="swiper"
      v-swiper:myDirectiveSwiper="swiperOptions"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="index in 6" :key="index">
          <span>Slide {{ index }}</span>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>

<script>
  export default {
    name: 'swiper-nuxt',
    data () {
      return {
        swiperOptions: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        }
      }
    },
  }
</script>
<style>
  html,
  body {
    position: relative;
    height: 100%;
  }

  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 300px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fafafa;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>