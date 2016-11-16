/**
 * Created by wit on 10/10/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,connector) {
        router.get("/rices",function (req,res) {

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
            else if(req.query.province && req.query.district && req.query.sub-district){
                return res.json({
                   rices:[
                       {"name":"rd1"},
                       {"name":"rd15"},
                       {"name":"rd1"},{"name":"rd15"},
                       {"name":"rd1"},{"name":"rd15"},
                   ]
                });
            }
            else if(req.query.province && req.query.district){
                return res.json({
                    rices:[
                        {"name":"rd41"},
                        {"name":"rd15"},
                        {"name":"rd1"},{"name":"rd15"},
                        {"name":"rd1"},{"name":"rd15"},
                    ]
                });
            }
            else if(req.query.province){
                return res.json({
                    rices:[
                        {"name":"rd144"},
                        {"name":"rd15"},
                        {"name":"rd1"},{"name":"rd15"},
                        {"name":"rd1"},{"name":"rd15"},
                    ]
                });
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