/**
 * Created by wit on 11/15/2016.
 */
(function () {
    'use static';
    var path = require("path")
    module.exports = (function (router,connector) {
        router.get("/",function (req,res) {
            res.sendFile(path.join(__dirname+"/../public/expert.html"));
        })
        router.get("/expert",function (req,res) {
            res.sendFile(path.join(__dirname+"/../public/expert.html"));
        })
        router.get("/beginner",function (req,res) {
            res.sendFile(path.join(__dirname+"/../public/begin.html"));
        })
    });
})();