"use strict";
//namespace is a typescript features
var demo04;
(function (demo04) {
    let a = 20; //a is implicitly typed as number. it will not take any other type of value
    a = 'hi'; //must be a number
    let b; // b is of type string. but no value given
    b = 'hi'; //works fine
    b = 20; //can't be 20
    let c; // c can hold 'any' type
    c = 'hi'; //ok
    c = 20; //ok
    let d = 20; // d can hold anything. currently holding 20
    d = 'hi'; //allowed
})(demo04 || (demo04 = {}));
