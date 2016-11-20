/**
 * Created by wit on 11/13/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,connector) {
        //////////////////////////////////////////////////////////////////////////
        // @todo  complete all the parameter handling for getting a sub-district//
        //////////////////////////////////////////////////////////////////////////
        router.get("/sub-district",function (req,res) {
            if (req.query.province != undeclared && req.query.district){
                //////////////////////////////////////////////////////////////////////////
                // @todo  The code below is not finish, it just an example for front end//
                //////////////////////////////////////////////////////////////////////////
               //CODE//CODE//CODE//CODE//CODE//CODE//CODE//CODE
                return res.json({
                    name:"rd15"
                })
                //CODE//CODE//CODE//CODE//CODE//CODE//CODE//CODE
            }
            if (req.query.province != undeclared){
                return res.json({
                    name:"rd15"
                })
            }
            if (req.query.district != undeclared){
                return res.json({
                    name:"rd15"
                })
            }
            return res.json({
                sub_districts:[
                    {name:"แก้งเหนือ"},
                    {name:"เขมราฐ"}
                ]
            });
        });

        router.get("/sub-district/:provinceName",function (req,res){
            // req.params.id
            return res.json({
                sub_district:[
                    {name:"rd15"},
                    {name:"rd1"}
                ]
            })
        });

        router.get("/sub-district/:provinceName/:district",function (req,res){
            // req.params.id
            return res.json({
                sub_district:[
                    {name:"rd15"},
                    {name:"rd1"}
                ]
            })
        });
    });
})();