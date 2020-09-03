const http = require("http");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
var app = express();
const bookservice = require("./service/book-service");
const authorervice = require("./service/author-service");
app.use(bodyParser.json());
port = process.env.Port || 5005;
//this is to allow cross platform origin
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,Authorization, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST,PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.use("/api", bookservice);
app.use("/api", authorervice);
app.listen(port, () => {
  console.log(`server is running successfully ${port}`);
});
module.exports = app;
