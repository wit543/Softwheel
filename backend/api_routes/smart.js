/**
 * Created by wit on 11/20/2016.
 */

(function () {
    'use static';
    module.exports = (function (router,util) {
        //////////////////////////////////////////////////////////////////////////
        // @todo  complete all the parameter handling for getting a method      //
        //////////////////////////////////////////////////////////////////////////
        router.get("/smart",function (req,res) {
            let province=req.query.province;
            let district = req.query.district;
            let sub_district = req.query.sub_district;
            let rice = req.query.rice;
            let method = req.query.method;
            let date = req.query.date;
            let month = req.query.month;
            let year = req.query.year;
            if (req.query.method ){
                console.log("recommend(\""+req.query.province+"\",\"" +
                    req.query.rice+"\",\""
                    +req.query.rice+"\",\"" +

                    req.query.rice+"\",\"" +
                    req.query.method+"\","+
                    req.query.date+","+
                    req.query.month+","+
                    ").");
                // util.database.query("select province_en from ")
                util.database.query("slect * from map_rices where name_th = "+req.query.rice,function (data) {
                    var rice = data
                })
                return util.expert_system.query("recommend(\""+req.query.province+"\",\""+req.query.rice+"\",\""+req.query.method+"\","+req.query.date+","+req.query.month+",DAY,MONTH,YEAR).",function (result) {
                    console.log(result.length)
                    return res.json(result);
                });
            }
            return res.json({
                districts:[
                    {name:"แก้งเหนือ"},
                    {name:"เขมราฐ"}
                ]
            });
        });
    });
})();