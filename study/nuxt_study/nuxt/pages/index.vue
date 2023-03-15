<template>
  <div class="swiper-container"
    v-swiper:swiper="swiperOption"
  >
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        slides: '',
        swiperOption: {
          loop: false,
          slidesPerView: 2,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          //반응형
          breakpoints: {
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1264: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }
        },
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
