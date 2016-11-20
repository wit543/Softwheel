/**
 * Created by wit on 11/13/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,util) {
        //////////////////////////////////////////////////////////////////////////
        // @todo  complete all the parameter handling for getting a district    //
        //////////////////////////////////////////////////////////////////////////
        router.get("/districts",function (req,res) {
            if (req.query.province != undefined){
                return res.json({
                    name:"rd15"
                })
            }
            else
                util.google_map.get_location_latlng(13.845402,100.568695,function (data) {
                    return res.json(data);
                });
            // return res.json({
            //     districts:[
            //         {name:"แก้งเหนือ"},
            //         {name:"เขมราฐ"}
            //     ]
            // });
        });
    });
})();