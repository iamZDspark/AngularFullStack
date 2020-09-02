"use strict";
//namespace is a typescript features
var demo07;
(function (demo07) {
    //interface is a typescript feature for
    //compile time only. it is verified but not
    //translated to anything in javascript
    //it is simply removed.
    let people = [
        { name: 'Vivek', email: 'vivek@email.com' },
        { name: { firstName: 'Shivanshi', lastName: 'Mishra' }, email: null }
    ];
    for (let person of people) {
        console.log(person);
    }
})(demo07 || (demo07 = {}));
