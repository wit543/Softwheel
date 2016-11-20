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
        require("./rices")(router,ep,pg);
        require("./provinces")(router,ep,pg);
        require("./districts")(router,ep,pg);
        require("./sub-districts")(router,ep,pg);
        require("./Method")(router,ep,pg);
        require(__dirname+"/../util/googleMapUtil");
        app.use("/api",router);

    }
})();