const mongoose = require("mongoose");

const alumni = mongoose.Schema({
  author: { type: String, require: true },
});

module.exports = mongoose.model("Alumni", alumni);
