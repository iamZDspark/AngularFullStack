"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const math_1 = require("./library/math");
let app = express_1.default();
app.get('/sum', (request, response) => {
    let values = [1, 2, 3, 4];
    let result = math_1.sum(...values);
    response.send({
        values, result, operation: 'sum'
    });
});
const port = 8000;
app
    .listen(port, (err) => {
    if (err)
        console.log('error starting server on port', port);
    else
        console.log('server started on port ', port);
});
