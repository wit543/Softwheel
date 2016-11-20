/**
 * Created by wit on 10/10/2016.
 */
(function () {
    'use strict';
    const http = require("http");
    const net = require("net");
    const postgres = require("pg");
    const path = require('path');
    const firebase = require('firebase');
    module.exports = function (app,express) {
        const router  =express.Router();
        let connector = require("../util/connectorJava")(net);
        let ep = require("../util/expert_system")(http);
        let config = require("../config.json");
        let pg_config = config['pg'];
        let fb_config = config['firebase'];
        let pg = require("../util/postgres")(postgres,pg_config);
        let fb  = require("../util/connectorFirebase")(firebase,fb_config);
        let util = require("../util/utilWrapper")(pg,ep);
        console.log(connector.connect);
        require("./rices")(router,util);
        require("./provinces")(router,util);
        require("./districts")(router,util);
        require("./sub-districts")(router,util);
        require("./Method")(router,util);
        require(__dirname+"/../util/googleMapUtil");
        app.use("/api",router);

    }
})();