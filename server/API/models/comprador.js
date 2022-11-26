const mongoose = require("mongoose");

const comprador = mongoose.Schema({
    author: { type: String, require: true },
});

module.exports = mongoose.model("Alumni", alumni);
