$.getJSON( "http://128.199.192.241:8888/api/provinces/", function( data ) {
      for(var i = 0; i<data.provinces.length;i++){
     $('#provinces').append('<option value="'+
                                data.provinces[i].province_th.trim()+
                                '">'+data.provinces[i].province_th.trim()+'</option>')
  }
});

$.getJSON( "http://128.199.192.241:8888/api/rices/", function( data ) {
  for(var i = 0; i<data.rices.length;i++){
     $('#rice-varaity').append('<option onclick=setVaraity('+data.rices[i].name_th+') value="'+
                                data.rices[i].name_th.trim()+
                                '">'+data.rices[i].name_th.trim()+'</option>')
  }
});

function district_update() {
    $.getJSON( "http://128.199.192.241:8888/api/districts/?province="+$('#provinces').val(), function( data ) {
        console.log("http://128.199.192.241:8888/api/districts/?province="+$('#provinces').val());
        $('#districts').empty()
        for(var i = 0; i<data.districts.length;i++){
            $('#districts').append('<option value="'+
                data.districts[i].district_th.trim()+
                '">'+data.districts[i].district_th.trim()+'</option>')
        }
    });
}

function sub_district_update() {
    $.getJSON( "http://128.199.192.241:8888/api/sub-districts/?province="+$('#provinces').val()+"&district="+$('#districts').val(), function( data ) {
        console.log("http://128.199.192.241:8888/api/sub-districts/?province="+$('#provinces').val()+"&district="+$('#districts').val());
        $('#sub-districts').empty()
        for(var i = 0; i<data.sub_districts.length;i++){
            $('#sub-districts').append('<option value="'+
                data.sub_districts[i].sub_district_th.trim()+
                '">'+data.sub_districts[i].sub_district_th.trim()+'</option>')
        }
    });
}

function provicesList(){
  console.log(varaityName);
  var provinces = $('#provinces');

  $.getJSON("http://128.199.192.241:8888/api/provinces/", function( data ) {
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

function go() {
    var query = "harvesting";
    if ($('#planting'))
        query = "planting";
    var path = "http://128.199.192.241:8888/api/smart/?province="+$('#provinces').val().toString().trim()+"&district="+$('#districts').val().toString().trim()+"&sub_district="+$('#sub-districts').val().toString().trim()+"&method="+$('#methods').val().toString().trim()+"&month="+$('#datepicker').val().toString().trim().split('/')[0]+"&date="+$('#datepicker').val().toString().trim().split('/')[1]+"&select="+query+"&rice="+$('#rice-varaity').val().toString().trim();
    console.log(path);
    $.getJSON(path, function( data ) {
        console.log("data: "+date);
    });
}