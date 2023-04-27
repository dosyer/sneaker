
const url="https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU"
ymaps.ready(init);
var myMap,
    myPlacemark;
function init(){
    myMap = new ymaps.Map("map", {
        center: [43.235009, 76.909964],
        zoom: 12
    }, {
        // Опции карты
        searchControlProvider: 'yandex#search',
        // Включение темной темы карты
        behaviors: ['default', 'scrollZoom'],
        type: 'dark#map',
        controls: []

    });
    myPlacemark = new ymaps.Placemark([43.235009, 76.909964],{
        hintContent: 'Almaty!'
    });
    myMap.geoObjects.add(myPlacemark);
}