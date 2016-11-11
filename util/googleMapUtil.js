/**
 * Created by wit on 10/31/2016.
 */
var http = require('http');
var options = {
    host: 'maps.googleapis.com',
    port: 80,
    path: '/maps/api/geocode/json?latlng=13.8416305,100.568995&sensor=false',
    method: 'GET'
};

http.request(options, function(res) {
    console.log(res)

}).end();


