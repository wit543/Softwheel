(function () {
    class google_map{
        constructor(http){
            this.http=http;
            this.path= '/maps/api/geocode/json?latlng=?{this.lat},${this.lng}&sensor=false';
            this.options= {
                host: 'maps.googleapis.com',
                port: 80,
                method: 'GET'
            };
            console.log("constructor")
        }
        get_location_latlng(lat,lng,callback){
            this.lat = lat;
            this.lng = lng;
            this.options["path"]=this.path;
            console.log(this.options);
            this.http.request(this.options, function(res) {
                var str = '';
                res.on('data',function (chunk) {
                    console.log(chunk);
                    str+=chunk;
                });
                res.on('end',function () {
                    callback(JSON.parse(str));
                })
            }).end();
        }
    }
    module.exports = function (http) {
        return new google_map(http)
    };
})();
