/**
 * Created by wit on 10/10/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,util) {
        router.get("/rices",function (req,res) {
            //////////////////////////////////////////////////////////////////////////
            // @todo  complete all the parameter handling for getting a rice        //
            //////////////////////////////////////////////////////////////////////////
            if(req.query.name){
                // pg.query("rices",function (ref) {
                //     ref.orderByChild("name_th").equalTo(req.query.province).on('value',function (snapshot) {
                //         return res.json(snapshot.val());
                //     }, function (errorObject) {
                //         console.log("The read failed: " + errorObject.code);
                //     });
                // });
                util.database.query("select * from rices where name_en='"+req.query.name+"'",function (data) {
                    rices = {};
                    rices['rices']=data.rows;
                    if(data.length==0){
                        return res.json({error:"doesn't exist"});
                    }
                    else
                        return res.json(data[0]);
                });
            }
            else if(req.query.province && req.query.district && req.query.sub_district){
                util.database.query("select distinct(rice_species_th) from (select * from rices_by_location_napun UNION ALL select * from rices_by_location_napee) as foo where district_th='"+req.query.district+"' and sub_district_th='"+req.query.sub_district+"' and province_th='"+req.query.province+"'",function (data) {
                    rices = {};
                    rices['rices']=data;
                    if(data.length==0){
                        return res.json({error:"doesn't exist"});
                    }
                    else
                        return res.json(rices);
                })
            }
            else if(req.query.province && req.query.district){
                util.database.query("select distinct(rice_species_th) from (select * from rices_by_location_napun UNION ALL select * from rices_by_location_napee) as foo where district_th='"+req.query.district+"' and province_th='"+req.query.province+"'",function (data) {
                    rices = {};
                    rices['rices']=data;
                    if(data.length==0){
                        return res.json({error:"doesn't exist"});
                    }
                    else
                        return res.json(rices);
                })
            }
            else if(req.query.province){
                // util.database.query("select distinct(rice_species_th) from (select * from rices_by_location_napun UNION ALL select * from rices_by_location_napee) as foo where province_th='"+req.query.province+"'",function (data) {
                //     rices = {};
                //     rices['rices']=data;
                //     if(data.length==0){
                //         return res.json({error:"doesn't exist"});
                //     }
                //     else
                //         return res.json(rices);
                // })
                return util.expert_system.query("recommend('Bangkok','RD1','GROW1',10,6).",function (result) {
                    console.log(result.length)
                    return res.json(result);
                });
            }
            else
                // fb.query("rices",function (ref) {
                //     ref.on('value',function (snapshot) {
                //         let json ={};
                //         json[ref.key]=snapshot.val();
                //         return res.json(json);
                //     }, function (errorObject) {
                //         console.log("The read failed: " + errorObject.code);
                //     });
                // });
                util.database.query("select distinct(rice_species_th) from (select * from rices_by_location_napun UNION ALL select * from rices_by_location_napee) as foo ",function (data) {
                    rices = {};
                    rices['rices']=data;
                    return res.json(rices);
                });
        })
    });
})();