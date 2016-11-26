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
                console.log(req.query.select)
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
                                                let query = "(\""+province.split(' ').join('+')+"\",\"" +
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

                                                if(req.query.select=='planting')
                                                    util.expert_system.query("recommendP"+query,function (rec) {
                                                        if(rec.length==0){
                                                            util.expert_system.query("ex_recommendP_place_rice"+query,function (rp) {
                                                                if(rp.length==0)result["ex_recommendP_place_rice"]="ข้าวทีปลูกไม่เหมาะกับสถานที่"
                                                                util.expert_system.query("ex_recommendP_rice_season"+query,function (rr) {
                                                                    if(rr.length==0)result["ex_recommendP_rice_season"]="ข้าวที่ปลูกเป็นข้าวไม่ไวต่อแสงไม่แนะนำให้ปลูกในนาปรัง"
                                                                    util.expert_system.query("ex_recommendP_place_growingmethod"+query,function (rg) {
                                                                        if(rr.length==0)result["ex_recommendP_place_growingmethod"]="พื้นที่ที่ปลูกไม่ได้เป็นพื้นที่ชลประทานและสภาพของฝนไม่เหมาะแก่การปลูก"
                                                                        util.expert_system.query("ex_recommendP_harvesting_date"+query,function (rh) {
                                                                            if(rr.length==0)result["ex_recommendP_harvesting_date"]="ช่วงเวลานี้ไม่ควรเก็บเกียวเพราะเป็นฤดูมรสุม"
                                                                            util.expert_system.query("harvest_date("+date+","+month+","+year+",HDAY,HMONTH,HYEAR).",function (hd) {
                                                                                result["harvest_date"]=hd
                                                                                return res.json(result)
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        }
                                                        else{
                                                            util.expert_system.query("harvest_date"+query,function (result) {
                                                                return res.json(result);
                                                            });
                                                        }
                                                    });
                                                else
                                                    util.expert_system.query("recommendH"+query,function (rec) {
                                                        if(rec.length==0){
                                                            util.expert_system.query("ex_recommendH_place_rice"+query,function (rp) {
                                                                if(rp.length==0)result["ex_recommendH_place_rice"]="ข้าวทีปลูกไม่เหมาะกับสถานที่"
                                                                util.expert_system.query("ex_recommendH_place_rice_season"+query,function (rr) {
                                                                    if(rr.length==0)result["ex_recommendH_place_rice_season"]="ข้าวที่ปลูกเป็นข้าวไม่ไวต่อแสงไม่แนะนำให้ปลูกในนาปรัง"
                                                                    util.expert_system.query("ex_recommendH_place_growingmethod"+query,function (rg) {
                                                                        if(rr.length==0)result["ex_recommendH_place_growingmethod"]="พื้นที่ที่ปลูกไม่ได้เป็นพื้นที่ชลประทานและสภาพของฝนไม่เหมาะแก่การปลูก"
                                                                        util.expert_system.query("ex_recommendH_harvest_date"+query,function (rh) {
                                                                            if(rr.length==0)result["ex_recommendH_harvest_date"]="ช่วงเวลานี้ไม่ควรเก็บเกียวเพราะเป็นฤดูมรสุม"
                                                                            util.expert_system.query("planting_date("+date+","+month+","+year+",HDAY,HMONTH,HYEAR).",function (hd) {
                                                                                result["harvest_date"]=hd
                                                                                return res.json(result)
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        }
                                                        else{
                                                            util.expert_system.query("harvest_date"+query,function (result) {
                                                                return res.json(result);
                                                            });
                                                        }
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
                                re["province"]=result.results[0].address_components[i].long_name.replace("Chang Wat ","").toLowerCase().trim()
                            else if (result.results[0].address_components[i].types[j] == "sublocality_level_1"||
                                result.results[0].address_components[i].types[j] == "administrative_area_level_2")
                                re["district"]=result.results[0].address_components[i].long_name.replace("Amphoe ","").toLowerCase().trim()
                            else if (result.results[0].address_components[i].types[j] == "locality"||
                                result.results[0].address_components[i].types[j] == "lca")
                                re["sub_district"] = result.results[0].address_components[i].long_name.replace("Tambon ","").toLowerCase().trim()
                    let fee = String("simple(\""+re.province+"\",\""+re.district+"\",\""+re.sub_district+"\",R1,G1,S1,SD,SM,ED,EM).")
                    fee =fee.split(' ').join('+')
                    console.log(fee)
                    util.expert_system.query(fee,function (data) {
                            return res.json(data)
                        })
                })
            else{
                return res.json({})
            }

        });
    });
})();