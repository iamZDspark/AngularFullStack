const author = require("../entites/author");

 const Authorrepo = require("../controller/author-repository");
const mongoose = require("mongoose");
  const express = require("express");
const routes = express.Router();

let authorrepo = new Authorrepo();

function addauthor(request, response) {
  var authorlist = new author({
    id: request.body.id,
    name: request.body.name,
    biography: request.body.biography,
    birthdate: request.body.birthdate,
    email: request.body.email,
    listofbook: request.body.listofbook,
  });

  console.log(authorlist);
  authorrepo
    .Add(authorlist)
    .then((output) => {
      console.log(output);
      response.status(200).json({
        message: "ADDED SUCCESSFULLY",
        result: output,
      });
    })

    .catch((err) => {
      console.log(err);
      response.status(404).json({
        message: "ERROR.....!",
        error: err,
      });
    });
}
function findAll(request, response) {
  authorrepo
    .getAll()
    .then((output) => {
      console.log(output);
      response.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}

function findbyId(request, response) {
  id = requestuest.params.id;
  //console.log("check", id);
  authorrepo
    .getById(id)
    .then((output) => {
      console.log(output);
      response.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function findByBook(request, response) {
  name = request.params.name;
  console.log("book", name);
  authorrepo
    .getByBook(name)
    .then((output) => {
      console.log(output);
      response.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function updateauthor(request, res) {
  //console.log("request", request);
  var updatedlist = {
    id: request.params.id,
    name: request.body.name,
    biography: request.body.biography,
    birthdate: request.body.birthdate,
    email: request.body.email,
    listofbook: request.body.listofbook,
  };
  authorrepo
    .update(updatedlist)
    .then((output) => {
      console.log(output);
      response.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function removeauthor(request, response) {
  id = request.params.name;
  console.log("remove author");
  authorrepo
    .remove(id)
    .then((output) => {
      console.log(output);
      response.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
routes.get("/author/findall", findAll);
routes.get("/author/:id", findbyId);
routes.get("/author/findbook/:name", findByBook);
routes.put("/author/updateauthor/:id", updateauthor);
routes.post("/author/addauthor", addauthor);
routes.delete("/author/removeauthor/:id", removeauthor);

module.exports = routes;
