var swiper = new Swiper(".reviewSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

var classSwiper = new Swiper(".classSwiper", {
  loop: true,
  slidesPerColumn: 2,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 8
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 5,
      spaceBetween: 16
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 8,
      spaceBetween: 16
    },
  }
})
// class.html 上方課程類別
var classTypeSwiper = new Swiper(".classTypeSwiper", {
  enabled: true,
  slidesPerView: 'auto',
  slidesPerColumn: 1,
  // spaceBetween: auto,
  breakpoints: {
    // when window width is >= 992px
    992: {
      // enabled: false,
    }
  }
})


// datepicker
const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  autohide: true, // 選完日期自動隱藏
  language: 'zh-TW',
}); 
