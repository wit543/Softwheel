/**
 * Created by wit on 11/13/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,connector) {
        router.get("/provinces",function (req,res) {
            if (req.query.province != undeclared){
                return res.json({
                    name:"rd15"
                })
            }
            else if (req.query.fields!= undeclared){
                return
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
    });
})();