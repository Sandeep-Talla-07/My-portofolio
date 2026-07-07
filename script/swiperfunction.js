const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 25,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
  },
});
