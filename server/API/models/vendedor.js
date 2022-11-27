const mongoose = require("mongoose");

const vendedor = mongoose.Schema({
    nome: { type: String, require: true },
    telemovel: { type: Number, require: true },
    email: { type: String, require: true },
    pass: { type: String, require: true },
    NIF: { type: Number, require: true },
});

module.exports = mongoose.model("Vendedores", vendedor);
