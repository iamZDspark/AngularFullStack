"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import export is a ES2015 feture
//not yet implemented by browsers
//but typescript uses special translation to 
//make import export work
const math_1 = require("./library/math");
var mathtest;
(function (mathtest) {
    console.log(math_1.sum(1, 2, 3, 4));
    console.log(math_1.average(1, 2, 3, 4));
})(mathtest || (mathtest = {}));
