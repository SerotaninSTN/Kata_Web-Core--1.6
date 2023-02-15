const burgerCall = document.querySelector('.burger-menu__btn-item--call')
const call = document.querySelector('.call')
const btnCall= document.querySelector('.call-btn')
const headerCall = document.querySelector('.btn-item--call')

burgerCall.addEventListener('click', function () {

  call.classList.remove('call--hidden')  
})

btnCall.addEventListener('click', function () {

  call.classList.add('call--hidden')

})

headerCall.addEventListener('click', function () {

  call.classList.remove('call--hidden')
})


window.addEventListener('click', function (event) {
  if(event.target ===call) {
    call.classList.add('call--hidden')
  }
})

if (window.innerWidth > 1440) { 
  call.classList.remove('call--xs')
}

