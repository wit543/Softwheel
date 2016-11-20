/**
 * Created by wit on 11/13/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,connector) {
        //////////////////////////////////////////////////////////////////////////
        // @todo  complete all the parameter handling for getting a district    //
        //////////////////////////////////////////////////////////////////////////
        router.get("/districts",function (req,res) {
            if (req.query.province != undeclared){
                return res.json({
                    name:"rd15"
                })
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