const btnMenu = document.querySelector("#btnMenu");
const phoneMenu = document.querySelector("#phoneMenu");
const phoneMenuItems = document.querySelectorAll("#phoneMenu>li");

btnMenu.addEventListener('click', ()=> {
  phoneMenu.classList.toggle('d-none');
  phoneMenuItems.forEach(function(item,i){
    item.classList.toggle(`u-animation-fromLeft-${i+1}`);
  })
})
