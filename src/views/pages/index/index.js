/* eslint-disable no-unused-vars */
// js, scss of components
import ymaps from 'ymaps';
// page styles
import './index.scss';
// initialise components and modules

ymaps
  .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
  .then((maps) => {
    const mapLeft = new maps.Map(document.querySelector('#map-left'), {
      center: [55.73038056900091, 37.67845099999998],
      zoom: 15,
    });
    const leftPin = new maps.Placemark([55.73038056900091, 37.67845099999998], {});
    const rightPin = new maps.Placemark([55.70161256904611, 37.644764499999994], {});
    const mapRight = new maps.Map(document.querySelector('#map-right'), {
      center: [55.70161256904611, 37.644764499999994],
      zoom: 15,
    });
    mapLeft.geoObjects.add(leftPin);
    mapRight.geoObjects.add(rightPin);
  })
  .catch((error) => console.log('Failed to load Yandex Maps', error));
