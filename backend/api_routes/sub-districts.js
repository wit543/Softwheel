/**
 * Created by wit on 11/13/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,util) {
        router.get("/sub-districts",function (req,res) {
            if (req.query.province && req.query.district) {
                util.database.query("select distinct(sub_district_th) from (select sub_district_th from rices_by_location_napun where province_th = '"+req.query.province+"' and district_th = '"+req.query.district+"' UNION ALL select sub_district_th from rices_by_location_napee where province_th = '"+req.query.province+"' and district_th = '"+req.query.district+"') as foo"
                    , function (data) {
                        return res.json(data);
                    });
            }
            else
                util.database.query("select distinct(sub_district_th) from " +
                    "(select rices_by_location_napun.sub_district_th from rices_by_location_napun UNION ALL " +
                    "select rices_by_location_napee.sub_district_th from rices_by_location_napee) as foo"
                    , function (data) {
                        return res.json(data);
                    });

        });

        router.get("/sub-districts/:provinceName",function (req,res){
            // req.params.id
            return res.json({
                sub_district:[
                    {name:"rd15"},
                    {name:"rd1"}
                ]
            })
        });

        router.get("/sub-district/:provinceName/:district",function (req,res){
            // req.params.id
            return res.json({
                sub_district:[
                    {name:"rd15"},
                    {name:"rd1"}
                ]
            })
        });
    });
})();