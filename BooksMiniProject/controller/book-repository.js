const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const book = require("../entites/book");
const username = process.env.BMS_DB_USERNAME;
const password = process.env.BMS_DB_PASSWORD;
const server = process.env.BMS_DB_SERVER;
const dbname = process.env.BMS_DB_DBNAME;
class BookRepository {
  constructor() {
    this.dbconnecton();
  }

  dbconnecton() {
    const uri = `mongodb+srv://${username}:${password}@${server}/${dbname}?retryWrites=true&w=majority`;

    const client = new mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log("sucesss");
      })
      .catch((err) => {
        console.log("fail", err);
      });
  }
  async getAll() {
    return await book.find();
  }
  async Add(bookadd) {
    //bookadd = new book();
    console.log("bookadd");
    return await bookadd.save(bookadd);
  }
  async getById(bid) {
    let bookid = await book.findOne({ bid: bid });
    return bookid;
  }
  async getByBook(author) {
    console.log("bookname", author);
    let bookname = await book.find({ author: author }, { title: 1 });

    return bookname;
  }
  async getByPhoto(photourl) {
    let bookname = await book.find({ title: title }, { coverpageurl: 1 });
    return bookname;
  }
  async update(list) {
    let bid = list.bid;
    console.log(bid);
    console.log("list", list);
    let updateid = await book.updateOne({ bid: bid }, list);
    return updateid;
  }
  async remove(bid) {
    await book.deleteOne({ bid: bid });
  }
}
module.exports = BookRepository;
