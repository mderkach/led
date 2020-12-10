/* eslint-disable no-unused-vars */
// js, scss of components
import ymaps from 'ymaps';
import GLightbox from 'glightbox';
// page styles
import 'glightbox/dist/css/glightbox.min.css';
import './index.scss';
// initialise components and modules

ymaps
  .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
  .then((maps) => {
    const mapLeft = new maps.Map(document.querySelector('#map-left'), {
      center: [55.73038056900091, 37.67845099999998],
      zoom: 15,
    });
    const mapLeftM = new maps.Map(document.querySelector('#map-left-mobile'), {
      center: [55.73038056900091, 37.67845099999998],
      zoom: 15,
    });
    const leftPin = new maps.Placemark([55.73038056900091, 37.67845099999998], {});
    const rightPin = new maps.Placemark([55.70161256904611, 37.644764499999994], {});
    const mapRight = new maps.Map(document.querySelector('#map-right'), {
      center: [55.70161256904611, 37.644764499999994],
      zoom: 15,
    });
    const mapRightM = new maps.Map(document.querySelector('#map-right-mobile'), {
      center: [55.70161256904611, 37.644764499999994],
      zoom: 15,
    });
    mapLeft.geoObjects.add(leftPin);
    mapLeftM.geoObjects.add(leftPin);
    mapRight.geoObjects.add(rightPin);
    mapRightM.geoObjects.add(rightPin);
    mapLeftM.behaviors.disable('scrollZoom');
    mapRightM.behaviors.disable('scrollZoom');
    mapLeft.behaviors.disable('scrollZoom');
    mapRight.behaviors.disable('scrollZoom');
  })
  .catch((error) => console.log('Failed to load Yandex Maps', error));

const lightbox = GLightbox({
  elements: [
    {
      content: document.querySelector('.modal'),
    },
  ],
});

const lightboxTrigger = document.querySelector('.rules__head-text-outer');
lightboxTrigger.addEventListener('click', () => lightbox.open());
const checkbox = document.querySelector('input[name=agree]');
checkbox.addEventListener('change', (e) => {
  console.log('asd');
  if (checkbox.checked) {
    window.open('https://ledkorobka-3x3.timepad.ru/');
  }
});
