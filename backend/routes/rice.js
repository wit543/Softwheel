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
            // console.log(connector);z`
            return res.json({
                message:"hello"
            });
        })
    });
})();