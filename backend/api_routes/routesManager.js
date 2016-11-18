/**
 * Created by wit on 10/10/2016.
 */
(function () {
    'use strict';
    const net = require("net");
    const postgres = require("pg");
    const path = require('path');
    const firebase = require('firebase');
    module.exports = function (app,express) {
        const router  =express.Router();
        let connector = require("../util/connectorJava")(net);
        let config = require("../config.json");
        let pg_config = config['pg'];
        let fb_config = config['firebase'];
        let pg = require("../util/postgres")(postgres,pg_config);
        let fb  = require("../util/connectorFirebase")(firebase,fb_config);
        console.log(connector.connect);
        require("./rices")(router,connector,pg);
        require("./provinces")(router,connector,fb);
        require("./districts")(router,connector,fb);
        require("./sub-districts")(router,connector,fb);
        require("./Method")(router,connector,fb);
        require(__dirname+"/../util/googleMapUtil");
        app.use("/api",router);

    }
})();