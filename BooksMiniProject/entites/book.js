const mongoose = require("mongoose");
const bookchema = mongoose.Schema({
  bid: { type: String },
  title: { type: String },
  coverpageurl: { type: String },
  author: { type: String },
  price: { type: String },
  rating: { type: String },
});
module.exports = mongoose.model("Book", bookchema);
