const mongoose = require("mongoose");
const authorschema = mongoose.Schema({
  id: { type: String },
  name: { type: String },
  biography: { type: String },
  birthdate: { type: String },
  email: { type: String },
  listofbook: { type: String },
});
module.exports = mongoose.model("Author", authorschema);
