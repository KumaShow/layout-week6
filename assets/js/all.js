"use strict";

var btnMenu = document.querySelector("#btnMenu");
var phoneMenu = document.querySelector("#phoneMenu");
var phoneMenuItems = document.querySelectorAll("#phoneMenu>li");
var main = document.querySelector(".main");
var modalClose = document.querySelector("#modalClose");
var loginModal = document.querySelector("#loginModal");
var menuShow = false;
btnMenu.addEventListener("click", function () {
  menuShow = !menuShow;
  phoneMenu.classList.toggle("d-none");
  menuAnimationToggle();

  if (menuShow) {
    main.addEventListener("click", menuDisplayNone);
    modalClose.addEventListener("click", menuDisplayNone);
    loginModal.addEventListener("click", menuDisplayNone);
  }
});

function menuDisplayNone() {
  menuShow = false;
  phoneMenu.classList.add("d-none");
  menuAnimationToggle();
}

function menuAnimationToggle() {
  phoneMenuItems.forEach(function (item, i) {
    if (menuShow) {
      item.classList.add("u-animation-fromLeft-".concat(i + 1));
    } else {
      item.classList.remove("u-animation-fromLeft-".concat(i + 1));
    }
  });
} // payment-method


var paymentMethods = document.querySelectorAll(".payment-method");
paymentMethods.forEach(function (item) {
  item.addEventListener("click", function () {
    paymentMethods.forEach(function (item) {
      item.classList.remove("is-active");
    });
    item.classList.add("is-active");
  });
});
"use strict";

var swiper = new Swiper(".reviewSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});
var classSwiper = new Swiper(".classSwiper", {
  loop: true,
  slidesPerColumn: 2,
  autoplay: {
    delay: 2000
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
    }
  }
});
var classTypeSwiper = new Swiper(".classTypeSwiper", {
  enabled: true,
  slidesPerView: 'auto',
  slidesPerColumn: 1,
  breakpoints: {
    // when window width is >= 992px
    992: {
      enabled: false
    }
  }
}); // datepicker

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  autohide: true,
  // 選完日期自動隱藏
  language: 'zh-TW'
});
//# sourceMappingURL=all.js.map
