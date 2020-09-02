"use strict";
//namespace is a typescript features
var demo03;
(function (demo03) {
    let max = 25;
    //typescript has types
    //here max is a number
    //now max can't be string or bool or anything else
    max = 'Hello World';
})(demo03 || (demo03 = {}));
