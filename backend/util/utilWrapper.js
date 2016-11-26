/**
 * Created by wit on 11/20/2016.
 */
/**
 * Created by wit on 11/17/2016.
 */
(function () {
    // const http = require("http");
    // const net = require("net");
    // const postgres = require("pg");
    // const path = require('path');
    // const firebase = require('firebase');
    // let connector = require("../util/connectorJava")(net);
    // let ep = require("../util/expert_system")(http);
    // let config = require("../config.json");
    // let pg_config = config['pg'];
    // let fb_config = config['firebase'];
    // let pg = require("../util/postgres")(postgres,pg_config);
    // let gm = require("../util/googleMapUtil")(http);
    // let fb  = require("../util/connectorFirebase")(firebase,fb_config);
    // let util = require("../util/utilWrapper")(pg,ep);
    class utilWrapper {

        constructor() {
            let config = require("../config.json");
            const http = require("http");
            const pg_config = config['pg'];
            const postgres = require("pg");
            const geojson_utils = require('geojson-utils');
            const xml2js = require('xml2js');
            this.database = require('./postgres')(postgres, pg_config);
            this.expert_system = require('./expert_system')(http);
            this.google_map = require('./googleMapUtil')(http);
            this.reservoir = require('./reservoirUtil')(geojson_utils,xml2js,http);
            this.history_rainning = require('./rainningHistory')(http);
        }
    }

    module.exports = function () {

        return new utilWrapper();
    };
})();