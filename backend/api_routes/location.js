/**
 * Created by wit on 11/13/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,util) {
        router.get("/location",function (req,res) {
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
                   util.database.query("select name_th from province where LOWER(name_en)= LOWER('"+re.province+"')",function(p){
                    //  util.database.query("select distinct(province_en) from " +
                    // "(select rices_by_location_napun.province_en from rices_by_location_napun where rices_by_location_napun.province_th ='"+re.province+"'UNION ALL " +
                    // "select rices_by_location_napee.province_en from rices_by_location_napee where rices_by_location_napee.province_th ='"+re.province+"') as foo",
                    // function(p){
                    //     console.log(p)
                    //     util.database.query("select distinct(district_en) from " +
                    // "(select rices_by_location_napun.district_en from rices_by_location_napun where rices_by_location_napun.district_th ='"+re.district+"'UNION ALL " +
                    // "select rices_by_location_napee.district_en from rices_by_location_napee where rices_by_location_napee.district_th ='"+re.district+"') as foo",
                    //         function(d){
                    //             util.database.query("select distinct(sub_district_en) from " +
                    // "(select rices_by_location_napun.sub_district_en from rices_by_location_napun where rices_by_location_napun.sub_district_th ='"+re.sub_district+"'UNION ALL " +
                    // "select rices_by_location_napee.sub_district_en from rices_by_location_napee where rices_by_location_napee.sub_district_th ='"+re.sub_district+"') as foo",
                    //                 function(s){
                        console.log(p)
                                        let pp = ""
                                        if(p.length>0)
                                            pp = p[0]['name_th']
                                         let out = {
                                        p:re.province,
                                        district: re.district,
                                        sub_district: re.sub_district,
                                        address:result.results[0].formatted_address
                                       }
                                          return res.json(out)
                    //                 })
                    //         })
                    })
                  
                    
                })
            else{
                return res.json({})
            }

        });
    });
})();