var script = document.createElement("SCRIPT");

let method = "groups.getMembers";
let group_id = "katyushchik";
let fields = "country, city";

script.src =
  "https://api.vk.com/method/" +
  method +
  "?group_id=" +
  group_id +
  "&fields=" +
  fields +
  "&fields=city&v=5.131&access_token=938ac44972db7316e60180398c21dad0dbb1a430287e7d6e438f17462250b7329d6080b9408d35336cefd&callback=callbackFunc";
document.getElementsByTagName("head")[0].appendChild(script);
function callbackFunc(result) {
  console.log(result.response.count);

  let items = result.response.items;

  let array = items
    .filter(function (item) {
      return item.city !== undefined;
    })
    .map(function (item) {
      return item.city.title;
    });

  let count = {};

  array.forEach(elem => {
    if (count[elem] === undefined) {
      count[elem] = 1;
    } else {
      count[elem]++;
    }   
  });

  let countOfCities = count;

  console.log(countOfCities);
}



let cities = {
  moscow: {
    cord: {
      lat: 55.7538789,
      long: 37.6203735
    },
    people_count: 101,
  },

  krasnodar: {
    cord: {
      lat: 45.040235,
      long: 38.9760801
    },
    people_count: 10,
  },

  saint_petersburg: {
    cord: {
      lat: 	59.939125,
      long: 30.3158225
    },
    people_count: 150,
  },




}


function GetMap() {
  map = new OpenLayers.Map("OSMap");//инициализация карты
  var mapnik = new OpenLayers.Layer.OSM();//создание слоя карты
  map.addLayer(mapnik);//добавление слоя
  map.setCenter(new OpenLayers.LonLat(80.66, 60.777) //(широта, долгота)
        .transform(
          new OpenLayers.Projection("EPSG:4326"), // переобразование в WGS 1984
          new OpenLayers.Projection("EPSG:900913") // переобразование проекции
        ), 3 // масштаб
      );

  var layerMarkers = new OpenLayers.Layer.Markers("Markers");//создаем новый слой маркеров
  map.addLayer(layerMarkers);//добавляем этот слой к карте


  var size = new OpenLayers.Size(21, 25);//размер картинки для маркера
  var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h); //смещение картинки для маркера
  var icon = new OpenLayers.Icon('/img/switch.png', size, offset);//картинка для маркера
  layerMarkers.addMarker(//добавляем маркер к слою маркеров
      new OpenLayers.Marker(map.getLonLatFromViewPortPx({
        x: cities.moscow.cord.long, 
        y: cities.moscow.cord.lat
      }), //координаты вставки маркера
        icon));//иконка маркера

  layerMarkers.addMarker(//добавляем маркер к слою маркеров
        new OpenLayers.Marker(map.getLonLatFromViewPortPx({
          x: cities.krasnodar.cord.long, 
          y: cities.krasnodar.cord.lat
        }), //координаты вставки маркера
          icon));//иконка маркера
  
  // map.events.register('click', map, function (e) {    
  //     var size = new OpenLayers.Size(21, 25);//размер картинки для маркера
  //     var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h); //смещение картинки для маркера
  //     var icon = new OpenLayers.Icon('/img/switch.png', size, offset);//картинка для маркера
  //     layerMarkers.addMarker(//добавляем маркер к слою маркеров
  //         new OpenLayers.Marker(map.getLonLatFromViewPortPx(e.xy), //координаты вставки маркера
  //         icon));//иконка маркера
  // }); //добавление событие клика по карте

  
}