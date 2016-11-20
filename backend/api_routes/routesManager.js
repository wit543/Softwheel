/**
 * Created by wit on 10/10/2016.
 */
(function () {
    'use strict';

    module.exports = function (app,express) {
        const router  =express.Router();
        let util = require("../util/utilWrapper")();
        require("./rices")(router,util);
        require("./provinces")(router,util);
        require("./districts")(router,util);
        require("./sub-districts")(router,util);
        require("./Method")(router,util);
        require("./smart")(router,util);
        require(__dirname+"/../util/googleMapUtil");
        app.use("/api",router);

    }
})();