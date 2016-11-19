/**
 * Created by wit on 10/10/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,es,pg) {
        router.get("/rices",function (req,res) {

            // console.log(connector);z
            if(req.query.name){
                // pg.query("rices",function (ref) {
                //     ref.orderByChild("name_th").equalTo(req.query.province).on('value',function (snapshot) {
                //         return res.json(snapshot.val());
                //     }, function (errorObject) {
                //         console.log("The read failed: " + errorObject.code);
                //     });
                // });
                pg.query("select * from rices where name_en='"+req.query.name+"'",function (data) {
                    rices = {};
                    rices['rices']=data.rows;
                    if(data.length==0){
                        return res.json({error:"doesn't exist"});
                    }
                    else
                        return res.json(data[0]);
                });
            }
            else if(req.query.province && req.query.district && req.query.sub_district){
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
                return es.query("can_growing(P1,+'GROW1').",function (result) {
                    return res.json(result);
                });
            }
            else
                // fb.query("rices",function (ref) {
                //     ref.on('value',function (snapshot) {
                //         let json ={};
                //         json[ref.key]=snapshot.val();
                //         return res.json(json);
                //     }, function (errorObject) {
                //         console.log("The read failed: " + errorObject.code);
                //     });
                // });
                pg.query("select * from rices",function (data) {
                    rices = {};
                    rices['rices']=data;
                    return res.json(rices);
                });
        })
    });
})();