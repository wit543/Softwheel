/**
 * Created by wit on 11/20/2016.
 */

(function () {
    'use static';
    module.exports = (function (router,util) {
        router.get("/expert",function (req,res) {
            console.log(req.query)
            if (req.query.province
                &&req.query.district
                &&req.query.sub_district
                &&req.query.rice
                &&req.query.method
                &&req.query.date
                &&req.query.month
                &&req.query.year){
                util.database.query("select changwat_en from map_province where changwat_th ='"+req.query.province+"'",
                    function(p){
                        let province=p[0]['changwat_en'].trim()
                        util.database.query("select amphoe_en from map_district where amphoe_th ='"+req.query.district+"'",
                            function(d){
                                let district=d[0]['amphoe_en'].trim()
                                util.database.query("select tambol_en from map_sub_district where tambol_th ='"+req.query.sub_district+"'",
                                    function(s){
                                        let sub_district=s[0]['tambol_en'].trim()
                                        util.database.query("select name_en from map_rices where name_th ='"+req.query.rice+"'",
                                            function(r){
                                                console.log(r)
                                                let rice = r[0]['name_en'].trim()
                                                let method = req.query.method;
                                                let date = req.query.date;
                                                let month = req.query.month;
                                                let year = req.query.year;

                                                let query = "recommendP(\""+province.split(' ').join('+')+"\",\"" +
                                                    district.split(' ').join('+')+"\",\""+
                                                    sub_district.split(' ').join('+')+"\",\"" +
                                                    rice+"\",\"" +
                                                    method+"\","+
                                                    date+","+
                                                    month+","+
                                                    year+
                                                    ").";
                                                console.log(query);
                                                // util.database.query("select province_en from ")
                                                // util.database.query("select * from map_rices where name_th = "+req.query.rice,function (data) {
                                                //     var rice = data
                                                // })
                                                util.expert_system.query(
                                                    query
                                                    ,function (result) {
                                                        console.log(result)
                                                        return res.json(result);
                                                    });
                                            });
                                    });
                            });
                    });

            }
            else{
                return res.json({
                    districts:[
                        {name:"แก้งเหนือ"},
                        {name:"เขมราฐ"}
                    ]
                });
            }

        });
    });
})();