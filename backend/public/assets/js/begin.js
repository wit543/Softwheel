var riceList = $('#rice-list'); // modal of rice-list
var riceDetail = $('#rice-detail'); // rice detail modal
var detail = $('#detail');
var variety = $('#variety');
var block = $('#block');
var province = ''; var district =''; var sub_district ='';
var riceName;
var lat = 15.8700; // latitude
var lng = 100.9925; // longtitude
var myOptions;
var map;
var markersArray = [];

var currentTime = new Date();
var d = currentTime.getDate();
var m = currentTime.getMonth();
var y = currentTime.getFullYear();

var geoJSON;
var request;
var gettingData = false;
var openWeatherMapKey = "c8b737218d49bf94c3aad6a6f2bd9602";


function selectProvince() {
  variety.html('<button class="close" data-toggle="modal" data-target="rice-list" onclick="closeModal()">' + 'x' + '</button>');
  variety.append(
    '<h1 class=center>' + "พันธุ์ข้าวที่แนะนำ" + '</h1>'
  );
  showList();
}

function showList(){
  console.log("show list");
  $.getJSON("http://127.0.0.1:8888/api/beginner/?lat=" + lat + "&lng=" + lng, function( data ) {
    console.log(data)
      for(let i = 0; i<data.length;i++){
         $.getJSON("http://127.0.0.1:8888/api/rices/?name_en="+data[i].R1.trim(), function( rice ) {
          console.log(data[i])
          console.log(data[i].S1)
            if(data[i].G1.trim()=="broadcast_sowing")
               data[i].G1 = "หว่านเมล็ด"
            else if(data[i].G1.trim() == "indirect_seeding")
                data[i].G1 = "การปักดำ"
            if(data[i].S1.trim()=="in_season")
              data[i].S1="นาปี"
            else(data[i].S1.trim()=="off_season")
              data[i].S1="นาปรัง"
        variety.append(
          '<div class="block-card" onclick="selectVariety(' + "\'" + rice.name_th.trim() +'\',\''+ data[i].G1 + '\',\'' + data[i].S1 +"\'," +data[i].SD+","+data[i].SM+","+data[i].ED+","+data[i].EM+')">' +
          '<p>' + 'พันธุ์ข้าว: ' + rice.name_th.trim() + '</p>' +
          '<p>' + 'วิธีปลูก : ' + data[i].G1.trim() + '</p>' +
          '<p>' + 'ฤดูการปลูก : ' + data[i].S1.trim() + '</p>' +
          '</div>'
        );
      });
      }
  });
}

function selectVariety(rice,method,peeorpun,SD,SM,ED,EM){
  detail.html('<button class="close" onclick="closeModal()">' + 'x' + '</button>');

    
  riceList.modal('hide');
  riceDetail.modal('show');
  console.log(rice);

  $(detail).append(
    '<h1 class=center>' + province + '</h1>' +
    '<h3>' + 'พันธุ์ข้าว :  ' + rice + '</h3>' +
    '<h3>' + 'วันที่ปัจจุบัน :  ' + d + '/' + m + '/' + y + '</h3>' +
    '<h3>' + 'ช่วงที่แนะนำ : ' + '</h3>'
  );

    detail.append(
      '<h3>' + 'วันที่ '+SD+" เดือน "+SM+" ถึง วันที่ "+ED+" เดือน "+EM + '</h3>'
    );

  $(detail).append(
    '<h3>' + ' วิธีปลูก :  ' + method + '</h3>' +
    '<h3>' + 'ฤดูการปลูก : ' + peeorpun + '</h3>'
  );
}

function closeModal(){
  riceList.modal('hide');
  riceDetail.modal('hide');
  block.show();
}


// //Map Method
function initMap(){
    var latlng = new google.maps.LatLng(lat,lng);
    myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    google.maps.event.addListener(map, 'idle', checkIfDataRequested);

    // add a click event handler to the map object
    google.maps.event.addListener(map, "click", function(event){
        // place a marker
        lat = event.latLng.lat();
        lng = event.latLng.lng();
        placeMarker(event.latLng);
        console.log(lat);
        console.log(lng);
    });

    map.data.addListener('click', function(event) {
      infowindow.setContent(
       "<img src=" + event.feature.getProperty("icon") + ">" +
       "<br /><strong>" + event.feature.getProperty("city") + "</strong>" +
       "<br />" + event.feature.getProperty("temperature") + "&deg;C" +
       "<br />" + event.feature.getProperty("weather")
       );
      infowindow.setOptions({
          position:{
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          },
          pixelOffset: {
            width: 0,
            height: -15
          }
        });
      infowindow.open(map);
    });

}

