"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('<h1>Working</h1>');
});
var port = 5000;
app.listen(port, function () {
    console.log('On Liv');
});
var Productions = function () {
    return (<h1>dfdgfgg</h1>);
};
exports.default = Productions;
