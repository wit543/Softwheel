/**
 * Created by wit on 11/20/2016.
 */
(function () {

    class expert_system{
        constructor(http){

        }
        query(query,callback){
            this.options["path"]=this.path+query;
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
        return new expert_system(http)
    };
})();
