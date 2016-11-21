/**
 * Created by wit on 11/20/2016.
 */
(function () {

    class reservoir{
        constructor(geojsonUtil){
            this.gju = geojsonUtil;
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
            let reservoir_geojson = [];
            this.list.forEach(function (data) {
                reservoir_geojson.push(require('../public/reservoir/'+data))
            })
            this.reservoir_geojson = reservoir_geojson;
            console.log(this.reservoir_geojson[0]["features"][0]["geometry"]);
            console.log(this.gju.pointInPolygon({"type":"Point","coordinates":[18.3220,98.2415]},
                this.reservoir_geojson[0]["features"][0]["geometry"]));
        }
        query(lat,long,callback){
           for(let geojson in this.reservoir_geojson)
               if(this.gju.pointInPolygon({"type":"Point","coordinates":[lat,long]},
                       this.geojson[0]["features"][0]["geometry"]))
                   callback(this.geojson[0]['properties'])
        }
    }
    module.exports = function (geojsonUtil) {
        return new reservoir(geojsonUtil)
    };
})();
