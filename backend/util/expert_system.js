/**
 * Created by wit on 11/18/2016.
 */

(function () {

    class expert_system{
        constructor(http){
            this.http=http;
            this.path="?query=";
            this.options= {
                host: 'localhost',
                port: 80,
                method: 'GET'
            };
        }
        query(query,callback){
            this.options["path"]=this.path+query;
            this.http.request(options, function(res) {
                console.log(res);
                callback(res)
            }).end();
        }
    }
    module.exports = function (http) {
       return new expert_system(http)
    };
})();
