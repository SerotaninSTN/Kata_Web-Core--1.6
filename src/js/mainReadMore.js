const btnMainReadMore = document.querySelector('.main__section-btn')
// const btnMainReadMoreHide = document.querySelector('.main__section-btn--hide')
const  mainText = document.querySelector('.main__section-text')

btnMainReadMore.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (btnMainReadMore.classList.contains('main__section-btn')) {
          btnMainReadMore.classList.add('main__section-btn--hide')
          btnMainReadMore.classList.remove('main__section-btn')
          btnMainReadMore.textContent = 'Скрыть'


          mainText.classList.remove('main__section-text--hidden')
          mainText.classList.add('section-text--open')
         

        } else if(btnMainReadMore.classList.contains('main__section-btn--hide')) {
          btnMainReadMore.classList.remove('main__section-btn--hide')
          btnMainReadMore.classList.add('main__section-btn')
          btnMainReadMore.textContent = 'Показать все'
      
          mainText.classList.remove('section-text--open')
          mainText.classList.add('main__section-text--hidden') 
        }
      });
      