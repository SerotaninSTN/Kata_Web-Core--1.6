const btnTehnic = document.querySelector('.tehnic-button')
const swiperTehnic = document.querySelector('.tehnic__swiper')
const tehnicContainer = document.querySelector('.tehnic-container')

btnTehnic.addEventListener('click', function () {
        if (btnTehnic.classList.contains('tehnic-button')) {

          btnTehnic.classList.remove('tehnic-button');
          btnTehnic.classList.add('tehnic-button--hide');
          btnTehnic.textContent = 'Скрыть';

          swiperTehnic.classList.remove('tehnic__swiper--hide')
          tehnicContainer.classList.remove('tehnic-container--hide')
          swiperTehnic.classList.add('tehnic__swiper--open')
          tehnicContainer.classList.add('tehnic-container--open')

        } else if(btnTehnic.classList.contains('tehnic-button--hide')) {

          btnTehnic.classList.remove('tehnic-button--hide');
          btnTehnic.classList.add('tehnic-button');
          btnTehnic.textContent = 'Показать все';

          swiperTehnic.classList.remove('tehnic__swiper--open')
          tehnicContainer.classList.remove('tehnic-container--open')
          swiperTehnic.classList.add('tehnic__swiper--hide')
          tehnicContainer.classList.add('tehnic-container--hide')
        }
      });
    