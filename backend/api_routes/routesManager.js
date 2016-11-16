/**
 * Created by wit on 10/10/2016.
 */
(function () {
    'use strict';
    const net = require("net");
    var path = require('path');
    module.exports = function (app,express) {
        const router  =express.Router();
        var connector = require("../util/connectorJava")(net);
        console.log(connector.connect);
        require("./rices")(router,connector);
        require("./provinces")(router,connector);
        require("./districts")(router,connector);
        require("./sub-districts")(router,connector);
        require("./Method")(router,connector);
        require(__dirname+"/../util/googleMapUtil");
        app.use("/api",router);

    }
})();