(function () {
    class weather{
        constructor(http){
            this.http=http;
            this.path="weather/?province=";
            this.options= {
                host: 'localhost',
                port: 5555,
                method: 'GET'
            };
        }
        query(query,callback){
            query= String(query).split(" ").join("+")
            this.options["path"]=this.path+query;
            console.log(this.options);
            this.http.request(this.options, function(res) {
                var str = '';
                res.on('data',function (chunk) {
                    console.log(chunk);
                    str+=chunk;
                });
                res.on('end',function () {
                    console.log(str);
                    callback(JSON.parse(str));
                })
            }).end();
        }
    }
    module.exports = function (http) {
       return new weather(http)
    };
})();
