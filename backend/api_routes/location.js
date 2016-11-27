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
                   let out = {
                    province: re.province,
                    district: re.district,
                    sub_district: re.sub_district
                   }
                    return res.json(out)
                    
                })
            else{
                return res.json({})
            }

        });
    });
})();