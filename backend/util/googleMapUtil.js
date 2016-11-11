/**
 * Created by wit on 10/31/2016.
 */
(function () {
var http = require('http');
var google-map-get-info-from-lat-long = {
    host: 'maps.googleapis.com',
    port: 80,
    path: '/maps/api/geocode/json?latlng=13.8416305,100.568995&sensor=false',
    method: 'GET'
};

http.request(google-map-get-info-from-lat-long, function(res) {
    console.log(res)

}
)();


