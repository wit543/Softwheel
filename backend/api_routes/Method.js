/**
 * Created by wit on 11/13/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,connector) {
        router.get("/method",function (req,res) {
            if (req.query.method != undeclared){
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