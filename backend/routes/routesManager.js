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

        app.use("/api",router);
    }
})();