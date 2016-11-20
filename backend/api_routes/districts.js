/**
 * Created by wit on 11/13/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,util) {
        router.get("/districts",function (req,res) {
            if (req.query.province){
                util.database.query("select distinct(district_th) from (select district_th from rices_by_location_napun where province_th = '"+req.query.province+"' UNION ALL select district_th from rices_by_location_napee where province_th = '"+req.query.province+"') as foo"
                    , function (data) {
                        return res.json({districts:data});
                    });
            }
            else
                util.database.query("select distinct(district_th) from " +
                    "(select district_th from rices_by_location_napun UNION ALL " +
                    "select district_th from rices_by_location_napee) as foo"
                    , function (data) {
                        return res.json({districts:data});
                    });
                // util.google_map.get_location_latlng(13.845402,100.568695,function (data) {
                //     return res.json(data);
                // });
            // return res.json({
            //     districts:[
            //         {name:"แก้งเหนือ"},
            //         {name:"เขมราฐ"}
            //     ]
            // });
        });
    });
})();