const btnMenu = document.querySelector("#btnMenu");
const phoneMenu = document.querySelector("#phoneMenu");
const phoneMenuItems = document.querySelectorAll("#phoneMenu>li");
const main = document.querySelector(".main");
const modalClose = document.querySelector("#modalClose");
const loginModal = document.querySelector("#loginModal");

let menuShow = false;
btnMenu.addEventListener("click", ()=> {
  menuShow = !menuShow;
  phoneMenu.classList.toggle("d-none");
  menuAnimationToggle();
  if (menuShow) {
    main.addEventListener("click", menuDisplayNone);
    modalClose.addEventListener("click", menuDisplayNone);
    loginModal.addEventListener("click", menuDisplayNone);
  }
})

function menuDisplayNone() {
  menuShow = false;
  phoneMenu.classList.add("d-none");
  menuAnimationToggle();
}

function menuAnimationToggle() {
  phoneMenuItems.forEach(function(item,i){
    if (menuShow) {
      item.classList.add(`u-animation-fromLeft-${i+1}`);
    } else {
      item.classList.remove(`u-animation-fromLeft-${i+1}`);
    }
  })
}

// payment-method
const paymentMethods = document.querySelectorAll(".payment-method");

paymentMethods.forEach(item => {
  item.addEventListener("click", ()=> {
    paymentMethods.forEach(item => {
      item.classList.remove("is-active");
    })
    item.classList.add("is-active");
  });
})
