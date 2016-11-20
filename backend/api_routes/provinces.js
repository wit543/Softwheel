/**
 * Created by wit on 11/13/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,util) {
        router.get("/provinces",function (req,res) {
            if (req.query.province){
                return res.json({
                    name:"rd15"
                })
            }
            else{
                util.database.query("select distinct(province_th) from " +
                    "(select rices_by_location_napun.province_th from rices_by_location_napun UNION ALL " +
                    "select rices_by_location_napee.province_th from rices_by_location_napee) as foo"
                    , function (data) {
                        return res.json({provinces:data});
                    });
            }
        });
    });
})();