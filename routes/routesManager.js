/**
 * Created by wit on 10/10/2016.
 */
(function () {
    'use strict';
    const net = require("net");
    module.exports = function (app,express) {
        const router  =express.Router();
        var connector = require("../util/connectorJava")(net);
        console.log(connector.connect);
        require("./rice")(router,connector);
        require("./province")(router,connector);
        require("./district")(router,connector);
        require("./sub-district")(router,connector);
        require("./method")(router,connector);
        require("../util/googleMapUtil");
        app.use("/api",router);

        app.get("/",function (req,res) {
            res.sendFile("public/expert.html");
        })
    }
})();