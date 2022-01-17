  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });
