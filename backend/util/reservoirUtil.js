/**
 * Created by wit on 11/20/2016.
 */
(function () {

    class reservoir{
        constructor(http){
            this.http = http;
            this.list = [
                "โครงการอ่างเก็บน้ำสันหนอง",
                "โครงการอ่างเก็บน้ำห้วยมะนาว",
                "โครงการอ่างเก็บน้ำบ้านแม่ตะไคร้",

                "โครงการอ่างเก็บน้ำห้วยแม่ออน",
                "โครงการอ่างเก็บน้ำห้วยฮัก",
                "โครงการอ่างเก็บน้ำห้วยเกี๋ยง",
                "โครงการอ่างเก็บน้ำแม่โก๋น",
                "โครงการอ่างเก็บน้ำแม่ข้อน",
                "โครงการอ่างเก็บน้ำแม่ทะลบหลวง",
                "โครงการอ่างเก็บน้ำห้วยเดื่อ"
            ];
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
        return new reservoir(http)
    };
})();
