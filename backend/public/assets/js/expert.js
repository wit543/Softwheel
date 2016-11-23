var districts_selector = $('#districts')
var sub_districts_selector = $('#sub-districts')
var rice_selector = $('#rice-varaity')

var recommend = null;
var other = null;
set_other()
rice_update()

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
                                data.rices[i].rice_species_th.trim()+
                                '">'+data.rices[i].rice_species_th.trim()+'</option>')
  }
});

function remove_recommend(){
  for(var i = 0; i<recommend.length;i++){
    other = other.filter(function(el) {
        return el.rice_species_th !== recommend[i].rice_species_th;
    });
  }
}

function set_other() {
  var province = $('#provinces').val()
    $.getJSON( "http://128.199.192.241:8888/api/rices/?province="+province, function( data ) {
      other = data.rices
    });
}

function provice_function() {
  var province = $('#provinces').val()
  if(province == ''){
    recommend = null;
    other = null;
    set_other()
    rice_update()
    district_update()
  }else {
    set_other()
    district_update()
  }
}

function district_update() {
    set_other()
    var province = $('#provinces').val()
    if(province == ''){
      districts_selector.empty()
      districts_selector.prop('disabled', true);
      districts_selector.append('<option value="">Select District</option>')
      sub_districts_selector.empty()
      sub_districts_selector.prop('disabled', true);
      sub_districts_selector.append('<option value="">Select Sub District</option>')
      rice_update()
    }else{
      $.getJSON( "http://128.199.192.241:8888/api/districts/?province="+province, function( data ) {
          districts_selector.empty()
          districts_selector.append('<option value="">Select District</option>')
          for(var i = 0; i<data.districts.length;i++){
              districts_selector.append('<option value="'+
                  data.districts[i].district_th.trim()+
                  '">'+data.districts[i].district_th.trim()+'</option>')
          }
          districts_selector.prop('disabled', false);

          sub_districts_selector.empty()
          sub_districts_selector.prop('disabled', true);
          sub_districts_selector.append('<option value="">Select Sub District</option>')
          rice_update()
      });
    }
}

function sub_district_update() {
    set_other()
    var province = $('#provinces').val()
    var district = $('#districts').val()
    if(district == ''){
      sub_districts_selector.empty()
      sub_districts_selector.prop('disabled', true);
      sub_districts_selector.append('<option value="">Select District</option>')
      rice_update()
    }else{
      $.getJSON( "http://128.199.192.241:8888/api/sub-districts/?province="+province+"&district="+district, function( data ) {
          sub_districts_selector.empty()
          sub_districts_selector.append('<option value="">Select Sub District</option>')
          for(var i = 0; i<data.sub_districts.length;i++){
              $('#sub-districts').append('<option value="'+
                  data.sub_districts[i].sub_district_th.trim()+
                  '">'+data.sub_districts[i].sub_district_th.trim()+'</option>')
          }
          sub_districts_selector.prop('disabled', false);
      });
      rice_update()
    }

}

function rice_update(){
  var province = $('#provinces').val()
  var district = $('#districts').val()
  var sub_district = $('#sub-districts').val()

  $.getJSON( "http://128.199.192.241:8888/api/rices/?province="+province+"&district="+district+"&sub_district="+sub_district, function( data ) {

      recommend = data.rices
      remove_recommend()
      rice_selector.empty()
      rice_selector.append('<option value="">Select Rice Varaity</option>')
      rice_selector.append('<option class="topic" value="" disabled>Recommend</option>')
      for(var i = 0; i<recommend.length;i++){
          rice_selector.append('<option value="'+
              recommend[i].rice_species_th.trim()+
              '">'+recommend[i].rice_species_th.trim()+'</option>')
      }
      rice_selector.append('<option class="topic" value="" disabled></option>')
      rice_selector.append('<option class="topic" value="" disabled>Other</option>')
      for(var i = 0; i<other.length;i++){
          rice_selector.append('<option value="'+
              other[i].rice_species_th.trim()+
              '">'+other[i].rice_species_th.trim()+'</option>')
      }
  });
}

function go() {
    var query = "harvesting";
    if ($('#planting'))
        query = "planting";
    var path = "http://127.0.0.1:8888/api/smart/?province="+$('#provinces').val().toString().trim()+"&district="+$('#districts').val().toString().trim()+"&sub_district="+$('#sub-districts').val().toString().trim()+"&method="+$('#methods').val().toString().trim()+"&month="+$('#datepicker').val().toString().trim().split('/')[0]+"&date="+$('#datepicker').val().toString().trim().split('/')[1]+"&select="+query+"&rice="+$('#rice-varaity').val().toString().trim();
    console.log(path);
    $.getJSON(path, function( data ) {
        console.log("data: "+date);
    });
}
