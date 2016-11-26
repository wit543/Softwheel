/**
 * Created by wit on 11/18/2016.
 */

(function () {

    class history_rainning{
        constructor(http){
            this.rainning= require("../public/rain.json")
            this.http=http;
            this.path="api/?assert=history_rainning(\"";
            this.options= {
                host: 'localhost',
                port: 5555,
                method: 'GET'
            };
        }
        assert(query,callback){
            this.options["path"]=this.path+query+"\")";
            console.log(this.options);
            this.http.request(this.options, function(res) {
                var str = '';
                res.on('data',function (chunk) {
                    console.log(chunk);
                    str+=chunk;
                });
                res.on('end',function () {
                    console.log(str);
                    callback();
                })
            }).end();
        }
    }
    module.exports = function (http) {
       return new history_rainning(http)
    };
})();
