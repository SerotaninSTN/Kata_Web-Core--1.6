const burgerChat = document.querySelector('.burger-menu__btn-item--chat')
const feetback = document.querySelector('.feetback')
const btnFeetback = document.querySelector('.feetback-btn')
const headerChat = document.querySelector('.btn-item--chat')

burgerChat.addEventListener('click', function (evt) {
  evt.preventDefault();
  feetback.classList.remove('feetback--hidden')
})

btnFeetback.addEventListener('click', function (evt) {
  evt.preventDefault();
  feetback.classList.add('feetback--hidden')
})

headerChat.addEventListener('click', function (evt) {
  evt.preventDefault();
  feetback.classList.remove('feetback--hidden')
})


window.addEventListener('click', function (event) {
  if(event.target !==feetback && event.target !==burgerChat  && event.target !==headerChat) {
    feetback.classList.add('feetback--hidden')
  }
})
if (window.innerWidth > 1440) { 
  feetback.classList.remove('feetback--xs')
}