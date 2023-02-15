const btnBrend = document.querySelector('.swiper-button')
const swiperBrend = document.querySelector('.brend-swiper')
const swiperContainer = document.querySelector('.swiper-container')

btnBrend.addEventListener('click', function () {
      
        if (btnBrend.classList.contains('swiper-button')) {

            btnBrend.classList.remove('swiper-button');
            btnBrend.classList.add('swiper-button--hide');
            btnBrend.textContent = 'Скрыть';

            swiperBrend.classList.remove('brend-swiper--hide')
            swiperContainer.classList.remove('swiper-container--hide')
            swiperBrend.classList.add('brend-swiper--open')
            swiperContainer.classList.add('swiper-container--open')

        } else if(btnBrend.classList.contains('swiper-button--hide')) {

            btnBrend.classList.remove('swiper-button--hide');
            btnBrend.classList.add('swiper-button');
            btnBrend.textContent = 'Показать все';

            swiperBrend.classList.remove('brend-swiper--open')
            swiperContainer.classList.remove('swiper-container--open')
            swiperBrend.classList.add('brend-swiper--hide')
            swiperContainer.classList.add('swiper-container--hide')
        }
      });
    