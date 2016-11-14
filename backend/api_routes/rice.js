/**
 * Created by wit on 10/10/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,connector) {
        router.get("/rice",function (req,res) {
            connector.connect();
            connector.sent('hello',function (res) {
                    console.log(res)
                }
            );
            // console.log(connector);z
            if(req.query.name){
                return res.json({
                    name:"good"
                });
            }
            return res.json({
                rices:[
                    {"name":"rd15"},
                    {"name":"rd1"},
                ]
            });
        })
    });
})();