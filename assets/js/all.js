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
}
// const swiper = new mySwiper('.swiper', {
//   // Optional parameters
//   direction: 'horizon',
//   loop: true,
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   }
// });
// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')
// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })
"use strict";
//# sourceMappingURL=all.js.map