function updateMap(){
  var latlng = new google.maps.LatLng(lat,lng);
  myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  var location = {lat: lat, lng: lng};
  placeMarker(location);

  google.maps.event.addListener(map, "click", function(event){
      // place a marker
      console.log("array length in updateMap " + markersArray.length);
      lat = event.latLng.lat();
      lng = event.latLng.lng();
      placeMarker(event.latLng);
      console.log(lat);
      console.log(lng);
  });
}

function placeMarker(location) {
    // first remove all markers if there are any
    deleteOverlays();
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markersArray.push(marker);
    selectProvince();
    riceList.modal('show');
}

// Deletes all markers in the array by removing references to them
function deleteOverlays() {
  if (markersArray) {
    for (var i in markersArray) {
        markersArray[i].setMap(null);
    }
  markersArray.length = 0;
  }
}

function getLocation() {
  lat = 15.2287;
  lng = 104.8564;
  updateMap();
}

function beginGo() {
    province = $('#provinces').val();
    district = $('#districts').val();
    sub_district = $('#sub-districts').val();

    var geocoder =  new google.maps.Geocoder();
      geocoder.geocode( { 'address': province+","+district+","+sub_district}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              lat = results[0].geometry.location.lat();
              lng = results[0].geometry.location.lng();
              updateMap();
            } else {
              console.log("Something got wrong " + status);
            }
          });
}

var checkIfDataRequested = function() {
    // Stop extra requests being sent
  while (gettingData === true) {
    request.abort();
    gettingData = false;
  }
  getCoords();
};
  // Get the coordinates from the Map bounds
var getCoords = function() {
  var bounds = map.getBounds();
  var NE = bounds.getNorthEast();
  var SW = bounds.getSouthWest();
  getWeather(NE.lat(), NE.lng(), SW.lat(), SW.lng());
};
  // Make the weather request
var getWeather = function(northLat, eastLng, southLat, westLng) {
  gettingData = true;
  var requestString = "http://api.openweathermap.org/data/2.5/box/city?bbox=" +
    westLng + "," + northLat + "," + //left top
    eastLng + "," + southLat + ","  + //right bottom
    map.getZoom() +
    "&cluster=yes&format=json" +
    "&APPID=" + openWeatherMapKey;
  request = new XMLHttpRequest();
  request.onload = proccessResults;
  request.open("get", requestString, true);
  request.send();
};
  // Take the JSON results and proccess them
var proccessResults = function() {
  console.log(this);
  var results = JSON.parse(this.responseText);
  if (results.list.length > 0) {
      resetData();
      for (var i = 0; i < results.list.length; i++) {
        geoJSON.features.push(jsonToGeoJson(results.list[i]));
      }
      drawIcons(geoJSON);
  }
};

var infowindow = new google.maps.InfoWindow();
// For each result that comes back, convert the data to geoJSON
var jsonToGeoJson = function (weatherItem) {
  var feature = {
    type: "Feature",
    properties: {
      city: weatherItem.name,
      weather: weatherItem.weather[0].main,
      temperature: weatherItem.main.temp,
      min: weatherItem.main.temp_min,
      max: weatherItem.main.temp_max,
      humidity: weatherItem.main.humidity,
      pressure: weatherItem.main.pressure,
      windSpeed: weatherItem.wind.speed,
      windDegrees: weatherItem.wind.deg,
      windGust: weatherItem.wind.gust,
      icon: "http://openweathermap.org/img/w/" + weatherItem.weather[0].icon  + ".png",
      coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
    },
    geometry: {
      type: "Point",
      coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
    }
  };
  // Set the custom marker icon
  map.data.setStyle(function(feature) {
    return {
      icon: {
        url: feature.getProperty('icon'),
        anchor: new google.maps.Point(25, 25)
      }
    };
  });
  // returns object
  return feature;
};
  // Add the markers to the map
var drawIcons = function (weather) {
   map.data.addGeoJson(geoJSON);
   // Set the flag to finished
   gettingData = false;
};
// Clear data layer and geoJSON
var resetData = function () {
  geoJSON = {
    type: "FeatureCollection",
    features: []
  };
  map.data.forEach(function(feature) {
    map.data.remove(feature);
  });
};
// google.maps.event.addDomListener(window, 'load', initialize);
