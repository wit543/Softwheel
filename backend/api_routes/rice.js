/**
 * Created by wit on 10/10/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,connector) {
        router.get("/rice",function (req,res) {

            // console.log(connector);z
            if(req.query.name){
                console.log("in");
                connector.sent(req.query.name,function (out) {
                        return res.json({
                            name:out
                        });
                    }
                );
            }
            else
                return res.json({
                    rices:[
                        {"name":"rd15"},
                        {"name":"rd1"},
                        {"name":"rd15"},
                        {"name":"rd1"},{"name":"rd15"},
                        {"name":"rd1"},{"name":"rd15"},
                        {"name":"rd1"},{"name":"rd15"},
                        {"name":"rd1"},{"name":"rd15"},
                        {"name":"rd1"},{"name":"rd15"},
                        {"name":"rd1"},
                    ]
                });
        })
    });
})();