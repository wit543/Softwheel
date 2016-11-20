$.getJSON( "http://128.199.192.241:8888/api/provinces/", function( data ) {
      for(var i = 0; i<data.provinces.length;i++){
     $('#provinces').append('<option value="'+
                                data.provinces[i].province_th+
                                '">'+data.provinces[i].province_th+'</option>')
  }
});

$.getJSON( "http://128.199.192.241:8888/api/rices/", function( data ) {
  for(var i = 0; i<data.rices.length;i++){
     $('#rice-varaity').append('<option onclick=setVaraity('+data.rices[i].name_th+') value="'+
                                data.rices[i].name_th+
                                '">'+data.rices[i].name_th+'</option>')
  }
});

function district_update() {
    $.getJSON( "http://128.199.192.241:8888/api/districts/?province="+$('#provinces').val(), function( data ) {
        for(var i = 0; i<data.districts.length;i++){
            $('#districts').append('<option value="'+
                data.districts[i].districts_th+
                '">'+data.districts[i].districts_th+'</option>')
        }
    });
}

function provicesList(){
  console.log(varaityName);
  var provinces = $('#provinces');

  $.getJSON("128.199.192.241:8888/api/provinces/", function( data ) {
    provinces.empty()
    provinces.append('<option value="">Select Provice</option>')
    for(var i = 0; i<data.provinces.length;i++){
       $('#provinces').append('<option value="'+
                                  data.provinces[i].name_th+
                                  '">'+data.provinces[i].name_th+'</option>')
    }
  });
}

function setVaraity(){
  var e = document.getElementById("rice-varaity");
  var name = e.options[e.selectedIndex].value;
  varaityName = "/"+name
  provicesList()
}
