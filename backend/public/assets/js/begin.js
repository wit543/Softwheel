var riceList = $('#rice-list'); // modal of rice-list
var riceDetail = $('#rice-detail'); // rice detail modal
var detail = $('#detail');
var variety = $('#variety');
var province;
var riceName;

var lat; // latitude
var lng; // longtitude

var map;
var markersArray = [];

var currentTime = new Date();
var d = currentTime.getDate();
console.log("day" + d);
var m = currentTime.getMonth();
console.log("month" + m);
var y = currentTime.getFullYear();
console.log("year" + y);

function selectProvince() {

  variety.html('<button class="close" data-toggle="modal" data-target="rice-list" onclick="closeModal()">' + 'x' + '</button>');

  // LOCATION
  province = 'อุบลราชธานี';

  variety.append(
    '<h1 class=center>' + province + '</h1>'
  );
  $.getJSON( "http://128.199.192.241:8888/api/rices/?province=" + province, function( data ) {
    for(var i = 0; i<data.rices.length;i++){
      variety.append(
        '<div class="block-card" onclick="selectVariety(' + "\'" + data.rices[i].rice_species_th.trim() + "\'" + ')" value =' +
        data.rices[i].rice_species_th.trim() + '>' +
        '<p>' + 'Rice Varity: ' + data.rices[i].rice_species_th.trim() + '</p>' +
        '<p>' + 'Method : ' + data.rices[i].rice_species_th.trim() + '</p>' +
        '<p>' + 'Species : ' + data.rices[i].rice_species_th.trim() + '</p>' +
        '</div>'
      );
    }
  });
}

function selectVariety(rice){
  detail.html('<button class="close" onclick="closeModal()">' + 'x' + '</button>');

  riceList.modal('hide');
  riceDetail.modal('show');
  riceName = rice;

  $.getJSON( "http://128.199.192.241:8888/api/rices/?name_th=" + riceName, function( data ) {
    $(detail).append(
      '<h1 class=center>' + province + '</h1>' +
      '<h3>' + 'Rice variety :  ' + data.name_th + '</h3>' +
      '<h3>' + 'Current date :  ' + d + '/' + m + '/' + y + '</h3>' +
      '<h3>' + 'Recommend Interval : ' + '</h3>'
    );

    for(var i = 0; i < 5 ;i++){
      detail.append(
        '<h3 class=tab>' + 'ช่วง :  ' + '</h3>'
      );
    }

    $(detail).append(
      '<h3>' + 'Method :  ' + '</h3>' +
      '<h3>' + 'Species : ' + '</h3>'
    );

  });
}

function closeModal(){
  riceList.modal('hide');
  riceDetail.modal('hide');
}

// //Map Method
function initMap(){
    var latlng = new google.maps.LatLng(15.8700, 100.9925);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    // add a click event handler to the map object
    google.maps.event.addListener(map, "click", function(event){
        // place a marker
        placeMarker(event.latLng);
        lat = event.latLng.lat();
        lng = event.latLng.lng();
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
