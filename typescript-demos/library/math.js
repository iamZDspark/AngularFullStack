"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.average = exports.sum = void 0;
function sum(...numbers) {
    let result = 0;
    for (let number of numbers)
        result += number;
    return result;
}
exports.sum = sum;
function average(...numbers) {
    return sum(...numbers) / numbers.length;
}
exports.average = average;
//module.exports={sum,average}
