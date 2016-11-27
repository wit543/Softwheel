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
                util.database.query("select distinct(province_en) from " +
                    "(select rices_by_location_napun.province_en from rices_by_location_napun where rices_by_location_napun.province_th ='"+req.query.province+"'UNION ALL " +
                    "select rices_by_location_napee.province_en from rices_by_location_napee where rices_by_location_napee.province_th ='"+req.query.province+"') as foo",
                    function(p){
                        console.log(p)
                        let province=p[0]['province_en'].trim()
                        util.database.query("select distinct(district_en) from " +
                    "(select rices_by_location_napun.district_en from rices_by_location_napun where rices_by_location_napun.district_th ='"+req.query.district+"'UNION ALL " +
                    "select rices_by_location_napee.district_en from rices_by_location_napee where rices_by_location_napee.district_th ='"+req.query.district+"') as foo",
                            function(d){
                                let district=d[0]['district_en'].trim()
                                util.database.query("select distinct(sub_district_en) from " +
                    "(select rices_by_location_napun.sub_district_en from rices_by_location_napun where rices_by_location_napun.sub_district_th ='"+req.query.sub_district+"'UNION ALL " +
                    "select rices_by_location_napee.sub_district_en from rices_by_location_napee where rices_by_location_napee.sub_district_th ='"+req.query.sub_district+"') as foo",
                                    function(s){
                                        console.log("++++++++++++++++++++++++++++++++++++++")
                                        console.log(s)
                                        console.log("++++++++++++++++++++++++++++++++++++++")
                                        let sub_district=s[0]['sub_district_en'].trim()
                                        util.database.query("select name_en from map_rices where name_th ='"+req.query.rice+"'",
                                            function(r){
                                                console.log(r)
                                                let toQuery = [
                                                    "ex_recommendP_place_rice",
                                                    "ex_recommendP_rice_season",
                                                    "ex_recommendP_place_growingmethod",
                                                    "ex_recommendP_harvesting_date",
                                                    "harvest_date",
                                                    "0000000"
                                                ]
                                                let error_msg=[
                                                    "ข้าวทีปลูกไม่เหมาะกับสถานที่",
                                                    "ข้าวที่ปลูกเป็นข้าวไม่ไวต่อแสงไม่แนะนำให้ปลูกในนาปรัง",
                                                    "พื้นที่ที่ปลูกไม่ได้เป็นพื้นที่ชลประทานและสภาพของฝนไม่เหมาะแก่การปลูก",
                                                    "ช่วงเวลานี้ไม่ควรเก็บเกียวเพราะเป็นฤดูมรสุม"
                                                ]
                                                let result ={};
                                                let queryed =toQuery.length;
                                                let rice = r[0]['name_en'].trim()
                                                let method = req.query.method;
                                                let date = req.query.date;
                                                let month = req.query.month;
                                                let year = req.query.year;
                                                let query = "(\""+province.toLowerCase().split(' ').join('_')+"\",\"" +
                                                    district.toLowerCase().split(' ').join('_')+"\",\""+
                                                    sub_district.toLowerCase().split(' ').join('_')+"\",\"" +
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
                                                util.history_rainning.assert(province.toLowerCase().split(' ').join('_'),function(){
                                                    util.google_map.get_location_address(sub_district+","+district+","+province,function(latlng){
                                                        let lat=(latlng['results'][0]['geometry']['location']['lat'])
                                                        let lng=(latlng['results'][0]['geometry']['location']['lng'])
                                                        util.reservoir.query(lat,lng,province,district,sub_district,function(isInReservior){
                                                            console.log(isInReservior)
                                                        if(req.query.select=='harvesting')
                                                            util.expert_system.query("recommendP"+query,function (rec) {
                                                                if(rec.length==0){
                                                                    util.expert_system.query("ex_recommendP_place_rice"+query,function (rp) {
                                                                        if(rp.length==0)result["ex_recommendP_place_rice"]="ข้าวทีปลูกไม่เหมาะกับสถานที่"
                                                                        util.expert_system.query("ex_recommendP_rice_season"+query,function (rr) {
                                                                            if(rr.length==0)result["ex_recommendP_rice_season"]="ข้าวที่ปลูกเป็นข้าวไม่ไวต่อแสงไม่แนะนำให้ปลูกในนาปรัง"
                                                                            util.expert_system.query("ex_recommendP_place_growingmethod"+query,function (rg) {
                                                                                console.log("----------------------")
                                                                                console.log(rg)
                                                                                console.log(rg.length==0)
                                                                                console.log("----------------------")
                                                                                if(rg.length==0)
                                                                                    result["ex_recommendP_place_growingmethod"]="พื้นที่ที่ปลูกไม่ได้เป็นพื้นที่ชลประทานและสภาพของฝนไม่เหมาะแก่การปลูก"
                                                                                util.expert_system.query("ex_recommendP_harvesting_date"+query,function (rh) {
                                                                                    if(rh.length==0)result["ex_recommendP_harvesting_date"]="ช่วงเวลานี้ไม่ควรเก็บเกียวเพราะเป็นฤดูมรสุม"
                                                                                    util.expert_system.query("ex_harvest_date(\""+rice+"\",\""+method+"\","+date+","+month+","+year+",HDAY,HMONTH,HYEAR).",function (hd) {
                                                                                        result["harvest_date"]=hd[0]
                                                                                        util.weather.query(province,function(w){
                                                                                            if(!w["result"])
                                                                                                result["weather"]=3
                                                                                            else
                                                                                                result["weather"]=w["result"]
                                                                                        console.log(result)
                                                                                        return res.json(result) 
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                }
                                                                else{
                                                                    util.expert_system.query("ex_planting_date"+query,function (result) {
                                                                         util.weather.query(province,function(w){
                                                                            if(!w["result"])
                                                                                result["weather"]=3
                                                                            else
                                                                                result["weather"]=w["result"]
                                                                            return res.json(result);
                                                                         });
                                                                    });
                                                                }
                                                            });
                                                        else
                                                            util.expert_system.query("recommendH"+query,function (rec) {
                                                                console.log(rec)
                                                                if(rec.length==0){
                                                                    util.expert_system.query("ex_recommendH_place_rice"+query,function (rp) {
                                                                        if(rp.length==0)result["ex_recommendH_place_rice"]="ข้าวทีปลูกไม่เหมาะกับสถานที่"
                                                                        util.expert_system.query("ex_recommendH_place_rice_season"+query,function (rr) {
                                                                            if(rr.length==0)result["ex_recommendH_place_rice_season"]="ข้าวที่ปลูกเป็นข้าวไม่ไวต่อแสงไม่แนะนำให้ปลูกในนาปรัง"
                                                                            util.expert_system.query("ex_recommendH_place_growingmethod"+query,function (rg) {
                                                                                if(rg.length==0)result["ex_recommendH_place_growingmethod"]="พื้นที่ที่ปลูกไม่ได้เป็นพื้นที่ชลประทานและสภาพของฝนไม่เหมาะแก่การปลูก"
                                                                                util.expert_system.query("ex_recommendH_harvesting_date"+query,function (rh) {
                                                                                    if(rh.length==0)result["ex_recommendH_harvesting_date"]="ช่วงเวลานี้ไม่ควรเก็บเกียวเพราะเป็นฤดูมรสุม"
                                                                                    util.expert_system.query("ex_planting_date(\""+rice+"\",\""+method+"\","+date+","+month+","+year+",HDAY,HMONTH,HYEAR).",function (hd) {
                                                                                        result["harvest_date"]=hd[0]
                                                                                         util.weather.query(province,function(w){
                                                                                            if(!w["result"])
                                                                                                result["weather"]=3
                                                                                            else
                                                                                                result["weather"]=w["result"]
                                                                                            return res.json(result)
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                }
                                                                else{
                                                                    util.expert_system.query("harvest_date"+query,function (result) {
                                                                         util.weather.query(province,function(w){
                                                                            if(!w["result"])
                                                                                result["weather"]=3
                                                                            else
                                                                                result["weather"]=w["result"]
                                                                            return res.json(result);
                                                                        });
                                                                    });
                                                                }
                                                            });
                                                        });
                                                    });
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
        router.get("/beginner",function (req,res) {
            if(req.query.lat&&req.query.lng)
                util.google_map.get_location_latlng(req.query.lat,req.query.lng,function (result) {
                    // console.log(result.results)
                    // return res.json(result.results[0].address_components)
                    var re={}
                    for(let i in result.results[0].address_components)
                        for(let j in result.results[0].address_components[i].types)
                            if (result.results[0].address_components[i].types[j] == ";rtht"||
                                result.results[0].address_components[i].types[j] == "administrative_area_level_1")
                                re["province"]=result.results[0].address_components[i].long_name.replace("Chang Wat ","").toLowerCase().trim().split(' ').join('_')
                            else if (result.results[0].address_components[i].types[j] == "sublocality_level_1"||
                                result.results[0].address_components[i].types[j] == "administrative_area_level_2")
                                re["district"]=result.results[0].address_components[i].long_name.replace("Amphoe ","").toLowerCase().trim().split(' ').join('_')
                            else if (result.results[0].address_components[i].types[j] == "locality"||
                                result.results[0].address_components[i].types[j] == "sublocality_level_1")
                                re["sub_district"] = result.results[0].address_components[i].long_name.replace("Tambon ","").toLowerCase().trim().split(' ').join('_')
                    let fee = String("simple(\""+re.province+"\",\""+re.district+"\",\""+re.sub_district+"\",R1,G1,S1,SD,SM,ED,EM).")
                    fee =fee.split('  ').join('_')
                    console.log(fee)
                    util.reservoir.query(req.query.lat,req.query.lng,re['province'],re['district'],re['sub_district'],function(isInReservior){
                    util.history_rainning.assert(re['province'],function(){
                        util.expert_system.query(fee,function (data) {
                            return res.json(data)
                        })
                    })
                })
                    
                })
            else{
                return res.json({})
            }

        });
    });
})();
