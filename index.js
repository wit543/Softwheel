/**
 * Created by wit on 10/10/2016.
 */
var express = require("express")
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});