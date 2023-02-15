const burger = document.querySelector('.btn-item--burger')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuContainer = document.querySelector('.burger-menu_container')

burger.addEventListener('click', function () {


  if (burger.classList.contains('btn-item--burger')) {
    burger.classList.add('burger-menu__btn--close');
    burger.classList.remove('btn-item--burger');
    burgerMenuContainer.classList.remove('burger-menu_container--hidden');
    burgerMenuContainer.classList.add('burger-menu_container--open');

  } 
  else if(burger.classList.contains('burger-menu__btn--close')) {
    burgerMenuContainer.classList.add('burger-menu_container--hidden');
    burgerMenuContainer.classList.remove('burger-menu_container--open');
    burger.classList.add('btn-item--burger')
    burger.classList.remove('burger-menu__btn--close')
  }
  
});

  window.addEventListener('click', function (event) {
    if (window.innerWidth < 1439) {
    if(event.target !==burgerMenuContainer && event.target !==burger) {
      burgerMenuContainer.classList.add('burger-menu_container--hidden');
      burgerMenuContainer.classList.remove('burger-menu_container--open');
        burger.classList.add('btn-item--burger')
        burger.classList.remove('burger-menu__btn--close')
    }
}
})
