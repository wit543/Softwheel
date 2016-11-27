/**
 * Created by wit on 11/20/2016.
 */
(function () {

    class reservoir{
        constructor(geojsonUtil,xml2js,http){
            this.gju = geojsonUtil;
            let parseString =xml2js.parseString;
            this.http = http;
            this.listChangMai = [
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
            let reservoir_geojson = [];
            this.listChangMai.forEach(function (data) {
                console.log(data)
                reservoir_geojson.push(require('../public/reservoir/เชียงใหม่/'+data))
            })
            this.reservoir_geojson = reservoir_geojson;
            // console.log(this.reservoir_geojson[0]["features"][0]["geometry"]);
            // console.log(this.gju.pointInPolygon({"type":"Point","coordinates":[18.3220,98.2415]},
            //     this.reservoir_geojson[0]["features"][0]["geometry"]));

            this.options= {
                host: 'www.rid-1.com',
                port: 80,
                method: 'GET',
                path:'/gisrid-1/phpsqlajax_farm1.php'
            };
            let self = this;
            this.http.request(this.options, function(res) {
                var str = '';
                res.on('data',function (chunk) {
                    str+=chunk;
                });
                res.on('end',function () {
                    parseString(str, function (err, result) {
                        console.dir(result);
                        console.log('Done');
                        self.current = result;
                        console.log(self.current['farm']['marker'][0]['$']['lat']);
                        console.log(self.current['farm']['marker'][0]['$']['lng']);
                        console.log(self.is_in_side_circle(
                            self.current['farm']['marker'][0]['$']['lat'],
                            self.current['farm']['marker'][0]['$']['lng'],
                            10,10,10
                        ))
                    });
                })
            }).end();
        }
        query(lat,lng,callback){
            console.log(this.reservoir_geojson)
           for(let geojson in this.reservoir_geojson)
            for(let shape in this.reservoir_geojson[geojson]["features"]){
                if(this.reservoir_geojson[geojson]["features"][shape]['geometry']["type"]=="Polygon")
                    if(this.gju.pointInPolygon({"type":"Point","coordinates":[lat,lng]},
                       this.reservoir_geojson[geojson]["features"][shape]["geometry"]))
                        callback(true)
                    return;
            }
            for(let point in this.current['farm']['marker'])
                if(this.is_in_side_circle(
                        this.current['farm']['marker'][point]['$']['lat'],
                        this.current['farm']['marker'][point]['$']['lng'],
                        lat,lng,
                        1000
                    ))
                {
                    console.log(point['$'])
                    callback(true)
                    return;
                }
            callback(false)
                


        }
        is_in_side_circle(lat, lng, x, y, radius){
            return Math.pow(x - lat) + Math.pow(y - lng) < radius*radius
        }
    }
    module.exports = function (geojsonUtil,xml2js,http) {
        return new reservoir(geojsonUtil,xml2js,http)
    };
})();
